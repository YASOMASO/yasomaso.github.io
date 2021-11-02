var wms_layers = [];

var format_listedesgares_0 = new ol.format.GeoJSON();
var features_listedesgares_0 = format_listedesgares_0.readFeatures(json_listedesgares_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_listedesgares_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_listedesgares_0.addFeatures(features_listedesgares_0);cluster_listedesgares_0 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_listedesgares_0
});
var lyr_listedesgares_0 = new ol.layer.Vector({
                declutter: true,
                source:cluster_listedesgares_0, 
                style: style_listedesgares_0,
                interactive: true,
                title: '<img src="styles/legend/listedesgares_0.png" /> liste-des-gares'
            });
var format_regions20180101_1 = new ol.format.GeoJSON();
var features_regions20180101_1 = format_regions20180101_1.readFeatures(json_regions20180101_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regions20180101_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regions20180101_1.addFeatures(features_regions20180101_1);
var lyr_regions20180101_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regions20180101_1, 
                style: style_regions20180101_1,
                interactive: true,
                title: '<img src="styles/legend/regions20180101_1.png" /> regions-20180101'
            });
var format_modedecantonnementdeslignes_2 = new ol.format.GeoJSON();
var features_modedecantonnementdeslignes_2 = format_modedecantonnementdeslignes_2.readFeatures(json_modedecantonnementdeslignes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_modedecantonnementdeslignes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_modedecantonnementdeslignes_2.addFeatures(features_modedecantonnementdeslignes_2);
var lyr_modedecantonnementdeslignes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_modedecantonnementdeslignes_2, 
                style: style_modedecantonnementdeslignes_2,
                interactive: true,
                title: '<img src="styles/legend/modedecantonnementdeslignes_2.png" /> mode-de-cantonnement-des-lignes'
            });
var format_regimedexploitationdeslignes_3 = new ol.format.GeoJSON();
var features_regimedexploitationdeslignes_3 = format_regimedexploitationdeslignes_3.readFeatures(json_regimedexploitationdeslignes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regimedexploitationdeslignes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regimedexploitationdeslignes_3.addFeatures(features_regimedexploitationdeslignes_3);
var lyr_regimedexploitationdeslignes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regimedexploitationdeslignes_3, 
                style: style_regimedexploitationdeslignes_3,
                interactive: true,
                title: '<img src="styles/legend/regimedexploitationdeslignes_3.png" /> regime-dexploitation-des-lignes'
            });
var format_vitesse_4 = new ol.format.GeoJSON();
var features_vitesse_4 = format_vitesse_4.readFeatures(json_vitesse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vitesse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vitesse_4.addFeatures(features_vitesse_4);
var lyr_vitesse_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vitesse_4, 
                style: style_vitesse_4,
                interactive: true,
    title: 'vitesse<br />\
    <img src="styles/legend/vitesse_4_0.png" /> 10 - 50<br />\
    <img src="styles/legend/vitesse_4_1.png" /> 50 - 85<br />\
    <img src="styles/legend/vitesse_4_2.png" /> 85 - 125<br />\
    <img src="styles/legend/vitesse_4_3.png" /> 125 - 180<br />\
    <img src="styles/legend/vitesse_4_4.png" /> 180 - 230<br />\
    <img src="styles/legend/vitesse_4_5.png" /> 230 - 350<br />'
        });

