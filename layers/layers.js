var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PoblacinpordeptoINDEC_3 = new ol.format.GeoJSON();
var features_PoblacinpordeptoINDEC_3 = format_PoblacinpordeptoINDEC_3.readFeatures(json_PoblacinpordeptoINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordeptoINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordeptoINDEC_3.addFeatures(features_PoblacinpordeptoINDEC_3);
var lyr_PoblacinpordeptoINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordeptoINDEC_3, 
                style: style_PoblacinpordeptoINDEC_3,
                interactive: true,
    title: 'Población por depto (INDEC)<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_0.png" /> 1.425 - 4.475<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_1.png" /> 4.476 - 18.130<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_2.png" /> 18.131 - 27.850<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_3.png" /> 27.851 o más<br />'
        });
var format_ViviendasenreasruralesINDEC_4 = new ol.format.GeoJSON();
var features_ViviendasenreasruralesINDEC_4 = format_ViviendasenreasruralesINDEC_4.readFeatures(json_ViviendasenreasruralesINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasruralesINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasruralesINDEC_4.addFeatures(features_ViviendasenreasruralesINDEC_4);
var lyr_ViviendasenreasruralesINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasruralesINDEC_4, 
                style: style_ViviendasenreasruralesINDEC_4,
                interactive: true,
    title: 'Viviendas en áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_0.png" /> 225 - 1.000<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_1.png" /> 1.001 - 2.000<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_2.png" /> 2.001 - 2.500<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_3.png" /> 2.501 - 3.625<br />'
        });
var format_PEAINDEC_5 = new ol.format.GeoJSON();
var features_PEAINDEC_5 = format_PEAINDEC_5.readFeatures(json_PEAINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_5.addFeatures(features_PEAINDEC_5);
var lyr_PEAINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_5, 
                style: style_PEAINDEC_5,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_5_0.png" /> 850 - 2.800<br />\
    <img src="styles/legend/PEAINDEC_5_1.png" /> 2.801 - 11.000<br />\
    <img src="styles/legend/PEAINDEC_5_2.png" /> 11.001 - 17.350<br />\
    <img src="styles/legend/PEAINDEC_5_3.png" /> 17.351 o más<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 1 - 650<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 651 - 1.950<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_3.png" /> 1.951 - 3.720<br />'
        });
var format_CabezasovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasovinosMAGyP_7 = format_CabezasovinosMAGyP_7.readFeatures(json_CabezasovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasovinosMAGyP_7.addFeatures(features_CabezasovinosMAGyP_7);
var lyr_CabezasovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasovinosMAGyP_7, 
                style: style_CabezasovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_0.png" /> 1 - 1.000<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_1.png" /> 1.001 - 2.750<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_2.png" /> 2.751 - 4.950<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_3.png" /> 4.951 - 10.500<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 1 - 2.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 2.501 - 10.250<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_3.png" /> 10.251 - 19.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_4.png" /> 19.501 - 38.750<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 1 - 2.500<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 2.501 - 12.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 12.001 - 28.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_4.png" /> 28.001 - 67.750<br />'
        });
var format_HectreasdectricosINDEC_10 = new ol.format.GeoJSON();
var features_HectreasdectricosINDEC_10 = format_HectreasdectricosINDEC_10.readFeatures(json_HectreasdectricosINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdectricosINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdectricosINDEC_10.addFeatures(features_HectreasdectricosINDEC_10);
var lyr_HectreasdectricosINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdectricosINDEC_10, 
                style: style_HectreasdectricosINDEC_10,
                interactive: true,
    title: 'Hectáreas de cítricos (INDEC)<br />\
    <img src="styles/legend/HectreasdectricosINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdectricosINDEC_10_1.png" /> 1 - 45<br />\
    <img src="styles/legend/HectreasdectricosINDEC_10_2.png" /> 46 - 450<br />\
    <img src="styles/legend/HectreasdectricosINDEC_10_3.png" /> 451 o más<br />'
        });
