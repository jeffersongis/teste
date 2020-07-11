var wms_layers = [];

var format_reaAntropizada_0 = new ol.format.GeoJSON();
var features_reaAntropizada_0 = format_reaAntropizada_0.readFeatures(json_reaAntropizada_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaAntropizada_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaAntropizada_0.addFeatures(features_reaAntropizada_0);
var lyr_reaAntropizada_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaAntropizada_0, 
                style: style_reaAntropizada_0,
                interactive: false,
                title: '<img src="styles/legend/reaAntropizada_0.png" /> Área Antropizada'
            });
var format_Vegetacao_1 = new ol.format.GeoJSON();
var features_Vegetacao_1 = format_Vegetacao_1.readFeatures(json_Vegetacao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vegetacao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vegetacao_1.addFeatures(features_Vegetacao_1);
var lyr_Vegetacao_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vegetacao_1, 
                style: style_Vegetacao_1,
                interactive: false,
                title: '<img src="styles/legend/Vegetacao_1.png" /> Vegetacao'
            });
var format_reaUrbana_2 = new ol.format.GeoJSON();
var features_reaUrbana_2 = format_reaUrbana_2.readFeatures(json_reaUrbana_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaUrbana_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaUrbana_2.addFeatures(features_reaUrbana_2);
var lyr_reaUrbana_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaUrbana_2, 
                style: style_reaUrbana_2,
                interactive: false,
                title: '<img src="styles/legend/reaUrbana_2.png" /> Área Urbana'
            });
var format_Riossecundarios_3 = new ol.format.GeoJSON();
var features_Riossecundarios_3 = format_Riossecundarios_3.readFeatures(json_Riossecundarios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riossecundarios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riossecundarios_3.addFeatures(features_Riossecundarios_3);
var lyr_Riossecundarios_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Riossecundarios_3,
maxResolution:39.20625261316675,
 
                style: style_Riossecundarios_3,
                interactive: false,
                title: '<img src="styles/legend/Riossecundarios_3.png" /> Rios secundarios'
            });
var format_Riosprincipais_4 = new ol.format.GeoJSON();
var features_Riosprincipais_4 = format_Riosprincipais_4.readFeatures(json_Riosprincipais_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riosprincipais_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riosprincipais_4.addFeatures(features_Riosprincipais_4);
var lyr_Riosprincipais_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Riosprincipais_4, 
                style: style_Riosprincipais_4,
                interactive: false,
                title: '<img src="styles/legend/Riosprincipais_4.png" /> Rios principais'
            });
var format_Fluxobarragem_5 = new ol.format.GeoJSON();
var features_Fluxobarragem_5 = format_Fluxobarragem_5.readFeatures(json_Fluxobarragem_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fluxobarragem_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fluxobarragem_5.addFeatures(features_Fluxobarragem_5);
var lyr_Fluxobarragem_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fluxobarragem_5, 
                style: style_Fluxobarragem_5,
                interactive: false,
                title: '<img src="styles/legend/Fluxobarragem_5.png" /> Fluxo barragem'
            });
var format_Espelhodgua_6 = new ol.format.GeoJSON();
var features_Espelhodgua_6 = format_Espelhodgua_6.readFeatures(json_Espelhodgua_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espelhodgua_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espelhodgua_6.addFeatures(features_Espelhodgua_6);
var lyr_Espelhodgua_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Espelhodgua_6, 
                style: style_Espelhodgua_6,
                interactive: false,
                title: '<img src="styles/legend/Espelhodgua_6.png" /> Espelho d\'água'
            });
var format_Divisa_Municipal_7 = new ol.format.GeoJSON();
var features_Divisa_Municipal_7 = format_Divisa_Municipal_7.readFeatures(json_Divisa_Municipal_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Divisa_Municipal_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Divisa_Municipal_7.addFeatures(features_Divisa_Municipal_7);
var lyr_Divisa_Municipal_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Divisa_Municipal_7, 
                style: style_Divisa_Municipal_7,
                interactive: false,
                title: '<img src="styles/legend/Divisa_Municipal_7.png" /> Divisa_Municipal'
            });
