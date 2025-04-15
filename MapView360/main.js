
    // ==== VARIÁVEIS ====
let map, player, viewCone, posMarker, currentPos;
const feicoes = { ponto: [], linha: [], poligono: [] };
let feicaoSelecionada = null;
if (!window.__imagens) window.__imagens = {};
let yawOffset = 5;
let gpxData = [];
let lastCameraYaw = 0;
let totalRotation = 0;

// ==== MAPA ====
map = L.map('map', {
  center: [-15.6, -56.1],
  zoom: 10,
  editable: true,
  zoomControl: true
});
const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxNativeZoom: 19, // Tiles reais só até 19
  maxZoom: 22,        // Permite zoom além disso
  noWrap: true
});


const google = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
  maxZoom: 22
}).addTo(map);

const positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  maxZoom: 22,
  attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
});


L.control.layers({
  "OpenStreetMap": osm,
  "Google Mapas": google,
  "CartoDB Positron": positron
}).addTo(map);


// ==== VÍDEO ====
document.getElementById('videoInput').addEventListener('change', e => {
  const file = e.target.files[0];
  if (file) {
    if (player && player.dispose) player.dispose();
    const videoTag = document.createElement('video');
    videoTag.className = 'video-js vjs-default-skin';
    videoTag.setAttribute('id', 'video360');
    videoTag.setAttribute('controls', true);
    videoTag.setAttribute('preload', 'auto');
    const container = document.querySelector('.right');
    container.querySelector('#video360')?.remove();
    container.prepend(videoTag);
    player = videojs('video360', {
      controls: true,
      autoplay: false,
      preload: 'auto',
      loop: false,
      sources: [{ src: URL.createObjectURL(file), type: file.type }]
    });
    player.ready(() => {
      player.vr({
        projection: 'equirectangular',
        debug: false,
        forceCardboard: false,
        motionControls: true,
        WebGLRenderer: {
          preserveDrawingBuffer: true
        }
      });
      
      lastCameraYaw = 0;
      totalRotation = 0;
      yawOffset = parseInt(document.getElementById('yawSlider').value);
    });
  }
});

// ==== GPX ====
document.getElementById('gpxInput').addEventListener('change', e => {
  const reader = new FileReader();
  reader.onload = evt => {
    if (!player) return alert('Carregue o vídeo primeiro');
    const xml = new DOMParser().parseFromString(evt.target.result, 'application/xml');
    const trkpts = xml.getElementsByTagName('trkpt');
    gpxData = [];
    for (let pt of trkpts) {
      gpxData.push({
        lat: parseFloat(pt.getAttribute('lat')),
        lon: parseFloat(pt.getAttribute('lon')),
        time: new Date(pt.getElementsByTagName('time')[0].textContent).getTime() / 1000
      });
    }
    const latlngs = gpxData.map(p => [p.lat, p.lon]);
    L.polyline(latlngs, { color: 'blue' }).addTo(map);
    map.fitBounds(latlngs);
    posMarker = L.circleMarker(latlngs[0], { radius: 8, color: 'red' }).addTo(map);
    viewCone = L.polygon([], { color: 'orange', interactive: false, weight: 1, fillOpacity: 0.2 }).addTo(map);

    const baseTime = gpxData[0].time;
    player.on('timeupdate', () => {
      const videoTime = player.currentTime();
      const currentAbsolute = baseTime + videoTime;
      let closest = gpxData.reduce((prev, curr) => Math.abs(curr.time - currentAbsolute) < Math.abs(prev.time - currentAbsolute) ? curr : prev);
      currentPos = closest;
      posMarker.setLatLng([closest.lat, closest.lon]);
    });
    updateViewCone();
  };
  reader.readAsText(e.target.files[0]);
});

