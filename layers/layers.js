var wms_layers = [];

var format_regime_0 = new ol.format.GeoJSON();
var features_regime_0 = format_regime_0.readFeatures(json_regime_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regime_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regime_0.addFeatures(features_regime_0);
var lyr_regime_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regime_0, 
                style: style_regime_0,
                interactive: true,
                title: '<img src="styles/legend/regime_0.png" /> regime'
            });

lyr_regime_0.setVisible(true);
var layersList = [lyr_regime_0];
lyr_regime_0.set('fieldAliases', {'id': 'id', 'code_ligne': 'code_ligne', 'lib_ligne': 'lib_ligne', 'exploitati': 'exploitati', 'rg_troncon': 'rg_troncon', 'pkd': 'pkd', 'pkf': 'pkf', 'idgaia': 'idgaia', 'x_d_l93': 'x_d_l93', 'y_d_l93': 'y_d_l93', 'x_f_l93': 'x_f_l93', 'y_f_l93': 'y_f_l93', 'x_d_wgs84': 'x_d_wgs84', 'y_d_wgs84': 'y_d_wgs84', 'x_f_wgs84': 'x_f_wgs84', 'y_f_wgs84': 'y_f_wgs84', 'c_geo_d': 'c_geo_d', 'c_geo_f': 'c_geo_f', 'pkd_int': 'pkd_int', 'pkf_int': 'pkf_int', });
lyr_regime_0.set('fieldImages', {'id': '', 'code_ligne': '', 'lib_ligne': '', 'exploitati': '', 'rg_troncon': '', 'pkd': '', 'pkf': '', 'idgaia': '', 'x_d_l93': '', 'y_d_l93': '', 'x_f_l93': '', 'y_f_l93': '', 'x_d_wgs84': '', 'y_d_wgs84': '', 'x_f_wgs84': '', 'y_f_wgs84': '', 'c_geo_d': '', 'c_geo_f': '', 'pkd_int': '', 'pkf_int': '', });
lyr_regime_0.set('fieldLabels', {'id': 'no label', 'code_ligne': 'no label', 'lib_ligne': 'no label', 'exploitati': 'no label', 'rg_troncon': 'no label', 'pkd': 'no label', 'pkf': 'no label', 'idgaia': 'no label', 'x_d_l93': 'no label', 'y_d_l93': 'no label', 'x_f_l93': 'no label', 'y_f_l93': 'no label', 'x_d_wgs84': 'no label', 'y_d_wgs84': 'no label', 'x_f_wgs84': 'no label', 'y_f_wgs84': 'no label', 'c_geo_d': 'no label', 'c_geo_f': 'no label', 'pkd_int': 'no label', 'pkf_int': 'no label', });
lyr_regime_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});