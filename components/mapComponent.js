import React, {useState} from "react";
import ReactMapboxGl, {ZoomControl, MapContext} from "react-mapbox-gl";
import mapboxgl from "mapbox-gl";
import implementedpattern from "../public/implemented.svg";
import pathpattern from "../public/pathfinders.svg";
import hardwarePattern from "../public/hardware.svg";
import webSymbol from "../public/globe.png";
import ghLogo from "../public/github.png";
import {Scrollama, Step} from "react-scrollama";
import {InView} from "react-intersection-observer";
import SearchBox from "./searchBox";

const legends = ["where it was developed", "where it was implemented"];
const buttonStyles = {
  "Pathfinders Exploratory": {
    backgroundImage: "url(pathfinders.svg)"
  },
  "Pathfinders Confirmed": {
    backgroundImage: "url(implemented.svg)"
  },
  "DPGs developed": {
    backgroundColor: "#FF952A",
  },
  "DPGs deployed":{
    backgroundColor: "#3333AB",
  },
}
const colors = ["#FF952A", "#d4d4ec"];
const zoomDefault = 2;
const pitchDefault = 0;
const sdgsDefault = [
  {name: "1. No Poverty", open: false},
  {name: "2. Zero Hunger", open: false},
  {name: "3. Good Health and Well-being", open: false},
  {name: "4. Quality Education", open: false},
  {name: "5. Gender Equality", open: false},
  {name: "6. Clean Water and Sanitation", open: false},
  {name: "7. Affordable and Clean Energy", open: false},
  {name: "8. Decent Work and Economic Growth", open: false},
  {name: "9. Industry, Innovation and Infrastructure", open: false},
  {name: "10. Reduced Inequality", open: false},
  {name: "11. Sustainable Cities and Communities", open: false},
  {name: "12. Responsible Consumption and Production", open: false},
  {name: "13. Climate Action", open: false},
  {name: "14. Life Below Water", open: false},
  {name: "15. Life on Land", open: false},
  {name: "16. Peace and Justice Strong Institutions", open: false},
  {name: "17. Partnerships to achieve the Goal", open: false},
];

const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  maxZoom: 9,
  minZoom: 0,
  logoPosition: "bottom-right",
  pitchWithRotate: false,
});

