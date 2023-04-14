var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Hydrography_1 = new ol.format.GeoJSON();
var features_Hydrography_1 = format_Hydrography_1.readFeatures(json_Hydrography_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hydrography_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydrography_1.addFeatures(features_Hydrography_1);
var lyr_Hydrography_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hydrography_1, 
                style: style_Hydrography_1,
                interactive: true,
                title: '<img src="styles/legend/Hydrography_1.png" /> Hydrography'
            });
var format_MS4Area_2 = new ol.format.GeoJSON();
var features_MS4Area_2 = format_MS4Area_2.readFeatures(json_MS4Area_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MS4Area_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MS4Area_2.addFeatures(features_MS4Area_2);
var lyr_MS4Area_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MS4Area_2, 
                style: style_MS4Area_2,
                interactive: true,
    title: 'MS4 Area<br />\
    <img src="styles/legend/MS4Area_2_0.png" /> Peñuelas<br />\
    <img src="styles/legend/MS4Area_2_1.png" /> Santo Domingo<br />\
    <img src="styles/legend/MS4Area_2_2.png" /> Tallaboa<br />\
    <img src="styles/legend/MS4Area_2_3.png" /> Tallaboa Alta<br />'
        });
var format_Inlets_3 = new ol.format.GeoJSON();
var features_Inlets_3 = format_Inlets_3.readFeatures(json_Inlets_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inlets_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inlets_3.addFeatures(features_Inlets_3);
var lyr_Inlets_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Inlets_3, 
                style: style_Inlets_3,
                interactive: true,
                title: '<img src="styles/legend/Inlets_3.png" /> Inlets'
            });
var format_Outfalls_4 = new ol.format.GeoJSON();
var features_Outfalls_4 = format_Outfalls_4.readFeatures(json_Outfalls_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outfalls_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outfalls_4.addFeatures(features_Outfalls_4);
var lyr_Outfalls_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Outfalls_4, 
                style: style_Outfalls_4,
                interactive: true,
                title: '<img src="styles/legend/Outfalls_4.png" /> Outfalls'
            });
var format_PeuelasMunicipality_5 = new ol.format.GeoJSON();
var features_PeuelasMunicipality_5 = format_PeuelasMunicipality_5.readFeatures(json_PeuelasMunicipality_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PeuelasMunicipality_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PeuelasMunicipality_5.addFeatures(features_PeuelasMunicipality_5);
var lyr_PeuelasMunicipality_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PeuelasMunicipality_5, 
                style: style_PeuelasMunicipality_5,
                interactive: true,
                title: '<img src="styles/legend/PeuelasMunicipality_5.png" /> Peñuelas Municipality'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Hydrography_1.setVisible(true);lyr_MS4Area_2.setVisible(true);lyr_Inlets_3.setVisible(true);lyr_Outfalls_4.setVisible(true);lyr_PeuelasMunicipality_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Hydrography_1,lyr_MS4Area_2,lyr_Inlets_3,lyr_Outfalls_4,lyr_PeuelasMunicipality_5];
lyr_Hydrography_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Permanent_': 'Permanent_', 'FDate': 'FDate', 'Resolution': 'Resolution', 'GNIS_ID': 'GNIS_ID', 'GNIS_Name': 'GNIS_Name', 'LengthKM': 'LengthKM', 'ReachCode': 'ReachCode', 'FlowDir': 'FlowDir', 'WBArea_Per': 'WBArea_Per', 'FType': 'FType', 'FCode': 'FCode', 'MainPath': 'MainPath', 'InNetwork': 'InNetwork', 'Visibility': 'Visibility', 'Shape_Leng': 'Shape_Leng', 'longitud': 'longitud', });
lyr_MS4Area_2.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'TrackName': 'TrackName', 'Position': 'Position', 'Altitude': 'Altitude', 'LegLength': 'LegLength', 'LegCourse': 'LegCourse', });
lyr_Inlets_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_': 'FID_', 'Layer': 'Layer', 'Name': 'Name', });
lyr_Outfalls_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_': 'FID_', 'Layer': 'Layer', 'Name': 'Name', });
lyr_PeuelasMunicipality_5.set('fieldAliases', {'cuerdas': 'cuerdas', 'date_date': 'date_date', 'time_date': 'time_date', 'countyfp': 'countyfp', 'fid_1': 'fid_1', 'area': 'area', 'shape_area': 'shape_area', 'municipio': 'municipio', 'shape_leng': 'shape_leng', 'cntyidfp': 'cntyidfp', 'statefp': 'statefp', });
lyr_Hydrography_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Permanent_': 'TextEdit', 'FDate': 'DateTime', 'Resolution': 'TextEdit', 'GNIS_ID': 'TextEdit', 'GNIS_Name': 'TextEdit', 'LengthKM': 'TextEdit', 'ReachCode': 'TextEdit', 'FlowDir': 'TextEdit', 'WBArea_Per': 'TextEdit', 'FType': 'TextEdit', 'FCode': 'TextEdit', 'MainPath': 'TextEdit', 'InNetwork': 'TextEdit', 'Visibility': 'TextEdit', 'Shape_Leng': 'TextEdit', 'longitud': 'TextEdit', });
lyr_MS4Area_2.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'TrackName': 'TextEdit', 'Position': 'TextEdit', 'Altitude': 'TextEdit', 'LegLength': 'TextEdit', 'LegCourse': 'TextEdit', });
lyr_Inlets_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_': 'TextEdit', 'Layer': 'TextEdit', 'Name': 'TextEdit', });
lyr_Outfalls_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_': 'TextEdit', 'Layer': 'TextEdit', 'Name': 'TextEdit', });
lyr_PeuelasMunicipality_5.set('fieldImages', {'cuerdas': 'TextEdit', 'date_date': 'DateTime', 'time_date': 'TextEdit', 'countyfp': 'TextEdit', 'fid_1': 'TextEdit', 'area': 'TextEdit', 'shape_area': 'TextEdit', 'municipio': 'TextEdit', 'shape_leng': 'TextEdit', 'cntyidfp': 'TextEdit', 'statefp': 'TextEdit', });
lyr_Hydrography_1.set('fieldLabels', {'OBJECTID': 'no label', 'Permanent_': 'no label', 'FDate': 'no label', 'Resolution': 'no label', 'GNIS_ID': 'no label', 'GNIS_Name': 'no label', 'LengthKM': 'no label', 'ReachCode': 'no label', 'FlowDir': 'no label', 'WBArea_Per': 'no label', 'FType': 'no label', 'FCode': 'no label', 'MainPath': 'no label', 'InNetwork': 'no label', 'Visibility': 'no label', 'Shape_Leng': 'no label', 'longitud': 'no label', });
lyr_MS4Area_2.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'TrackName': 'no label', 'Position': 'no label', 'Altitude': 'no label', 'LegLength': 'no label', 'LegCourse': 'no label', });
lyr_Inlets_3.set('fieldLabels', {'OBJECTID': 'no label', 'FID_': 'no label', 'Layer': 'no label', 'Name': 'no label', });
lyr_Outfalls_4.set('fieldLabels', {'OBJECTID': 'no label', 'FID_': 'no label', 'Layer': 'no label', 'Name': 'no label', });
lyr_PeuelasMunicipality_5.set('fieldLabels', {'cuerdas': 'no label', 'date_date': 'no label', 'time_date': 'no label', 'countyfp': 'no label', 'fid_1': 'no label', 'area': 'no label', 'shape_area': 'no label', 'municipio': 'no label', 'shape_leng': 'no label', 'cntyidfp': 'no label', 'statefp': 'no label', });
lyr_PeuelasMunicipality_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});