// ==== CONE ====
function updateViewCone() {
  if (!player?.vr?.().camera || !currentPos || !viewCone) {
    requestAnimationFrame(updateViewCone);
    return;
  }
  const center = [currentPos.lat, currentPos.lon];
  const distance = 0.0002;
  const fov = 60;
  const camera = player.vr().camera;
  const euler = new THREE.Euler().setFromQuaternion(camera.quaternion, 'YXZ');
  let currentYawDeg = THREE.MathUtils.radToDeg(euler.y);
  let delta = currentYawDeg - lastCameraYaw;
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  totalRotation += delta;
  lastCameraYaw = currentYawDeg;
  let nextIndex = gpxData.findIndex(p => p.time > currentPos.time);
  if (nextIndex === -1) nextIndex = gpxData.length - 1;
  const next = gpxData[nextIndex];
  const bearing = Math.atan2(next.lon - currentPos.lon, next.lat - currentPos.lat) * (180 / Math.PI);
  const finalAngle = (bearing + totalRotation + yawOffset + 360) % 360;
  const points = [center];
  for (let a = -fov/2; a <= fov/2; a += 5) {
    const angle = (finalAngle + a + 360) % 360;
    const rad = angle * Math.PI / 180;
    points.push([
      center[0] + distance * Math.sin(rad),
      center[1] + distance * Math.cos(rad)
    ]);
  }
  points.push(center);
  viewCone.setLatLngs([points]);
  requestAnimationFrame(updateViewCone);
}

document.getElementById("yawSlider").addEventListener("input", () => {
  let value = parseInt(document.getElementById("yawSlider").value);
  document.getElementById("yawLabel").textContent = (value >= 0 ? "+" : "") + value + "°";
  yawOffset = value;
});

document.getElementById("btnConfirmarYaw").addEventListener("click", () => {
  yawOffset = parseInt(document.getElementById("yawSlider").value);
  alert("✅ Calibração confirmada com offset de " + yawOffset + "°.");
});

// ==== DESENHO ====
map.on("editable:drawing:end", e => {
  const geo = e.layer.toGeoJSON().geometry;
  const tipo = geo.type === 'Point' ? 'ponto'
              : geo.type === 'LineString' ? 'linha'
              : geo.type === 'Polygon' ? 'poligono'
              : 'desconhecido';
  const feature = {
    type: "Feature",
    geometry: e.layer.toGeoJSON().geometry,
    properties: { codigo: Date.now().toString() }
  };
  feicoes[tipo].push({ feature, layer: e.layer });
  e.layer.on('click', () => editarFeicao(feature, e.layer));
  editarFeicao(feature, e.layer);
});

function alternarFerramenta(tipo) {
  map.editTools.stopDrawing();
  if (tipo === 'ponto') map.editTools.startMarker();
  else if (tipo === 'linha') map.editTools.startPolyline();
  else if (tipo === 'poligono') map.editTools.startPolygon();
}
document.getElementById('btnPonto').onclick = () => alternarFerramenta('ponto');
document.getElementById('btnLinha').onclick = () => alternarFerramenta('linha');
document.getElementById('btnPoligono').onclick = () => alternarFerramenta('poligono');

function editarFeicao(feature, layer) {
  feicaoSelecionada = { feature, layer };
  const p = feature.properties;
  document.getElementById('codigo').value = p.codigo || '';
  document.getElementById('dado1').value = p.dado1 || '';
  document.getElementById('dado2').value = p.dado2 || '';
  document.getElementById('observacao').value = p.observacao || '';
  document.getElementById('imagens').value = p.imagens || '';
  document.getElementById('tipo').value = p.tipo || '';
}

window.salvarAtributos = function () {
  if (!feicaoSelecionada) return;
  const p = feicaoSelecionada.feature.properties;
  p.codigo = document.getElementById('codigo').value;
  p.dado1 = document.getElementById('dado1').value;
  p.dado2 = document.getElementById('dado2').value;
  p.observacao = document.getElementById('observacao').value;
  p.imagens = document.getElementById('imagens').value;
  p.tipo = document.getElementById('tipo').value;
  document.getElementById('codigo').value = '';
  document.getElementById('dado1').value = '';
  document.getElementById('dado2').value = '';
  document.getElementById('observacao').value = '';
  document.getElementById('imagens').value = '';
  document.getElementById('tipo').value = '';
};

