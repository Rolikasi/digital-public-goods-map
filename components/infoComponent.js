import React, {useState, forwardRef, useImperativeHandle, useRef} from "react";
import webSymbol from "../public/globe.png";
import ghLogo from "../public/github.png";
import {InView} from "react-intersection-observer";
import Footer from "./footer";

const buttonStyles = {
  "Pathfinders Exploratory": {
    backgroundImage: "url(pathfinders.svg)",
  },
  "Pathfinders Confirmed": {
    backgroundImage: "url(implemented.svg)",
  },
  "DPGs developed": {
    backgroundColor: "#FF952A",
  },
  "DPGs deployed": {
    backgroundColor: "#3333AB",
  },
};
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
const InfoComponent = forwardRef((props, ref) => {
  const [openCountries, setOpenCountries] = useState({
    development: false,
    deployment: false,
  });
  
  const [menuInView, setMenuInView] = useState(false);
  const [sdgs, setSdgs] = useState([...sdgsDefault]);
  const toggleEvidence = (i) => {
    sdgs[i].open = !sdgs[i].open;
    setSdgs([...sdgs]);
  };
  const [visibleLayer, setVisibleLayer] = useState({
    "Pathfinders Confirmed": false,
    "Pathfinders Exploratory": false,
    "DPGs developed": false,
    "DPGs deployed": false,
  });
  const handleLayerToggle = (e, layer) => {
    e.preventDefault();
    e.stopPropagation();
    setVisibleLayer((prevState) => ({...prevState, [layer]: !prevState[layer]}));
    props.onChange(layer);
  };

  const toggleCountries = (type) => {
    setOpenCountries((prevState) => ({...prevState, [type]: !prevState[type]}));
  };
  const divRef = useRef(null);
  const infoRef = useRef(null);
  const scrollHandle = () => {
    if (menuInView) {
      divRef.current.scrollIntoView({
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
  const clearStates = () => {
    sdgs.map((e) => (e.open = false));
    setSdgs([...sdgs]);
    setOpenCountries({...{development: false, deployment: false}});
  };
  const scrollToInfo = () => {
    infoRef.current.scrollIntoView({behavior: "smooth", block:"end"});
  }
  useImperativeHandle(ref, () => {
    return {
      clearStatesFromParent: clearStates,
      scrollFromParent: scrollToInfo,
    };
  });
  return (
    <div className="infoGood" >
        <div>{props.SearchBox}</div>
      <div className="controls" onClick={scrollHandle} ref={infoRef}>
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
        <ul id="menu" ref={divRef}>
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
                style={visibleLayer[layer] ? buttonStyles[layer] : {background: "none"}}
              >
                {visibleLayer[layer] ? "" : layer}
              </a>
            </li>
          ))}
        </ul>
      </InView>
      {Object.keys(props.selectedGood).length != 0 && (
        <div>
          <div className="goodContainer">
            <h2 className="goodName">{props.selectedGood.name}</h2>
            <div className="goodLinks">
              {props.selectedGood.website && (
                <a href={props.selectedGood.website} target="_blank" rel="noreferrer">
                  <img src={webSymbol} width="30px" height="30px" />
                </a>
              )}
              {props.selectedGood.repositoryURL && (
                <a
                  href={props.selectedGood.repositoryURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={ghLogo} width="30px" height="30px" />
                </a>
              )}
            </div>
            <p className="goodDesc">{props.selectedGood.description}</p>
          </div>
          <ul className="goodContainer">
            {" "}
            <p className="text-bold">Type of Digital Public Good</p>
            {["content", "data", "software", "standard", "AI model"].map((item) => {
              if (props.selectedGood.type.includes(item)) {
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
            {props.selectedGood["SDGs"].map((item) => {
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
            {Object.keys(props.selectedGood.locations.deploymentCountries).length > 0 && (
              <ul>
                <p
                  className="collapsable-text"
                  onClick={(e) => toggleCountries("deployment")}
                >
                  {"Deployed in " +
                    Object.keys(props.selectedGood.locations.deploymentCountries).length +
                    " of 249 countries:"}{" "}
                  <span
                    className={
                      openCountries.deployment ? "arrow active up" : "arrow active down"
                    }
                  ></span>
                </p>

                {openCountries.deployment &&
                  Object.values(props.selectedGood.locations.deploymentCountries).map(
                    (country) => {
                      return <li key={"deploy-" + country}>{country}</li>;
                    }
                  )}
              </ul>
            )}
            {Object.keys(props.selectedGood.locations.developmentCountries).length >
              0 && (
              <ul>
                <p
                  className="collapsable-text"
                  onClick={(e) => toggleCountries("development")}
                >
                  {"Developed in " +
                    Object.keys(props.selectedGood.locations.developmentCountries)
                      .length +
                    (Object.keys(props.selectedGood.locations.developmentCountries)
                      .length > 1
                      ? " countries:"
                      : " country:")}{" "}
                  <span
                    className={
                      openCountries.development ? "arrow active up" : "arrow active down"
                    }
                  ></span>
                </p>

                {openCountries.development &&
                  Object.values(props.selectedGood.locations.developmentCountries).map(
                    (country) => {
                      return <li key={"develop-" + country}>{country}</li>;
                    }
                  )}
              </ul>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
});

export default InfoComponent;