var format_HectreasdenogalesINDEC_11 = new ol.format.GeoJSON();
var features_HectreasdenogalesINDEC_11 = format_HectreasdenogalesINDEC_11.readFeatures(json_HectreasdenogalesINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdenogalesINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdenogalesINDEC_11.addFeatures(features_HectreasdenogalesINDEC_11);
var lyr_HectreasdenogalesINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdenogalesINDEC_11, 
                style: style_HectreasdenogalesINDEC_11,
                interactive: true,
    title: 'Hectáreas de nogales (INDEC)<br />\
    <img src="styles/legend/HectreasdenogalesINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdenogalesINDEC_11_1.png" /> 1 - 12<br />\
    <img src="styles/legend/HectreasdenogalesINDEC_11_2.png" /> 13 - 210<br />\
    <img src="styles/legend/HectreasdenogalesINDEC_11_3.png" /> 211 - 665<br />\
    <img src="styles/legend/HectreasdenogalesINDEC_11_4.png" /> 666 - 1.400<br />'
        });
var format_HectreasdevidINDEC_12 = new ol.format.GeoJSON();
var features_HectreasdevidINDEC_12 = format_HectreasdevidINDEC_12.readFeatures(json_HectreasdevidINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdevidINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdevidINDEC_12.addFeatures(features_HectreasdevidINDEC_12);
var lyr_HectreasdevidINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdevidINDEC_12, 
                style: style_HectreasdevidINDEC_12,
                interactive: true,
    title: 'Hectáreas de vid (INDEC)<br />\
    <img src="styles/legend/HectreasdevidINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdevidINDEC_12_1.png" /> 1 - 85<br />\
    <img src="styles/legend/HectreasdevidINDEC_12_2.png" /> 86 - 750<br />\
    <img src="styles/legend/HectreasdevidINDEC_12_3.png" /> 751 - 2.580<br />'
        });
var format_HectreasdehortalizasINDEC_13 = new ol.format.GeoJSON();
var features_HectreasdehortalizasINDEC_13 = format_HectreasdehortalizasINDEC_13.readFeatures(json_HectreasdehortalizasINDEC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdehortalizasINDEC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdehortalizasINDEC_13.addFeatures(features_HectreasdehortalizasINDEC_13);
var lyr_HectreasdehortalizasINDEC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdehortalizasINDEC_13, 
                style: style_HectreasdehortalizasINDEC_13,
                interactive: true,
    title: 'Hectáreas de hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_13_1.png" /> 1 - 86<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_13_2.png" /> 87 - 265<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_13_3.png" /> 266 - 410<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_13_4.png" /> 410 o más<br />'
        });
var format_HectreasdeolivosINDEC_14 = new ol.format.GeoJSON();
var features_HectreasdeolivosINDEC_14 = format_HectreasdeolivosINDEC_14.readFeatures(json_HectreasdeolivosINDEC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdeolivosINDEC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdeolivosINDEC_14.addFeatures(features_HectreasdeolivosINDEC_14);
var lyr_HectreasdeolivosINDEC_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdeolivosINDEC_14, 
                style: style_HectreasdeolivosINDEC_14,
                interactive: true,
    title: 'Hectáreas de olivos (INDEC)<br />\
    <img src="styles/legend/HectreasdeolivosINDEC_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdeolivosINDEC_14_1.png" /> 1 - 325<br />\
    <img src="styles/legend/HectreasdeolivosINDEC_14_2.png" /> 326 - 3.750<br />\
    <img src="styles/legend/HectreasdeolivosINDEC_14_3.png" /> 3.751 - 7.500<br />'
        });
var format_HectreasdetunaINDEC_15 = new ol.format.GeoJSON();
var features_HectreasdetunaINDEC_15 = format_HectreasdetunaINDEC_15.readFeatures(json_HectreasdetunaINDEC_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdetunaINDEC_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdetunaINDEC_15.addFeatures(features_HectreasdetunaINDEC_15);
var lyr_HectreasdetunaINDEC_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdetunaINDEC_15, 
                style: style_HectreasdetunaINDEC_15,
                interactive: true,
    title: 'Hectáreas de tuna (INDEC)<br />\
    <img src="styles/legend/HectreasdetunaINDEC_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdetunaINDEC_15_1.png" /> 0,5 - 10<br />\
    <img src="styles/legend/HectreasdetunaINDEC_15_2.png" /> 11 - 45<br />\
    <img src="styles/legend/HectreasdetunaINDEC_15_3.png" /> 46 - 80<br />'
        });