var format_ViaUrbana_8 = new ol.format.GeoJSON();
var features_ViaUrbana_8 = format_ViaUrbana_8.readFeatures(json_ViaUrbana_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViaUrbana_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViaUrbana_8.addFeatures(features_ViaUrbana_8);
var lyr_ViaUrbana_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViaUrbana_8,
maxResolution:16.802679691357177,
 
                style: style_ViaUrbana_8,
                interactive: false,
                title: '<img src="styles/legend/ViaUrbana_8.png" /> Via Urbana'
            });
var format_EstradaParticular_9 = new ol.format.GeoJSON();
var features_EstradaParticular_9 = format_EstradaParticular_9.readFeatures(json_EstradaParticular_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstradaParticular_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstradaParticular_9.addFeatures(features_EstradaParticular_9);
var lyr_EstradaParticular_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstradaParticular_9,
maxResolution:19.603126306583373,
 
                style: style_EstradaParticular_9,
                interactive: false,
                title: '<img src="styles/legend/EstradaParticular_9.png" /> Estrada Particular'
            });
var format_EstradaVicinal_10 = new ol.format.GeoJSON();
var features_EstradaVicinal_10 = format_EstradaVicinal_10.readFeatures(json_EstradaVicinal_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstradaVicinal_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstradaVicinal_10.addFeatures(features_EstradaVicinal_10);
var lyr_EstradaVicinal_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstradaVicinal_10,
maxResolution:19.603126306583373,
 
                style: style_EstradaVicinal_10,
                interactive: false,
                title: '<img src="styles/legend/EstradaVicinal_10.png" /> Estrada Vicinal'
            });
var format_RodoviaMunicipal_11 = new ol.format.GeoJSON();
var features_RodoviaMunicipal_11 = format_RodoviaMunicipal_11.readFeatures(json_RodoviaMunicipal_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviaMunicipal_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviaMunicipal_11.addFeatures(features_RodoviaMunicipal_11);
var lyr_RodoviaMunicipal_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RodoviaMunicipal_11,
maxResolution:39.20625261316675,
 
                style: style_RodoviaMunicipal_11,
                interactive: false,
                title: '<img src="styles/legend/RodoviaMunicipal_11.png" /> Rodovia Municipal'
            });
var format_UHE_Sinop_12 = new ol.format.GeoJSON();
var features_UHE_Sinop_12 = format_UHE_Sinop_12.readFeatures(json_UHE_Sinop_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UHE_Sinop_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UHE_Sinop_12.addFeatures(features_UHE_Sinop_12);
var lyr_UHE_Sinop_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UHE_Sinop_12, 
                style: style_UHE_Sinop_12,
                interactive: false,
                title: '<img src="styles/legend/UHE_Sinop_12.png" /> UHE_Sinop'
            });
var format_RodoviaEstadual_13 = new ol.format.GeoJSON();
var features_RodoviaEstadual_13 = format_RodoviaEstadual_13.readFeatures(json_RodoviaEstadual_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviaEstadual_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviaEstadual_13.addFeatures(features_RodoviaEstadual_13);
var lyr_RodoviaEstadual_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RodoviaEstadual_13, 
                style: style_RodoviaEstadual_13,
                interactive: false,
                title: '<img src="styles/legend/RodoviaEstadual_13.png" /> Rodovia Estadual'
            });
var format_RodoviaFederal_14 = new ol.format.GeoJSON();
var features_RodoviaFederal_14 = format_RodoviaFederal_14.readFeatures(json_RodoviaFederal_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviaFederal_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviaFederal_14.addFeatures(features_RodoviaFederal_14);
var lyr_RodoviaFederal_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RodoviaFederal_14, 
                style: style_RodoviaFederal_14,
                interactive: false,
                title: '<img src="styles/legend/RodoviaFederal_14.png" /> Rodovia Federal'
            });
var format_sede_navegacao_15 = new ol.format.GeoJSON();
var features_sede_navegacao_15 = format_sede_navegacao_15.readFeatures(json_sede_navegacao_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sede_navegacao_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sede_navegacao_15.addFeatures(features_sede_navegacao_15);cluster_sede_navegacao_15 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_sede_navegacao_15
});
var lyr_sede_navegacao_15 = new ol.layer.Vector({
                declutter: true,
                source:cluster_sede_navegacao_15, 
                style: style_sede_navegacao_15,
                interactive: true,
                title: '<img src="styles/legend/sede_navegacao_15.png" /> sede_navegacao'
            });