lyr_listedesgares_0.setVisible(true);lyr_regions20180101_1.setVisible(true);lyr_modedecantonnementdeslignes_2.setVisible(true);lyr_regimedexploitationdeslignes_3.setVisible(true);lyr_vitesse_4.setVisible(true);
var layersList = [lyr_listedesgares_0,lyr_regions20180101_1,lyr_modedecantonnementdeslignes_2,lyr_regimedexploitationdeslignes_3,lyr_vitesse_4];
lyr_listedesgares_0.set('fieldAliases', {'code_uic': 'code_uic', 'libelle': 'libelle', 'fret': 'fret', 'voyageurs': 'voyageurs', 'code_ligne': 'code_ligne', 'rg_troncon': 'rg_troncon', 'pk': 'pk', 'commune': 'commune', 'departemen': 'departemen', 'idreseau': 'idreseau', 'idgaia': 'idgaia', 'x_l93': 'x_l93', 'y_l93': 'y_l93', 'x_wgs84': 'x_wgs84', 'y_wgs84': 'y_wgs84', });
lyr_regions20180101_1.set('fieldAliases', {'nom': 'nom', });
lyr_modedecantonnementdeslignes_2.set('fieldAliases', {'CODE_LIGNE': 'CODE_LIGNE', 'LIB_LIGNE': 'LIB_LIGNE', 'LIBELLE': 'LIBELLE', 'RG_TRONCON': 'RG_TRONCON', 'PKD': 'PKD', 'PKF': 'PKF', 'IDGAIA': 'IDGAIA', 'X_D_L93': 'X_D_L93', 'Y_D_L93': 'Y_D_L93', 'X_F_L93': 'X_F_L93', 'Y_F_L93': 'Y_F_L93', 'X_D_WGS84': 'X_D_WGS84', 'Y_D_WGS84': 'Y_D_WGS84', 'X_F_WGS84': 'X_F_WGS84', 'Y_F_WGS84': 'Y_F_WGS84', 'C_GEO_D': 'C_GEO_D', 'C_GEO_F': 'C_GEO_F', 'canton': 'canton', });
lyr_regimedexploitationdeslignes_3.set('fieldAliases', {'CODE_LIGNE': 'CODE_LIGNE', 'LIB_LIGNE': 'LIB_LIGNE', 'EXPLOITATI': 'EXPLOITATI', 'RG_TRONCON': 'RG_TRONCON', 'PKD': 'PKD', 'PKF': 'PKF', 'IDGAIA': 'IDGAIA', 'X_D_L93': 'X_D_L93', 'Y_D_L93': 'Y_D_L93', 'X_F_L93': 'X_F_L93', 'Y_F_L93': 'Y_F_L93', 'X_D_WGS84': 'X_D_WGS84', 'Y_D_WGS84': 'Y_D_WGS84', 'X_F_WGS84': 'X_F_WGS84', 'Y_F_WGS84': 'Y_F_WGS84', 'C_GEO_D': 'C_GEO_D', 'C_GEO_F': 'C_GEO_F', });
lyr_vitesse_4.set('fieldAliases', {'fid': 'fid', 'CODE_LIGNE': 'CODE_LIGNE', 'LIB_LIGNE': 'LIB_LIGNE', 'V_MAX': 'V_MAX', 'RG_TRONCON': 'RG_TRONCON', 'PKD': 'PKD', 'PKF': 'PKF', 'IDGAIA': 'IDGAIA', 'X_D_L93': 'X_D_L93', 'Y_D_L93': 'Y_D_L93', 'X_F_L93': 'X_F_L93', 'Y_F_L93': 'Y_F_L93', 'X_D_WGS84': 'X_D_WGS84', 'Y_D_WGS84': 'Y_D_WGS84', 'X_F_WGS84': 'X_F_WGS84', 'Y_F_WGS84': 'Y_F_WGS84', 'C_GEO_D': 'C_GEO_D', 'C_GEO_F': 'C_GEO_F', });
lyr_listedesgares_0.set('fieldImages', {'code_uic': 'Hidden', 'libelle': 'TextEdit', 'fret': 'TextEdit', 'voyageurs': 'TextEdit', 'code_ligne': 'TextEdit', 'rg_troncon': 'Hidden', 'pk': 'TextEdit', 'commune': 'TextEdit', 'departemen': 'TextEdit', 'idreseau': 'Hidden', 'idgaia': 'Hidden', 'x_l93': 'Hidden', 'y_l93': 'Hidden', 'x_wgs84': 'Hidden', 'y_wgs84': 'Hidden', });
lyr_regions20180101_1.set('fieldImages', {'nom': 'TextEdit', });
lyr_modedecantonnementdeslignes_2.set('fieldImages', {'CODE_LIGNE': 'Hidden', 'LIB_LIGNE': 'Hidden', 'LIBELLE': 'Hidden', 'RG_TRONCON': 'Hidden', 'PKD': 'Hidden', 'PKF': 'Hidden', 'IDGAIA': 'Hidden', 'X_D_L93': 'Hidden', 'Y_D_L93': 'Hidden', 'X_F_L93': 'Hidden', 'Y_F_L93': 'Hidden', 'X_D_WGS84': 'Hidden', 'Y_D_WGS84': 'Hidden', 'X_F_WGS84': 'Hidden', 'Y_F_WGS84': 'Hidden', 'C_GEO_D': 'Hidden', 'C_GEO_F': 'Hidden', 'canton': 'TextEdit', });
lyr_regimedexploitationdeslignes_3.set('fieldImages', {'CODE_LIGNE': 'TextEdit', 'LIB_LIGNE': 'TextEdit', 'EXPLOITATI': 'TextEdit', 'RG_TRONCON': 'Hidden', 'PKD': 'TextEdit', 'PKF': 'TextEdit', 'IDGAIA': 'Hidden', 'X_D_L93': 'Hidden', 'Y_D_L93': 'Hidden', 'X_F_L93': 'Hidden', 'Y_F_L93': 'Hidden', 'X_D_WGS84': 'Hidden', 'Y_D_WGS84': 'Hidden', 'X_F_WGS84': 'Hidden', 'Y_F_WGS84': 'Hidden', 'C_GEO_D': 'Hidden', 'C_GEO_F': 'Hidden', });
lyr_vitesse_4.set('fieldImages', {'fid': 'Hidden', 'CODE_LIGNE': 'Hidden', 'LIB_LIGNE': 'Hidden', 'V_MAX': 'TextEdit', 'RG_TRONCON': 'Hidden', 'PKD': 'Hidden', 'PKF': 'Hidden', 'IDGAIA': 'Hidden', 'X_D_L93': 'Hidden', 'Y_D_L93': 'Hidden', 'X_F_L93': 'Hidden', 'Y_F_L93': 'Hidden', 'X_D_WGS84': 'Hidden', 'Y_D_WGS84': 'Hidden', 'X_F_WGS84': 'Hidden', 'Y_F_WGS84': 'Hidden', 'C_GEO_D': 'Hidden', 'C_GEO_F': 'Hidden', });
lyr_listedesgares_0.set('fieldLabels', {'libelle': 'inline label', 'fret': 'inline label', 'voyageurs': 'inline label', 'code_ligne': 'inline label', 'pk': 'inline label', 'commune': 'inline label', 'departemen': 'inline label', });
lyr_regions20180101_1.set('fieldLabels', {'nom': 'inline label', });
lyr_modedecantonnementdeslignes_2.set('fieldLabels', {'canton': 'inline label', });
lyr_regimedexploitationdeslignes_3.set('fieldLabels', {'CODE_LIGNE': 'inline label', 'LIB_LIGNE': 'inline label', 'EXPLOITATI': 'inline label', 'PKD': 'inline label', 'PKF': 'inline label', });
lyr_vitesse_4.set('fieldLabels', {'V_MAX': 'inline label', });
lyr_vitesse_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});