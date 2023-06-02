var wms_layers = [];

var format_ind_popu_2011_0 = new ol.format.GeoJSON();
var features_ind_popu_2011_0 = format_ind_popu_2011_0.readFeatures(json_ind_popu_2011_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ind_popu_2011_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ind_popu_2011_0.addFeatures(features_ind_popu_2011_0);
var lyr_ind_popu_2011_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ind_popu_2011_0, 
                style: style_ind_popu_2011_0,
                interactive: true,
    title: 'ind_popu_2011<br />\
    <img src="styles/legend/ind_popu_2011_0_0.png" /> 22582 - 41481<br />\
    <img src="styles/legend/ind_popu_2011_0_1.png" /> 41481 - 60380<br />\
    <img src="styles/legend/ind_popu_2011_0_2.png" /> 60380 - 79278<br />\
    <img src="styles/legend/ind_popu_2011_0_3.png" /> 79278 - 98177<br />\
    <img src="styles/legend/ind_popu_2011_0_4.png" /> 98177 - 117076<br />\
    <img src="styles/legend/ind_popu_2011_0_5.png" /> 117076 - 135975<br />\
    <img src="styles/legend/ind_popu_2011_0_6.png" /> 135975 - 154874<br />\
    <img src="styles/legend/ind_popu_2011_0_7.png" /> 154874 - 173772<br />\
    <img src="styles/legend/ind_popu_2011_0_8.png" /> 173772 - 192671<br />\
    <img src="styles/legend/ind_popu_2011_0_9.png" /> 192671 - 211570<br />'
        });
var format_ind_forest_1 = new ol.format.GeoJSON();
var features_ind_forest_1 = format_ind_forest_1.readFeatures(json_ind_forest_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ind_forest_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ind_forest_1.addFeatures(features_ind_forest_1);
var lyr_ind_forest_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ind_forest_1, 
                style: style_ind_forest_1,
                interactive: true,
    title: 'ind_forest<br />\
    <img src="styles/legend/ind_forest_1_0.png" /> 4 - 14<br />\
    <img src="styles/legend/ind_forest_1_1.png" /> 14 - 25<br />\
    <img src="styles/legend/ind_forest_1_2.png" /> 25 - 36<br />\
    <img src="styles/legend/ind_forest_1_3.png" /> 36 - 47<br />\
    <img src="styles/legend/ind_forest_1_4.png" /> 47 - 58<br />\
    <img src="styles/legend/ind_forest_1_5.png" /> 58 - 69<br />\
    <img src="styles/legend/ind_forest_1_6.png" /> 69 - 79<br />\
    <img src="styles/legend/ind_forest_1_7.png" /> 79 - 90<br />'
        });
var format_ind_protectedareas_2 = new ol.format.GeoJSON();
var features_ind_protectedareas_2 = format_ind_protectedareas_2.readFeatures(json_ind_protectedareas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ind_protectedareas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ind_protectedareas_2.addFeatures(features_ind_protectedareas_2);
var lyr_ind_protectedareas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ind_protectedareas_2, 
                style: style_ind_protectedareas_2,
                interactive: true,
    title: 'ind_protectedareas<br />\
    <img src="styles/legend/ind_protectedareas_2_0.png" /> 1<br />\
    <img src="styles/legend/ind_protectedareas_2_1.png" /> 2<br />\
    <img src="styles/legend/ind_protectedareas_2_2.png" /> 3<br />\
    <img src="styles/legend/ind_protectedareas_2_3.png" /> 4<br />\
    <img src="styles/legend/ind_protectedareas_2_4.png" /> 5<br />\
    <img src="styles/legend/ind_protectedareas_2_5.png" /> 12<br />\
    <img src="styles/legend/ind_protectedareas_2_6.png" /> 14<br />\
    <img src="styles/legend/ind_protectedareas_2_7.png" /> 18<br />\
    <img src="styles/legend/ind_protectedareas_2_8.png" /> <br />'
        });