lyr_reaAntropizada_0.setVisible(true);lyr_Vegetacao_1.setVisible(true);lyr_reaUrbana_2.setVisible(true);lyr_Riossecundarios_3.setVisible(true);lyr_Riosprincipais_4.setVisible(true);lyr_Fluxobarragem_5.setVisible(true);lyr_Espelhodgua_6.setVisible(true);lyr_Divisa_Municipal_7.setVisible(true);lyr_ViaUrbana_8.setVisible(true);lyr_EstradaParticular_9.setVisible(true);lyr_EstradaVicinal_10.setVisible(true);lyr_RodoviaMunicipal_11.setVisible(true);lyr_UHE_Sinop_12.setVisible(true);lyr_RodoviaEstadual_13.setVisible(true);lyr_RodoviaFederal_14.setVisible(true);lyr_sede_navegacao_15.setVisible(true);
var layersList = [lyr_reaAntropizada_0,lyr_Vegetacao_1,lyr_reaUrbana_2,lyr_Riossecundarios_3,lyr_Riosprincipais_4,lyr_Fluxobarragem_5,lyr_Espelhodgua_6,lyr_Divisa_Municipal_7,lyr_ViaUrbana_8,lyr_EstradaParticular_9,lyr_EstradaVicinal_10,lyr_RodoviaMunicipal_11,lyr_UHE_Sinop_12,lyr_RodoviaEstadual_13,lyr_RodoviaFederal_14,lyr_sede_navegacao_15];
lyr_reaAntropizada_0.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area__m2_': 'area__m2_', 'nome': 'nome', 'estado': 'estado', 'superficie': 'superficie', 'controle': 'controle', });
lyr_Vegetacao_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Area__m2_': 'Area__m2_', 'Controle': 'Controle', 'Identifica': 'Identifica', 'Nome': 'Nome', 'Municipio': 'Municipio', 'Estado': 'Estado', 'Obs': 'Obs', });
lyr_reaUrbana_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area__m2_': 'area__m2_', 'controle': 'controle', 'identifica': 'identifica', 'nome': 'nome', 'municipio': 'municipio', 'estado': 'estado', 'obs': 'obs', });
lyr_Riossecundarios_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'compriment': 'compriment', 'controle': 'controle', 'nome': 'nome', 'nome_abrev': 'nome_abrev', 'coincide_c': 'coincide_c', 'dentro_de_': 'dentro_de_', 'compartilh': 'compartilh', 'eixo_princ': 'eixo_princ', 'navegabili': 'navegabili', 'calado_max': 'calado_max', 'regime': 'regime', 'largura_me': 'largura_me', 'velocidade': 'velocidade', 'profundida': 'profundida', 'peso': 'peso', 'municipio': 'municipio', 'estado': 'estado', 'obs': 'obs', 'obs2': 'obs2', });
lyr_Riosprincipais_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'compriment': 'compriment', 'controle': 'controle', 'nome': 'nome', 'nome_abrev': 'nome_abrev', 'coincide_c': 'coincide_c', 'dentro_de_': 'dentro_de_', 'compartilh': 'compartilh', 'eixo_princ': 'eixo_princ', 'navegabili': 'navegabili', 'calado_max': 'calado_max', 'regime': 'regime', 'largura_me': 'largura_me', 'velocidade': 'velocidade', 'profundida': 'profundida', 'peso': 'peso', 'municipio': 'municipio', 'estado': 'estado', 'obs': 'obs', 'obs2': 'obs2', });
lyr_Fluxobarragem_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'compriment': 'compriment', 'controle': 'controle', 'nome': 'nome', 'nome_abrev': 'nome_abrev', 'coincide_c': 'coincide_c', 'dentro_de_': 'dentro_de_', 'compartilh': 'compartilh', 'eixo_princ': 'eixo_princ', 'navegabili': 'navegabili', 'calado_max': 'calado_max', 'regime': 'regime', 'largura_me': 'largura_me', 'velocidade': 'velocidade', 'profundida': 'profundida', 'peso': 'peso', 'municipio': 'municipio', 'estado': 'estado', 'obs': 'obs', 'obs2': 'obs2', });
lyr_Espelhodgua_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area__m2_': 'area__m2_', 'controle': 'controle', 'identifica': 'identifica', 'nome': 'nome', 'tipo_massa': 'tipo_massa', 'regime': 'regime', 'salinidade': 'salinidade', 'nome_abrev': 'nome_abrev', 'municipio': 'municipio', 'obs': 'obs', });
lyr_Divisa_Municipal_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'compriment': 'compriment', 'controle': 'controle', 'identifica': 'identifica', 'nome': 'nome', 'municipios': 'municipios', 'tipo': 'tipo', 'comprimen1': 'comprimen1', 'origem': 'origem', 'municipio': 'municipio', 'estado': 'estado', 'obs': 'obs', });
lyr_ViaUrbana_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'compriment': 'compriment', 'controle': 'controle', 'nome': 'nome', 'obs': 'obs', 'tipo_de_pa': 'tipo_de_pa', 'jurisdicao': 'jurisdicao', 'governo': 'governo', 'conferenci': 'conferenci', 'mt_integra': 'mt_integra', 'comprimen1': 'comprimen1', 'comprimen2': 'comprimen2', });
lyr_EstradaParticular_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'compriment': 'compriment', 'controle': 'controle', 'nome': 'nome', 'obs': 'obs', 'tipo_de_pa': 'tipo_de_pa', 'jurisdicao': 'jurisdicao', 'governo': 'governo', 'conferenci': 'conferenci', 'mt_integra': 'mt_integra', 'comprimen1': 'comprimen1', 'comprimen2': 'comprimen2', });
lyr_EstradaVicinal_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'compriment': 'compriment', 'controle': 'controle', 'nome': 'nome', 'obs': 'obs', 'tipo_de_pa': 'tipo_de_pa', 'jurisdicao': 'jurisdicao', 'governo': 'governo', 'conferenci': 'conferenci', 'mt_integra': 'mt_integra', 'comprimen1': 'comprimen1', 'comprimen2': 'comprimen2', });
lyr_RodoviaMunicipal_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'compriment': 'compriment', 'controle': 'controle', 'nome': 'nome', 'obs': 'obs', 'tipo_de_pa': 'tipo_de_pa', 'jurisdicao': 'jurisdicao', 'governo': 'governo', 'conferenci': 'conferenci', 'mt_integra': 'mt_integra', 'comprimen1': 'comprimen1', 'comprimen2': 'comprimen2', });
lyr_UHE_Sinop_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area__m2_': 'area__m2_', 'controle': 'controle', 'identifica': 'identifica', 'nome': 'nome', 'tipo_massa': 'tipo_massa', 'regime': 'regime', 'salinidade': 'salinidade', 'nome_abrev': 'nome_abrev', 'municipio': 'municipio', 'obs': 'obs', });
lyr_RodoviaEstadual_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'compriment': 'compriment', 'controle': 'controle', 'nome': 'nome', 'obs': 'obs', 'tipo_de_pa': 'tipo_de_pa', 'jurisdicao': 'jurisdicao', 'governo': 'governo', 'conferenci': 'conferenci', 'mt_integra': 'mt_integra', 'comprimen1': 'comprimen1', 'comprimen2': 'comprimen2', });
lyr_RodoviaFederal_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'compriment': 'compriment', 'controle': 'controle', 'nome': 'nome', 'obs': 'obs', 'tipo_de_pa': 'tipo_de_pa', 'jurisdicao': 'jurisdicao', 'governo': 'governo', 'conferenci': 'conferenci', 'mt_integra': 'mt_integra', 'comprimen1': 'comprimen1', 'comprimen2': 'comprimen2', });
lyr_sede_navegacao_15.set('fieldAliases', {'fid': 'fid', 'Codigo': 'Código Imóvel', 'nome': 'Nome', 'proprietar': 'Prorprietário', 'google_map': 'Google Mapas', 'waze': 'Waze', 'coord_google': 'Coord. Google', });
lyr_reaAntropizada_0.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area__m2_': 'TextEdit', 'nome': 'TextEdit', 'estado': 'TextEdit', 'superficie': 'TextEdit', 'controle': 'TextEdit', });
lyr_Vegetacao_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Area__m2_': 'TextEdit', 'Controle': 'TextEdit', 'Identifica': 'TextEdit', 'Nome': 'TextEdit', 'Municipio': 'TextEdit', 'Estado': 'TextEdit', 'Obs': 'TextEdit', });
lyr_reaUrbana_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area__m2_': 'TextEdit', 'controle': 'TextEdit', 'identifica': 'TextEdit', 'nome': 'TextEdit', 'municipio': 'TextEdit', 'estado': 'TextEdit', 'obs': 'TextEdit', });
lyr_Riossecundarios_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'compriment': 'TextEdit', 'controle': 'TextEdit', 'nome': 'TextEdit', 'nome_abrev': 'TextEdit', 'coincide_c': 'TextEdit', 'dentro_de_': 'TextEdit', 'compartilh': 'TextEdit', 'eixo_princ': 'TextEdit', 'navegabili': 'TextEdit', 'calado_max': 'TextEdit', 'regime': 'TextEdit', 'largura_me': 'TextEdit', 'velocidade': 'TextEdit', 'profundida': 'TextEdit', 'peso': 'TextEdit', 'municipio': 'TextEdit', 'estado': 'TextEdit', 'obs': 'TextEdit', 'obs2': 'TextEdit', });
lyr_Riosprincipais_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'compriment': 'TextEdit', 'controle': 'TextEdit', 'nome': 'TextEdit', 'nome_abrev': 'TextEdit', 'coincide_c': 'TextEdit', 'dentro_de_': 'TextEdit', 'compartilh': 'TextEdit', 'eixo_princ': 'TextEdit', 'navegabili': 'TextEdit', 'calado_max': 'TextEdit', 'regime': 'TextEdit', 'largura_me': 'TextEdit', 'velocidade': 'TextEdit', 'profundida': 'TextEdit', 'peso': 'TextEdit', 'municipio': 'TextEdit', 'estado': 'TextEdit', 'obs': 'TextEdit', 'obs2': 'TextEdit', });
lyr_Fluxobarragem_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'compriment': 'TextEdit', 'controle': 'TextEdit', 'nome': 'TextEdit', 'nome_abrev': 'TextEdit', 'coincide_c': 'TextEdit', 'dentro_de_': 'TextEdit', 'compartilh': 'TextEdit', 'eixo_princ': 'TextEdit', 'navegabili': 'TextEdit', 'calado_max': 'TextEdit', 'regime': 'TextEdit', 'largura_me': 'TextEdit', 'velocidade': 'TextEdit', 'profundida': 'TextEdit', 'peso': 'TextEdit', 'municipio': 'TextEdit', 'estado': 'TextEdit', 'obs': 'TextEdit', 'obs2': 'TextEdit', });
lyr_Espelhodgua_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area__m2_': 'TextEdit', 'controle': 'TextEdit', 'identifica': 'TextEdit', 'nome': 'TextEdit', 'tipo_massa': 'TextEdit', 'regime': 'TextEdit', 'salinidade': 'TextEdit', 'nome_abrev': 'TextEdit', 'municipio': 'TextEdit', 'obs': 'TextEdit', });
lyr_Divisa_Municipal_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'compriment': 'TextEdit', 'controle': 'TextEdit', 'identifica': 'TextEdit', 'nome': 'TextEdit', 'municipios': 'TextEdit', 'tipo': 'TextEdit', 'comprimen1': 'TextEdit', 'origem': 'TextEdit', 'municipio': 'TextEdit', 'estado': 'TextEdit', 'obs': 'TextEdit', });
lyr_ViaUrbana_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'compriment': 'TextEdit', 'controle': 'TextEdit', 'nome': 'TextEdit', 'obs': 'TextEdit', 'tipo_de_pa': 'TextEdit', 'jurisdicao': 'TextEdit', 'governo': 'TextEdit', 'conferenci': 'TextEdit', 'mt_integra': 'TextEdit', 'comprimen1': 'TextEdit', 'comprimen2': 'TextEdit', });
lyr_EstradaParticular_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'compriment': 'TextEdit', 'controle': 'TextEdit', 'nome': 'TextEdit', 'obs': 'TextEdit', 'tipo_de_pa': 'TextEdit', 'jurisdicao': 'TextEdit', 'governo': 'TextEdit', 'conferenci': 'TextEdit', 'mt_integra': 'TextEdit', 'comprimen1': 'TextEdit', 'comprimen2': 'TextEdit', });
lyr_EstradaVicinal_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'compriment': 'TextEdit', 'controle': 'TextEdit', 'nome': 'TextEdit', 'obs': 'TextEdit', 'tipo_de_pa': 'TextEdit', 'jurisdicao': 'TextEdit', 'governo': 'TextEdit', 'conferenci': 'TextEdit', 'mt_integra': 'TextEdit', 'comprimen1': 'TextEdit', 'comprimen2': 'TextEdit', });
lyr_RodoviaMunicipal_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'compriment': 'TextEdit', 'controle': 'TextEdit', 'nome': 'TextEdit', 'obs': 'TextEdit', 'tipo_de_pa': 'TextEdit', 'jurisdicao': 'TextEdit', 'governo': 'TextEdit', 'conferenci': 'TextEdit', 'mt_integra': 'TextEdit', 'comprimen1': 'TextEdit', 'comprimen2': 'TextEdit', });
lyr_UHE_Sinop_12.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area__m2_': 'TextEdit', 'controle': 'TextEdit', 'identifica': 'TextEdit', 'nome': 'TextEdit', 'tipo_massa': 'TextEdit', 'regime': 'TextEdit', 'salinidade': 'TextEdit', 'nome_abrev': 'TextEdit', 'municipio': 'TextEdit', 'obs': 'TextEdit', });
lyr_RodoviaEstadual_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'compriment': 'TextEdit', 'controle': 'TextEdit', 'nome': 'TextEdit', 'obs': 'TextEdit', 'tipo_de_pa': 'TextEdit', 'jurisdicao': 'TextEdit', 'governo': 'TextEdit', 'conferenci': 'TextEdit', 'mt_integra': 'TextEdit', 'comprimen1': 'TextEdit', 'comprimen2': 'TextEdit', });
lyr_RodoviaFederal_14.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'compriment': 'TextEdit', 'controle': 'TextEdit', 'nome': 'TextEdit', 'obs': 'TextEdit', 'tipo_de_pa': 'TextEdit', 'jurisdicao': 'TextEdit', 'governo': 'TextEdit', 'conferenci': 'TextEdit', 'mt_integra': 'TextEdit', 'comprimen1': 'TextEdit', 'comprimen2': 'TextEdit', });
lyr_sede_navegacao_15.set('fieldImages', {'fid': 'TextEdit', 'Codigo': 'TextEdit', 'nome': 'TextEdit', 'proprietar': 'TextEdit', 'google_map': 'TextEdit', 'waze': 'TextEdit', 'coord_google': 'TextEdit', });
lyr_reaAntropizada_0.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area__m2_': 'no label', 'nome': 'no label', 'estado': 'no label', 'superficie': 'no label', 'controle': 'no label', });
lyr_Vegetacao_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Area__m2_': 'no label', 'Controle': 'no label', 'Identifica': 'no label', 'Nome': 'no label', 'Municipio': 'no label', 'Estado': 'no label', 'Obs': 'no label', });
lyr_reaUrbana_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area__m2_': 'no label', 'controle': 'no label', 'identifica': 'no label', 'nome': 'no label', 'municipio': 'no label', 'estado': 'no label', 'obs': 'no label', });
lyr_Riossecundarios_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'compriment': 'no label', 'controle': 'no label', 'nome': 'no label', 'nome_abrev': 'no label', 'coincide_c': 'no label', 'dentro_de_': 'no label', 'compartilh': 'no label', 'eixo_princ': 'no label', 'navegabili': 'no label', 'calado_max': 'no label', 'regime': 'no label', 'largura_me': 'no label', 'velocidade': 'no label', 'profundida': 'no label', 'peso': 'no label', 'municipio': 'no label', 'estado': 'no label', 'obs': 'no label', 'obs2': 'no label', });
lyr_Riosprincipais_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'compriment': 'no label', 'controle': 'no label', 'nome': 'no label', 'nome_abrev': 'no label', 'coincide_c': 'no label', 'dentro_de_': 'no label', 'compartilh': 'no label', 'eixo_princ': 'no label', 'navegabili': 'no label', 'calado_max': 'no label', 'regime': 'no label', 'largura_me': 'no label', 'velocidade': 'no label', 'profundida': 'no label', 'peso': 'no label', 'municipio': 'no label', 'estado': 'no label', 'obs': 'no label', 'obs2': 'no label', });
lyr_Fluxobarragem_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'compriment': 'no label', 'controle': 'no label', 'nome': 'no label', 'nome_abrev': 'no label', 'coincide_c': 'no label', 'dentro_de_': 'no label', 'compartilh': 'no label', 'eixo_princ': 'no label', 'navegabili': 'no label', 'calado_max': 'no label', 'regime': 'no label', 'largura_me': 'no label', 'velocidade': 'no label', 'profundida': 'no label', 'peso': 'no label', 'municipio': 'no label', 'estado': 'no label', 'obs': 'no label', 'obs2': 'no label', });
lyr_Espelhodgua_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area__m2_': 'no label', 'controle': 'no label', 'identifica': 'no label', 'nome': 'no label', 'tipo_massa': 'no label', 'regime': 'no label', 'salinidade': 'no label', 'nome_abrev': 'no label', 'municipio': 'no label', 'obs': 'no label', });
lyr_Divisa_Municipal_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'compriment': 'no label', 'controle': 'no label', 'identifica': 'no label', 'nome': 'no label', 'municipios': 'no label', 'tipo': 'no label', 'comprimen1': 'no label', 'origem': 'no label', 'municipio': 'no label', 'estado': 'no label', 'obs': 'no label', });
lyr_ViaUrbana_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'compriment': 'no label', 'controle': 'no label', 'nome': 'no label', 'obs': 'no label', 'tipo_de_pa': 'no label', 'jurisdicao': 'no label', 'governo': 'no label', 'conferenci': 'no label', 'mt_integra': 'no label', 'comprimen1': 'no label', 'comprimen2': 'no label', });
lyr_EstradaParticular_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'compriment': 'no label', 'controle': 'no label', 'nome': 'no label', 'obs': 'no label', 'tipo_de_pa': 'no label', 'jurisdicao': 'no label', 'governo': 'no label', 'conferenci': 'no label', 'mt_integra': 'no label', 'comprimen1': 'no label', 'comprimen2': 'no label', });
lyr_EstradaVicinal_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'compriment': 'no label', 'controle': 'no label', 'nome': 'no label', 'obs': 'no label', 'tipo_de_pa': 'no label', 'jurisdicao': 'no label', 'governo': 'no label', 'conferenci': 'no label', 'mt_integra': 'no label', 'comprimen1': 'no label', 'comprimen2': 'no label', });
lyr_RodoviaMunicipal_11.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'compriment': 'no label', 'controle': 'no label', 'nome': 'no label', 'obs': 'no label', 'tipo_de_pa': 'no label', 'jurisdicao': 'no label', 'governo': 'no label', 'conferenci': 'no label', 'mt_integra': 'no label', 'comprimen1': 'no label', 'comprimen2': 'no label', });
lyr_UHE_Sinop_12.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area__m2_': 'no label', 'controle': 'no label', 'identifica': 'no label', 'nome': 'no label', 'tipo_massa': 'no label', 'regime': 'no label', 'salinidade': 'no label', 'nome_abrev': 'no label', 'municipio': 'no label', 'obs': 'no label', });
lyr_RodoviaEstadual_13.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'compriment': 'no label', 'controle': 'no label', 'nome': 'no label', 'obs': 'no label', 'tipo_de_pa': 'no label', 'jurisdicao': 'no label', 'governo': 'no label', 'conferenci': 'no label', 'mt_integra': 'no label', 'comprimen1': 'no label', 'comprimen2': 'no label', });
lyr_RodoviaFederal_14.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'compriment': 'no label', 'controle': 'no label', 'nome': 'no label', 'obs': 'no label', 'tipo_de_pa': 'no label', 'jurisdicao': 'no label', 'governo': 'no label', 'conferenci': 'no label', 'mt_integra': 'no label', 'comprimen1': 'no label', 'comprimen2': 'no label', });
lyr_sede_navegacao_15.set('fieldLabels', {'fid': 'no label', 'Codigo': 'header label', 'nome': 'inline label', 'proprietar': 'inline label', 'google_map': 'inline label', 'waze': 'inline label', 'coord_google': 'header label', });
lyr_sede_navegacao_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});