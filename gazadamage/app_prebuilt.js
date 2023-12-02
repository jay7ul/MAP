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

                    var textStyleCache_damage_sites_deiralbalahgov_223121={}
                    var clusterStyleCache_damage_sites_deiralbalahgov_223121={}
                    var style_damage_sites_deiralbalahgov_223121 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(46,195,130,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_damage_sites_deiralbalahgov_223121 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_damage_sites_agriculture_northgazagov_223115={}
                    var clusterStyleCache_damage_sites_agriculture_northgazagov_223115={}
                    var style_damage_sites_agriculture_northgazagov_223115 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(71,185,160,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_damage_sites_agriculture_northgazagov_223115 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_damage_sites_gazagov_223115={}
                    var clusterStyleCache_damage_sites_gazagov_223115={}
                    var style_damage_sites_gazagov_223115 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(153,198,55,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_damage_sites_gazagov_223115 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_damage_sites_northgazagov_223115={}
                    var clusterStyleCache_damage_sites_northgazagov_223115={}
                    var style_damage_sites_northgazagov_223115 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(80,149,51,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_damage_sites_northgazagov_223115 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_damage_sites_gazagov_22311={}
                    var clusterStyleCache_damage_sites_gazagov_22311={}
                    var style_damage_sites_gazagov_22311 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(37,130,113,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_damage_sites_gazagov_22311 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
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
    title: 'ESRI world topo map',
    source: new ol.source.XYZ({
        attributions: [new ol.Attribution({ html:['Tiles &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>']})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
    type: 'base',
    title: 'ESRI DeLorme world map',
    source: new ol.source.XYZ({
        attributions: [new ol.Attribution({ html:['Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme']})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
    type: 'base',
    title: 'ESRI NatGeo world map',
    source: new ol.source.XYZ({
        attributions: [new ol.Attribution({ html:['Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC']})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
}),new ol.layer.Tile({
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
    title: 'OSM Mapnik',
    source: new ol.source.OSM(),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
    type: 'base',
    title: 'ESRI world shaded relief',
    source: new ol.source.XYZ({
        attributions: [new ol.Attribution({ html:['Tiles &copy; Esri &mdash; Source: Esri']})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
    type: 'base',
    title: 'CartoDB light',
    source: new ol.source.XYZ({
        url: 'http://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({ html: ['&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>']
        })]
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
];var baseLayersGroup = new ol.layer.Group({showContent: true,'type':
                    'base-group', 'title': 'Base maps', layers: baseLayers});var overviewMapBaseLayer = baseLayersGroup;
var overlayLayers = [new ol.layer.Tile({
	type: 'base-overlay',
	title: 'OpenWeatherMap temperature',
	source: new ol.source.XYZ({
		url: 'http://s.tile.openweathermap.org/map/temp/{z}/{x}/{y}.png',
		attributions: [new ol.Attribution({html:['Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>']})],
	}),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
	type: 'base-overlay',
	title: 'OpenWeatherMap pressure',
	source: new ol.source.XYZ({
		url: 'http://s.tile.openweathermap.org/map/pressure_cntr/{z}/{x}/{y}.png',
		attributions: [new ol.Attribution({html:['Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>']})],
	}),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
	type: 'base-overlay',
	title: 'OpenWeatherMap wind',
	source: new ol.source.XYZ({
		url: 'http://s.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png',
		attributions: [new ol.Attribution({html:['Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>']})],
	}),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
	type: 'base-overlay',
	title: 'OpenWeatherMap clouds',
	source: new ol.source.XYZ({
		url: 'http://s.tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png',
		attributions: [new ol.Attribution({html:['Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>']})],
	}),
    projection: 'EPSG:3857'
})
];var overlaysGroup = new ol.layer.Group({showContent: true, 'title': 'Overlays', layers: overlayLayers});
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
var lyr_damage_sites_deiralbalahgov_223121 = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_damage_sites_deiralbalahgov_223121,
                    selectedStyle: selectionStyle_damage_sites_deiralbalahgov_223121,
                    title: "Damage_Sites_DeirAlBalahGov_20231021",
                    id: "Damage_Sites_DeirAlBalahGov_2023102120231201211508170",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
damage_sites_deiralbalahgov_223121_geojson_callback = function(geojson) {
                              lyr_damage_sites_deiralbalahgov_223121.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_damage_sites_agriculture_northgazagov_223115 = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_damage_sites_agriculture_northgazagov_223115,
                    selectedStyle: selectionStyle_damage_sites_agriculture_northgazagov_223115,
                    title: "Damage_Sites_Agriculture_NorthGazaGov_20231015",
                    id: "Damage_Sites_Agriculture_NorthGazaGov_2023101520231201211508154",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
damage_sites_agriculture_northgazagov_223115_geojson_callback = function(geojson) {
                              lyr_damage_sites_agriculture_northgazagov_223115.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_damage_sites_gazagov_223115 = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_damage_sites_gazagov_223115,
                    selectedStyle: selectionStyle_damage_sites_gazagov_223115,
                    title: "Damage_Sites_GazaGov_20231015",
                    id: "Damage_Sites_GazaGov_2023101520231201211508138",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
damage_sites_gazagov_223115_geojson_callback = function(geojson) {
                              lyr_damage_sites_gazagov_223115.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_damage_sites_northgazagov_223115 = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_damage_sites_northgazagov_223115,
                    selectedStyle: selectionStyle_damage_sites_northgazagov_223115,
                    title: "Damage_Sites_NorthGazaGov_20231015",
                    id: "Damage_Sites_NorthGazaGov_2023101520231201211508122",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
damage_sites_northgazagov_223115_geojson_callback = function(geojson) {
                              lyr_damage_sites_northgazagov_223115.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_damage_sites_gazagov_22311 = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_damage_sites_gazagov_22311,
                    selectedStyle: selectionStyle_damage_sites_gazagov_22311,
                    title: "Damage_Sites_GazaGov_20231010",
                    id: "Damage_Sites_GazaGov_2023101020231201211508106",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
damage_sites_gazagov_22311_geojson_callback = function(geojson) {
                              lyr_damage_sites_gazagov_22311.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };

lyr_gazastrip_municipalboundaries.setVisible(true);
lyr_gazastrip_neighbourhoods_points.setVisible(true);
lyr_damage_sites_deiralbalahgov_223121.setVisible(false);
lyr_damage_sites_agriculture_northgazagov_223115.setVisible(false);
lyr_damage_sites_gazagov_223115.setVisible(false);
lyr_damage_sites_northgazagov_223115.setVisible(false);
lyr_damage_sites_gazagov_22311.setVisible(false);for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}baseLayers[1].setVisible(true);
var layersList = [lyr_gazastrip_municipalboundaries,lyr_gazastrip_neighbourhoods_points,lyr_damage_sites_deiralbalahgov_223121,lyr_damage_sites_agriculture_northgazagov_223115,lyr_damage_sites_gazagov_223115,lyr_damage_sites_northgazagov_223115,lyr_damage_sites_gazagov_22311];layersList.unshift(baseLayersGroup);layersList.push(overlaysGroup);
var printLayouts = [];
var legendData = {"GazaStrip_MunicipalBoundaries20231201212002336": [{"href": "0_0.png", "title": ""}], "Damage_Sites_DeirAlBalahGov_2023102120231201211508170": [{"href": "2_0.png", "title": ""}], "Damage_Sites_NorthGazaGov_2023101520231201211508122": [{"href": "5_0.png", "title": ""}], "Damage_Sites_GazaGov_2023101020231201211508106": [{"href": "6_0.png", "title": ""}], "GazaStrip_Neighbourhoods_points20231201211440904": [{"href": "1_0.png", "title": ""}], "Damage_Sites_Agriculture_NorthGazaGov_2023101520231201211508154": [{"href": "3_0.png", "title": ""}], "Damage_Sites_GazaGov_2023101520231201211508138": [{"href": "4_0.png", "title": ""}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [3788424.599177, 3638369.488431, 3895964.845551, 3724790.149327];

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
    map.addControl(new ol.control.OverviewMap({collapsed: true, layers: [overviewMapBaseLayer, lyr_gazastrip_municipalboundaries,lyr_gazastrip_neighbourhoods_points,lyr_damage_sites_deiralbalahgov_223121,lyr_damage_sites_agriculture_northgazagov_223115,lyr_damage_sites_gazagov_223115,lyr_damage_sites_northgazagov_223115,lyr_damage_sites_gazagov_22311]}));
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
{exclude: true, jsx: React.createElement("a", {className:"navbar-brand", href:"#"}, "ga za damage")}];
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


