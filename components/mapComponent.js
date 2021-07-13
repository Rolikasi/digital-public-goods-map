import React, {useState, useEffect} from "react";
import ReactMapboxGl, {ZoomControl} from "react-mapbox-gl";
import mapboxgl from "mapbox-gl";
import implementedpattern from "../public/implemented.svg";
import pathpattern from "../public/pathfinders.svg";
import webSymbol from "../public/globe.png";
import ghLogo from "../public/github.png";

const zoomDefault = 1;
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
  maxZoom: 5,
  minZoom: 0,
});

export default function mapComponent(props) {
  const [zoom, setZoom] = useState(zoomDefault);
  const [lonLat, setLonLat] = useState([props.lon, props.lat]);
  // const [lonLatMarker, setLonLatMarker] = useState([props.lon, props.lat]);
  const [selectedGood, setSelectedGood] = useState({});
  const [openCountries, setOpenCountries] = useState({
    development: false,
    deployment: false,
  });
  // const [isActive, setActive] = useState(false);
  const [sdgs, setSdgs] = useState([...sdgsDefault]);
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

  const isElementInViewport = (el) => {
    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight ||
          document.documentElement.clientHeight) /* or $(window).height() */ &&
      rect.right <=
        (window.innerWidth ||
          document.documentElement.clientWidth) /* or $(window).width() */
    );
  };
  const scrollHandle = () => {
    if (!isElementInViewport(document.getElementById("menu"))) {
      document.getElementById("menu").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };
  const parseURLs = (text) => {
    const url = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    let urls = text.match(url);
    return urls.map(i => <a href={i} target='_blank' rel='noreferrer'>Link to evidence</a>)
  }
  // useEffect(() => {
  // 	setZoom(zoomDefault);
  // 	setLonLat([props.lon, props.lat]);
  // 	setLonLatMarker([props.lon, props.lat]);
  // }, [props.lon, props.lat]);
  useEffect(() => {
    window.onscroll = () => {
      if (!document.getElementById("menu")) {
        return;
      }
      if (isElementInViewport(document.getElementById("menu"))) {
        document.getElementById("footer-text").textContent = "";
        document.getElementById("hamburger").classList.add("active");
        document.getElementById("arrow-up").classList.remove("active");
      } else {
        document.getElementById("footer-text").textContent =
          "Tap to see filters and info";
        document.getElementById("hamburger").classList.remove("active");
        document.getElementById("arrow-up").classList.add("active");
      }
    };
  }, []);
  return (
    <div className="map">
      <Map
        style="mapbox://styles/rolikasi/ckn67a95j022m17mcqog82g05"
        center={lonLat}
        zoom={[zoom]}
        // pitch={[30]} // pitch in degrees
        // bearing in degrees
        containerStyle={{width: "100%", height: "100%"}}
        movingMethod="jumpTo"
        logoPosition="bottom-right"
        onMoveEnd={(map) => {
          setZoom(map.getZoom());
          setLonLat([map.getCenter().lng, map.getCenter().lat]);
          console.log(map.getCenter().lng, map.getCenter().lat);
        }}
        onStyleLoad={(map) => {
          var layers = map.getStyle().layers;
          // Find the index of the first symbol layer in the map style
          var firstSymbolId;
          for (let i = 0; i < layers.length; i++) {
            if (layers[i].type === "symbol") {
              firstSymbolId = layers[i].id;
              break;
            }
          }
          //add layer for each good with map
          props.digitalGoods.map((good) => {
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
                  "fill-pattern": "hardware-15", //this helps us distinguish individual countries a bit better by giving them an outline
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
              ["in", "ADM0_A3_IS"].concat(Object.keys(good.locations.deploymentCountries))
            ); // This line lets us filter by country codes.
          });

          // Declare the image

          let pathimg = new Image(20, 20);
          pathimg.onload = () => map.addImage("pathfinders-pattern", pathimg);
          pathimg.src = pathpattern;

          // Use it
          map.addLayer(
            {
              // adding a layer containing the tileset with country boundaries
              id: "DPG Pathfinders", //this is the name of our layer, which we will need later
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
            },
            firstSymbolId
          );
          map.setLayoutProperty("DPG Pathfinders", "visibility", "visible");
          map.setFilter(
            "DPG Pathfinders",
            ["in", "ADM0_A3_IS"].concat(Object.keys(props.pathfinderCountries))
          ); // This line lets us filter by country codes.
          console.log("path", Object.keys(props.pathfinderCountries));

          // Declare the image
          let implementedimg = new Image(20, 20);
          implementedimg.onload = () =>
            map.addImage("implemented-pattern", implementedimg);
          implementedimg.src = implementedpattern;

          // Use it
          map.addLayer(
            {
              // adding a layer containing the tileset with country boundaries
              id: "DPG Implemented", //this is the name of our layer, which we will need later
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
            },
            firstSymbolId
          );
          map.setLayoutProperty("DPG Implemented", "visibility", "visible");

          map.setFilter(
            "DPG Implemented",
            ["in", "ADM0_A3_IS"].concat(Object.keys(props.pathfinderImplemented))
          ); // This line lets us filter by country codes.

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
              countryName = deployments[0].locations.deploymentCountries[countryCode];
              deployHtml += "<ul><b>" + deployments.length + " Goods deployed:</b>";
              deployments.map((d) => {
                deployHtml += "<li>" + d.name + "</li>";
              });
              deployHtml += "</ul>";
            }

            if (developments.length > 0) {
              countryName = developments[0].locations.developmentCountries[countryCode];
              developHtml += "<ul><b>" + developments.length + " Goods developed:</b>";
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
          //create legend
          var legends = ["where it was developed", "where it was implemented"];
          var colors = ["#FF952A", "#d4d4ec"];
          for (let i = 0; i < legends.length; i++) {
            var layer = legends[i];
            var color = colors[i];
            var item = document.createElement("div");
            var key = document.createElement("span");
            key.className = "legend-key";
            i == 0
              ? (key.style.backgroundImage = "url(hardware.svg)")
              : (key.style.backgroundColor = color);

            var value = document.createElement("span");
            value.innerHTML = layer;
            item.appendChild(key);
            item.appendChild(value);
            document.getElementById("legend").appendChild(item);
          }

          var prevLayer = "";
          props.digitalGoods.map((good) => {
            let layers = document.getElementById("dg-menu-dropdown");
            let li = document.createElement("a");
            li.textContent = good.name;
            li.href = "#";
            li.onclick = function (e) {
              var clickedGood = this.textContent;
              document.getElementById("legend").style.display = "block";
              setSelectedGood(good);
              clearStates();

              e.preventDefault();
              if (prevLayer) {
                map.setLayoutProperty(prevLayer + "-develop", "visibility", "none");
                map.setLayoutProperty(prevLayer + "-deploy", "visibility", "none");
              }
              prevLayer = this.textContent;

              map.setLayoutProperty(clickedGood + "-develop", "visibility", "visible");
              map.setLayoutProperty(clickedGood + "-deploy", "visibility", "visible");
              document.getElementById("dg-menu-text").textContent = clickedGood;
            };
            layers.appendChild(li);
          });

          // set up the corresponding toggle button for each layer
          var toggleableLayerIds = ["DPG Pathfinders", "DPG Implemented"];
          for (let i = 0; i < toggleableLayerIds.length; i++) {
            var id = toggleableLayerIds[i];
            var linkText = document.createElement("span");
            var link = document.createElement("a");
            var li = document.createElement("li");

            link.href = "#";
            link.className = "active " + id;
            li.id = id;
            linkText.textContent = id;
            link.style.backgroundImage =
              i == 0 ? "url(pathfinders.svg)" : "url(implemented.svg)";

            li.onclick = function (e) {
              var clickedLayer = this.id;
              e.preventDefault();
              e.stopPropagation();

              var visibility = map.getLayoutProperty(clickedLayer, "visibility");

              // toggle layer visibility by changing the layout object's visibility property
              if (visibility === "visible") {
                map.setLayoutProperty(clickedLayer, "visibility", "none"); //need to refactor
                this.children[1].className = clickedLayer;
                this.children[1].style.backgroundImage = "none";
                this.children[1].textContent = clickedLayer;
                this.children[0].textContent = "";
              } else {
                this.children[1].className = "active " + clickedLayer;
                this.children[1].style.backgroundImage =
                  clickedLayer == "DPG Pathfinders"
                    ? "url(pathfinders.svg)"
                    : "url(implemented.svg)";
                this.children[1].textContent = "";
                this.children[0].textContent = clickedLayer;

                map.setLayoutProperty(clickedLayer, "visibility", "visible");
              }
            };

            let filters = document.getElementById("menu");
            li.appendChild(linkText);
            li.appendChild(link);

            filters.appendChild(li);
          }
        }}
      >
        <ZoomControl />
      </Map>
      <div className="map-overlay" id="legend"></div>
      <div className="controls" onClick={scrollHandle}>
        <span id="arrow-up" className="arrow up active" />
        <div id="hamburger" className="hamburger-icon">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <span id="footer-text">Tap to see filters and info</span>
      </div>
      <ul id="menu"></ul>
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
                  {item.evidenceURL && sdgs[item.SDGNumber - 1].open && ( parseURLs(item.evidenceURL)
                  )}
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
                      openCountries.development ? "arrow active up" : "arrow active down"
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
  );
}