window.capturarImagem = async function () {
  const codigo = document.getElementById('codigo').value;
  const tipo = document.getElementById('tipo').value;
  if (!codigo || !tipo) return alert("Preencha 'código' e 'tipo' antes da captura.");

  const player360 = videojs('video360');
  const vr = player360?.vr?.();
  if (!vr?.renderer || !vr?.camera || !vr?.scene) {
    return alert("❌ Renderer, câmera ou cena do videojs-vr não disponíveis.");
  }

  const renderer = vr.renderer;
  const camera = vr.camera;
  const scene = vr.scene;

  // Criar Render Target
  const width = renderer.domElement.width;
  const height = renderer.domElement.height;
  const renderTarget = new THREE.WebGLRenderTarget(width, height, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat
  });

  // Renderizar a cena no RenderTarget
  renderer.setRenderTarget(renderTarget);
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);

  // Ler os pixels
  const pixels = new Uint8Array(width * height * 4);
  renderer.readRenderTargetPixels(renderTarget, 0, 0, width, height, pixels);

  // Criar canvas auxiliar
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // Corrigir a imagem invertida (eixo Y invertido no WebGL)
  const imageData = ctx.createImageData(width, height);
  for (let y = 0; y < height; y++) {
    const dest = y * width * 4;
    const src = (height - y - 1) * width * 4;
    for (let x = 0; x < width * 4; x++) {
      imageData.data[dest + x] = pixels[src + x];
    }
  }
  ctx.putImageData(imageData, 0, 0);

  // Converter em blob e salvar
  canvas.toBlob(blob => {
    const nome = `${codigo}_${Date.now()}.jpg`;
    __imagens[nome] = { blob, tipo };
    const campo = document.getElementById('imagens');
    campo.value = campo.value ? `${campo.value}, ${nome}` : nome;
    alert("✅ Imagem 360° capturada!");
  }, 'image/jpeg', 0.95);
};


document.getElementById('exportZIP').onclick = async () => {
  const zip = new JSZip();

  // Exportar GeoJSONs
  ['ponto', 'linha', 'poligono'].forEach(tipo => {
    const fc = {
      type: "FeatureCollection",
      features: feicoes[tipo].map(f => {
        const feature = JSON.parse(JSON.stringify(f.feature)); // clone seguro
        const imagens = feature.properties.imagens || '';
        const tipoImagem = feature.properties.tipo || 'outros';
        const nomes = imagens.split(',').map(s => s.trim()).filter(n => n);
        return feature;
      })
    };
    zip.file(`${tipo}.geojson`, JSON.stringify(fc, null, 2));
  });
  

  // Exportar imagens capturadas
  const imagensFolder = zip.folder('imagens');
  for (const nome in __imagens) {
    const { blob, tipo } = __imagens[nome];
    const pastaTipo = imagensFolder.folder(tipo);
    pastaTipo.file(nome, blob);
  }

  // Gerar e baixar o ZIP
  try {
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "mapview360_export.zip");
    alert("✅ Exportação concluída com sucesso!");
  } catch (err) {
    console.error("Erro na geração do ZIP:", err);
    alert("❌ Erro ao exportar ZIP. Veja o console para detalhes.");
  }
};
  
// === RESIZE BAR ENTRE MAPA E VÍDEO ===
const dragbar = document.getElementById("dragbar");
const leftPane = document.querySelector(".left");
const rightPane = document.querySelector(".right");

let isResizing = false;

dragbar.addEventListener("mousedown", function(e) {
  e.preventDefault();
  isResizing = true;
  document.body.style.cursor = "ew-resize";
});

document.addEventListener("mousemove", function(e) {
  if (!isResizing) return;
  const totalWidth = window.innerWidth;
  const newLeftWidth = e.clientX;
  const newRightWidth = totalWidth - newLeftWidth;
  if (newLeftWidth > 200 && newRightWidth > 300) {
    leftPane.style.flex = "none";
    leftPane.style.width = `${newLeftWidth}px`;
    rightPane.style.width = `${newRightWidth}px`;
  }
});

document.addEventListener("mouseup", function() {
  if (isResizing) {
    isResizing = false;
    document.body.style.cursor = "default";
  }
});
map.on('zoomend', () => {
  document.getElementById("zoomAtual").textContent = map.getZoom();
});
document.getElementById("baixarExemplo").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "https://www.dropbox.com/scl/fi/owomfjaq0wyv8d9xcijw0/exemplos.zip?rlkey=iovst5yi39lhci94oshm6enzs&st=0tv49llc&dl=1";
  link.download = "exemplos.zip";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
