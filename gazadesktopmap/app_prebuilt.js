var defaultFill = new ol.style.Fill({
   color: 'rgba(255,255,255,0.4)'
 });
 var defaultStroke = new ol.style.Stroke({
   color: '#3399CC',
   width: 1.25
 });
 var defaultSelectionFill = new ol.style.Fill({
   color: 'rgba(255,255,0,0.4)'
 });
 var defaultSelectionStroke = new ol.style.Stroke({
   color: '#FFFF00',
   width: 1.25
 });



                    var textStyleCache_gazastrip_municipalboundaries={}
                    var clusterStyleCache_gazastrip_municipalboundaries={}
                    var style_gazastrip_municipalboundaries = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(234,65,203,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_gazastrip_municipalboundaries = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_gis_osm_landuse_a_free_1 = {"allotments": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(120,217,96,1.0)"})
                        })
                        ],
"cemetery": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(89,78,209,1.0)"})
                        })
                        ],
"commercial": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(114,210,176,1.0)"})
                        })
                        ],
"farmland": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(218,72,101,1.0)"})
                        })
                        ],
"farmyard": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(128,217,44,1.0)"})
                        })
                        ],
"forest": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(46,187,230,1.0)"})
                        })
                        ],
"grass": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(210,72,139,1.0)"})
                        })
                        ],
"heath": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(121,169,219,1.0)"})
                        })
                        ],
"industrial": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(240,227,45,1.0)"})
                        })
                        ],
"meadow": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(184,224,38,1.0)"})
                        })
                        ],
"military": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(116,137,220,1.0)"})
                        })
                        ],
"nature_reserve": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(233,197,130,1.0)"})
                        })
                        ],
"orchard": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(137,228,222,1.0)"})
                        })
                        ],
"park": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(222,76,62,1.0)"})
                        })
                        ],
"quarry": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(204,117,184,1.0)"})
                        })
                        ],
"recreation_ground": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(211,63,218,1.0)"})
                        })
                        ],
"residential": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(214,147,107,1.0)"})
                        })
                        ],
"retail": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(12,218,88,1.0)"})
                        })
                        ],
"scrub": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(188,86,239,1.0)"})
                        })
                        ],