export default function mapComponent(props) {
  const [zoom, setZoom] = useState(zoomDefault);
  const [lonLat, setLonLat] = useState([props.lon, props.lat]);
  // const [pitch, setPitch] = useState(pitchDefault);
  const [selectedGood, setSelectedGood] = useState({});
  const [prevGood, setPrevGood] = useState({});
  const [openCountries, setOpenCountries] = useState({
    development: false,
    deployment: false,
  });
  const [visibleLayer, setVisibleLayer] = useState({
    "Pathfinders Exploratory": false,
    "Pathfinders Confirmed": false,
    "DPGs developed": false,
    "DPGs deployed": false,
  });
  const [sdgs, setSdgs] = useState([...sdgsDefault]);
  const [mapInteractive, setMapInteractive] = useState(false);
  const [menuInView, setMenuInView] = useState(false);

  // scrollama states
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({data}) => {
    setCurrentStepIndex(data);
    setZoom(parseFloat(props.story[data].zoom));
    setLonLat([
      parseFloat(props.story[data].longitude),
      parseFloat(props.story[data].latitude),
    ]);
  };

  const clearStates = () => {
    sdgs.map((e) => (e.open = false));
    setSdgs([...sdgs]);
    setOpenCountries({...{development: false, deployment: false}});
  };
  const toggleEvidence = (i) => {
    sdgs[i].open = !sdgs[i].open;
    setSdgs([...sdgs]);
  };

  const toggleCountries = (type) => {
    setOpenCountries((prevState) => ({...prevState, [type]: !prevState[type]}));
  };

  const scrollHandle = () => {
    if (menuInView) {
      document.getElementById("menu").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };
  const parseURLs = (text) => {
    const url = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    let urls = text.match(url);
    return urls.map((url, index) => (
      <a key={url + index} href={url} target="_blank" rel="noreferrer">
        Link to evidence
      </a>
    ));
  };
  const handleChangeSearchbox = (good) => {
    setSelectedGood((prevState) => {
      setPrevGood(prevState);
      return good;
    });
    clearStates();
  };
  const handleLayerToggle = (e, layer) => {
    e.preventDefault();
    e.stopPropagation();
    setVisibleLayer((prevState) => ({...prevState, [layer]: !prevState[layer]}));
  };

  return (
    <div>
      <div className="map">
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
          }}
        >
          {mapInteractive && (
            <SearchBox goods={props.digitalGoods} onChange={handleChangeSearchbox} />
          )}
          {console.log("check story", props.story)}
          {props.story.length && props.story[currentStepIndex].image != "false" && (
            <img className="stepImage" src={props.story[currentStepIndex].image} />
          )}
          <Map
            style="mapbox://styles/rolikasi/ckn67a95j022m17mcqog82g05"
            center={lonLat}
            zoom={[zoom]}
            pitch={
              visibleLayer["DPGs developed"] || visibleLayer["DPGs deployed"] ? 60 : 0
            } // pitch in degrees
            // bearing in degrees
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
              setLonLat([map.getCenter().lng, map.getCenter().lat]);
              console.log(map.getCenter().lng, map.getCenter().lat);
            }}
            onZoomEnd={(map) => {
              setZoom(map.getZoom());
              console.log("zoom", map.getZoom());
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
                  ["in", "ADM0_A3_IS"].concat(Object.keys(props.pathfinderCountries))
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
                  ["in", "ADM0_A3_IS"].concat(Object.keys(props.pathfinderImplemented))
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
                      "text-halo-width": 1
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
                map.on("click", "countries", function (mapElement) {
                  const countryCode = mapElement.features[0].properties.ADM0_A3_IS; // Grab the country code from the map properties.

                  let deployments = props.digitalGoods.filter((good) =>
                    Object.keys(good.locations.deploymentCountries).includes(countryCode)
                  );
                  let developments = props.digitalGoods.filter((good) =>
                    Object.keys(good.locations.developmentCountries).includes(countryCode)
                  );
                  let countryName = "";
                  let deployHtml = "";
                  let developHtml = "";
                  let pathHtml = "";
                  if (deployments.length > 0) {
                    console.log(deployments);
                    countryName =
                      deployments[0].locations.deploymentCountries[countryCode];
                    deployHtml += "<ul><b>" + deployments.length + " Goods deployed:</b>";
                    deployments.map((d) => {
                      deployHtml += "<li>" + d.name + "</li>";
                    });
                    deployHtml += "</ul>";
                  }

                  if (developments.length > 0) {
                    countryName =
                      developments[0].locations.developmentCountries[countryCode];
                    developHtml +=
                      "<ul><b>" + developments.length + " Goods developed:</b>";
                    developments.map((d) => {
                      developHtml += "<li>" + d.name + "</li>";
                    });
                    developHtml += "</ul>";
                  }

                  if (props.countries[countryCode].pathfinder) {
                    countryName = props.countries[countryCode].pathfinder.country;
                    pathHtml = "✅&nbsp;&nbsp;DPG Pathfinder Country<br/>";
                    pathHtml += "<ul>";
                    pathHtml +=
                      "<li><b>Status:</b> " +
                      props.countries[countryCode].pathfinder.status +
                      "</li>";
                    if (props.countries[countryCode].pathfinder.sector) {
                      pathHtml +=
                        "<li><b>Sector:</b> " +
                        props.countries[countryCode].pathfinder.sector +
                        "</li>";
                    }
                    if (props.countries[countryCode].pathfinder.comments) {
                      pathHtml +=
                        "<li><b>Comments:</b> " +
                        props.countries[countryCode].pathfinder.comments +
                        "</li>";
                    }
                    pathHtml += "</ul>";
                  }

                  var html = `<h3>${countryName}</h3>
    				${pathHtml}
            ${deployHtml}
            ${developHtml}`;

                  new mapboxgl.Popup() //Create a new popup
                    .setLngLat(mapElement.lngLat) // Set where we want it to appear (where we clicked)
                    .setHTML(html) // Add the HTML we just made to the popup
                    .addTo(map); // Add the popup to the map
                });
              }
            }}
          >
            <ZoomControl />

            <MapContext.Consumer>
              {(map) => {
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
                if (selectedGood.name) {
                  console.log("toggle selected good visibility");
                  if (prevGood.name) {
                    map.setLayoutProperty(
                      prevGood.name + "-develop",
                      "visibility",
                      "none"
                    );
                    map.setLayoutProperty(
                      prevGood.name + "-deploy",
                      "visibility",
                      "none"
                    );
                  }
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
      <div>
        <div className="controls" onClick={scrollHandle}>
          <span id="arrow-up" className={menuInView ? "arrow up active" : "arrow up"} />
          <div
            id="hamburger"
            className={menuInView ? "hamburger-icon" : "hamburger-icon active"}
          >
            <div className="bar1"></div>
          </div>
          <span>{menuInView ? "Tap to see filters and info" : ""}</span>
        </div>
        <InView as="div" onChange={(inView) => setMenuInView(!inView)}>
          <ul id="menu">
            {Object.keys(visibleLayer).map((layer, index) => (
              <li
                id={layer}
                key={layer + index}
                onClick={(e) => handleLayerToggle(e, layer)}
              >
                <span>{visibleLayer[layer] ? layer : ""}</span>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className={layer + (visibleLayer[layer] ? " active" : "")}
                  style={
                    visibleLayer[layer]
                      ? 
                        buttonStyles[layer]                        
                      : {background: "none"}
                  }
                >
                  {visibleLayer[layer] ? "" : layer}
                </a>
              </li>
            ))}
          </ul>
        </InView>
        {Object.keys(selectedGood).length != 0 && (
          <div className="infoGood">
            <div className="goodContainer">
              <h2 className="goodName">{selectedGood.name}</h2>
              <div className="goodLinks">
                {selectedGood.website && (
                  <a href={selectedGood.website} target="_blank" rel="noreferrer">
                    <img src={webSymbol} width="30px" height="30px" />
                  </a>
                )}
                {selectedGood.repositoryURL && (
                  <a href={selectedGood.repositoryURL} target="_blank" rel="noreferrer">
                    <img src={ghLogo} width="30px" height="30px" />
                  </a>
                )}
              </div>
              <p className="goodDesc">{selectedGood.description}</p>
            </div>
            <ul className="goodContainer">
              {" "}
              <p className="text-bold">Type of Digital Public Good</p>
              {["content", "data", "software", "standard", "AI model"].map((item) => {
                if (selectedGood.type.includes(item)) {
                  return <li key={"type-" + item}>✅&nbsp;Open {item}</li>;
                } else {
                  return (
                    <li key={"type-" + item}>
                      <svg width="18" height="18">
                        <rect width="18" height="18" fillOpacity="0" className="rect" />
                      </svg>
                      &nbsp;Open {item}
                    </li>
                  );
                }
              })}
            </ul>
            <div className="goodContainer">
              <p className="text-bold">Relevant Sustainable Development Goals:</p>
              {selectedGood["SDGs"].map((item) => {
                return (
                  <div key={"SDG-" + item.SDGNumber} className="header">
                    <p
                      className="collapsable-text"
                      onClick={(e) => toggleEvidence(item.SDGNumber - 1)}
                    >
                      {sdgs[item.SDGNumber - 1].name}{" "}
                      <span
                        className={
                          sdgs[item.SDGNumber - 1].open
                            ? "arrow active up"
                            : "arrow active down"
                        }
                      ></span>
                    </p>
                    {item.evidenceText && sdgs[item.SDGNumber - 1].open && (
                      <p>{item.evidenceText}</p>
                    )}
                    {item.evidenceURL &&
                      sdgs[item.SDGNumber - 1].open &&
                      parseURLs(item.evidenceURL)}
                  </div>
                );
              })}
            </div>
            <div className="goodContainer">
              {Object.keys(selectedGood.locations.deploymentCountries).length > 0 && (
                <ul>
                  <p
                    className="collapsable-text"
                    onClick={(e) => toggleCountries("deployment")}
                  >
                    {"Deployed in " +
                      Object.keys(selectedGood.locations.deploymentCountries).length +
                      " of 249 countries:"}{" "}
                    <span
                      className={
                        openCountries.deployment ? "arrow active up" : "arrow active down"
                      }
                    ></span>
                  </p>

                  {openCountries.deployment &&
                    Object.values(selectedGood.locations.deploymentCountries).map(
                      (country) => {
                        return <li key={"deploy-" + country}>{country}</li>;
                      }
                    )}
                </ul>
              )}
              {Object.keys(selectedGood.locations.developmentCountries).length > 0 && (
                <ul>
                  <p
                    className="collapsable-text"
                    onClick={(e) => toggleCountries("development")}
                  >
                    {"Developed in " +
                      Object.keys(selectedGood.locations.developmentCountries).length +
                      (Object.keys(selectedGood.locations.developmentCountries).length > 1
                        ? " countries:"
                        : " country:")}{" "}
                    <span
                      className={
                        openCountries.development
                          ? "arrow active up"
                          : "arrow active down"
                      }
                    ></span>
                  </p>

                  {openCountries.development &&
                    Object.values(selectedGood.locations.developmentCountries).map(
                      (country) => {
                        return <li key={"develop-" + country}>{country}</li>;
                      }
                    )}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
