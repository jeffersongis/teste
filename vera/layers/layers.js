var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LimiteMunicipal_1 = new ol.format.GeoJSON();
var features_LimiteMunicipal_1 = format_LimiteMunicipal_1.readFeatures(json_LimiteMunicipal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteMunicipal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipal_1.addFeatures(features_LimiteMunicipal_1);
var lyr_LimiteMunicipal_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteMunicipal_1, 
                style: style_LimiteMunicipal_1,
                interactive: false,
                title: '<img src="styles/legend/LimiteMunicipal_1.png" /> Limite Municipal'
            });
var format_ImvelRural_2 = new ol.format.GeoJSON();
var features_ImvelRural_2 = format_ImvelRural_2.readFeatures(json_ImvelRural_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImvelRural_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelRural_2.addFeatures(features_ImvelRural_2);
var lyr_ImvelRural_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ImvelRural_2, 
                style: style_ImvelRural_2,
                interactive: true,
                title: '<img src="styles/legend/ImvelRural_2.png" /> Imóvel Rural'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_LimiteMunicipal_1.setVisible(true);lyr_ImvelRural_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LimiteMunicipal_1,lyr_ImvelRural_2];
lyr_LimiteMunicipal_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Compriment': 'Compriment', 'Controle': 'Controle', 'Identifica': 'Identifica', 'Nome': 'Nome', 'Municipios': 'Municipios', 'Tipo': 'Tipo', 'Comprimen1': 'Comprimen1', 'Origem': 'Origem', 'Municipio': 'Municipio', 'Estado': 'Estado', 'Obs': 'Obs', });
lyr_ImvelRural_2.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Osmand': 'Osmand', 'Google_map': 'Google Mapas', 'coord_decimal': 'Coord. Decimal', 'coord_GMS': 'Coord. GMS', 'end_rural': 'Endereço Rural', });
lyr_LimiteMunicipal_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Compriment': 'TextEdit', 'Controle': 'TextEdit', 'Identifica': 'TextEdit', 'Nome': 'TextEdit', 'Municipios': 'TextEdit', 'Tipo': 'TextEdit', 'Comprimen1': 'TextEdit', 'Origem': 'TextEdit', 'Municipio': 'TextEdit', 'Estado': 'TextEdit', 'Obs': 'TextEdit', });
lyr_ImvelRural_2.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Osmand': 'TextEdit', 'Google_map': 'TextEdit', 'coord_decimal': 'TextEdit', 'coord_GMS': 'TextEdit', 'end_rural': 'TextEdit', });
lyr_LimiteMunicipal_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Compriment': 'no label', 'Controle': 'no label', 'Identifica': 'no label', 'Nome': 'no label', 'Municipios': 'no label', 'Tipo': 'no label', 'Comprimen1': 'no label', 'Origem': 'no label', 'Municipio': 'no label', 'Estado': 'no label', 'Obs': 'no label', });
lyr_ImvelRural_2.set('fieldLabels', {'fid': 'no label', 'Nome': 'inline label', 'Osmand': 'inline label', 'Google_map': 'inline label', 'coord_decimal': 'inline label', 'coord_GMS': 'inline label', 'end_rural': 'header label', });
lyr_ImvelRural_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});