var format_Localidades_16 = new ol.format.GeoJSON();
var features_Localidades_16 = format_Localidades_16.readFeatures(json_Localidades_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_16.addFeatures(features_Localidades_16);
var lyr_Localidades_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_16, 
                style: style_Localidades_16,
                interactive: true,
                title: '<img src="styles/legend/Localidades_16.png" /> Localidades'
            });
var format_BERCatamarca_17 = new ol.format.GeoJSON();
var features_BERCatamarca_17 = format_BERCatamarca_17.readFeatures(json_BERCatamarca_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERCatamarca_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERCatamarca_17.addFeatures(features_BERCatamarca_17);
var lyr_BERCatamarca_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERCatamarca_17, 
                style: style_BERCatamarca_17,
                interactive: true,
                title: '<img src="styles/legend/BERCatamarca_17.png" /> BER Catamarca'
            });
var format_BERCatamarca_18 = new ol.format.GeoJSON();
var features_BERCatamarca_18 = format_BERCatamarca_18.readFeatures(json_BERCatamarca_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERCatamarca_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERCatamarca_18.addFeatures(features_BERCatamarca_18);
var lyr_BERCatamarca_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERCatamarca_18, 
                style: style_BERCatamarca_18,
                interactive: true,
                title: '<img src="styles/legend/BERCatamarca_18.png" /> BER Catamarca'
            });
var format_DelegacinCatamarca_19 = new ol.format.GeoJSON();
var features_DelegacinCatamarca_19 = format_DelegacinCatamarca_19.readFeatures(json_DelegacinCatamarca_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinCatamarca_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinCatamarca_19.addFeatures(features_DelegacinCatamarca_19);
var lyr_DelegacinCatamarca_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinCatamarca_19, 
                style: style_DelegacinCatamarca_19,
                interactive: true,
                title: '<img src="styles/legend/DelegacinCatamarca_19.png" /> Delegación Catamarca'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PoblacinpordeptoINDEC_3.setVisible(true);lyr_ViviendasenreasruralesINDEC_4.setVisible(true);lyr_PEAINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasovinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreasdectricosINDEC_10.setVisible(true);lyr_HectreasdenogalesINDEC_11.setVisible(true);lyr_HectreasdevidINDEC_12.setVisible(true);lyr_HectreasdehortalizasINDEC_13.setVisible(true);lyr_HectreasdeolivosINDEC_14.setVisible(true);lyr_HectreasdetunaINDEC_15.setVisible(true);lyr_Localidades_16.setVisible(true);lyr_BERCatamarca_17.setVisible(true);lyr_BERCatamarca_18.setVisible(true);lyr_DelegacinCatamarca_19.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PoblacinpordeptoINDEC_3,lyr_ViviendasenreasruralesINDEC_4,lyr_PEAINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasovinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreasdectricosINDEC_10,lyr_HectreasdenogalesINDEC_11,lyr_HectreasdevidINDEC_12,lyr_HectreasdehortalizasINDEC_13,lyr_HectreasdeolivosINDEC_14,lyr_HectreasdetunaINDEC_15,lyr_Localidades_16,lyr_BERCatamarca_17,lyr_BERCatamarca_18,lyr_DelegacinCatamarca_19];