"vineyard": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(23,226,40,1.0)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(154,112,221,1.0)"})
                        })
                        ]};var categoriesSelected_gis_osm_landuse_a_free_1 = {"allotments": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"cemetery": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"commercial": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"farmland": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"farmyard": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"forest": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"grass": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"heath": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"industrial": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"meadow": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"military": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"nature_reserve": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"orchard": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"park": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"quarry": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"recreation_ground": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"residential": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"retail": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"scrub": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"vineyard": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]};
                    var textStyleCache_gis_osm_landuse_a_free_1={}
                    var clusterStyleCache_gis_osm_landuse_a_free_1={}
                    var style_gis_osm_landuse_a_free_1 = function(feature, resolution){
                        
                        var value = feature.get("fclass");
                        var style = categories_gis_osm_landuse_a_free_1[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_gis_osm_landuse_a_free_1 = function(feature, resolution){
                        
                        var value = feature.get("fclass");
                        var style = categoriesSelected_gis_osm_landuse_a_free_1[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_gis_osm_roads_free_1={}
                    var clusterStyleCache_gis_osm_roads_free_1={}
                    var style_gis_osm_roads_free_1 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(108,239,156,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_gis_osm_roads_free_1 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_gis_osm_places_free_1={}
                    var clusterStyleCache_gis_osm_places_free_1={}
                    var style_gis_osm_places_free_1 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(61,12,235,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_gis_osm_places_free_1 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_gis_osm_pois_free_1={}
                    var clusterStyleCache_gis_osm_pois_free_1={}
                    var style_gis_osm_pois_free_1 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(176,123,125,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_gis_osm_pois_free_1 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_damage_sites_gaza_strip_223117={}
                    var clusterStyleCache_damage_sites_gaza_strip_223117={}
                    var style_damage_sites_gaza_strip_223117 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(148,14,101,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_damage_sites_gaza_strip_223117 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_gazastrip_neighbourhoods_points={}
                    var clusterStyleCache_gazastrip_neighbourhoods_points={}
                    var style_gazastrip_neighbourhoods_points = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(158,98,144,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_gazastrip_neighbourhoods_points = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_gazastrip_fishingzone_219_polygon={}
                    var clusterStyleCache_gazastrip_fishingzone_219_polygon={}
                    var style_gazastrip_fishingzone_219_polygon = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(119,120,209,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_gazastrip_fishingzone_219_polygon = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
                        type: 'base',
                        title: 'No base layer'
                    }),new ol.layer.Tile({
    type: 'base',
    title: 'OSM Mapnik',
    source: new ol.source.OSM(),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
    type: 'base',
    title: 'ESRI world imagery',
    source: new ol.source.XYZ({
        attributions: [new ol.Attribution({ html:['Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community']})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
    type: 'base',
    title: 'ESRI world street map',
    source: new ol.source.XYZ({
        attributions: [new ol.Attribution({ html:['Tiles &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer">ArcGIS</a>']})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
    type: 'base',
    title: 'ESRI world topo map',
    source: new ol.source.XYZ({
        attributions: [new ol.Attribution({ html:['Tiles &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>']})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,'type':
                    'base-group', 'title': 'Base maps', layers: baseLayers});var overviewMapBaseLayer = baseLayersGroup;
var overlayLayers = [];var overlaysGroup = new ol.layer.Group({showContent: true, 'title': 'Overlays', layers: overlayLayers});
var lyr_gazastrip_municipalboundaries = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_gazastrip_municipalboundaries,
                    selectedStyle: selectionStyle_gazastrip_municipalboundaries,
                    title: "GazaStrip_MunicipalBoundaries",
                    id: "GazaStrip_MunicipalBoundaries20231201212002336",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
gazastrip_municipalboundaries_geojson_callback = function(geojson) {
                              lyr_gazastrip_municipalboundaries.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_gis_osm_landuse_a_free_1 = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_gis_osm_landuse_a_free_1,
                    selectedStyle: selectionStyle_gis_osm_landuse_a_free_1,
                    title: "gis_osm_landuse_a_free_1",
                    id: "gis_osm_landuse_a_free_120231201212428854",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
gis_osm_landuse_a_free_1_geojson_callback = function(geojson) {
                              lyr_gis_osm_landuse_a_free_1.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_gis_osm_roads_free_1 = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_gis_osm_roads_free_1,
                    selectedStyle: selectionStyle_gis_osm_roads_free_1,
                    title: "gis_osm_roads_free_1",
                    id: "gis_osm_roads_free_120231201212115054",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
gis_osm_roads_free_1_geojson_callback = function(geojson) {
                              lyr_gis_osm_roads_free_1.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_gis_osm_places_free_1 = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_gis_osm_places_free_1,
                    selectedStyle: selectionStyle_gis_osm_places_free_1,
                    title: "gis_osm_places_free_1",
                    id: "gis_osm_places_free_120231201212412587",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
gis_osm_places_free_1_geojson_callback = function(geojson) {
                              lyr_gis_osm_places_free_1.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_gis_osm_pois_free_1 = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_gis_osm_pois_free_1,
                    selectedStyle: selectionStyle_gis_osm_pois_free_1,
                    title: "gis_osm_pois_free_1",
                    id: "gis_osm_pois_free_120231201212354064",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
gis_osm_pois_free_1_geojson_callback = function(geojson) {
                              lyr_gis_osm_pois_free_1.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_damage_sites_gaza_strip_223117 = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_damage_sites_gaza_strip_223117,
                    selectedStyle: selectionStyle_damage_sites_gaza_strip_223117,
                    title: "Damage_Sites_Gaza_Strip_20231107",
                    id: "Damage_Sites_Gaza_Strip_2023110720231201211518625",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
damage_sites_gaza_strip_223117_geojson_callback = function(geojson) {
                              lyr_damage_sites_gaza_strip_223117.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_gazastrip_neighbourhoods_points = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_gazastrip_neighbourhoods_points,
                    selectedStyle: selectionStyle_gazastrip_neighbourhoods_points,
                    title: "GazaStrip_Neighbourhoods_points",
                    id: "GazaStrip_Neighbourhoods_points20231201211440904",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
gazastrip_neighbourhoods_points_geojson_callback = function(geojson) {
                              lyr_gazastrip_neighbourhoods_points.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_gazastrip_fishingzone_219_polygon = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_gazastrip_fishingzone_219_polygon,
                    selectedStyle: selectionStyle_gazastrip_fishingzone_219_polygon,
                    title: "GazaStrip_FishingZone_2019_polygon",
                    id: "GazaStrip_FishingZone_2019_polygon20231201211428840",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
gazastrip_fishingzone_219_polygon_geojson_callback = function(geojson) {
                              lyr_gazastrip_fishingzone_219_polygon.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };

lyr_gazastrip_municipalboundaries.setVisible(true);
lyr_gis_osm_landuse_a_free_1.setVisible(false);
lyr_gis_osm_roads_free_1.setVisible(false);
lyr_gis_osm_places_free_1.setVisible(false);
lyr_gis_osm_pois_free_1.setVisible(false);
lyr_damage_sites_gaza_strip_223117.setVisible(false);
lyr_gazastrip_neighbourhoods_points.setVisible(false);
lyr_gazastrip_fishingzone_219_polygon.setVisible(true);for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}baseLayers[1].setVisible(true);
var layersList = [lyr_gazastrip_municipalboundaries,lyr_gis_osm_landuse_a_free_1,lyr_gis_osm_roads_free_1,lyr_gis_osm_places_free_1,lyr_gis_osm_pois_free_1,lyr_damage_sites_gaza_strip_223117,lyr_gazastrip_neighbourhoods_points,lyr_gazastrip_fishingzone_219_polygon];layersList.unshift(baseLayersGroup);
var printLayouts = [];
var legendData = {"GazaStrip_FishingZone_2019_polygon20231201211428840": [{"href": "7_0.png", "title": ""}], "gis_osm_landuse_a_free_120231201212428854": [{"href": "1_0.png", "title": "allotments"}, {"href": "1_1.png", "title": "cemetery"}, {"href": "1_2.png", "title": "commercial"}, {"href": "1_3.png", "title": "farmland"}, {"href": "1_4.png", "title": "farmyard"}, {"href": "1_5.png", "title": "forest"}, {"href": "1_6.png", "title": "grass"}, {"href": "1_7.png", "title": "heath"}, {"href": "1_8.png", "title": "industrial"}, {"href": "1_9.png", "title": "meadow"}, {"href": "1_10.png", "title": "military"}, {"href": "1_11.png", "title": "nature_reserve"}, {"href": "1_12.png", "title": "orchard"}, {"href": "1_13.png", "title": "park"}, {"href": "1_14.png", "title": "quarry"}, {"href": "1_15.png", "title": "recreation_ground"}, {"href": "1_16.png", "title": "residential"}, {"href": "1_17.png", "title": "retail"}, {"href": "1_18.png", "title": "scrub"}, {"href": "1_19.png", "title": "vineyard"}, {"href": "1_20.png", "title": ""}], "GazaStrip_MunicipalBoundaries20231201212002336": [{"href": "0_0.png", "title": ""}], "GazaStrip_Neighbourhoods_points20231201211440904": [{"href": "6_0.png", "title": ""}], "gis_osm_pois_free_120231201212354064": [{"href": "4_0.png", "title": ""}], "Damage_Sites_Gaza_Strip_2023110720231201211518625": [{"href": "5_0.png", "title": ""}], "gis_osm_places_free_120231201212412587": [{"href": "3_0.png", "title": ""}], "gis_osm_roads_free_120231201212115054": [{"href": "2_0.png", "title": ""}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [3794308.390612, 3654997.646027, 3848078.513799, 3698190.290107];

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.MousePosition({"projection": "EPSG:4326", "undefinedHTML": "&nbsp;", "coordinateFormat": ol.coordinate.createStringXY(4)}),
new ol.control.Rotate({autoHide: false}),
new ol.control.Zoom({"zoomOutTipLabel": "Zoom out", "zoomInTipLabel": "Zoom in", "delta": 1.2, "duration": 250, "zoomInLabel": "+", "zoomOutLabel": "-"})]
});



var BasicApp = React.createClass({
  componentDidMount() {
    map.setTarget(ReactDOM.findDOMNode(this.refs.map));
    view = map.getView();
    view.fit(originalExtent, map.getSize());
    map.addControl(new ol.control.OverviewMap({collapsed: true, layers: [overviewMapBaseLayer, lyr_gazastrip_municipalboundaries,lyr_gis_osm_landuse_a_free_1,lyr_gis_osm_roads_free_1,lyr_gis_osm_places_free_1,lyr_gis_osm_pois_free_1,lyr_damage_sites_gaza_strip_223117,lyr_gazastrip_neighbourhoods_points,lyr_gazastrip_fishingzone_219_polygon]}));
  },
  _toggle(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  },
  _toggleTable() {
    this._toggle(document.getElementById('table-panel'));
    this.refs.table.getWrappedInstance().setDimensionsOnState();
  },
  _toggleWFST() {
    this._toggle(document.getElementById('wfst'));
  },
  _toggleQuery() {
    this._toggle(document.getElementById('query-panel'));
  },
  _toggleEdit() {
    this._toggle(document.getElementById('edit-tool-panel'));
  },
  _toggleAboutPanel() {
    this._toggle(document.getElementById('about-panel'));
  },
  _toggleChartPanel(evt) {
    evt.preventDefault();
    this._toggle(document.getElementById('chart-panel'));
  },
  _navigationFunc() {
    ToolActions.activateTool(null, 'navigation');
  },
  render() {
    var options = [{text: 'Table', icon: 'list-alt', onClick: this._toggleTable.bind(this)},
{jsx: React.createElement(ImageExport, {map:map})},
{jsx: React.createElement(QGISPrint, {map:map, layouts:printLayouts, thumbnailPath: './resources/print/',})},
{jsx: React.createElement(Measure, {toggleGroup:'navigation', map:map})},
{exclude: true, jsx: React.createElement("a", {className:"navbar-brand", href:"#"}, "gaza desktop map")}];
    return React.createElement("article", null,
      React.createElement(Toolbar, {options: options}
      ),
      React.createElement("div", {id: 'content'},
        React.createElement("div", {id: 'map', ref: 'map'}
          ,
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {map: map, hover: false})
                                  )
        )
        ,
 React.createElement("div", {id: 'table-panel', className: 'attributes-table'},
                                          React.createElement(FeatureTable, {offset: [20, 20], ref: 'table', resizeTo: 'table-panel', layer: lyr_gazastrip_municipalboundaries, pointZoom:16, map: map})
                                    ),
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:false, showDownload:false,
                                        showGroupContent:true, showZoomTo:false, allowReordering:false,
                                        allowFiltering:true, tipLabel:'layers', expandOnHover:true,
                                        downloadFormat:'GeoJSON', map:map})),
React.createElement("div", {id:'geolocation-control', className:'ol-unselectable ol-control'},
                                    React.createElement(Geolocation, {map:map})
                                  ),
React.createElement("div",{id: "legend"},
                                React.createElement(QGISLegend, {map:map, legendBasePath:'./resources/legend/',showExpandedOnStartup:false, expandOnHover:true, legendData:legendData})
                            )
      )
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(BasicApp)), document.getElementById('main'));


