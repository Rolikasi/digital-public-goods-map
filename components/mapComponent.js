import React, {useState, useRef} from "react";
import ReactMapboxGl, {ZoomControl, MapContext, Popup} from "react-mapbox-gl";
import mapboxgl from "mapbox-gl";
import implementedpattern from "../public/implemented.svg";
import pathpattern from "../public/pathfinders.svg";
import hardwarePattern from "../public/hardware.svg";
import {Scrollama, Step} from "react-scrollama";
import {InView} from "react-intersection-observer";
import SearchBox from "./searchBox";
import InfoComponent from "./infoComponent";
import UseWindowDimensions from "./UseWindowDimensions";
import dpgaLogo from "../public/logo.svg";

const legends = ["where it was developed", "where it was deployed"];
const colors = ["#FF952A", "#d4d4ec"];
const zoomDefault = 2;

const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  maxZoom: 9,
  minZoom: 0,
  logoPosition: "bottom-right",
  pitchWithRotate: false,
});

export default function mapComponent(props) {
  const ref = useRef();
  const mainRef = useRef();
  const searchRef = useRef();
  const {width, height} = UseWindowDimensions();
  const [zoom, setZoom] = useState(zoomDefault);
  const [lonLat, setLonLat] = useState([props.lon, props.lat]);
  const [selectedGood, setSelectedGood] = useState({});
  const [prevGood, setPrevGood] = useState({});
  const [visibleLayer, setVisibleLayer] = useState({
    "Pathfinders Exploratory": false,
    "Pathfinders Confirmed": false,
    "DPGs deployed": false,
    "DPGs developed": false,
  });
  const [mapInteractive, setMapInteractive] = useState(false);

  // scrollama states
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState({visible: false});
  // const [popupCoords, setPopupCoords] = useState([])

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({data}) => {
    setCurrentStepIndex(data);
    // Check and set selectedGood from gsheet
    if (props.story[data].showDPG) {
      console.log("found dpg in sheet: ", props.story[data].showDPG);
      setSelectedGood((prevState) => {
        setPrevGood(prevState);
        return props.digitalGoods.filter(
          (el) =>
            el.name.toLowerCase().indexOf(props.story[data].showDPG.toLowerCase()) !== -1
        )[0]; // filter and grab 1st result
      });
    } else {
      // clear state if there is no dpg in gsheet
      setSelectedGood((prevState) => {
        setPrevGood(prevState);
        return {};
      });
    }
    // Check and set visible layer from gsheet
    if (props.story[data].showFilter) {
      let newVisibleLayer = {};
      Object.keys(visibleLayer).forEach(
        (v) => (newVisibleLayer[v] = props.story[data].showFilter.includes(v))
      );
      setVisibleLayer(newVisibleLayer);
    } else {
      setVisibleLayer({
        "Pathfinders Exploratory": false,
        "Pathfinders Confirmed": false,
        "DPGs deployed": false,
        "DPGs developed": false,
      });
    }
  };
  const handleSelectPopup = (event, goodName) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedGood((prevState) => {
      setPrevGood(prevState);
      return props.digitalGoods.filter(
        (el) => el.name.toLowerCase().indexOf(goodName.toLowerCase()) !== -1
      )[0]; // filter and grab 1st result
    });
    searchRef.current.changeInput(goodName);
  };

  const handleChangeSearchbox = (good) => {
    setSelectedGood((prevState) => {
      setPrevGood(prevState);
      return good;
    });
    ref.current.clearStatesFromParent();
  };
  const handleLayerToggle = (layer) => {
    setVisibleLayer((prevState) => ({...prevState, [layer]: !prevState[layer]}));
  };
  const handleClearSearchbox = () => {
    setSelectedGood((prevState) => {
      setPrevGood(prevState);
      return {};
    });
    ref.current.clearStatesFromParent();
  };
  const handleScrollToBottom = () => {
    width < 1008
      ? ref.current.scrollFromParent()
      : mainRef.current.scrollIntoView(false, {
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
  };

  return (
    <div ref={mainRef}>
      <div className={loading ? "whiteBack" : "inactive"}>
        <img className={"loader"} src={dpgaLogo}></img>
      </div>
      <div className="map">
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
          }}
        >
          {mapInteractive && width < 1008 && (
            <SearchBox
              ref={searchRef}
              goods={props.digitalGoods}
              selectedGood={selectedGood.name}
              onChange={handleChangeSearchbox}
              clearSelectedGood={handleClearSearchbox}
            />
          )}
          {console.log("check story", props.story)}
          {props.story.length && props.story[currentStepIndex].image != "false" && (
            <img className="stepImage" src={props.story[currentStepIndex].imageUrl} />
          )}
          <Map
            style="mapbox://styles/rolikasi/ckn67a95j022m17mcqog82g05"
            center={
              mapInteractive
                ? lonLat
                : [
                    parseFloat(props.story[currentStepIndex].longitude),
                    parseFloat(props.story[currentStepIndex].latitude),
                  ]
            }
            zoom={
              mapInteractive ? [zoom] : [parseFloat(props.story[currentStepIndex].zoom)]
            }
            pitch={
              visibleLayer["DPGs developed"] || visibleLayer["DPGs deployed"] ? 60 : 0
            } // pitch in degrees
            containerStyle={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              right: 0,
            }}
            className={mapInteractive ? "enabled" : "disabled"}
            movingMethod="flyTo"
            onMoveEnd={(map) => {
              if (mapInteractive) {
                setLonLat([map.getCenter().lng, map.getCenter().lat]);
                console.log(map.getCenter().lng, map.getCenter().lat);
              }
            }}
            onZoomEnd={(map) => {
              if (mapInteractive) {
                setZoom(map.getZoom());
                console.log("zoom", map.getZoom());
              }
            }}
            onStyleLoad={(map) => {
              console.log("story", props.story);
              var layers = map.getStyle().layers;
              // Find the index of the first symbol layer in the map style
              var firstSymbolId;
              for (let i = 0; i < layers.length; i++) {
                if (layers[i].type === "symbol") {
                  firstSymbolId = layers[i].id;
                  break;
                }
              }
              console.log("firstSymbolId", firstSymbolId);
              console.log("devpolygons", props.devPolygons);
              let hardwareImg = new Image(20, 20);
              hardwareImg.onload = () => map.addImage("hardware-pattern", hardwareImg);
              hardwareImg.src = hardwarePattern;
              //add layer for each good with map
              props.digitalGoods.map((good) => {
                // check if layer is already created
                if (map.getLayer(good.name + "-develop")) {
                  console.log(good.name + " is layer already created");
                  return;
                } else {
                  map.addLayer(
                    {
                      id: good.name + "-develop",
                      source: {
                        type: "vector",
                        url: "mapbox://rolikasi.2kn4jvyh",
                      },
                      "source-layer": "ne_10m_admin_0_countries-dxlasx",
                      type: "fill",
                      paint: {
                        // 'fill-color': '#db3d44', // this is the color you want your tileset to have (red)
                        "fill-pattern": "hardware-pattern", //this helps us distinguish individual countries a bit better by giving them an outline
                      },
                    },
                    firstSymbolId
                  );
                  map.setLayoutProperty(good.name + "-develop", "visibility", "none");

                  map.setFilter(
                    good.name + "-develop",
                    ["in", "ADM0_A3_IS"].concat(
                      Object.keys(good.locations.developmentCountries)
                    )
                  ); // This line lets us filter by country codes.

                  map.addLayer(
                    {
                      id: good.name + "-deploy",
                      source: {
                        type: "vector",
                        url: "mapbox://rolikasi.2kn4jvyh",
                      },
                      "source-layer": "ne_10m_admin_0_countries-dxlasx",
                      type: "fill",
                      paint: {
                        // 'fill-color': '#db3d44', // this is the color you want your tileset to have (red)
                        "fill-color": "#3333AB", //this helps us distinguish individual countries a bit better by giving them an outline
                        "fill-opacity": 0.2,
                      },
                    },
                    firstSymbolId
                  );
                  map.setLayoutProperty(good.name + "-deploy", "visibility", "none");

                  map.setFilter(
                    good.name + "-deploy",
                    ["in", "ADM0_A3_IS"].concat(
                      Object.keys(good.locations.deploymentCountries)
                    )
                  ); // This line lets us filter by country codes.
                }
              });

              // Declare the image
              if (map.getLayer("Pathfinders Exploratory")) {
                console.log("Pathfinders Exploratory is layer already created");
                return;
              } else {
                let pathimg = new Image(20, 20);
                pathimg.onload = () => map.addImage("pathfinders-pattern", pathimg);
                pathimg.src = pathpattern;

                // Use it
                map.addLayer(
                  {
                    // adding a layer containing the tileset with country boundaries
                    id: "Pathfinders Exploratory", //this is the name of our layer, which we will need later
                    source: {
                      type: "vector",
                      url: "mapbox://rolikasi.2kn4jvyh",
                    },
                    "source-layer": "ne_10m_admin_0_countries-dxlasx",
                    type: "fill",
                    paint: {
                      "fill-pattern": "pathfinders-pattern",
                      "fill-opacity": 0.5,
                    },
                    layout: {
                      visibility: "none",
                    },
                  },
                  firstSymbolId
                );

                map.setFilter(
                  "Pathfinders Exploratory",
                  ["in", "ADM0_A3_IS"].concat(Object.keys(props.pathfinderExploratory))
                ); // This line lets us filter by country codes.
              }

              if (map.getLayer("Pathfinders Confirmed")) {
                console.log("Pathfinders Confirmed layer is already created");
                return;
              } else {
                // Declare the image
                let implementedimg = new Image(20, 20);
                implementedimg.onload = () =>
                  map.addImage("implemented-pattern", implementedimg);
                implementedimg.src = implementedpattern;

                // Use it
                map.addLayer(
                  {
                    // adding a layer containing the tileset with country boundaries
                    id: "Pathfinders Confirmed", //this is the name of our layer, which we will need later
                    source: {
                      type: "vector",
                      url: "mapbox://rolikasi.2kn4jvyh",
                    },
                    "source-layer": "ne_10m_admin_0_countries-dxlasx",
                    type: "fill",
                    paint: {
                      "fill-pattern": "implemented-pattern",
                      "fill-opacity": 0.5,
                    },
                    layout: {
                      visibility: "none",
                    },
                  },
                  firstSymbolId
                );

                map.setFilter(
                  "Pathfinders Confirmed",
                  ["in", "ADM0_A3_IS"].concat(Object.keys(props.pathfinderConfirmed))
                ); // This line lets us filter by country codes.
              }
              console.log('map.getLayer("countries")', map.getLayer("countries"));
              if (map.getLayer("countries")) {
                console.log("countries layer is already created");
                return;
              } else {
                map.addLayer(
                  {
                    // adding a layer containing the tileset with country boundaries
                    id: "countries", //this is the name of our layer, which we will need later
                    source: {
                      type: "vector",
                      url: "mapbox://rolikasi.2kn4jvyh",
                    },
                    "source-layer": "ne_10m_admin_0_countries-dxlasx",
                    type: "fill",
                    paint: {
                      "fill-color": "white", //this helps us distinguish individual countries a bit better by giving them an outline
                      "fill-opacity": 0,
                    },
                  },
                  firstSymbolId
                );

                map.setFilter(
                  "countries",
                  ["in", "ADM0_A3_IS"].concat(Object.keys(props.countries))
                ); // This line lets us filter by country codes.

                // Add 3d layer with extrudes
                map.addSource("DPGs developed-polygons-source", {
                  type: "geojson",
                  data: props.devPolygons,
                });
                map.addSource("DPGs deployed-polygons-source", {
                  type: "geojson",
                  data: props.depPolygons,
                });

                map.addLayer({
                  id: "DPGs developed",
                  source: "DPGs developed-polygons-source",
                  type: "fill-extrusion",
                  paint: {
                    "fill-extrusion-color": "#FF952A",
                    "fill-extrusion-height": ["get", "height"],
                    "fill-extrusion-base": ["get", "base"],
                  },
                  layout: {
                    visibility: "none",
                  },
                });

                map.addLayer({
                  id: "DPGs deployed",
                  source: "DPGs deployed-polygons-source",
                  type: "fill-extrusion",
                  paint: {
                    "fill-extrusion-color": "#3333AB",
                    "fill-extrusion-height": ["get", "height"],
                    "fill-extrusion-base": ["get", "base"],
                  },
                  layout: {
                    visibility: "none",
                  },
                });
                ["DPGs deployed", "DPGs developed"].map((layer, i) =>
                  map.addLayer({
                    id: `${layer}-text`,
                    source: `${layer}-polygons-source`,
                    type: "symbol",
                    paint: {
                      "text-color": ["#3333AB", "#FF952A"][i],
                      "text-halo-color": "#fff",
                      "text-halo-width": 1,
                    },
                    layout: {
                      "text-field": ["get", "text-field"],
                      "text-size": ["interpolate", ["linear"], ["zoom"], 4.5, 0, 5, 16],
                      "text-offset": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        4.5,
                        ["literal", [0, 0.5]],
                        9,
                        ["literal", [0, 3]],
                      ],
                      visibility: "none",
                    },
                  })
                );
                console.log("all layers:", map.getStyle());
                console.log("style loaded!");
                setLoading(false);
                // close popup if click anywhere on map 
                map.on("click", () => {
                  setPopup((prevstate) => {
                    return {...prevstate, visible: false};
                  });
                });
                // open popup when clicked on country with any data
                map.on("click", "countries", function (mapElement) {
                  const countryCode = mapElement.features[0].properties.ADM0_A3_IS; // Grab the country code from the map properties.

                  let deployments = props.digitalGoods.filter((good) =>
                    Object.keys(good.locations.deploymentCountries).includes(countryCode)
                  );
                  let developments = props.digitalGoods.filter((good) =>
                    Object.keys(good.locations.developmentCountries).includes(countryCode)
                  );
                  let countryName =
                    deployments[0].locations.deploymentCountries[countryCode] ||
                    developments[0].locations.developmentCountries[countryCode] ||
                    props.countries[countryCode].pathfinder.Country;
                  setPopup({
                    visible: true,
                    coords: [mapElement.lngLat.lng, mapElement.lngLat.lat],
                    deployments: deployments,
                    developments: developments,
                    pathfinder: props.countries[countryCode].pathfinder,
                    country: countryName,
                  });
                });
              }
            }}
          >
            <ZoomControl position="bottom-right" />
            {popup.visible && (
              <Popup coordinates={popup.coords} className="popup">
                <span
                  className="closePopup"
                  onClick={() =>
                    setPopup((prevstate) => {
                      return {...prevstate, visible: false};
                    })
                  }
                >
                  x
                </span>
                <h3>{popup.country}</h3>
                {popup.pathfinder && (
                  <div>
                    <span>✅&nbsp;&nbsp;DPG Pathfinder Country</span>
                    <ul>
                      <li>
                        <b>Status: </b>
                        {popup.pathfinder.Status}
                      </li>
                      {popup.pathfinder.Sector && (
                        <li>
                          <b>Sector: </b>
                          {popup.pathfinder.Sector}
                        </li>
                      )}

                      {popup.pathfinder.Comments && (
                        <li>
                          <b>Comments: </b>
                          {popup.pathfinder.Comments}
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                {popup.deployments.length > 0 && (
                  <div className="header">
                    <b>Goods deployed:</b>{" "}
                    {popup.deployments.map((good, i) => (
                      <a
                        key={good.name + i + "popupdep"}
                        onClick={(e) => handleSelectPopup(e, good.name)}
                      >
                        {good.name}
                      </a>
                    ))}
                  </div>
                )}
                {popup.developments.length > 0 && (
                  <div className="header">
                    <b>Goods developed:</b>

                    {popup.developments.map((good, i) => (
                      <a
                        key={good.name + i + "popupdev"}
                        onClick={(e) => handleSelectPopup(e, good.name)}
                      >
                        {good.name}
                      </a>
                    ))}
                  </div>
                )}
              </Popup>
            )}
            <MapContext.Consumer>
              {(map) => {
                console.log("check visible layer", visibleLayer);
                Object.keys(visibleLayer).map((layer) => {
                  console.log("toggle ", layer, " visibility");
                  map.getLayer(layer)
                    ? map.setLayoutProperty(
                        layer,
                        "visibility",
                        visibleLayer[layer] ? "visible" : "none"
                      )
                    : null;

                  // toggle text layer for 3d visualizations
                  if (["DPGs developed", "DPGs deployed"].includes(layer)) {
                    map.getLayer(layer + "-text")
                      ? map.setLayoutProperty(
                          layer + "-text",
                          "visibility",
                          visibleLayer[layer] ? "visible" : "none"
                        )
                      : null;
                  }
                });

                if (prevGood.name) {
                  console.log("toggle prevgood visibility");
                  map.setLayoutProperty(prevGood.name + "-develop", "visibility", "none");
                  map.setLayoutProperty(prevGood.name + "-deploy", "visibility", "none");
                }
                if (selectedGood.name) {
                  console.log("toggle selected good visibility");
                  map.setLayoutProperty(
                    selectedGood.name + "-develop",
                    "visibility",
                    "visible"
                  );
                  map.setLayoutProperty(
                    selectedGood.name + "-deploy",
                    "visibility",
                    "visible"
                  );
                }
              }}
            </MapContext.Consumer>
          </Map>
        </div>
        <InView as="div" onChange={(inView) => setMapInteractive(!inView)}>
          <div className="scroller">
            <Scrollama onStepEnter={onStepEnter} offset="0.5">
              {props.story.map((_, stepIndex) => (
                <Step data={stepIndex} key={stepIndex}>
                  <div
                    className={`scrolly-p ${stepIndex == 0 ? "first" : ""} ${
                      stepIndex == props.story.length - 1 ? "last" : ""
                    }`}
                  >
                    <p>{_.text}</p>
                    {stepIndex == 0 && (
                      <div>
                        <p>
                          Scroll down to see the story or skip it and{" "}
                          <span className="button" onClick={handleScrollToBottom}>
                            explore the map
                          </span>
                        </p>

                        <div className="scrollArrows">
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    )}
                  </div>
                </Step>
              ))}
            </Scrollama>
          </div>
        </InView>

        <div
          className={
            selectedGood.name && props.story[currentStepIndex].image == "false"
              ? "map-overlay active"
              : "map-overlay"
          }
          id="legend"
        >
          <div className="legendContainer">
            {legends.map((legend, index) => (
              <div key={legend + index}>
                <span
                  className="legend-key"
                  style={
                    index == 0
                      ? {backgroundImage: "url(hardware.svg"}
                      : {backgroundColor: colors[index]}
                  }
                ></span>
                <span>{legend}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {mapInteractive && width >= 1008 && (
        <InfoComponent
          selectedGood={selectedGood}
          onChange={handleLayerToggle}
          visibleLayer={visibleLayer}
          ref={ref}
          SearchBox={
            <SearchBox
              ref={searchRef}
              goods={props.digitalGoods}
              selectedGood={selectedGood.name}
              onChange={handleChangeSearchbox}
              clearSelectedGood={handleClearSearchbox}
            />
          }
        />
      )}
      {width < 1008 && (
        <InfoComponent
          selectedGood={selectedGood}
          visibleLayer={visibleLayer}
          onChange={handleLayerToggle}
          ref={ref}
        />
      )}
    </div>
  );
}