var format_roadl_ind_3 = new ol.format.GeoJSON();
var features_roadl_ind_3 = format_roadl_ind_3.readFeatures(json_roadl_ind_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roadl_ind_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roadl_ind_3.addFeatures(features_roadl_ind_3);
var lyr_roadl_ind_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roadl_ind_3, 
                style: style_roadl_ind_3,
                interactive: true,
                title: '<img src="styles/legend/roadl_ind_3.png" /> roadl_ind'
            });
var format_wls_4 = new ol.format.GeoJSON();
var features_wls_4 = format_wls_4.readFeatures(json_wls_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wls_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wls_4.addFeatures(features_wls_4);
var lyr_wls_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wls_4, 
                style: style_wls_4,
                interactive: true,
                title: '<img src="styles/legend/wls_4.png" /> wls'
            });

lyr_ind_popu_2011_0.setVisible(true);lyr_ind_forest_1.setVisible(true);lyr_ind_protectedareas_2.setVisible(true);lyr_roadl_ind_3.setVisible(true);lyr_wls_4.setVisible(true);
var layersList = [lyr_ind_popu_2011_0,lyr_ind_forest_1,lyr_ind_protectedareas_2,lyr_roadl_ind_3,lyr_wls_4];
lyr_ind_popu_2011_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'RBI DATA states_wise_population_Income_2011-12-INC': 'RBI DATA states_wise_population_Income_2011-12-INC', });
lyr_ind_forest_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'Forest_Geographical area': 'Forest_Geographical area', 'Forest_Total forest': 'Forest_Total forest', 'Forest_Percentage of geographical area': 'Forest_Percentage of geographical area', });
lyr_ind_protectedareas_2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'Protected areas in india_State Area (km�)': 'Protected areas in india_State Area (km�)', 'Protected areas in india_No. of Con R': 'Protected areas in india_No. of Con R', });
lyr_roadl_ind_3.set('fieldAliases', {'f_code': 'f_code', 'acc': 'acc', 'exs': 'exs', 'rst': 'rst', 'med': 'med', 'rtt': 'rtt', 'rsu': 'rsu', 'loc': 'loc', 'soc': 'soc', });
lyr_wls_4.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'name': 'name', });
lyr_ind_popu_2011_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'RBI DATA states_wise_population_Income_2011-12-INC': 'Range', });
lyr_ind_forest_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'Forest_Geographical area': 'TextEdit', 'Forest_Total forest': 'TextEdit', 'Forest_Percentage of geographical area': 'TextEdit', });
lyr_ind_protectedareas_2.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'Protected areas in india_State Area (km�)': 'TextEdit', 'Protected areas in india_No. of Con R': 'Range', });
lyr_roadl_ind_3.set('fieldImages', {'f_code': '', 'acc': '', 'exs': '', 'rst': '', 'med': '', 'rtt': '', 'rsu': '', 'loc': '', 'soc': '', });
lyr_wls_4.set('fieldImages', {'gid': '', 'id': '', 'name': '', });
lyr_ind_popu_2011_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'RBI DATA states_wise_population_Income_2011-12-INC': 'no label', });
lyr_ind_forest_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'Forest_Geographical area': 'no label', 'Forest_Total forest': 'no label', 'Forest_Percentage of geographical area': 'no label', });
lyr_ind_protectedareas_2.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'Protected areas in india_State Area (km�)': 'no label', 'Protected areas in india_No. of Con R': 'no label', });
lyr_roadl_ind_3.set('fieldLabels', {'f_code': 'no label', 'acc': 'no label', 'exs': 'no label', 'rst': 'no label', 'med': 'no label', 'rtt': 'no label', 'rsu': 'no label', 'loc': 'no label', 'soc': 'no label', });
lyr_wls_4.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'name': 'no label', });
lyr_wls_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});