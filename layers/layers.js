ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([105.809684, -6.698906, 106.288320, -6.523804]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KecamatanGunungkencana_2 = new ol.format.GeoJSON();
var features_KecamatanGunungkencana_2 = format_KecamatanGunungkencana_2.readFeatures(json_KecamatanGunungkencana_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KecamatanGunungkencana_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanGunungkencana_2.addFeatures(features_KecamatanGunungkencana_2);
var lyr_KecamatanGunungkencana_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanGunungkencana_2, 
                style: style_KecamatanGunungkencana_2,
                popuplayertitle: 'Kecamatan Gunungkencana',
                interactive: true,
    title: 'Kecamatan Gunungkencana<br />\
    <img src="styles/legend/KecamatanGunungkencana_2_0.png" /> Bojongkoneng<br />\
    <img src="styles/legend/KecamatanGunungkencana_2_1.png" /> Bulakan<br />\
    <img src="styles/legend/KecamatanGunungkencana_2_2.png" /> Ciakar<br />\
    <img src="styles/legend/KecamatanGunungkencana_2_3.png" /> Cicaringin<br />\
    <img src="styles/legend/KecamatanGunungkencana_2_4.png" /> Ciginggang<br />\
    <img src="styles/legend/KecamatanGunungkencana_2_5.png" /> Cimanyangray<br />\
    <img src="styles/legend/KecamatanGunungkencana_2_6.png" /> Cisampang<br />\
    <img src="styles/legend/KecamatanGunungkencana_2_7.png" /> Gunungkencana<br />\
    <img src="styles/legend/KecamatanGunungkencana_2_8.png" /> Gunungkendeng<br />\
    <img src="styles/legend/KecamatanGunungkencana_2_9.png" /> Kramatjaya<br />\
    <img src="styles/legend/KecamatanGunungkencana_2_10.png" /> Sukanegara<br />\
    <img src="styles/legend/KecamatanGunungkencana_2_11.png" /> Tanjungsari Indah<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_KecamatanGunungkencana_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleSatellite_1,lyr_KecamatanGunungkencana_2];
lyr_KecamatanGunungkencana_2.set('fieldAliases', {'fid': 'fid', 'WADMKD': 'Nama wilayah administrasi Kelurahan/Desa', 'Desa': 'Desa', });
lyr_KecamatanGunungkencana_2.set('fieldImages', {'fid': 'TextEdit', 'WADMKD': 'TextEdit', 'Desa': 'TextEdit', });
lyr_KecamatanGunungkencana_2.set('fieldLabels', {'fid': 'hidden field', 'WADMKD': 'hidden field', 'Desa': 'inline label - visible with data', });
lyr_KecamatanGunungkencana_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});