lyr_Departamentos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PoblacinpordeptoINDEC_3.set('fieldAliases', {'poblacion': 'poblacion', });
lyr_ViviendasenreasruralesINDEC_4.set('fieldAliases', {'viv. rur': 'viv. rur', });
lyr_PEAINDEC_5.set('fieldAliases', {'pea': 'pea', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'porcinos': 'porcinos', });
lyr_CabezasovinosMAGyP_7.set('fieldAliases', {'ovinos': 'ovinos', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'caprinos': 'caprinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'bovinos': 'bovinos', });
lyr_HectreasdectricosINDEC_10.set('fieldAliases', {'citricos': 'citricos', });
lyr_HectreasdenogalesINDEC_11.set('fieldAliases', {'nogales': 'nogales', });
lyr_HectreasdevidINDEC_12.set('fieldAliases', {'vid': 'vid', });
lyr_HectreasdehortalizasINDEC_13.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasdeolivosINDEC_14.set('fieldAliases', {'olivos': 'olivos', });
lyr_HectreasdetunaINDEC_15.set('fieldAliases', {'Tuna': 'Tuna', });
lyr_Localidades_16.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_BERCatamarca_17.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_BERCatamarca_18.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_DelegacinCatamarca_19.set('fieldAliases', {'localidad': 'localidad', 'direccion': 'direccion', 'Prest 2016': 'Prest 2016', 'Prest 2017': 'Prest 2017', 'Prest 2018': 'Prest 2018', 'Prest 2019': 'Prest 2019', 'Prest 2020': 'Prest 2020', });
lyr_Departamentos_2.set('fieldImages', {'Depto': 'TextEdit', });
lyr_PoblacinpordeptoINDEC_3.set('fieldImages', {'poblacion': 'TextEdit', });
lyr_ViviendasenreasruralesINDEC_4.set('fieldImages', {'viv. rur': 'TextEdit', });
lyr_PEAINDEC_5.set('fieldImages', {'pea': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'porcinos': 'TextEdit', });
lyr_CabezasovinosMAGyP_7.set('fieldImages', {'ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'bovinos': 'TextEdit', });
lyr_HectreasdectricosINDEC_10.set('fieldImages', {'citricos': 'TextEdit', });
lyr_HectreasdenogalesINDEC_11.set('fieldImages', {'nogales': 'TextEdit', });
lyr_HectreasdevidINDEC_12.set('fieldImages', {'vid': 'TextEdit', });
lyr_HectreasdehortalizasINDEC_13.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasdeolivosINDEC_14.set('fieldImages', {'olivos': 'TextEdit', });
lyr_HectreasdetunaINDEC_15.set('fieldImages', {'Tuna': 'TextEdit', });
lyr_Localidades_16.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_BERCatamarca_17.set('fieldImages', {'Localidad': '', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_BERCatamarca_18.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_DelegacinCatamarca_19.set('fieldImages', {'localidad': 'TextEdit', 'direccion': '', 'Prest 2016': '', 'Prest 2017': '', 'Prest 2018': '', 'Prest 2019': '', 'Prest 2020': '', });
lyr_Departamentos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PoblacinpordeptoINDEC_3.set('fieldLabels', {'poblacion': 'inline label', });
lyr_ViviendasenreasruralesINDEC_4.set('fieldLabels', {'viv. rur': 'inline label', });
lyr_PEAINDEC_5.set('fieldLabels', {'pea': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'porcinos': 'inline label', });
lyr_CabezasovinosMAGyP_7.set('fieldLabels', {'ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'bovinos': 'inline label', });
lyr_HectreasdectricosINDEC_10.set('fieldLabels', {'citricos': 'inline label', });
lyr_HectreasdenogalesINDEC_11.set('fieldLabels', {'nogales': 'inline label', });
lyr_HectreasdevidINDEC_12.set('fieldLabels', {'vid': 'inline label', });
lyr_HectreasdehortalizasINDEC_13.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasdeolivosINDEC_14.set('fieldLabels', {'olivos': 'inline label', });
lyr_HectreasdetunaINDEC_15.set('fieldLabels', {'Tuna': 'inline label', });
lyr_Localidades_16.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_BERCatamarca_17.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_BERCatamarca_18.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_DelegacinCatamarca_19.set('fieldLabels', {'localidad': 'inline label', 'direccion': 'inline label', 'Prest 2016': 'inline label', 'Prest 2017': 'inline label', 'Prest 2018': 'inline label', 'Prest 2019': 'inline label', 'Prest 2020': 'inline label', });
lyr_DelegacinCatamarca_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});