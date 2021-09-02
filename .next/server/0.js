exports.ids = [0];
exports.modules = {

/***/ "./components/UseWindowDimensions.js":
/*!*******************************************!*\
  !*** ./components/UseWindowDimensions.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWindowDimensions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height
  } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const {
    0: windowDimensions,
    1: setWindowDimensions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getWindowDimensions());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/rolikasi/outreachy/digital-public-goods-map/components/footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Footer() {
  return __jsx("div", {
    className: "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Data:", " ", __jsx("a", {
    target: "_blank",
    href: "https://docs.google.com/spreadsheets/d/1t75gYVhdUjPD1532DbPYN49FLXFhpRwEBFiS4Hbk6_Q/edit#gid=728344896",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Pathfinders and Story"), " ", "|", " ", __jsx("a", {
    target: "_blank",
    href: "https://github.com/unicef/publicgoods-candidates",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "DPGs")));
}

/***/ }),

/***/ "./components/infoComponent.js":
/*!*************************************!*\
  !*** ./components/infoComponent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_globe_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/globe.png */ "./public/globe.png");
/* harmony import */ var _public_globe_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_globe_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_github_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/github.png */ "./public/github.png");
/* harmony import */ var _public_github_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_github_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-google-charts */ "react-google-charts");
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_google_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_confirmed_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/confirmed.svg */ "./public/confirmed.svg");
/* harmony import */ var _public_confirmed_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_confirmed_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_exploratory_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/exploratory.svg */ "./public/exploratory.svg");
/* harmony import */ var _public_exploratory_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_exploratory_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/rolikasi/outreachy/digital-public-goods-map/components/infoComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const buttonStyles = {
  "Pathfinders Exploratory": {
    backgroundImage: `url(${_public_exploratory_svg__WEBPACK_IMPORTED_MODULE_7___default.a})`
  },
  "Pathfinders Confirmed": {
    backgroundImage: `url(${_public_confirmed_svg__WEBPACK_IMPORTED_MODULE_6___default.a})`
  },
  "DPGs developed": {
    backgroundColor: "#FF952A"
  },
  "DPGs deployed": {
    backgroundColor: "#3333AB"
  }
};
const sdgsDefault = [{
  name: "1. No Poverty",
  open: false
}, {
  name: "2. Zero Hunger",
  open: false
}, {
  name: "3. Good Health and Well-being",
  open: false
}, {
  name: "4. Quality Education",
  open: false
}, {
  name: "5. Gender Equality",
  open: false
}, {
  name: "6. Clean Water and Sanitation",
  open: false
}, {
  name: "7. Affordable and Clean Energy",
  open: false
}, {
  name: "8. Decent Work and Economic Growth",
  open: false
}, {
  name: "9. Industry, Innovation and Infrastructure",
  open: false
}, {
  name: "10. Reduced Inequality",
  open: false
}, {
  name: "11. Sustainable Cities and Communities",
  open: false
}, {
  name: "12. Responsible Consumption and Production",
  open: false
}, {
  name: "13. Climate Action",
  open: false
}, {
  name: "14. Life Below Water",
  open: false
}, {
  name: "15. Life on Land",
  open: false
}, {
  name: "16. Peace and Justice Strong Institutions",
  open: false
}, {
  name: "17. Partnerships to achieve the Goal",
  open: false
}];
const InfoComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => {
  const {
    0: openCountries,
    1: setOpenCountries
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    development: false,
    deployment: false,
    deploymentsInCountry: false,
    developmentsInCountry: false
  });
  const {
    0: menuInView,
    1: setMenuInView
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: sdgs,
    1: setSdgs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([...sdgsDefault]);

  const toggleEvidence = i => {
    sdgs[i].open = !sdgs[i].open;
    setSdgs([...sdgs]);
  };

  const handleLayerToggle = (e, layer) => {
    e.preventDefault();
    e.stopPropagation();
    props.onLayerToggle(layer);
  };

  const toggleCountries = type => {
    setOpenCountries(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [type]: !prevState[type]
    }));
  };

  const divRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const infoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const scrollHandle = () => {
    if (!menuInView) {
      divRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }
  };

  const handleSelectGood = (event, good) => {
    event.preventDefault();
    event.stopPropagation();
    props.onSelectGood(good);
  };

  const handleSelectCountry = (event, countryCode) => {
    event.preventDefault();
    event.stopPropagation();
    props.onSelectCountry(countryCode);
  };

  const parseURLs = text => {
    const url = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    let urls = text.match(url);
    return urls.map((url, index) => __jsx("a", {
      key: url + index,
      href: url,
      target: "_blank",
      rel: "noreferrer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 7
      }
    }, "Link to evidence"));
  };

  const clearStates = () => {
    sdgs.map(e => e.open = false);
    setSdgs([...sdgs]);
    setOpenCountries({
      development: false,
      deployment: false,
      deploymentsInCountry: false,
      developmentsInCountry: false
    });
  };

  const scrollToInfo = () => {
    infoRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, () => {
    return {
      clearStatesFromParent: clearStates,
      scrollFromParent: scrollToInfo,
      scrollFromMap: scrollHandle
    };
  });
  return __jsx("div", {
    className: "infoGood",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, props.SearchBox), __jsx("div", {
    className: "controls",
    onClick: scrollHandle,
    ref: infoRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx("span", {
    id: "arrow-up",
    className: !menuInView ? "arrow up active" : "arrow up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: "hamburger",
    className: !menuInView ? "hamburger-icon" : "hamburger-icon active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bar1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  })), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, menuInView ? "" : "Tap to see filters and info")), __jsx("ul", {
    className: "filters",
    ref: divRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, Object.keys(props.visibleLayer).map((layer, index) => __jsx("li", {
    id: layer,
    key: layer + index,
    onClick: e => handleLayerToggle(e, layer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, props.visibleLayer[layer] ? layer : ""), __jsx("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: layer + (props.visibleLayer[layer] ? " active" : ""),
    style: props.visibleLayer[layer] ? buttonStyles[layer] : {
      background: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, props.visibleLayer[layer] ? "" : layer))), __jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["InView"], {
    as: "div",
    onChange: inView => setMenuInView(inView),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  })), Object.keys(props.selectedCountry).length != 0 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, props.selectedCountry.pathfinder && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, props.selectedCountry.name), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, "\u2705\xA0\xA0DPG Pathfinder Country"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  }, "Status: "), props.selectedCountry.pathfinder.Status), props.selectedCountry.pathfinder.Sector && __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 19
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }, "Sector: "), props.selectedCountry.pathfinder.Sector), props.selectedCountry.pathfinder.Comments && __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 19
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 21
    }
  }, "Comments: "), props.selectedCountry.pathfinder.Comments))), props.selectedCountry.deployments.length > 0 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "collapsable-text",
    onClick: () => toggleCountries("deploymentsInCountry"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }, "There ", props.selectedCountry.deployments.length > 1 ? "are" : "is", " ", props.selectedCountry.deployments.length, " digital public good", props.selectedCountry.deployments.length > 1 ? "s" : "", " deployed in", " ", props.selectedCountry.name, __jsx("span", {
    className: openCountries.deploymentsInCountry ? "arrow active up" : "arrow active down",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  })), openCountries.deploymentsInCountry && props.selectedCountry.deployments.map((good, i) => __jsx("a", {
    className: props.selectedCountry.deployments.length - 1 == i ? "last" : "",
    key: good.name + i,
    onClick: e => handleSelectGood(e, good.name),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 21
    }
  }, good.name))), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 15
    }
  }, "DPGs deployed in this country are related to", " ", props.selectedCountry.sdgsDeployments.filter(sdg => sdg[1].dpgs >= 1).length, " ", "of 17(", (props.selectedCountry.sdgsDeployments.filter(sdg => sdg[1].dpgs >= 1).length / 17 * 100).toFixed(1), "%) Sustainable Development Goals"), __jsx("div", {
    className: "chart-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 15
    }
  }, __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_5___default.a, {
    width: "100%",
    height: "600px",
    chartType: "BarChart",
    loader: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 27
      }
    }, "Loading Chart"),
    data: [["SDG", "DPGs", {
      role: "annotation",
      calc: "stringify",
      type: "string"
    }], ...props.selectedCountry.sdgsDeployments.map(sdg => [sdg[0], sdg[1].dpgs, sdg[1].ann + ": " + sdg[1].dpgs])],
    options: {
      animation: {
        startup: true,
        easing: "out",
        duration: 500
      },
      annotations: {
        textStyle: {
          fontSize: 11,
          bold: false
        }
      },
      colors: ["#3333AB"],
      chartArea: {
        width: "85%",
        height: "90%",
        top: 0
      },
      hAxis: {
        baselineColor: "#cccccc",
        titleTextStyle: {
          italic: false
        },
        title: "Digital public goods",
        minValue: 0
      },
      legend: {
        position: "none"
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 17
    }
  }), __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 17
    }
  }, "Types of DPGs deployed in ", props.selectedCountry.name), __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_5___default.a, {
    width: "100%",
    height: "170px",
    chartType: "BarChart",
    loader: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 27
      }
    }, "Loading Chart"),
    data: [["SDG", "DPGs", {
      role: "annotation",
      calc: "stringify"
    }], ...props.selectedCountry.typeDeployments.map(el => [...el, el[0] + ": " + el[1]])],
    options: {
      animation: {
        startup: true,
        easing: "out",
        duration: 500
      },
      colors: ["#3333AB"],
      chartArea: {
        width: "85%",
        height: "85%",
        top: 0
      },
      hAxis: {
        baselineColor: "#cccccc",
        titleTextStyle: {
          italic: false
        },
        title: "Digital public goods",
        minValue: 0
      },
      vAxis: {
        textPosition: "none"
      },
      legend: {
        position: "none"
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 17
    }
  }))), props.selectedCountry.developments.length > 0 && __jsx("div", {
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "collapsable-text",
    onClick: () => toggleCountries("developmentsInCountry"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 15
    }
  }, "There ", props.selectedCountry.developments.length > 1 ? "are" : "is", " ", props.selectedCountry.developments.length, " digital public good", props.selectedCountry.developments.length > 1 ? "s" : "", " developed in", " ", props.selectedCountry.name, __jsx("span", {
    className: openCountries.developmentsInCountry ? "arrow active up" : "arrow active down",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 17
    }
  })), openCountries.developmentsInCountry && props.selectedCountry.developments.map((good, i) => __jsx("a", {
    className: props.selectedCountry.developments.length - 1 == i ? "last" : "",
    key: good.name + i,
    onClick: e => handleSelectGood(e, good.name),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 19
    }
  }, good.name)))), Object.keys(props.selectedGood).length != 0 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "goodContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "goodName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 13
    }
  }, props.selectedGood.name), __jsx("div", {
    className: "goodLinks",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 13
    }
  }, props.selectedGood.website && __jsx("a", {
    href: props.selectedGood.website,
    target: "_blank",
    rel: "noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: _public_globe_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    width: "30px",
    height: "30px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 19
    }
  })), props.selectedGood.repositoryURL && __jsx("a", {
    href: props.selectedGood.repositoryURL,
    target: "_blank",
    rel: "noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: _public_github_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    width: "30px",
    height: "30px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 19
    }
  }))), __jsx("p", {
    className: "goodDesc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 13
    }
  }, props.selectedGood.description)), __jsx("ul", {
    className: "goodContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 11
    }
  }, " ", __jsx("p", {
    className: "text-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 13
    }
  }, "Type of Digital Public Good"), ["content", "data", "software", "standard", "AI model"].map(item => {
    if (props.selectedGood.type.includes(item)) {
      return __jsx("li", {
        key: "type-" + item,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 24
        }
      }, "\u2705\xA0Open ", item);
    } else {
      return __jsx("li", {
        key: "type-" + item,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 19
        }
      }, __jsx("svg", {
        width: "18",
        height: "18",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 21
        }
      }, __jsx("rect", {
        width: "18",
        height: "18",
        fillOpacity: "0",
        className: "rect",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 23
        }
      })), "\xA0Open ", item);
    }
  })), __jsx("div", {
    className: "goodContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "text-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 13
    }
  }, "Relevant Sustainable Development Goals:"), props.selectedGood["SDGs"].map(item => {
    return __jsx("div", {
      key: "SDG-" + item.SDGNumber,
      className: "header",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "collapsable-text",
      onClick: e => toggleEvidence(item.SDGNumber - 1),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 19
      }
    }, sdgs[item.SDGNumber - 1].name, " ", __jsx("span", {
      className: sdgs[item.SDGNumber - 1].open ? "arrow active up" : "arrow active down",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 21
      }
    })), item.evidenceText && sdgs[item.SDGNumber - 1].open && __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 21
      }
    }, item.evidenceText), item.evidenceURL && sdgs[item.SDGNumber - 1].open && parseURLs(item.evidenceURL));
  })), __jsx("div", {
    className: "goodContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 11
    }
  }, Object.keys(props.selectedGood.locations.deploymentCountries).length > 0 && __jsx("div", {
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "collapsable-text",
    onClick: e => toggleCountries("deployment"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 17
    }
  }, "Deployed in " + Object.keys(props.selectedGood.locations.deploymentCountries).length + " of 249 countries:", " ", __jsx("span", {
    className: openCountries.deployment ? "arrow active up" : "arrow active down",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 19
    }
  })), openCountries.deployment && Object.entries(props.selectedGood.locations.deploymentCountries).map((country, i) => {
    return __jsx("a", {
      className: Object.entries(props.selectedGood.locations.deploymentCountries).length - 1 == i ? "last" : "",
      onClick: e => handleSelectCountry(e, country[0]),
      key: "deploy-" + country,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 25
      }
    }, country[1]);
  })), Object.keys(props.selectedGood.locations.developmentCountries).length > 0 && __jsx("div", {
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "collapsable-text",
    onClick: e => toggleCountries("development"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 17
    }
  }, "Developed in " + Object.keys(props.selectedGood.locations.developmentCountries).length + (Object.keys(props.selectedGood.locations.developmentCountries).length > 1 ? " countries:" : " country:"), " ", __jsx("span", {
    className: openCountries.development ? "arrow active up" : "arrow active down",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 19
    }
  })), openCountries.development && Object.entries(props.selectedGood.locations.developmentCountries).map((country, i) => {
    return __jsx("a", {
      className: Object.entries(props.selectedGood.locations.developmentCountries).length - 1 == i ? "last" : "",
      onClick: e => handleSelectCountry(e, country[0]),
      key: "develop-" + country,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 25
      }
    }, country[1]);
  })))), __jsx(_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 7
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (InfoComponent);

/***/ }),

/***/ "./components/mapComponent.js":
/*!************************************!*\
  !*** ./components/mapComponent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-mapbox-gl */ "react-mapbox-gl");
/* harmony import */ var react_mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_confirmed_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/confirmed.svg */ "./public/confirmed.svg");
/* harmony import */ var _public_confirmed_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_confirmed_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_exploratory_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/exploratory.svg */ "./public/exploratory.svg");
/* harmony import */ var _public_exploratory_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_exploratory_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_hardware_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/hardware.svg */ "./public/hardware.svg");
/* harmony import */ var _public_hardware_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_hardware_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scrollama__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scrollama */ "react-scrollama");
/* harmony import */ var react_scrollama__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scrollama__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _searchBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searchBox */ "./components/searchBox.js");
/* harmony import */ var _infoComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./infoComponent */ "./components/infoComponent.js");
/* harmony import */ var _UseWindowDimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UseWindowDimensions */ "./components/UseWindowDimensions.js");
/* harmony import */ var _public_logo_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/logo.svg */ "./public/logo.svg");
/* harmony import */ var _public_logo_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_logo_svg__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/home/rolikasi/outreachy/digital-public-goods-map/components/mapComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const layerStyles = {
  "Pathfinders Exploratory": {
    backgroundImage: `url(${_public_exploratory_svg__WEBPACK_IMPORTED_MODULE_3___default.a})`
  },
  "Pathfinders Confirmed": {
    backgroundImage: `url(${_public_confirmed_svg__WEBPACK_IMPORTED_MODULE_2___default.a})`
  },
  "DPGs developed": {
    backgroundColor: "#FF952A"
  },
  "DPGs deployed": {
    backgroundColor: "#3333AB"
  }
};
const legends = ["where DPG was developed", "where DPG was deployed"];
const colors = ["#FF952A", "#d4d4ec"];
const zoomDefault = 2;
const SDGS = ["No Poverty", "Zero Hunger", "Good Health and Well-being", "Quality Education", "Gender Equality", "Clean Water and Sanitation", "Affordable and Clean Energy", "Decent Work and Economic Growth", "Industry, Innovation and Infrastructure", "Reduced Inequality", "Sustainable Cities and Communities", "Responsible Consumption and Production", "Climate Action", "Life Below Water", "Life on Land", "Peace and Justice Strong Institutions", "Partnerships to achieve the Goal"];

const sdgsDefault = () => {
  let obj = {};

  for (let i = 0; i < SDGS.length; i++) {
    obj[i + 1] = {
      dpgs: 0,
      ann: SDGS[i]
    };
  }

  return obj;
}; // console.log(process.env.MAPBOX_ACCESS_TOKEN)


const Map = react_mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default()({
  accessToken: "pk.eyJ1IjoibGFjYWJyYTAwIiwiYSI6ImNrc2htaXNyazF2a3cydW41Nml2ZjU1NmsifQ.TX8-R3V34NRBt9gTs2c0dg",
  maxZoom: 9,
  minZoom: 0,
  logoPosition: "bottom-right",
  pitchWithRotate: false
});
function mapComponent(props) {
  const {
    0: mapInstance,
    1: setMapInstance
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const mainRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const searchRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    width
  } = Object(_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const {
    0: zoom,
    1: setZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(zoomDefault);
  const {
    0: lonLat,
    1: setLonLat
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([props.lon, props.lat]);
  const {
    0: selectedGood,
    1: setSelectedGood
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: selectedCountry,
    1: setSelectedCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: prevGood,
    1: setPrevGood
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: visibleLayer,
    1: setVisibleLayer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    "Pathfinders Exploratory": false,
    "Pathfinders Confirmed": false,
    "DPGs deployed": false,
    "DPGs developed": false
  });
  const {
    0: mapInteractive,
    1: setMapInteractive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // scrollama states

  const {
    0: currentStepIndex,
    1: setCurrentStepIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.

  const onStepEnter = ({
    data
  }) => {
    setCurrentStepIndex(data); // Check and set selectedGood from gsheet

    if (props.story[data].showDPG) {
      setSelectedGood(prevState => {
        setPrevGood(prevState);
        return props.digitalGoods.filter(el => el.name.toLowerCase().indexOf(props.story[data].showDPG.toLowerCase()) !== -1)[0]; // filter and grab 1st result
      });
    } else {
      // clear state if there is no dpg in gsheet
      setSelectedGood(prevState => {
        setPrevGood(prevState);
        return {};
      });
    } // Check and set visible layer from gsheet


    if (props.story[data].showFilter) {
      let newVisibleLayer = {};
      Object.keys(visibleLayer).forEach(v => newVisibleLayer[v] = props.story[data].showFilter.includes(v));
      setVisibleLayer(newVisibleLayer);
    } else {
      setVisibleLayer({
        "Pathfinders Exploratory": false,
        "Pathfinders Confirmed": false,
        "DPGs deployed": false,
        "DPGs developed": false
      });
    }
  };

  const handleSelectCountry = code => {
    setSelectedGood(prevState => {
      setPrevGood(prevState);
      return {};
    });
    const deployments = props.digitalGoods.filter(good => Object.keys(good.locations.deploymentCountries).includes(code));
    const developments = props.digitalGoods.filter(good => Object.keys(good.locations.developmentCountries).includes(code));
    const countryName = props.countries[code].name; // set country name in searchbox

    searchRef.current.changeInput(countryName); // count sdgs for each country

    const sdgsDeploymentsInfo = Object.entries(deployments.reduce((accum, curr) => [...accum, ...curr.SDGs.map(sdg => {
      return sdg.SDGNumber;
    })], []).reduce((acc, curr) => {
      return acc[curr] ? ++acc[curr]["dpgs"] : acc[curr]["dpgs"] = 1, acc;
    }, //initial value helps us create all elements of object
    _objectSpread({}, sdgsDefault()))); // count types of dpgs for each country

    const typeDeploymentsInfo = Object.entries(deployments.reduce((accum, curr) => [...accum, ...curr.type.map(type => type)], []).reduce((acc, curr) => {
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc;
    }, //initial value helps us create all elements of object
    {
      content: 0,
      data: 0,
      software: 0,
      standard: 0,
      "AI model": 0
    }));
    setZoom(6);
    setLonLat([props.countries[code].lon, props.countries[code].lat]);
    setSelectedCountry({
      deployments: deployments,
      developments: developments,
      pathfinder: props.countries[code].pathfinder,
      name: countryName,
      sdgsDeployments: sdgsDeploymentsInfo,
      typeDeployments: typeDeploymentsInfo
    });
    ref.current.clearStatesFromParent();
    searchRef.current.changeInput(countryName);
    width < 1008 && ref.current.scrollFromMap();
  };

  const handleSelectGoodPopup = goodName => {
    setSelectedGood(prevState => {
      setPrevGood(prevState);
      return props.digitalGoods.filter(el => el.name.toLowerCase().indexOf(goodName.toLowerCase()) !== -1)[0]; // filter and grab 1st result
    });
    setSelectedCountry({});
    searchRef.current.changeInput(goodName);
  };

  const handleChangeSearchbox = good => {
    setSelectedGood(prevState => {
      setPrevGood(prevState);
      return good;
    });
    setSelectedCountry({});
    ref.current.clearStatesFromParent();
  };

  const handleLayerToggle = layer => {
    setVisibleLayer(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [layer]: !prevState[layer]
    }));
  };

  const handleClearSearchbox = () => {
    setSelectedGood(prevState => {
      setPrevGood(prevState);
      return {};
    });
    setSelectedCountry({});
    ref.current.clearStatesFromParent();
  };

  const handleScrollToBottom = () => {
    width < 1008 ? ref.current.scrollFromParent() : mainRef.current.scrollIntoView(false, {
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  };

  return __jsx("div", {
    ref: mainRef,
    className: "visContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: loading ? "whiteBack" : "inactive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "loader",
    src: _public_logo_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "map",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: mapInteractive ? "mapContainer right" : "mapContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }
  }, mapInteractive && width < 1008 && __jsx(_searchBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: searchRef,
    goods: props.digitalGoods,
    countries: props.countries,
    onSelectCountry: handleSelectCountry,
    selectedGood: selectedGood.name,
    selectedCountry: selectedCountry.name,
    onSelectGood: handleChangeSearchbox,
    clearSelectedGood: handleClearSearchbox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }), props.story.length && props.story[currentStepIndex].image != "false" && !mapInteractive && __jsx("img", {
    className: "stepImage",
    src: props.story[currentStepIndex].imageUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }
  }), __jsx(Map, {
    style: "mapbox://styles/rolikasi/ckn67a95j022m17mcqog82g05",
    center: mapInteractive ? lonLat : [parseFloat(props.story[currentStepIndex].longitude), parseFloat(props.story[currentStepIndex].latitude)],
    zoom: mapInteractive ? [zoom] : [parseFloat(props.story[currentStepIndex].zoom)],
    pitch: visibleLayer["DPGs developed"] || visibleLayer["DPGs deployed"] ? 60 : 0 // pitch in degrees
    ,
    containerStyle: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      right: 0
    },
    className: mapInteractive ? "enabled" : "disabled",
    movingMethod: "flyTo",
    onDragEnd: (map, eventData) => {
      if (mapInteractive) {
        setLonLat([map.getCenter().lng, map.getCenter().lat]);
      }
    },
    onZoomEnd: (map, eventData) => {
      if (mapInteractive) {
        setZoom(map.getZoom());
      }
    },
    onStyleLoad: map => {
      var layers = map.getStyle().layers; // Find the index of the first symbol layer in the map style

      var firstSymbolId;

      for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === "symbol") {
          firstSymbolId = layers[i].id;
          break;
        }
      }

      let hardwareImg = new Image(20, 20);

      hardwareImg.onload = () => map.addImage("hardware-pattern", hardwareImg);

      hardwareImg.src = _public_hardware_svg__WEBPACK_IMPORTED_MODULE_4___default.a; //add layer for each good with map

      props.digitalGoods.map(good => {
        // check if layer is already created
        if (map.getLayer(good.name + "-develop")) {
          console.log(good.name + " is layer already created");
          return;
        } else {
          map.addLayer({
            id: good.name + "-develop",
            source: {
              type: "vector",
              url: "mapbox://rolikasi.2kn4jvyh"
            },
            "source-layer": "ne_10m_admin_0_countries-dxlasx",
            type: "fill",
            paint: {
              // 'fill-color': '#db3d44', // this is the color you want your tileset to have (red)
              "fill-pattern": "hardware-pattern" //this helps us distinguish individual countries a bit better by giving them an outline

            }
          }, firstSymbolId);
          map.setLayoutProperty(good.name + "-develop", "visibility", "none");
          map.setFilter(good.name + "-develop", ["in", "ADM0_A3_IS"].concat(Object.keys(good.locations.developmentCountries))); // This line lets us filter by country codes.

          map.addLayer({
            id: good.name + "-deploy",
            source: {
              type: "vector",
              url: "mapbox://rolikasi.2kn4jvyh"
            },
            "source-layer": "ne_10m_admin_0_countries-dxlasx",
            type: "fill",
            paint: {
              // 'fill-color': '#db3d44', // this is the color you want your tileset to have (red)
              "fill-color": "#3333AB",
              //this helps us distinguish individual countries a bit better by giving them an outline
              "fill-opacity": 0.2
            }
          }, firstSymbolId);
          map.setLayoutProperty(good.name + "-deploy", "visibility", "none");
          map.setFilter(good.name + "-deploy", ["in", "ADM0_A3_IS"].concat(Object.keys(good.locations.deploymentCountries))); // This line lets us filter by country codes.
        }
      }); // Declare the image

      if (map.getLayer("Pathfinders Exploratory")) {
        console.log("Pathfinders Exploratory is layer already created");
        return;
      } else {
        let exploratoryImg = new Image(20, 20);

        exploratoryImg.onload = () => map.addImage("exploratory-pattern", exploratoryImg);

        exploratoryImg.src = _public_exploratory_svg__WEBPACK_IMPORTED_MODULE_3___default.a; // Use it

        map.addLayer({
          // adding a layer containing the tileset with country boundaries
          id: "Pathfinders Exploratory",
          //this is the name of our layer, which we will need later
          source: {
            type: "vector",
            url: "mapbox://rolikasi.2kn4jvyh"
          },
          "source-layer": "ne_10m_admin_0_countries-dxlasx",
          type: "fill",
          paint: {
            "fill-pattern": "exploratory-pattern",
            "fill-opacity": 0.5
          },
          layout: {
            visibility: "none"
          }
        }, firstSymbolId);
        map.setFilter("Pathfinders Exploratory", ["in", "ADM0_A3_IS"].concat(Object.keys(props.pathfinderExploratory))); // This line lets us filter by country codes.
      }

      if (map.getLayer("Pathfinders Confirmed")) {
        console.log("Pathfinders Confirmed layer is already created");
        return;
      } else {
        // Declare the image
        let confirmedImg = new Image(20, 20);

        confirmedImg.onload = () => map.addImage("confirmed-pattern", confirmedImg);

        confirmedImg.src = _public_confirmed_svg__WEBPACK_IMPORTED_MODULE_2___default.a; // Use it

        map.addLayer({
          // adding a layer containing the tileset with country boundaries
          id: "Pathfinders Confirmed",
          //this is the name of our layer, which we will need later
          source: {
            type: "vector",
            url: "mapbox://rolikasi.2kn4jvyh"
          },
          "source-layer": "ne_10m_admin_0_countries-dxlasx",
          type: "fill",
          paint: {
            "fill-pattern": "confirmed-pattern",
            "fill-opacity": 0.5
          },
          layout: {
            visibility: "none"
          }
        }, firstSymbolId);
        map.setFilter("Pathfinders Confirmed", ["in", "ADM0_A3_IS"].concat(Object.keys(props.pathfinderConfirmed))); // This line lets us filter by country codes.
      }

      if (map.getLayer("countries")) {
        console.log("countries layer is already created");
        return;
      } else {
        map.addLayer({
          // adding a layer containing the tileset with country boundaries
          id: "countries",
          //this is the name of our layer, which we will need later
          source: {
            type: "vector",
            url: "mapbox://rolikasi.2kn4jvyh"
          },
          "source-layer": "ne_10m_admin_0_countries-dxlasx",
          type: "fill",
          paint: {
            "fill-color": "white",
            //this helps us distinguish individual countries a bit better by giving them an outline
            "fill-opacity": 0
          }
        }, firstSymbolId);
        map.setFilter("countries", ["in", "ADM0_A3_IS"].concat(Object.keys(props.countries))); // This line lets us filter by country codes.

        console.log('map.getLayer("countries")', map.getLayer("countries")); // Add 3d layer with extrudes

        map.addSource("DPGs developed-polygons-source", {
          type: "geojson",
          data: props.devPolygons
        });
        map.addSource("DPGs deployed-polygons-source", {
          type: "geojson",
          data: props.depPolygons
        });
        map.addLayer({
          id: "DPGs developed",
          source: "DPGs developed-polygons-source",
          type: "fill-extrusion",
          paint: {
            "fill-extrusion-color": "#FF952A",
            "fill-extrusion-height": ["get", "height"],
            "fill-extrusion-base": ["get", "base"]
          },
          layout: {
            visibility: "none"
          }
        });
        map.addLayer({
          id: "DPGs deployed",
          source: "DPGs deployed-polygons-source",
          type: "fill-extrusion",
          paint: {
            "fill-extrusion-color": "#3333AB",
            "fill-extrusion-height": ["get", "height"],
            "fill-extrusion-base": ["get", "base"]
          },
          layout: {
            visibility: "none"
          }
        });
        ["DPGs deployed", "DPGs developed"].map((layer, i) => map.addLayer({
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
            "text-offset": ["interpolate", ["linear"], ["zoom"], 4.5, ["literal", [0, 0.5]], 9, ["literal", [0, 3]]],
            visibility: "none"
          }
        }));
        setLoading(false); // set map so we can resize() it in future from anywhere

        setMapInstance(map); // set country info when clicked on country with any data

        map.on("click", "countries", function (mapElement) {
          handleSelectCountry(mapElement.features[0].properties.ADM0_A3_IS);
        });
        map.on("mouseenter", "countries", () => {
          map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "countries", () => {
          map.getCanvas().style.cursor = "";
        });
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 11
    }
  }, __jsx(react_mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["ZoomControl"], {
    position: "bottom-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 13
    }
  }), __jsx(react_mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["MapContext"].Consumer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 13
    }
  }, map => {
    Object.keys(visibleLayer).map(layer => {
      console.log("toggle ", layer, " visibility");
      map.getLayer(layer) ? map.setLayoutProperty(layer, "visibility", visibleLayer[layer] ? "visible" : "none") : null; // toggle text layer for 3d visualizations

      if (["DPGs developed", "DPGs deployed"].includes(layer)) {
        map.getLayer(layer + "-text") ? map.setLayoutProperty(layer + "-text", "visibility", visibleLayer[layer] ? "visible" : "none") : null;
      }
    });

    if (prevGood.name) {
      console.log("toggle prevgood visibility");
      map.setLayoutProperty(prevGood.name + "-develop", "visibility", "none");
      map.setLayoutProperty(prevGood.name + "-deploy", "visibility", "none");
    }

    if (selectedGood.name) {
      console.log("toggle selected good visibility");
      map.setLayoutProperty(selectedGood.name + "-develop", "visibility", "visible");
      map.setLayoutProperty(selectedGood.name + "-deploy", "visibility", "visible");
    }
  }))), __jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__["InView"], {
    as: "div",
    onChange: inView => {
      setMapInteractive(!inView);
      if (mapInstance) mapInstance.resize();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "scroller",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 11
    }
  }, __jsx(react_scrollama__WEBPACK_IMPORTED_MODULE_5__["Scrollama"], {
    onStepEnter: onStepEnter,
    offset: "0.7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 13
    }
  }, props.story.map((_, stepIndex) => __jsx(react_scrollama__WEBPACK_IMPORTED_MODULE_5__["Step"], {
    data: stepIndex,
    key: stepIndex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: `scrolly-p ${stepIndex == 0 ? "first" : ""} ${stepIndex == props.story.length - 1 ? "last" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 21
    }
  }, _.text), stepIndex == 0 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 23
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 25
    }
  }, "Scroll down to see the story or skip it and", " ", __jsx("span", {
    className: "button",
    onClick: handleScrollToBottom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 27
    }
  }, "explore the map")), __jsx("div", {
    className: "scrollArrows",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 27
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 27
    }
  }))))))))), __jsx("div", {
    className: selectedGood.name || Object.values(visibleLayer).some(item => item) && !mapInteractive && props.story[currentStepIndex].image == "false" ? "map-overlay active" : "map-overlay",
    id: "legend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "legendContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 11
    }
  }, selectedGood.name && legends.map((legend, index) => __jsx("div", {
    key: legend + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "legend-key",
    style: index == 0 ? {
      backgroundImage: `url(${_public_hardware_svg__WEBPACK_IMPORTED_MODULE_4___default.a})`
    } : {
      backgroundColor: colors[index]
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646,
      columnNumber: 17
    }
  }, legend))), !mapInteractive && Object.entries(visibleLayer).map((layer, index) => {
    return layer[1] && __jsx("div", {
      key: layer[0] + index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 651,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "legend-key rectangle",
      style: layerStyles[layer[0]],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 652,
        columnNumber: 17
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 657,
        columnNumber: 17
      }
    }, layer[0]));
  })))), mapInteractive && width >= 1008 && __jsx(_infoComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedGood: selectedGood,
    selectedCountry: selectedCountry,
    onSelectGood: handleSelectGoodPopup,
    onSelectCountry: handleSelectCountry,
    onLayerToggle: handleLayerToggle,
    visibleLayer: visibleLayer,
    ref: ref,
    SearchBox: __jsx(_searchBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      ref: searchRef,
      goods: props.digitalGoods,
      countries: props.countries,
      onSelectCountry: handleSelectCountry,
      selectedGood: selectedGood.name,
      selectedCountry: selectedCountry.name,
      onSelectGood: handleChangeSearchbox,
      clearSelectedGood: handleClearSearchbox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 673,
        columnNumber: 13
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
      columnNumber: 9
    }
  }), width < 1008 && __jsx(_infoComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedGood: selectedGood,
    selectedCountry: selectedCountry,
    onSelectGood: handleSelectGoodPopup,
    onSelectCountry: handleSelectCountry,
    visibleLayer: visibleLayer,
    onLayerToggle: handleLayerToggle,
    ref: ref,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 9
    }
  }));
}

/***/ }),

/***/ "./components/searchBox.js":
/*!*********************************!*\
  !*** ./components/searchBox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_dpgBadge_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/dpgBadge.svg */ "./public/dpgBadge.svg");
/* harmony import */ var _public_dpgBadge_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_dpgBadge_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UseWindowDimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UseWindowDimensions */ "./components/UseWindowDimensions.js");
var _jsxFileName = "/home/rolikasi/outreachy/digital-public-goods-map/components/searchBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SearchBox = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => {
  const {
    0: menuOpen,
    1: setMenuOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const textRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: inputValue,
    1: setInputValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.selectedGood ? props.selectedGood : props.selectedCountry ? props.selectedCountry : "");
  const {
    width
  } = Object(_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_2__["default"])();

  const handleMouseOver = () => {
    !menuOpen && setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    menuOpen && setMenuOpen(false);
  };

  const handleMenuClick = () => {
    !menuOpen && setMenuOpen(true);
  };

  const handleMenuSelect = () => {
    menuOpen && setMenuOpen(false);
  };

  const {
    0: searchFocused,
    1: setSearchFocused
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const onFocus = () => setSearchFocused(true);

  const onBlur = () => setSearchFocused(false);

  const handleSelect = (item, event) => {
    event.preventDefault(); // Here, we invoke the callback with the new value

    setInputValue(item.name);
    props.onSelectGood(item);
  };

  const handleSelectCountry = (item, event) => {
    event.preventDefault(); // Here, we invoke the callback with the new value

    setInputValue(item.name);
    props.onSelectCountry(item.code);
  };

  const handleClear = event => {
    event.preventDefault();
    event.stopPropagation();
    setInputValue("");
    props.clearSelectedGood();
  };

  const handleChangeInput = event => {
    setInputValue(event.target.value);
  };

  const handleInputSize = element => {
    element.style.height = "2rem";
    element.style.height = element.scrollHeight + "px";
  };

  const changeInput = value => {
    setInputValue(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, () => {
    return {
      changeInput: changeInput
    };
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    handleInputSize(textRef.current); // code to run after render goes here
  });
  return __jsx("div", {
    className: "selectContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx("div", {
    onClick: handleMenuClick,
    onMouseOver: handleMouseOver,
    onMouseLeave: handleMouseLeave,
    id: "dg-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("textarea", {
    ref: textRef,
    onFocus: onFocus,
    onBlur: e => onBlur(e),
    className: "searchInput",
    type: "text",
    value: inputValue,
    placeholder: "Select a digital good or country",
    onChange: e => handleChangeInput(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: menuOpen || searchFocused ? "arrow up active" : "arrow down active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx("div", {
    onClick: handleMenuSelect,
    onMouseLeave: handleMouseLeave,
    id: "dg-menu-dropdown",
    className: menuOpen || searchFocused ? "active" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, props.goods.filter(el => el.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1).sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => __jsx("a", {
    key: item.name + index,
    href: "#",
    onClick: e => handleSelect(item, e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, item.name, width > 1008 && __jsx("img", {
    width: "45px",
    height: "auto",
    src: _public_dpgBadge_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 34
    }
  }))), Object.values(props.countries).filter(el => el.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1).sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => __jsx("a", {
    key: item.name + index,
    href: "#",
    onClick: e => handleSelectCountry(item, e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, item.name)))), __jsx("div", {
    className: "closeIcon",
    onClick: e => handleClear(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, "x")));
});
/* harmony default export */ __webpack_exports__["default"] = (SearchBox);

/***/ }),

/***/ "./public/confirmed.svg":
/*!******************************!*\
  !*** ./public/confirmed.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzkiIGhlaWdodD0iNzkiIHZpZXdCb3g9IjAgMCA3OSA3OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxsaW5lIHkxPSItMS41IiB4Mj0iOTMuNzc1IiB5Mj0iLTEuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMC41IDAuODY2MDI1IDAuNTA3NzYzIC0wLjg2MTQ5NyAtMzcuMDk5NSAtMC44OTQyNTcpIiBzdHJva2U9IiMyQUE4QTgiIHN0cm9rZS13aWR0aD0iMyIvPgo8bGluZSB5MT0iLTEuNSIgeDI9IjkzLjc3NSIgeTI9Ii0xLjUiIHRyYW5zZm9ybT0ibWF0cml4KDAuNSAwLjg2NjAyNSAwLjUwNzc2MyAtMC44NjE0OTcgLTIxLjIxMiAtMC44OTQyNTcpIiBzdHJva2U9IiMyQUE4QTgiIHN0cm9rZS13aWR0aD0iMyIvPgo8bGluZSB5MT0iLTEuNSIgeDI9IjkzLjc3NSIgeTI9Ii0xLjUiIHRyYW5zZm9ybT0ibWF0cml4KDAuNSAwLjg2NjAyNSAwLjUwNzc2MyAtMC44NjE0OTcgLTUuMzI0NTggLTAuODk0MjU3KSIgc3Ryb2tlPSIjMkFBOEE4IiBzdHJva2Utd2lkdGg9IjMiLz4KPGxpbmUgeTE9Ii0xLjUiIHgyPSI5My43NzUiIHkyPSItMS41IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjUgMC44NjYwMjUgMC41MDc3NjMgLTAuODYxNDk3IDEwLjU2MjkgLTAuODk0MjU3KSIgc3Ryb2tlPSIjMkFBOEE4IiBzdHJva2Utd2lkdGg9IjMiLz4KPGxpbmUgeTE9Ii0xLjUiIHgyPSI5My43NzUiIHkyPSItMS41IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjUgMC44NjYwMjUgMC41MDc3NjMgLTAuODYxNDk3IDI2LjQ1MDMgLTAuODk0MjU3KSIgc3Ryb2tlPSIjMkFBOEE4IiBzdHJva2Utd2lkdGg9IjMiLz4KPGxpbmUgeTE9Ii0xLjUiIHgyPSI5My43NzUiIHkyPSItMS41IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjUgMC44NjYwMjUgMC41MDc3NjMgLTAuODYxNDk3IDQyLjMzNzggLTAuODk0MjU3KSIgc3Ryb2tlPSIjMkFBOEE4IiBzdHJva2Utd2lkdGg9IjMiLz4KPGxpbmUgeTE9Ii0xLjUiIHgyPSI5My43NzUiIHkyPSItMS41IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjUgMC44NjYwMjUgMC41MDc3NjMgLTAuODYxNDk3IDU4LjIyNTIgLTAuODk0MjU3KSIgc3Ryb2tlPSIjMkFBOEE4IiBzdHJva2Utd2lkdGg9IjMiLz4KPGxpbmUgeTE9Ii0xLjUiIHgyPSI5My43NzUiIHkyPSItMS41IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjUgMC44NjYwMjUgMC41MDc3NjMgLTAuODYxNDk3IDc0LjExMjcgLTEpIiBzdHJva2U9IiMyQUE4QTgiIHN0cm9rZS13aWR0aD0iMyIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9Ijc5IiBoZWlnaHQ9Ijc5IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNzkgMCkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),

/***/ "./public/dpgBadge.svg":
/*!*****************************!*\
  !*** ./public/dpgBadge.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA5Mi4xOSA0Ni40NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOTIuMTkgNDYuNDc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMkMyNjlBO30KCS5zdDF7ZmlsbDojODJEQkUxO30KCS5zdDJ7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPGc+CgkJCQk8Zz4KCQkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzMuNTIsNDQuNThIOC41MUwxLjI0LDMwLjU1bDAuMTYtMC4zNEwxNC43MSwxLjg5bDY0Ljk1LDBsNy4yNSwxNC4wN0w3My41Miw0NC41OHogTTkuNDIsNDMuMDhoNjMuMTQKCQkJCQkJbDEyLjY4LTI3LjA4bC02LjQ5LTEyLjZIMTUuNjdMMi45MSwzMC41Mkw5LjQyLDQzLjA4eiIvPgoJCQkJPC9nPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTczLjUyLDQ0LjU4SDguNTFMMS4yNCwzMC41NWwwLjE2LTAuMzRMMTQuNzEsMS44OWw2NC45NSwwbDcuMjUsMTQuMDdMNzMuNTIsNDQuNTh6IE05LjQyLDQzLjA4aDYzLjE0CgkJCQkJCWwxMi42OC0yNy4wOGwtNi40OS0xMi42SDE1LjY3TDIuOTEsMzAuNTJMOS40Miw0My4wOHoiLz4KCQkJCTwvZz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTQuNzEsMS44OSA3OC43NSwxLjg5IDg1LjI0LDE1Ljk5IDcyLjU2LDQzLjA4IDkuNDIsNDMuMDggMi45MSwzMC41MiAJIi8+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE4LjA1LDE1LjRoNC4xMWM0LjE0LDAsNy41MiwzLjM2LDcuNTIsNy41MnMtMy4zOCw3LjUyLTcuNTIsNy41MmgtNC4xMVYxNS40eiBNMjIuMTQsMjguODQKCQkJCWMzLjM0LDAsNS45NC0yLjUzLDUuOTQtNS45MlMyNS40OCwxNywyMi4xNCwxN2gtMi41MXYxMS44M0gyMi4xNHoiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyLjMzLDE5LjU4YzAsMi4zMy0xLjg2LDQuMTYtNC4xOSw0LjE2aC0zLjc5djYuN2gtMS42VjE1LjRoNS4zOUM0MC40NywxNS40LDQyLjMzLDE3LjI4LDQyLjMzLDE5LjU4egoJCQkJIE00MC43MywxOS42MWMwLTEuNi0xLjIzLTIuNjYtMi43My0yLjY2aC0zLjY0djUuMjdoMy42NEMzOS41LDIyLjIyLDQwLjczLDIxLjI2LDQwLjczLDE5LjYxeiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTkuNTEsMjIuNDd2MC40NWMwLDQuMjYtMy40Niw3LjcyLTcuNzIsNy43MmMtNC4yOSwwLTcuNzItMy40Ni03LjcyLTcuNzJjMC00LjI2LDMuNDQtNy43Miw3LjcyLTcuNzIKCQkJCWMyLjg4LDAsNS4zOSwxLjU4LDYuNjksMy45MWwtMS4zOCwwLjc4Yy0xLjAzLTEuODYtMy4wMy0zLjA4LTUuMzEtMy4wOGMtMy4zOSwwLTYuMTIsMi43MS02LjEyLDYuMTJzMi43Myw2LjEyLDYuMTIsNi4xMgoJCQkJYzMuMDMsMCw1LjU0LTIuMTYsNi4wMi01LjA3aC02LjA0di0xLjVINTkuNTF6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxyZWN0IHg9IjY3LjQyIiB5PSIxMS4wNCIgY2xhc3M9InN0MCIgd2lkdGg9IjE5LjkyIiBoZWlnaHQ9IjE5LjkyIi8+CgkJCQoJCQkJPHJlY3QgeD0iNjcuMzgiIHk9IjEwLjk2IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjg2NiAwLjUgLTAuNSAwLjg2NiAyMC44MjAxIC0zNS44NjY1KSIgY2xhc3M9InN0MCIgd2lkdGg9IjE5LjkyIiBoZWlnaHQ9IjE5LjkyIi8+CgkJCTxyZWN0IHg9IjY3LjM4IiB5PSIxMC45NiIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NjYgLTAuNSAwLjUgMC44NjYgLTAuMDk3NSA0MS40NzE0KSIgY2xhc3M9InN0MCIgd2lkdGg9IjE5LjkyIiBoZWlnaHQ9IjE5LjkyIi8+CgkJPC9nPgoJCTxwb2x5bGluZSBjbGFzcz0ic3QyIiBwb2ludHM9IjcyLjM0LDIxLjE1IDc2LjEyLDI0LjkzIDgzLjQ4LDE3LjU3IAkJIi8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./public/exploratory.svg":
/*!********************************!*\
  !*** ./public/exploratory.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzkiIGhlaWdodD0iNzkiIHZpZXdCb3g9IjAgMCA3OSA3OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxsaW5lIHkxPSItMS41IiB4Mj0iOTMuNzc1IiB5Mj0iLTEuNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNSAwLjg2NjAyNSAtMC41MDc3NjMgLTAuODYxNDk3IDExNi4wOTkgLTAuODk0MjU3KSIgc3Ryb2tlPSIjRjA2MDc2IiBzdHJva2Utd2lkdGg9IjMiLz4KPGxpbmUgeTE9Ii0xLjUiIHgyPSI5My43NzUiIHkyPSItMS41IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC41IDAuODY2MDI1IC0wLjUwNzc2MyAtMC44NjE0OTcgMTAwLjIxMiAtMC44OTQyNTcpIiBzdHJva2U9IiNGMDYwNzYiIHN0cm9rZS13aWR0aD0iMyIvPgo8bGluZSB5MT0iLTEuNSIgeDI9IjkzLjc3NSIgeTI9Ii0xLjUiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjUgMC44NjYwMjUgLTAuNTA3NzYzIC0wLjg2MTQ5NyA4NC4zMjQ2IC0wLjg5NDI1NykiIHN0cm9rZT0iI0YwNjA3NiIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxsaW5lIHkxPSItMS41IiB4Mj0iOTMuNzc1IiB5Mj0iLTEuNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNSAwLjg2NjAyNSAtMC41MDc3NjMgLTAuODYxNDk3IDY4LjQzNzEgLTAuODk0MjU3KSIgc3Ryb2tlPSIjRjA2MDc2IiBzdHJva2Utd2lkdGg9IjMiLz4KPGxpbmUgeTE9Ii0xLjUiIHgyPSI5My43NzUiIHkyPSItMS41IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC41IDAuODY2MDI1IC0wLjUwNzc2MyAtMC44NjE0OTcgNTIuNTQ5NyAtMC44OTQyNTcpIiBzdHJva2U9IiNGMDYwNzYiIHN0cm9rZS13aWR0aD0iMyIvPgo8bGluZSB5MT0iLTEuNSIgeDI9IjkzLjc3NSIgeTI9Ii0xLjUiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjUgMC44NjYwMjUgLTAuNTA3NzYzIC0wLjg2MTQ5NyAzNi42NjIyIC0wLjg5NDI1NykiIHN0cm9rZT0iI0YwNjA3NiIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxsaW5lIHkxPSItMS41IiB4Mj0iOTMuNzc1IiB5Mj0iLTEuNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNSAwLjg2NjAyNSAtMC41MDc3NjMgLTAuODYxNDk3IDIwLjc3NDggLTAuODk0MjU3KSIgc3Ryb2tlPSIjRjA2MDc2IiBzdHJva2Utd2lkdGg9IjMiLz4KPGxpbmUgeTE9Ii0xLjUiIHgyPSI5My43NzUiIHkyPSItMS41IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC41IDAuODY2MDI1IC0wLjUwNzc2MyAtMC44NjE0OTcgNC44ODczMyAtMSkiIHN0cm9rZT0iI0YwNjA3NiIgc3Ryb2tlLXdpZHRoPSIzIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNzkiIGhlaWdodD0iNzkiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./public/github.png":
/*!***************************!*\
  !*** ./public/github.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/globe.png":
/*!**************************!*\
  !*** ./public/globe.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKuSURBVHgBxVe9ldpAEF5kB5ABFcgVnDrwXubMdIAuc8ZdBYgKfK7AXAfnzBlyB+cKpGsA4YwI/A1vxh6WWSHeBcx7q132m51vZn8H564kvUuUhxBUGUrKhWSD8kJlA+lqqxMx+Hyv15uj6c+olvv9/gn8S/cW4ghh7f5HG+ur4cAtHKhdRJIW0jlIV0xKhh5QRoKjvUT5pog+oNyJExhbjcfjubtEiHQ0Gu2pYPAjry3159xfDVmoTX1o3qvxhRrfjVyRNmhPNKZIcqU/UfrDoL/pRA7lVDwNSXW0xrhVGHXgFGFeY0drzGtK9QIb4zmwP6UP1nHhTuWJx33WnWRD9gFvUjPatohkJprI2KFMq55uhVVh1EnHiDxjvyxivjhK/pmHmBV1Il6h03NfGRpOkuRjDBNRTt0Y8JJrLzMiEWdi2Dr0u90u5eaLi0tJHwSQhQBHXWquI2IM+m1ZVMYqFxe5p4cR/JXrlD7vtTK8mmETzCIDyYEauDsjh43YhtMncVcSibimD92/WI67UImPWAo8Bf5qGaIjR/czmpumaUYG/gicZvOwJIkmBpA6W2T92uY55Tq2AW80ngTKPrwASBCpbDrv4pKxbh0CPBv+hDjY7rlh9J9jLiIwLGfdumQ816VkKXpzLdjAzIj6WYxbMxIad6dOHW4syk7MkfLK4Bn7GsP0k6gwuedXBja33oDwOC3Ys/vwWYT8YO+nrmNEZANYwditaxOVPRwlAsELNDGirUJSlQgUrovEUhd66FtSn1wcpKVS4wuL453Vud1uy36/3+Mj4AeDQY7ff9D+iZLR3Y0XixQoctKpUR6g8wV939H+RHYooViv14XFcS69TTkrSVV37c6kt3w0KYspI6Y7J/Q5qqm6BEzpQngRsXJA/sJQkfNcc7noL8zV5C8g2UnFXX9EDwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/hardware.svg":
/*!*****************************!*\
  !*** ./public/hardware.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9InN0YXJ0X2hlcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxMHB4IiBoZWlnaHQ9IjEwcHgiIHZpZXdCb3g9IjAgMCAxNSAxNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTUgMTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGOTUyQTsiIGQ9Ik0xMy43OTE5LDMuMjYxOWMwLDAtMS42NzYsMS42NzUtMi4xMTYzLDIuMTIwOGMtMC4wODUsMC4wODYxLTAuMTY4OCwwLjExMzUtMC4yODIsMC4wOTYxCgljLTAuMTQ4MS0wLjAyMjYtMC4yOTc0LTAuMDM4LTAuNDQ2Mi0wLjA1NThjLTAuNDA3Mi0wLjA0ODUtMC44MTQ1LTAuMDk2Ni0xLjIyOTItMC4xNDU4QzkuNjQ5LDQuNjg1Miw5LjU3ODcsNC4xMDQ5LDkuNTE3NywzLjUyMzYKCUM5LjUxMiwzLjQ2ODksOS41NTA5LDMuMzk0Myw5LjU5MjUsMy4zNTIyYzAuNTA3MS0wLjUxMzQsMS45MjYxLTEuOTI4NywyLjEzNC0yLjEzNmMtMC40NTA4LTAuMjEyOS0xLjIyNDMtMC4yOTY4LTEuODAwNy0wLjIwMzEKCWMtMi4xODAxLDAuMzU0My0zLjUxMTIsMi41MzQtMi44MjA2LDQuNjI1QzcuMTQzMiw1Ljc1Myw3LjExOTQsNS44MjAxLDcuMDM3NCw1LjkwMkM1LjE4OTEsNy43NDU0LDMuMzQzNiw5LjU5MTQsMS40OTgsMTEuNDM3NAoJYy0wLjA2MTYsMC4wNjE2LTAuMTIzMSwwLjEyNC0wLjE3NzksMC4xOTEzYy0wLjUyNjQsMC42NDczLTAuMzg3MywxLjYyNjQsMC4yOTc0LDIuMTAyYzAuNjA0NCwwLjQxOTcsMS4zNjU4LDAuMzQ0MiwxLjkwNTMtMC4xOTQ4CgljMS44NTM0LTEuODUxOSwzLjcwNTktMy43MDQ3LDUuNTU2LTUuNTU5OEM5LjE3MDcsNy44ODQsOS4yNDM3LDcuODUyNiw5LjM3NzksNy44OTgzYzAuNjE4OSwwLjIxMDksMS4yNTI0LDAuMjM1NCwxLjg4ODQsMC4wODg0CgljMS45Mzg2LTAuNDQ3OCwzLjEyNTEtMi4zNzMyLDIuNjU0OS00LjMwMzRDMTMuODg5NSwzLjU1MzIsMTMuODQzLDMuNDI0NCwxMy43OTE5LDMuMjYxOXoiLz4KPC9zdmc+"

/***/ }),

/***/ "./public/logo.svg":
/*!*************************!*\
  !*** ./public/logo.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA5MC45IDY5LjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkwLjkgNjkuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMxRjE4ODc7fQoJLnN0MXtmaWxsOiMyQTE4QTM7fQoJLnN0MntmaWxsOiMzMTI4QjM7fQoJLnN0M3tmaWxsOiM4N0RBRTE7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjYuNSwxNWMwLTAuMywwLjMtMC41LDAuNi0wLjVjMC4zLDAsMC41LDAuMiwwLjUsMC41YzAsMC4zLTAuMywwLjUtMC41LDAuNUM2Ni43LDE1LjYsNjYuNSwxNS4zLDY2LjUsMTV6CgkJCQkgTTY2LjYsMTYuNWgwLjh2NS4xaC0wLjhWMTYuNXoiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTc0LjMsMTYuNXY1LjVjMCwxLjUtMS4yLDIuNi0yLjYsMi42Yy0xLjEsMC0yLjEtMC43LTIuNS0xLjhsMC43LTAuM2MwLjIsMC43LDAuOSwxLjMsMS44LDEuMwoJCQkJYzEsMCwxLjktMC44LDEuOS0xLjlWMjFjLTAuNSwwLjUtMS4xLDAuOC0xLjksMC44Yy0xLjUsMC0yLjYtMS4yLTIuNi0yLjZjMC0xLjUsMS4yLTIuNiwyLjYtMi42YzAuNywwLDEuNCwwLjMsMS44LDAuN3YtMC42CgkJCQlINzQuM3ogTTczLjUsMTkuMWMwLTEtMC44LTEuOS0xLjktMS45Yy0xLDAtMS45LDAuOC0xLjksMS45YzAsMSwwLjgsMS45LDEuOSwxLjlDNzIuNywyMC45LDczLjUsMjAuMSw3My41LDE5LjF6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03Ni4xLDE1YzAtMC4zLDAuMy0wLjUsMC42LTAuNWMwLjMsMCwwLjUsMC4yLDAuNSwwLjVjMCwwLjMtMC4zLDAuNS0wLjUsMC41Qzc2LjQsMTUuNiw3Ni4xLDE1LjMsNzYuMSwxNXoKCQkJCSBNNzYuMywxNi41aDAuOHY1LjFoLTAuOFYxNi41eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODAsMTcuM3YyLjljMCwwLjUsMC40LDAuOCwwLjgsMC44aDAuNnYwLjZjLTAuMSwwLjEtMC40LDAuMi0wLjcsMC4yYy0wLjgsMC0xLjUtMC42LTEuNS0xLjR2LTNoLTAuOXYtMC44CgkJCQloMC45di0yLjJIODB2Mi4yaDEuNHYwLjhIODB6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04Ny44LDIxdjAuN2MtMC4xLDAuMS0wLjIsMC4xLTAuNCwwLjFjLTAuNiwwLTEtMC40LTEuMi0wLjljLTAuNCwwLjYtMS4xLDAuOS0yLDAuOWMtMS4xLDAtMS43LTAuNi0xLjctMS40CgkJCQljMC0wLjksMC43LTEuNCwxLjctMS40aDEuOXYtMC40YzAtMC44LTAuNi0xLjItMS40LTEuMmMtMC44LDAtMS40LDAuNC0xLjQsMS4yaC0wLjhjMC0xLjIsMS0yLDIuMi0yYzEuMiwwLDIuMiwwLjgsMi4yLDJ2MS45CgkJCQljMCwwLjUsMC4yLDAuNywwLjUsMC43SDg3Ljh6IE04Ni4xLDE5Ljl2LTAuM2gtMS44Yy0wLjYsMC0xLDAuMy0xLDAuOGMwLDAuNSwwLjQsMC44LDEsMC44Qzg1LjIsMjEsODUuOSwyMC42LDg2LjEsMTkuOXoiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTg4LjgsMTIuM2gwLjh2OS40aC0wLjhWMTIuM3oiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY0LjksMzB2LTMuM2gwLjh2My4yYzAsMC44LDAuNSwxLjIsMS4xLDEuMmMwLjcsMCwxLjEtMC41LDEuMS0xLjJ2LTMuMmgwLjhWMzBjMCwxLjItMC44LDEuOS0xLjksMS45CgkJCQlDNjUuNywzMS45LDY0LjksMzEuMiw2NC45LDMweiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzMuMSwyNi42Yy0wLjcsMC0xLjQsMC4zLTEuOSwwLjh2LTMuNmMtMC4zLTAuMS0wLjUtMC4xLTAuOC0wLjJ2OC4zaDAuOHYtMC43YzAuNSwwLjUsMS4xLDAuOCwxLjksMC44CgkJCQljMS41LDAsMi42LTEuMiwyLjYtMi42Uzc0LjUsMjYuNiw3My4xLDI2LjZ6IE03My4xLDMxLjFjLTEsMC0xLjktMC44LTEuOS0xLjljMC0xLDAuOC0xLjksMS45LTEuOWMxLDAsMS45LDAuOCwxLjksMS45CgkJCQlDNzQuOSwzMC4zLDc0LjEsMzEuMSw3My4xLDMxLjF6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03Ny4yLDIyLjRINzh2OS40aC0wLjhWMjIuNHoiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTc5LjgsMjUuMmMwLTAuMywwLjMtMC41LDAuNi0wLjVjMC4zLDAsMC41LDAuMiwwLjUsMC41YzAsMC4zLTAuMywwLjUtMC41LDAuNQoJCQkJQzgwLjEsMjUuOCw3OS44LDI1LjUsNzkuOCwyNS4yeiBNODAsMjYuN2gwLjh2NS4xSDgwVjI2Ljd6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04Mi40LDI5LjNjMC0xLjUsMS4yLTIuNiwyLjYtMi42YzEuMiwwLDIuMiwwLjgsMi41LDEuOGgtMC44Yy0wLjMtMC42LTAuOS0xLTEuNy0xYy0xLDAtMS45LDAuOC0xLjksMS45CgkJCQlzMC44LDEuOSwxLjksMS45YzAuNywwLDEuNC0wLjQsMS43LTFoMC44Yy0wLjMsMS4xLTEuMywxLjgtMi41LDEuOEM4My41LDMxLjksODIuNCwzMC43LDgyLjQsMjkuM3oiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY2LjgsMzcuMXYwLjJjMCwyLjItMS44LDMuOS0zLjksMy45Yy0yLjIsMC0zLjktMS44LTMuOS0zLjljMC0yLjIsMS43LTMuOSwzLjktMy45YzEuNSwwLDIuNywwLjgsMy40LDIKCQkJCWwtMC43LDAuNGMtMC41LTAuOS0xLjUtMS42LTIuNy0xLjZjLTEuNywwLTMuMSwxLjQtMy4xLDMuMWMwLDEuNywxLjQsMy4xLDMuMSwzLjFjMS41LDAsMi44LTEuMSwzLjEtMi42aC0zLjF2LTAuOEg2Ni44eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjgsMzguNmMwLTEuNSwxLjItMi42LDIuNi0yLjZjMS41LDAsMi42LDEuMiwyLjYsMi42YzAsMS41LTEuMiwyLjYtMi42LDIuNkM2OS4yLDQxLjMsNjgsNDAuMSw2OCwzOC42egoJCQkJIE03Mi41LDM4LjZjMC0xLTAuOC0xLjktMS45LTEuOWMtMSwwLTEuOSwwLjgtMS45LDEuOXMwLjgsMS45LDEuOSwxLjlDNzEuNyw0MC41LDcyLjUsMzkuNyw3Mi41LDM4LjZ6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03NC40LDM4LjZjMC0xLjUsMS4yLTIuNiwyLjYtMi42YzEuNSwwLDIuNiwxLjIsMi42LDIuNmMwLDEuNS0xLjIsMi42LTIuNiwyLjYKCQkJCUM3NS42LDQxLjMsNzQuNCw0MC4xLDc0LjQsMzguNnogTTc4LjksMzguNmMwLTEtMC44LTEuOS0xLjktMS45Yy0xLDAtMS45LDAuOC0xLjksMS45czAuOCwxLjksMS45LDEuOQoJCQkJQzc4LjEsNDAuNSw3OC45LDM5LjcsNzguOSwzOC42eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODYuMiwzMS44djkuNGgtMC44di0wLjdjLTAuNSwwLjUtMS4xLDAuOC0xLjksMC44Yy0xLjUsMC0yLjYtMS4yLTIuNi0yLjZjMC0xLjUsMS4yLTIuNiwyLjYtMi42CgkJCQljMC43LDAsMS40LDAuMywxLjksMC44di00LjlIODYuMnogTTg1LjQsMzguNmMwLTEtMC44LTEuOS0xLjktMS45Yy0xLDAtMS45LDAuOC0xLjksMS45czAuOCwxLjksMS45LDEuOQoJCQkJQzg0LjUsNDAuNSw4NS40LDM5LjcsODUuNCwzOC42eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODcuNSw0MC4ybDAuOC0wLjNjMC4xLDAuNCwwLjUsMC42LDEsMC42YzAuNSwwLDAuOC0wLjMsMC44LTAuN2MwLTAuNC0wLjMtMC42LTAuOS0wLjgKCQkJCWMtMC45LTAuMy0xLjQtMC44LTEuNC0xLjZjMC0wLjksMC43LTEuNCwxLjUtMS40YzAuNiwwLDEuMywwLjQsMS41LDAuOEw5MCwzNy4yYy0wLjEtMC4zLTAuNC0wLjQtMC44LTAuNAoJCQkJYy0wLjQsMC0wLjcsMC4yLTAuNywwLjZjMCwwLjQsMC4zLDAuNiwwLjksMC45YzAuNywwLjMsMS40LDAuNiwxLjQsMS41YzAsMC45LTAuNywxLjUtMS42LDEuNUM4OC41LDQxLjMsODcuNyw0MC44LDg3LjUsNDAuMnoiCgkJCQkvPgoJCQk8Zz4KCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MC4zLDQ2LjhMNjAuMyw0Ni44bC0wLjcsMS43aC0wLjRsMi00LjdsMiw0LjdoLTAuNGwtMC43LTEuNmwwLTAuMWwtMC45LTIuMkw2MC4zLDQ2Ljh6IE02MC4xLDQ2LjdoMi4xCgkJCQkJbDAuMSwwLjNINjBMNjAuMSw0Ni43eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY0LjEsNDMuNXY1LjFoLTAuM3YtNS4xSDY0LjF6Ii8+CgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjUuNCw0My41djUuMWgtMC4zdi01LjFINjUuNHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02Ni41LDQ0YzAsMCwwLjEtMC4xLDAuMi0wLjFjMC4xLDAsMC4xLDAsMC4yLDAuMWMwLDAsMC4xLDAuMSwwLjEsMC4yYzAsMC4xLDAsMC4xLTAuMSwwLjIKCQkJCQljMCwwLTAuMSwwLjEtMC4yLDAuMWMtMC4xLDAtMC4xLDAtMC4yLTAuMWMwLDAtMC4xLTAuMS0wLjEtMC4yQzY2LjUsNDQuMSw2Ni41LDQ0LjEsNjYuNSw0NHogTTY2LjksNDUuNnYzaC0wLjN2LTNINjYuOXoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02Ny45LDQ2LjJjMC4xLTAuMiwwLjMtMC40LDAuNS0wLjVjMC4yLTAuMSwwLjUtMC4yLDAuNy0wLjJjMC4zLDAsMC41LDAuMSwwLjcsMC4yCgkJCQkJYzAuMiwwLjEsMC4zLDAuMywwLjQsMC42YzAuMSwwLjIsMC4yLDAuNSwwLjIsMC44YzAsMC4zLTAuMSwwLjYtMC4yLDAuOGMtMC4xLDAuMi0wLjMsMC40LTAuNCwwLjZjLTAuMiwwLjEtMC40LDAuMi0wLjcsMC4yCgkJCQkJYy0wLjMsMC0wLjUtMC4xLTAuNy0wLjJjLTAuMi0wLjEtMC40LTAuMy0wLjUtMC41Yy0wLjEtMC4yLTAuMi0wLjUtMC4yLTAuOEM2Ny43LDQ2LjcsNjcuOCw0Ni41LDY3LjksNDYuMnogTTY4LjIsNDcuNwoJCQkJCWMwLjEsMC4yLDAuMiwwLjMsMC40LDAuNGMwLjIsMC4xLDAuNCwwLjEsMC42LDAuMWMwLjIsMCwwLjQtMC4xLDAuNS0wLjJzMC4zLTAuMywwLjQtMC40YzAuMS0wLjIsMC4xLTAuNCwwLjEtMC42CgkJCQkJcy0wLjEtMC41LTAuMS0wLjZjLTAuMS0wLjItMC4yLTAuMy0wLjQtMC40Yy0wLjItMC4xLTAuMy0wLjItMC41LTAuMmMtMC4yLDAtMC40LDAtMC42LDAuMWMtMC4yLDAuMS0wLjMsMC4yLTAuNCwwLjQKCQkJCQljLTAuMSwwLjItMC4yLDAuNC0wLjIsMC43QzY4LDQ3LjMsNjguMSw0Ny41LDY4LjIsNDcuN3ogTTcwLjYsNDUuNnYzaC0wLjN2LTNINzAuNnoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03My4zLDQ2Yy0wLjEtMC4xLTAuMy0wLjItMC41LTAuMmMtMC4yLDAtMC4zLDAtMC41LDAuMWMtMC4xLDAuMS0wLjIsMC4yLTAuMywwLjMKCQkJCQljLTAuMSwwLjEtMC4xLDAuMy0wLjEsMC41djEuOGgtMC4zdi0zaDAuM3YwLjZjMC4xLTAuMiwwLjItMC40LDAuNC0wLjVjMC4yLTAuMSwwLjQtMC4yLDAuNi0wLjJjMC4zLDAsMC41LDAuMSwwLjcsMC4zCgkJCQkJYzAuMiwwLjIsMC4yLDAuNSwwLjIsMC44djJoLTAuM3YtMS45QzczLjUsNDYuNCw3My40LDQ2LjIsNzMuMyw0NnoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03NS4xLDQ3LjdjMC4xLDAuMiwwLjIsMC4zLDAuNCwwLjRjMC4yLDAuMSwwLjQsMC4yLDAuNiwwLjJjMC4yLDAsMC4zLDAsMC40LTAuMWMwLjEsMCwwLjMtMC4xLDAuNC0wLjIKCQkJCQljMC4xLTAuMSwwLjItMC4yLDAuMi0wLjJ2MC40Yy0wLjEsMC4xLTAuMiwwLjItMC40LDAuM2MtMC4yLDAuMS0wLjQsMC4xLTAuNiwwLjFjLTAuMywwLTAuNi0wLjEtMC44LTAuMnMtMC40LTAuMy0wLjUtMC42CgkJCQkJYy0wLjEtMC4yLTAuMi0wLjUtMC4yLTAuOGMwLTAuMywwLjEtMC42LDAuMi0wLjhjMC4xLTAuMiwwLjMtMC40LDAuNS0wLjZjMC4yLTAuMSwwLjUtMC4yLDAuOC0wLjJjMC4yLDAsMC40LDAsMC42LDAuMQoJCQkJCWMwLjIsMC4xLDAuMywwLjIsMC40LDAuM3YwLjRjMC0wLjEtMC4xLTAuMi0wLjItMC4yYy0wLjEtMC4xLTAuMi0wLjEtMC40LTAuMmMtMC4xLDAtMC4zLTAuMS0wLjQtMC4xYy0wLjIsMC0wLjQsMC4xLTAuNiwwLjIKCQkJCQljLTAuMiwwLjEtMC4zLDAuMy0wLjQsMC40Yy0wLjEsMC4yLTAuMiwwLjQtMC4yLDAuNlM3NSw0Ny41LDc1LjEsNDcuN3oiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03OC40LDQ4LjRjLTAuMi0wLjEtMC40LTAuMy0wLjUtMC42Yy0wLjEtMC4yLTAuMi0wLjUtMC4yLTAuOHMwLjEtMC42LDAuMi0wLjhjMC4xLTAuMiwwLjMtMC40LDAuNS0wLjUKCQkJCQljMC4yLTAuMSwwLjUtMC4yLDAuNy0wLjJjMC4zLDAsMC41LDAuMSwwLjcsMC4yYzAuMiwwLjEsMC40LDAuMywwLjUsMC41YzAuMSwwLjIsMC4yLDAuNSwwLjIsMC44YzAsMCwwLDAuMSwwLDAuMQoJCQkJCWMwLDAsMCwwLjEsMCwwLjFINzh2LTAuM2gyLjNsLTAuMSwwLjJjMCwwLDAtMC4xLDAtMC4xYzAsMCwwLTAuMSwwLTAuMWMwLTAuMiwwLTAuNC0wLjEtMC41Yy0wLjEtMC4yLTAuMi0wLjMtMC40LTAuNAoJCQkJCWMtMC4yLTAuMS0wLjMtMC4xLTAuNS0wLjFjLTAuMiwwLTAuNCwwLjEtMC42LDAuMmMtMC4yLDAuMS0wLjMsMC4yLTAuNCwwLjRjLTAuMSwwLjItMC4xLDAuNC0wLjEsMC43YzAsMC4zLDAsMC41LDAuMSwwLjcKCQkJCQljMC4xLDAuMiwwLjIsMC4zLDAuNCwwLjRjMC4yLDAuMSwwLjQsMC4yLDAuNiwwLjJjMC4yLDAsMC40LTAuMSwwLjYtMC4xYzAuMi0wLjEsMC4zLTAuMywwLjUtMC41bDAuMywwLjIKCQkJCQljLTAuMiwwLjMtMC40LDAuNS0wLjYsMC42cy0wLjUsMC4yLTAuOCwwLjJDNzguOSw0OC42LDc4LjYsNDguNSw3OC40LDQ4LjR6Ii8+CgkJCTwvZz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU5LjEsMTRoMi4xYzIuMSwwLDMuOCwxLjcsMy44LDMuOGMwLDIuMS0xLjcsMy44LTMuOCwzLjhoLTIuMVYxNHogTTYxLjIsMjAuOGMxLjcsMCwzLTEuMywzLTMKCQkJCWMwLTEuNy0xLjMtMy0zLTNoLTEuM3Y2SDYxLjJ6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02My45LDI2LjNjMCwxLjItMC45LDIuMS0yLjEsMi4xaC0xLjl2My40aC0wLjh2LTcuNmgyLjdDNjMsMjQuMiw2My45LDI1LjEsNjMuOSwyNi4zeiBNNjMuMSwyNi4zCgkJCQljMC0wLjgtMC42LTEuMy0xLjQtMS4zaC0xLjh2Mi43aDEuOEM2Mi41LDI3LjYsNjMuMSwyNy4xLDYzLjEsMjYuM3oiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzMuNCwwTDAsMTV2NDUuNmwxMy4xLDguNGwzMy4zLTE1VjguNUwzMy40LDB6IE0xMy4xLDU0LjdWMjMuNGwyMC4zLTkuN3YzMS42TDEzLjEsNTQuN3oiLz4KCQk8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjMzLjQsMCAzMy40LDEzLjggMTMuMSwyMy40IDAsMTUgCQkiLz4KCQk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjEzLjEsNjkuMSAwLDYwLjYgMCwxNSAxMy4xLDIzLjQgCQkiLz4KCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjMzLjQsMCAzMy40LDQ1LjQgNDYuNCw1NC4xIDQ2LjQsOC41IAkJIi8+CgkJPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIxMy4xLDY5LjEgNDYuNCw1NC4xIDMzLjQsNDUuNCAxMy4xLDU0LjcgCQkiLz4KCQk8cG9seWdvbiBjbGFzcz0ic3QzIiBwb2ludHM9IjMzLjUsNDUuNCA0Ni41LDU0LjEgNDYuNSwzOS40IAkJIi8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZVdpbmRvd0RpbWVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmZvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFwQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VhcmNoQm94LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9jb25maXJtZWQuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9kcGdCYWRnZS5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2V4cGxvcmF0b3J5LnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZ2l0aHViLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZ2xvYmUucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9oYXJkd2FyZS5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2xvZ28uc3ZnIl0sIm5hbWVzIjpbImdldFdpbmRvd0RpbWVuc2lvbnMiLCJpbm5lcldpZHRoIiwid2lkdGgiLCJpbm5lckhlaWdodCIsImhlaWdodCIsIndpbmRvdyIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aW5kb3dEaW1lbnNpb25zIiwic2V0V2luZG93RGltZW5zaW9ucyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJGb290ZXIiLCJidXR0b25TdHlsZXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJleHBsb3JhdG9yeVBhdHRlcm4iLCJjb25maXJtZWRQYXR0ZXJuIiwiYmFja2dyb3VuZENvbG9yIiwic2Rnc0RlZmF1bHQiLCJuYW1lIiwib3BlbiIsIkluZm9Db21wb25lbnQiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJvcGVuQ291bnRyaWVzIiwic2V0T3BlbkNvdW50cmllcyIsImRldmVsb3BtZW50IiwiZGVwbG95bWVudCIsImRlcGxveW1lbnRzSW5Db3VudHJ5IiwiZGV2ZWxvcG1lbnRzSW5Db3VudHJ5IiwibWVudUluVmlldyIsInNldE1lbnVJblZpZXciLCJzZGdzIiwic2V0U2RncyIsInRvZ2dsZUV2aWRlbmNlIiwiaSIsImhhbmRsZUxheWVyVG9nZ2xlIiwiZSIsImxheWVyIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkxheWVyVG9nZ2xlIiwidG9nZ2xlQ291bnRyaWVzIiwidHlwZSIsInByZXZTdGF0ZSIsImRpdlJlZiIsInVzZVJlZiIsImluZm9SZWYiLCJzY3JvbGxIYW5kbGUiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwiaGFuZGxlU2VsZWN0R29vZCIsImV2ZW50IiwiZ29vZCIsIm9uU2VsZWN0R29vZCIsImhhbmRsZVNlbGVjdENvdW50cnkiLCJjb3VudHJ5Q29kZSIsIm9uU2VsZWN0Q291bnRyeSIsInBhcnNlVVJMcyIsInRleHQiLCJ1cmwiLCJ1cmxzIiwibWF0Y2giLCJtYXAiLCJpbmRleCIsImNsZWFyU3RhdGVzIiwic2Nyb2xsVG9JbmZvIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsImNsZWFyU3RhdGVzRnJvbVBhcmVudCIsInNjcm9sbEZyb21QYXJlbnQiLCJzY3JvbGxGcm9tTWFwIiwiU2VhcmNoQm94IiwiT2JqZWN0Iiwia2V5cyIsInZpc2libGVMYXllciIsImJhY2tncm91bmQiLCJpblZpZXciLCJzZWxlY3RlZENvdW50cnkiLCJsZW5ndGgiLCJwYXRoZmluZGVyIiwiU3RhdHVzIiwiU2VjdG9yIiwiQ29tbWVudHMiLCJkZXBsb3ltZW50cyIsInNkZ3NEZXBsb3ltZW50cyIsImZpbHRlciIsInNkZyIsImRwZ3MiLCJ0b0ZpeGVkIiwicm9sZSIsImNhbGMiLCJhbm4iLCJhbmltYXRpb24iLCJzdGFydHVwIiwiZWFzaW5nIiwiZHVyYXRpb24iLCJhbm5vdGF0aW9ucyIsInRleHRTdHlsZSIsImZvbnRTaXplIiwiYm9sZCIsImNvbG9ycyIsImNoYXJ0QXJlYSIsInRvcCIsImhBeGlzIiwiYmFzZWxpbmVDb2xvciIsInRpdGxlVGV4dFN0eWxlIiwiaXRhbGljIiwidGl0bGUiLCJtaW5WYWx1ZSIsImxlZ2VuZCIsInBvc2l0aW9uIiwidHlwZURlcGxveW1lbnRzIiwiZWwiLCJ2QXhpcyIsInRleHRQb3NpdGlvbiIsImRldmVsb3BtZW50cyIsInNlbGVjdGVkR29vZCIsIndlYnNpdGUiLCJ3ZWJTeW1ib2wiLCJyZXBvc2l0b3J5VVJMIiwiZ2hMb2dvIiwiZGVzY3JpcHRpb24iLCJpdGVtIiwiaW5jbHVkZXMiLCJTREdOdW1iZXIiLCJldmlkZW5jZVRleHQiLCJldmlkZW5jZVVSTCIsImxvY2F0aW9ucyIsImRlcGxveW1lbnRDb3VudHJpZXMiLCJlbnRyaWVzIiwiY291bnRyeSIsImRldmVsb3BtZW50Q291bnRyaWVzIiwibGF5ZXJTdHlsZXMiLCJsZWdlbmRzIiwiem9vbURlZmF1bHQiLCJTREdTIiwib2JqIiwiTWFwIiwiUmVhY3RNYXBib3hHbCIsImFjY2Vzc1Rva2VuIiwicHJvY2VzcyIsIm1heFpvb20iLCJtaW5ab29tIiwibG9nb1Bvc2l0aW9uIiwicGl0Y2hXaXRoUm90YXRlIiwibWFwQ29tcG9uZW50IiwibWFwSW5zdGFuY2UiLCJzZXRNYXBJbnN0YW5jZSIsIm1haW5SZWYiLCJzZWFyY2hSZWYiLCJVc2VXaW5kb3dEaW1lbnNpb25zIiwiem9vbSIsInNldFpvb20iLCJsb25MYXQiLCJzZXRMb25MYXQiLCJsb24iLCJsYXQiLCJzZXRTZWxlY3RlZEdvb2QiLCJzZXRTZWxlY3RlZENvdW50cnkiLCJwcmV2R29vZCIsInNldFByZXZHb29kIiwic2V0VmlzaWJsZUxheWVyIiwibWFwSW50ZXJhY3RpdmUiLCJzZXRNYXBJbnRlcmFjdGl2ZSIsImN1cnJlbnRTdGVwSW5kZXgiLCJzZXRDdXJyZW50U3RlcEluZGV4IiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN0ZXBFbnRlciIsImRhdGEiLCJzdG9yeSIsInNob3dEUEciLCJkaWdpdGFsR29vZHMiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJzaG93RmlsdGVyIiwibmV3VmlzaWJsZUxheWVyIiwiZm9yRWFjaCIsInYiLCJjb2RlIiwiY291bnRyeU5hbWUiLCJjb3VudHJpZXMiLCJjaGFuZ2VJbnB1dCIsInNkZ3NEZXBsb3ltZW50c0luZm8iLCJyZWR1Y2UiLCJhY2N1bSIsImN1cnIiLCJTREdzIiwiYWNjIiwidHlwZURlcGxveW1lbnRzSW5mbyIsImNvbnRlbnQiLCJzb2Z0d2FyZSIsInN0YW5kYXJkIiwiaGFuZGxlU2VsZWN0R29vZFBvcHVwIiwiZ29vZE5hbWUiLCJoYW5kbGVDaGFuZ2VTZWFyY2hib3giLCJoYW5kbGVDbGVhclNlYXJjaGJveCIsImhhbmRsZVNjcm9sbFRvQm90dG9tIiwiZHBnYUxvZ28iLCJpbWFnZSIsImltYWdlVXJsIiwicGFyc2VGbG9hdCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwicmlnaHQiLCJldmVudERhdGEiLCJnZXRDZW50ZXIiLCJsbmciLCJnZXRab29tIiwibGF5ZXJzIiwiZ2V0U3R5bGUiLCJmaXJzdFN5bWJvbElkIiwiaWQiLCJoYXJkd2FyZUltZyIsIkltYWdlIiwib25sb2FkIiwiYWRkSW1hZ2UiLCJzcmMiLCJoYXJkd2FyZVBhdHRlcm4iLCJnZXRMYXllciIsImNvbnNvbGUiLCJsb2ciLCJhZGRMYXllciIsInNvdXJjZSIsInBhaW50Iiwic2V0TGF5b3V0UHJvcGVydHkiLCJzZXRGaWx0ZXIiLCJjb25jYXQiLCJleHBsb3JhdG9yeUltZyIsImxheW91dCIsInZpc2liaWxpdHkiLCJwYXRoZmluZGVyRXhwbG9yYXRvcnkiLCJjb25maXJtZWRJbWciLCJwYXRoZmluZGVyQ29uZmlybWVkIiwiYWRkU291cmNlIiwiZGV2UG9seWdvbnMiLCJkZXBQb2x5Z29ucyIsIm9uIiwibWFwRWxlbWVudCIsImZlYXR1cmVzIiwicHJvcGVydGllcyIsIkFETTBfQTNfSVMiLCJnZXRDYW52YXMiLCJzdHlsZSIsImN1cnNvciIsInJlc2l6ZSIsIl8iLCJzdGVwSW5kZXgiLCJ2YWx1ZXMiLCJzb21lIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInRleHRSZWYiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImhhbmRsZU1vdXNlT3ZlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJoYW5kbGVNZW51Q2xpY2siLCJoYW5kbGVNZW51U2VsZWN0Iiwic2VhcmNoRm9jdXNlZCIsInNldFNlYXJjaEZvY3VzZWQiLCJvbkZvY3VzIiwib25CbHVyIiwiaGFuZGxlU2VsZWN0IiwiaGFuZGxlQ2xlYXIiLCJjbGVhclNlbGVjdGVkR29vZCIsImhhbmRsZUNoYW5nZUlucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVJbnB1dFNpemUiLCJlbGVtZW50Iiwic2Nyb2xsSGVpZ2h0IiwiZ29vZHMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiZHBnQmFkZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxTQUFTQSxtQkFBVCxHQUErQjtBQUM3QixRQUFNO0FBQUVDLGNBQVUsRUFBRUMsS0FBZDtBQUFxQkMsZUFBVyxFQUFFQztBQUFsQyxNQUE2Q0MsTUFBbkQ7QUFDQSxTQUFPO0FBQ0xILFNBREs7QUFFTEU7QUFGSyxHQUFQO0FBSUQ7O0FBRWMsU0FBU0UsbUJBQVQsR0FBK0I7QUFDNUMsUUFBTTtBQUFBLE9BQUNDLGdCQUFEO0FBQUEsT0FBbUJDO0FBQW5CLE1BQTBDQyxzREFBUSxDQUFDVCxtQkFBbUIsRUFBcEIsQ0FBeEQ7QUFFQVUseURBQVMsQ0FBQyxNQUFNO0FBQ2QsYUFBU0MsWUFBVCxHQUF3QjtBQUN0QkgseUJBQW1CLENBQUNSLG1CQUFtQixFQUFwQixDQUFuQjtBQUNEOztBQUVESyxVQUFNLENBQUNPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRCxZQUFsQztBQUNBLFdBQU8sTUFBTU4sTUFBTSxDQUFDUSxtQkFB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S0FLR3dGLElBQUksQ0FBQzNHLElBTFIsQ0FOSCxDQWpCSCxDQW5CRixDQURGLEVBcURFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBMkIsV0FBTyxFQUFHbUIsQ0FBRCxJQUFPc08sV0FBVyxDQUFDdE8sQ0FBRCxDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGLENBckRGLENBREY7QUEyREQsQ0EzSDJCLENBQTVCO0FBNEhlcUMsd0VBQWYsRTs7Ozs7Ozs7Ozs7QUNoSUEscUNBQXFDLGcyRDs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLGc5Rjs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLHcwRDs7Ozs7Ozs7Ozs7QUNBckMsaUNBQWlDLHd2RTs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDRpQzs7Ozs7Ozs7Ozs7QUNBakMscUNBQXFDLHdtRDs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLHc4VCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gZ2V0V2luZG93RGltZW5zaW9ucygpIHtcbiAgY29uc3QgeyBpbm5lcldpZHRoOiB3aWR0aCwgaW5uZXJIZWlnaHQ6IGhlaWdodCB9ID0gd2luZG93O1xuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VXaW5kb3dEaW1lbnNpb25zKCkge1xuICBjb25zdCBbd2luZG93RGltZW5zaW9ucywgc2V0V2luZG93RGltZW5zaW9uc10gPSB1c2VTdGF0ZShnZXRXaW5kb3dEaW1lbnNpb25zKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgc2V0V2luZG93RGltZW5zaW9ucyhnZXRXaW5kb3dEaW1lbnNpb25zKCkpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB3aW5kb3dEaW1lbnNpb25zO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgIHsvKiA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1JvbGlrYXNpL2RpZ2l0YWwtcHVibGljLWdvb2RzLW1hcFwiPlxuICAgICAgICBDb250cmlidXRlXG4gICAgICA8L2E+XG4gICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwibWFpbHRvOmhlbGxvQGRpZ2l0YWxwdWJsaWNnb29kcy5uZXRcIj5SZXBvcnQgaXNzdWU8L2E+ICovfVxuICAgICAgPHNwYW4+XG4gICAgICAgIERhdGE6e1wiIFwifVxuICAgICAgICA8YVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzF0NzVnWVZoZFVqUEQxNTMyRGJQWU40OUZMWEZocFJ3RUJGaVM0SGJrNl9RL2VkaXQjZ2lkPTcyODM0NDg5NlwiXG4gICAgICAgID5cbiAgICAgICAgICBQYXRoZmluZGVycyBhbmQgU3RvcnlcbiAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgfHtcIiBcIn1cbiAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS91bmljZWYvcHVibGljZ29vZHMtY2FuZGlkYXRlc1wiPlxuICAgICAgICAgIERQR3NcbiAgICAgICAgPC9hPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIGZvcndhcmRSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2ViU3ltYm9sIGZyb20gXCIuLi9wdWJsaWMvZ2xvYmUucG5nXCI7XG5pbXBvcnQgZ2hMb2dvIGZyb20gXCIuLi9wdWJsaWMvZ2l0aHViLnBuZ1wiO1xuaW1wb3J0IHtJblZpZXd9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWdvb2dsZS1jaGFydHNcIjtcbmltcG9ydCBjb25maXJtZWRQYXR0ZXJuIGZyb20gXCIuLi9wdWJsaWMvY29uZmlybWVkLnN2Z1wiO1xuaW1wb3J0IGV4cGxvcmF0b3J5UGF0dGVybiBmcm9tIFwiLi4vcHVibGljL2V4cGxvcmF0b3J5LnN2Z1wiO1xuXG5jb25zdCBidXR0b25TdHlsZXMgPSB7XG4gIFwiUGF0aGZpbmRlcnMgRXhwbG9yYXRvcnlcIjoge1xuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2V4cGxvcmF0b3J5UGF0dGVybn0pYCxcbiAgfSxcbiAgXCJQYXRoZmluZGVycyBDb25maXJtZWRcIjoge1xuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2NvbmZpcm1lZFBhdHRlcm59KWAsXG4gIH0sXG4gIFwiRFBHcyBkZXZlbG9wZWRcIjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkY5NTJBXCIsXG4gIH0sXG4gIFwiRFBHcyBkZXBsb3llZFwiOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMzMzQUJcIixcbiAgfSxcbn07XG5jb25zdCBzZGdzRGVmYXVsdCA9IFtcbiAge25hbWU6IFwiMS4gTm8gUG92ZXJ0eVwiLCBvcGVuOiBmYWxzZX0sXG4gIHtuYW1lOiBcIjIuIFplcm8gSHVuZ2VyXCIsIG9wZW46IGZhbHNlfSxcbiAge25hbWU6IFwiMy4gR29vZCBIZWFsdGggYW5kIFdlbGwtYmVpbmdcIiwgb3BlbjogZmFsc2V9LFxuICB7bmFtZTogXCI0LiBRdWFsaXR5IEVkdWNhdGlvblwiLCBvcGVuOiBmYWxzZX0sXG4gIHtuYW1lOiBcIjUuIEdlbmRlciBFcXVhbGl0eVwiLCBvcGVuOiBmYWxzZX0sXG4gIHtuYW1lOiBcIjYuIENsZWFuIFdhdGVyIGFuZCBTYW5pdGF0aW9uXCIsIG9wZW46IGZhbHNlfSxcbiAge25hbWU6IFwiNy4gQWZmb3JkYWJsZSBhbmQgQ2xlYW4gRW5lcmd5XCIsIG9wZW46IGZhbHNlfSxcbiAge25hbWU6IFwiOC4gRGVjZW50IFdvcmsgYW5kIEVjb25vbWljIEdyb3d0aFwiLCBvcGVuOiBmYWxzZX0sXG4gIHtuYW1lOiBcIjkuIEluZHVzdHJ5LCBJbm5vdmF0aW9uIGFuZCBJbmZyYXN0cnVjdHVyZVwiLCBvcGVuOiBmYWxzZX0sXG4gIHtuYW1lOiBcIjEwLiBSZWR1Y2VkIEluZXF1YWxpdHlcIiwgb3BlbjogZmFsc2V9LFxuICB7bmFtZTogXCIxMS4gU3VzdGFpbmFibGUgQ2l0aWVzIGFuZCBDb21tdW5pdGllc1wiLCBvcGVuOiBmYWxzZX0sXG4gIHtuYW1lOiBcIjEyLiBSZXNwb25zaWJsZSBDb25zdW1wdGlvbiBhbmQgUHJvZHVjdGlvblwiLCBvcGVuOiBmYWxzZX0sXG4gIHtuYW1lOiBcIjEzLiBDbGltYXRlIEFjdGlvblwiLCBvcGVuOiBmYWxzZX0sXG4gIHtuYW1lOiBcIjE0LiBMaWZlIEJlbG93IFdhdGVyXCIsIG9wZW46IGZhbHNlfSxcbiAge25hbWU6IFwiMTUuIExpZmUgb24gTGFuZFwiLCBvcGVuOiBmYWxzZX0sXG4gIHtuYW1lOiBcIjE2LiBQZWFjZSBhbmQgSnVzdGljZSBTdHJvbmcgSW5zdGl0dXRpb25zXCIsIG9wZW46IGZhbHNlfSxcbiAge25hbWU6IFwiMTcuIFBhcnRuZXJzaGlwcyB0byBhY2hpZXZlIHRoZSBHb2FsXCIsIG9wZW46IGZhbHNlfSxcbl07XG5jb25zdCBJbmZvQ29tcG9uZW50ID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCBbb3BlbkNvdW50cmllcywgc2V0T3BlbkNvdW50cmllc10gPSB1c2VTdGF0ZSh7XG4gICAgZGV2ZWxvcG1lbnQ6IGZhbHNlLFxuICAgIGRlcGxveW1lbnQ6IGZhbHNlLFxuICAgIGRlcGxveW1lbnRzSW5Db3VudHJ5OiBmYWxzZSxcbiAgICBkZXZlbG9wbWVudHNJbkNvdW50cnk6IGZhbHNlLFxuICB9KTtcblxuICBjb25zdCBbbWVudUluVmlldywgc2V0TWVudUluVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZGdzLCBzZXRTZGdzXSA9IHVzZVN0YXRlKFsuLi5zZGdzRGVmYXVsdF0pO1xuICBjb25zdCB0b2dnbGVFdmlkZW5jZSA9IChpKSA9PiB7XG4gICAgc2Rnc1tpXS5vcGVuID0gIXNkZ3NbaV0ub3BlbjtcbiAgICBzZXRTZGdzKFsuLi5zZGdzXSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUxheWVyVG9nZ2xlID0gKGUsIGxheWVyKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcHJvcHMub25MYXllclRvZ2dsZShsYXllcik7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQ291bnRyaWVzID0gKHR5cGUpID0+IHtcbiAgICBzZXRPcGVuQ291bnRyaWVzKChwcmV2U3RhdGUpID0+ICh7Li4ucHJldlN0YXRlLCBbdHlwZV06ICFwcmV2U3RhdGVbdHlwZV19KSk7XG4gIH07XG4gIGNvbnN0IGRpdlJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaW5mb1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc2Nyb2xsSGFuZGxlID0gKCkgPT4ge1xuICAgIGlmICghbWVudUluVmlldykge1xuICAgICAgZGl2UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgYmxvY2s6IFwiY2VudGVyXCIsXG4gICAgICAgIGlubGluZTogXCJuZWFyZXN0XCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhbmRsZVNlbGVjdEdvb2QgPSAoZXZlbnQsIGdvb2QpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHByb3BzLm9uU2VsZWN0R29vZChnb29kKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU2VsZWN0Q291bnRyeSA9IChldmVudCwgY291bnRyeUNvZGUpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHByb3BzLm9uU2VsZWN0Q291bnRyeShjb3VudHJ5Q29kZSk7XG4gIH07XG4gIGNvbnN0IHBhcnNlVVJMcyA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgdXJsID0gLyhcXGIoaHR0cHM/fGZ0cHxmaWxlKTpcXC9cXC9bLUEtWjAtOSsmQCNcXC8lPz1+X3whOiwuO10qWy1BLVowLTkrJkAjXFwvJT1+X3xdKS9naTtcbiAgICBsZXQgdXJscyA9IHRleHQubWF0Y2godXJsKTtcbiAgICByZXR1cm4gdXJscy5tYXAoKHVybCwgaW5kZXgpID0+IChcbiAgICAgIDxhIGtleT17dXJsICsgaW5kZXh9IGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICBMaW5rIHRvIGV2aWRlbmNlXG4gICAgICA8L2E+XG4gICAgKSk7XG4gIH07XG4gIGNvbnN0IGNsZWFyU3RhdGVzID0gKCkgPT4ge1xuICAgIHNkZ3MubWFwKChlKSA9PiAoZS5vcGVuID0gZmFsc2UpKTtcbiAgICBzZXRTZGdzKFsuLi5zZGdzXSk7XG4gICAgc2V0T3BlbkNvdW50cmllcyh7XG4gICAgICBkZXZlbG9wbWVudDogZmFsc2UsXG4gICAgICBkZXBsb3ltZW50OiBmYWxzZSxcbiAgICAgIGRlcGxveW1lbnRzSW5Db3VudHJ5OiBmYWxzZSxcbiAgICAgIGRldmVsb3BtZW50c0luQ291bnRyeTogZmFsc2UsXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHNjcm9sbFRvSW5mbyA9ICgpID0+IHtcbiAgICBpbmZvUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJlbmRcIn0pO1xuICB9O1xuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjbGVhclN0YXRlc0Zyb21QYXJlbnQ6IGNsZWFyU3RhdGVzLFxuICAgICAgc2Nyb2xsRnJvbVBhcmVudDogc2Nyb2xsVG9JbmZvLFxuICAgICAgc2Nyb2xsRnJvbU1hcDogc2Nyb2xsSGFuZGxlLFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb0dvb2RcIj5cbiAgICAgIDxkaXY+e3Byb3BzLlNlYXJjaEJveH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbHNcIiBvbkNsaWNrPXtzY3JvbGxIYW5kbGV9IHJlZj17aW5mb1JlZn0+XG4gICAgICAgIDxzcGFuIGlkPVwiYXJyb3ctdXBcIiBjbGFzc05hbWU9eyFtZW51SW5WaWV3ID8gXCJhcnJvdyB1cCBhY3RpdmVcIiA6IFwiYXJyb3cgdXBcIn0gLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPVwiaGFtYnVyZ2VyXCJcbiAgICAgICAgICBjbGFzc05hbWU9eyFtZW51SW5WaWV3ID8gXCJoYW1idXJnZXItaWNvblwiIDogXCJoYW1idXJnZXItaWNvbiBhY3RpdmVcIn1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyMVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4+e21lbnVJblZpZXcgPyBcIlwiIDogXCJUYXAgdG8gc2VlIGZpbHRlcnMgYW5kIGluZm9cIn08L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZpbHRlcnNcIiByZWY9e2RpdlJlZn0+XG4gICAgICAgIHtPYmplY3Qua2V5cyhwcm9wcy52aXNpYmxlTGF5ZXIpLm1hcCgobGF5ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGlkPXtsYXllcn0ga2V5PXtsYXllciArIGluZGV4fSBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlTGF5ZXJUb2dnbGUoZSwgbGF5ZXIpfT5cbiAgICAgICAgICAgIDxzcGFuPntwcm9wcy52aXNpYmxlTGF5ZXJbbGF5ZXJdID8gbGF5ZXIgOiBcIlwifTwvc3Bhbj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtsYXllciArIChwcm9wcy52aXNpYmxlTGF5ZXJbbGF5ZXJdID8gXCIgYWN0aXZlXCIgOiBcIlwiKX1cbiAgICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICAgIHByb3BzLnZpc2libGVMYXllcltsYXllcl0gPyBidXR0b25TdHlsZXNbbGF5ZXJdIDoge2JhY2tncm91bmQ6IFwibm9uZVwifVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwcm9wcy52aXNpYmxlTGF5ZXJbbGF5ZXJdID8gXCJcIiA6IGxheWVyfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgICA8SW5WaWV3IGFzPVwiZGl2XCIgb25DaGFuZ2U9eyhpblZpZXcpID0+IHNldE1lbnVJblZpZXcoaW5WaWV3KX0+PC9JblZpZXc+XG4gICAgICA8L3VsPlxuXG4gICAgICB7T2JqZWN0LmtleXMocHJvcHMuc2VsZWN0ZWRDb3VudHJ5KS5sZW5ndGggIT0gMCAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3Byb3BzLnNlbGVjdGVkQ291bnRyeS5wYXRoZmluZGVyICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMz57cHJvcHMuc2VsZWN0ZWRDb3VudHJ5Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPHNwYW4+4pyFJm5ic3A7Jm5ic3A7RFBHIFBhdGhmaW5kZXIgQ291bnRyeTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxiPlN0YXR1czogPC9iPlxuICAgICAgICAgICAgICAgICAge3Byb3BzLnNlbGVjdGVkQ291bnRyeS5wYXRoZmluZGVyLlN0YXR1c31cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5zZWxlY3RlZENvdW50cnkucGF0aGZpbmRlci5TZWN0b3IgJiYgKFxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8Yj5TZWN0b3I6IDwvYj5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNlbGVjdGVkQ291bnRyeS5wYXRoZmluZGVyLlNlY3Rvcn1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtwcm9wcy5zZWxlY3RlZENvdW50cnkucGF0aGZpbmRlci5Db21tZW50cyAmJiAoXG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxiPkNvbW1lbnRzOiA8L2I+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zZWxlY3RlZENvdW50cnkucGF0aGZpbmRlci5Db21tZW50c31cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7cHJvcHMuc2VsZWN0ZWRDb3VudHJ5LmRlcGxveW1lbnRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sbGFwc2FibGUtdGV4dFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVDb3VudHJpZXMoXCJkZXBsb3ltZW50c0luQ291bnRyeVwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUaGVyZSB7cHJvcHMuc2VsZWN0ZWRDb3VudHJ5LmRlcGxveW1lbnRzLmxlbmd0aCA+IDEgPyBcImFyZVwiIDogXCJpc1wifXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5zZWxlY3RlZENvdW50cnkuZGVwbG95bWVudHMubGVuZ3RofSBkaWdpdGFsIHB1YmxpYyBnb29kXG4gICAgICAgICAgICAgICAgICB7cHJvcHMuc2VsZWN0ZWRDb3VudHJ5LmRlcGxveW1lbnRzLmxlbmd0aCA+IDEgPyBcInNcIiA6IFwiXCJ9IGRlcGxveWVkIGlue1wiIFwifVxuICAgICAgICAgICAgICAgICAge3Byb3BzLnNlbGVjdGVkQ291bnRyeS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICBvcGVuQ291bnRyaWVzLmRlcGxveW1lbnRzSW5Db3VudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiYXJyb3cgYWN0aXZlIHVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJhcnJvdyBhY3RpdmUgZG93blwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIHtvcGVuQ291bnRyaWVzLmRlcGxveW1lbnRzSW5Db3VudHJ5ICYmXG4gICAgICAgICAgICAgICAgICBwcm9wcy5zZWxlY3RlZENvdW50cnkuZGVwbG95bWVudHMubWFwKChnb29kLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkQ291bnRyeS5kZXBsb3ltZW50cy5sZW5ndGggLSAxID09IGkgPyBcImxhc3RcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtnb29kLm5hbWUgKyBpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVTZWxlY3RHb29kKGUsIGdvb2QubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Z29vZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgRFBHcyBkZXBsb3llZCBpbiB0aGlzIGNvdW50cnkgYXJlIHJlbGF0ZWQgdG97XCIgXCJ9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWRDb3VudHJ5LnNkZ3NEZXBsb3ltZW50cy5maWx0ZXIoKHNkZykgPT4gc2RnWzFdLmRwZ3MgPj0gMSlcbiAgICAgICAgICAgICAgICAgICAgLmxlbmd0aFxuICAgICAgICAgICAgICAgIH17XCIgXCJ9XG4gICAgICAgICAgICAgICAgb2YgMTcoXG4gICAgICAgICAgICAgICAgeyhcbiAgICAgICAgICAgICAgICAgIChwcm9wcy5zZWxlY3RlZENvdW50cnkuc2Rnc0RlcGxveW1lbnRzLmZpbHRlcigoc2RnKSA9PiBzZGdbMV0uZHBncyA+PSAxKVxuICAgICAgICAgICAgICAgICAgICAubGVuZ3RoIC9cbiAgICAgICAgICAgICAgICAgICAgMTcpICpcbiAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICkudG9GaXhlZCgxKX1cbiAgICAgICAgICAgICAgICAlKSBTdXN0YWluYWJsZSBEZXZlbG9wbWVudCBHb2Fsc1xuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNoYXJ0LWNvbnRhaW5lclwifT5cbiAgICAgICAgICAgICAgICA8Q2hhcnRcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjEwMCVcIn1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17XCI2MDBweFwifVxuICAgICAgICAgICAgICAgICAgY2hhcnRUeXBlPVwiQmFyQ2hhcnRcIlxuICAgICAgICAgICAgICAgICAgbG9hZGVyPXs8ZGl2PkxvYWRpbmcgQ2hhcnQ8L2Rpdj59XG4gICAgICAgICAgICAgICAgICBkYXRhPXtbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBcIlNER1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiRFBHc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtyb2xlOiBcImFubm90YXRpb25cIiwgY2FsYzogXCJzdHJpbmdpZnlcIiwgdHlwZTogXCJzdHJpbmdcIn0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIC4uLnByb3BzLnNlbGVjdGVkQ291bnRyeS5zZGdzRGVwbG95bWVudHMubWFwKChzZGcpID0+IFtcbiAgICAgICAgICAgICAgICAgICAgICBzZGdbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgc2RnWzFdLmRwZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgc2RnWzFdLmFubiArIFwiOiBcIiArIHNkZ1sxXS5kcGdzLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0dXA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBcIm91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTEsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2xkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFtcIiMzMzMzQUJcIl0sXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0QXJlYToge3dpZHRoOiBcIjg1JVwiLCBoZWlnaHQ6IFwiOTAlXCIsIHRvcDogMH0sXG4gICAgICAgICAgICAgICAgICAgIGhBeGlzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFzZWxpbmVDb2xvcjogXCIjY2NjY2NjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGVUZXh0U3R5bGU6IHtpdGFsaWM6IGZhbHNlfSxcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEaWdpdGFsIHB1YmxpYyBnb29kc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1pblZhbHVlOiAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtwb3NpdGlvbjogXCJub25lXCJ9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGI+VHlwZXMgb2YgRFBHcyBkZXBsb3llZCBpbiB7cHJvcHMuc2VsZWN0ZWRDb3VudHJ5Lm5hbWV9PC9iPlxuICAgICAgICAgICAgICAgIDxDaGFydFxuICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMTAwJVwifVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjE3MHB4XCJ9XG4gICAgICAgICAgICAgICAgICBjaGFydFR5cGU9XCJCYXJDaGFydFwiXG4gICAgICAgICAgICAgICAgICBsb2FkZXI9ezxkaXY+TG9hZGluZyBDaGFydDwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgIGRhdGE9e1tcbiAgICAgICAgICAgICAgICAgICAgW1wiU0RHXCIsIFwiRFBHc1wiLCB7cm9sZTogXCJhbm5vdGF0aW9uXCIsIGNhbGM6IFwic3RyaW5naWZ5XCJ9XSxcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJvcHMuc2VsZWN0ZWRDb3VudHJ5LnR5cGVEZXBsb3ltZW50cy5tYXAoKGVsKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgICAgLi4uZWwsXG4gICAgICAgICAgICAgICAgICAgICAgZWxbMF0gKyBcIjogXCIgKyBlbFsxXSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGFydHVwOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogXCJvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFtcIiMzMzMzQUJcIl0sXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0QXJlYToge3dpZHRoOiBcIjg1JVwiLCBoZWlnaHQ6IFwiODUlXCIsIHRvcDogMH0sXG4gICAgICAgICAgICAgICAgICAgIGhBeGlzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFzZWxpbmVDb2xvcjogXCIjY2NjY2NjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGVUZXh0U3R5bGU6IHtpdGFsaWM6IGZhbHNlfSxcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEaWdpdGFsIHB1YmxpYyBnb29kc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1pblZhbHVlOiAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2QXhpczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHRQb3NpdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge3Bvc2l0aW9uOiBcIm5vbmVcIn0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cHJvcHMuc2VsZWN0ZWRDb3VudHJ5LmRldmVsb3BtZW50cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sbGFwc2FibGUtdGV4dFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQ291bnRyaWVzKFwiZGV2ZWxvcG1lbnRzSW5Db3VudHJ5XCIpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVGhlcmUge3Byb3BzLnNlbGVjdGVkQ291bnRyeS5kZXZlbG9wbWVudHMubGVuZ3RoID4gMSA/IFwiYXJlXCIgOiBcImlzXCJ9e1wiIFwifVxuICAgICAgICAgICAgICAgIHtwcm9wcy5zZWxlY3RlZENvdW50cnkuZGV2ZWxvcG1lbnRzLmxlbmd0aH0gZGlnaXRhbCBwdWJsaWMgZ29vZFxuICAgICAgICAgICAgICAgIHtwcm9wcy5zZWxlY3RlZENvdW50cnkuZGV2ZWxvcG1lbnRzLmxlbmd0aCA+IDEgPyBcInNcIiA6IFwiXCJ9IGRldmVsb3BlZCBpbntcIiBcIn1cbiAgICAgICAgICAgICAgICB7cHJvcHMuc2VsZWN0ZWRDb3VudHJ5Lm5hbWV9XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIG9wZW5Db3VudHJpZXMuZGV2ZWxvcG1lbnRzSW5Db3VudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgPyBcImFycm93IGFjdGl2ZSB1cFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImFycm93IGFjdGl2ZSBkb3duXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIHtvcGVuQ291bnRyaWVzLmRldmVsb3BtZW50c0luQ291bnRyeSAmJlxuICAgICAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkQ291bnRyeS5kZXZlbG9wbWVudHMubWFwKChnb29kLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkQ291bnRyeS5kZXZlbG9wbWVudHMubGVuZ3RoIC0gMSA9PSBpID8gXCJsYXN0XCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtnb29kLm5hbWUgKyBpfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU2VsZWN0R29vZChlLCBnb29kLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Z29vZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge09iamVjdC5rZXlzKHByb3BzLnNlbGVjdGVkR29vZCkubGVuZ3RoICE9IDAgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29vZENvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImdvb2ROYW1lXCI+e3Byb3BzLnNlbGVjdGVkR29vZC5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2RMaW5rc1wiPlxuICAgICAgICAgICAgICB7cHJvcHMuc2VsZWN0ZWRHb29kLndlYnNpdGUgJiYgKFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb3BzLnNlbGVjdGVkR29vZC53ZWJzaXRlfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d2ViU3ltYm9sfSB3aWR0aD1cIjMwcHhcIiBoZWlnaHQ9XCIzMHB4XCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtwcm9wcy5zZWxlY3RlZEdvb2QucmVwb3NpdG9yeVVSTCAmJiAoXG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb3BzLnNlbGVjdGVkR29vZC5yZXBvc2l0b3J5VVJMfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaExvZ299IHdpZHRoPVwiMzBweFwiIGhlaWdodD1cIjMwcHhcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ29vZERlc2NcIj57cHJvcHMuc2VsZWN0ZWRHb29kLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ29vZENvbnRhaW5lclwiPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ib2xkXCI+VHlwZSBvZiBEaWdpdGFsIFB1YmxpYyBHb29kPC9wPlxuICAgICAgICAgICAge1tcImNvbnRlbnRcIiwgXCJkYXRhXCIsIFwic29mdHdhcmVcIiwgXCJzdGFuZGFyZFwiLCBcIkFJIG1vZGVsXCJdLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocHJvcHMuc2VsZWN0ZWRHb29kLnR5cGUuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17XCJ0eXBlLVwiICsgaXRlbX0+4pyFJm5ic3A7T3BlbiB7aXRlbX08L2xpPjtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17XCJ0eXBlLVwiICsgaXRlbX0+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgZmlsbE9wYWNpdHk9XCIwXCIgY2xhc3NOYW1lPVwicmVjdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtPcGVuIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29vZENvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ib2xkXCI+UmVsZXZhbnQgU3VzdGFpbmFibGUgRGV2ZWxvcG1lbnQgR29hbHM6PC9wPlxuICAgICAgICAgICAge3Byb3BzLnNlbGVjdGVkR29vZFtcIlNER3NcIl0ubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e1wiU0RHLVwiICsgaXRlbS5TREdOdW1iZXJ9IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sbGFwc2FibGUtdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0b2dnbGVFdmlkZW5jZShpdGVtLlNER051bWJlciAtIDEpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c2Rnc1tpdGVtLlNER051bWJlciAtIDFdLm5hbWV9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBzZGdzW2l0ZW0uU0RHTnVtYmVyIC0gMV0ub3BlblxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYXJyb3cgYWN0aXZlIHVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImFycm93IGFjdGl2ZSBkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5ldmlkZW5jZVRleHQgJiYgc2Rnc1tpdGVtLlNER051bWJlciAtIDFdLm9wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5ldmlkZW5jZVRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmV2aWRlbmNlVVJMICYmXG4gICAgICAgICAgICAgICAgICAgIHNkZ3NbaXRlbS5TREdOdW1iZXIgLSAxXS5vcGVuICYmXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlVVJMcyhpdGVtLmV2aWRlbmNlVVJMKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29vZENvbnRhaW5lclwiPlxuICAgICAgICAgICAge09iamVjdC5rZXlzKHByb3BzLnNlbGVjdGVkR29vZC5sb2NhdGlvbnMuZGVwbG95bWVudENvdW50cmllcykubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNhYmxlLXRleHRcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRvZ2dsZUNvdW50cmllcyhcImRlcGxveW1lbnRcIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge1wiRGVwbG95ZWQgaW4gXCIgK1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcy5zZWxlY3RlZEdvb2QubG9jYXRpb25zLmRlcGxveW1lbnRDb3VudHJpZXMpLmxlbmd0aCArXG4gICAgICAgICAgICAgICAgICAgIFwiIG9mIDI0OSBjb3VudHJpZXM6XCJ9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICBvcGVuQ291bnRyaWVzLmRlcGxveW1lbnQgPyBcImFycm93IGFjdGl2ZSB1cFwiIDogXCJhcnJvdyBhY3RpdmUgZG93blwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAge29wZW5Db3VudHJpZXMuZGVwbG95bWVudCAmJlxuICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocHJvcHMuc2VsZWN0ZWRHb29kLmxvY2F0aW9ucy5kZXBsb3ltZW50Q291bnRyaWVzKS5tYXAoXG4gICAgICAgICAgICAgICAgICAgIChjb3VudHJ5LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZWxlY3RlZEdvb2QubG9jYXRpb25zLmRlcGxveW1lbnRDb3VudHJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLmxlbmd0aCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxhc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZVNlbGVjdENvdW50cnkoZSwgY291bnRyeVswXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJkZXBsb3ktXCIgKyBjb3VudHJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRyeVsxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMocHJvcHMuc2VsZWN0ZWRHb29kLmxvY2F0aW9ucy5kZXZlbG9wbWVudENvdW50cmllcykubGVuZ3RoID5cbiAgICAgICAgICAgICAgMCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNhYmxlLXRleHRcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRvZ2dsZUNvdW50cmllcyhcImRldmVsb3BtZW50XCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtcIkRldmVsb3BlZCBpbiBcIiArXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BzLnNlbGVjdGVkR29vZC5sb2NhdGlvbnMuZGV2ZWxvcG1lbnRDb3VudHJpZXMpXG4gICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aCArXG4gICAgICAgICAgICAgICAgICAgIChPYmplY3Qua2V5cyhwcm9wcy5zZWxlY3RlZEdvb2QubG9jYXRpb25zLmRldmVsb3BtZW50Q291bnRyaWVzKVxuICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIiBjb3VudHJpZXM6XCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiIGNvdW50cnk6XCIpfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgb3BlbkNvdW50cmllcy5kZXZlbG9wbWVudCA/IFwiYXJyb3cgYWN0aXZlIHVwXCIgOiBcImFycm93IGFjdGl2ZSBkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICB7b3BlbkNvdW50cmllcy5kZXZlbG9wbWVudCAmJlxuICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocHJvcHMuc2VsZWN0ZWRHb29kLmxvY2F0aW9ucy5kZXZlbG9wbWVudENvdW50cmllcykubWFwKFxuICAgICAgICAgICAgICAgICAgICAoY291bnRyeSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWRHb29kLmxvY2F0aW9ucy5kZXZlbG9wbWVudENvdW50cmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkubGVuZ3RoIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibGFzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU2VsZWN0Q291bnRyeShlLCBjb3VudHJ5WzBdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcImRldmVsb3AtXCIgKyBjb3VudHJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRyeVsxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmZvQ29tcG9uZW50O1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXBib3hHbCwge1pvb21Db250cm9sLCBNYXBDb250ZXh0fSBmcm9tIFwicmVhY3QtbWFwYm94LWdsXCI7XG5pbXBvcnQgY29uZmlybWVkUGF0dGVybiBmcm9tIFwiLi4vcHVibGljL2NvbmZpcm1lZC5zdmdcIjtcbmltcG9ydCBleHBsb3JhdG9yeVBhdHRlcm4gZnJvbSBcIi4uL3B1YmxpYy9leHBsb3JhdG9yeS5zdmdcIjtcbmltcG9ydCBoYXJkd2FyZVBhdHRlcm4gZnJvbSBcIi4uL3B1YmxpYy9oYXJkd2FyZS5zdmdcIjtcbmltcG9ydCB7U2Nyb2xsYW1hLCBTdGVwfSBmcm9tIFwicmVhY3Qtc2Nyb2xsYW1hXCI7XG5pbXBvcnQge0luVmlld30gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi9zZWFyY2hCb3hcIjtcbmltcG9ydCBJbmZvQ29tcG9uZW50IGZyb20gXCIuL2luZm9Db21wb25lbnRcIjtcbmltcG9ydCBVc2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcbmltcG9ydCBkcGdhTG9nbyBmcm9tIFwiLi4vcHVibGljL2xvZ28uc3ZnXCI7XG5cbmNvbnN0IGxheWVyU3R5bGVzID0ge1xuICBcIlBhdGhmaW5kZXJzIEV4cGxvcmF0b3J5XCI6IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtleHBsb3JhdG9yeVBhdHRlcm59KWAsXG4gIH0sXG4gIFwiUGF0aGZpbmRlcnMgQ29uZmlybWVkXCI6IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjb25maXJtZWRQYXR0ZXJufSlgLFxuICB9LFxuICBcIkRQR3MgZGV2ZWxvcGVkXCI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGOTUyQVwiLFxuICB9LFxuICBcIkRQR3MgZGVwbG95ZWRcIjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzMzM0FCXCIsXG4gIH0sXG59O1xuY29uc3QgbGVnZW5kcyA9IFtcIndoZXJlIERQRyB3YXMgZGV2ZWxvcGVkXCIsIFwid2hlcmUgRFBHIHdhcyBkZXBsb3llZFwiXTtcbmNvbnN0IGNvbG9ycyA9IFtcIiNGRjk1MkFcIiwgXCIjZDRkNGVjXCJdO1xuY29uc3Qgem9vbURlZmF1bHQgPSAyO1xuY29uc3QgU0RHUyA9IFtcbiAgXCJObyBQb3ZlcnR5XCIsXG4gIFwiWmVybyBIdW5nZXJcIixcbiAgXCJHb29kIEhlYWx0aCBhbmQgV2VsbC1iZWluZ1wiLFxuICBcIlF1YWxpdHkgRWR1Y2F0aW9uXCIsXG4gIFwiR2VuZGVyIEVxdWFsaXR5XCIsXG4gIFwiQ2xlYW4gV2F0ZXIgYW5kIFNhbml0YXRpb25cIixcbiAgXCJBZmZvcmRhYmxlIGFuZCBDbGVhbiBFbmVyZ3lcIixcbiAgXCJEZWNlbnQgV29yayBhbmQgRWNvbm9taWMgR3Jvd3RoXCIsXG4gIFwiSW5kdXN0cnksIElubm92YXRpb24gYW5kIEluZnJhc3RydWN0dXJlXCIsXG4gIFwiUmVkdWNlZCBJbmVxdWFsaXR5XCIsXG4gIFwiU3VzdGFpbmFibGUgQ2l0aWVzIGFuZCBDb21tdW5pdGllc1wiLFxuICBcIlJlc3BvbnNpYmxlIENvbnN1bXB0aW9uIGFuZCBQcm9kdWN0aW9uXCIsXG4gIFwiQ2xpbWF0ZSBBY3Rpb25cIixcbiAgXCJMaWZlIEJlbG93IFdhdGVyXCIsXG4gIFwiTGlmZSBvbiBMYW5kXCIsXG4gIFwiUGVhY2UgYW5kIEp1c3RpY2UgU3Ryb25nIEluc3RpdHV0aW9uc1wiLFxuICBcIlBhcnRuZXJzaGlwcyB0byBhY2hpZXZlIHRoZSBHb2FsXCIsXG5dO1xuY29uc3Qgc2Rnc0RlZmF1bHQgPSAoKSA9PiB7XG4gIGxldCBvYmogPSB7fTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBTREdTLmxlbmd0aDsgaSsrKSB7XG4gICAgb2JqW2kgKyAxXSA9IHtkcGdzOiAwLCBhbm46IFNER1NbaV19O1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTUFQQk9YX0FDQ0VTU19UT0tFTilcbmNvbnN0IE1hcCA9IFJlYWN0TWFwYm94R2woe1xuICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFQQk9YX1RPS0VOLFxuICBtYXhab29tOiA5LFxuICBtaW5ab29tOiAwLFxuICBsb2dvUG9zaXRpb246IFwiYm90dG9tLXJpZ2h0XCIsXG4gIHBpdGNoV2l0aFJvdGF0ZTogZmFsc2UsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwQ29tcG9uZW50KHByb3BzKSB7XG4gIGNvbnN0IFttYXBJbnN0YW5jZSwgc2V0TWFwSW5zdGFuY2VdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IG1haW5SZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgc2VhcmNoUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHt3aWR0aH0gPSBVc2VXaW5kb3dEaW1lbnNpb25zKCk7XG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlKHpvb21EZWZhdWx0KTtcbiAgY29uc3QgW2xvbkxhdCwgc2V0TG9uTGF0XSA9IHVzZVN0YXRlKFtwcm9wcy5sb24sIHByb3BzLmxhdF0pO1xuICBjb25zdCBbc2VsZWN0ZWRHb29kLCBzZXRTZWxlY3RlZEdvb2RdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbc2VsZWN0ZWRDb3VudHJ5LCBzZXRTZWxlY3RlZENvdW50cnldID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbcHJldkdvb2QsIHNldFByZXZHb29kXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3Zpc2libGVMYXllciwgc2V0VmlzaWJsZUxheWVyXSA9IHVzZVN0YXRlKHtcbiAgICBcIlBhdGhmaW5kZXJzIEV4cGxvcmF0b3J5XCI6IGZhbHNlLFxuICAgIFwiUGF0aGZpbmRlcnMgQ29uZmlybWVkXCI6IGZhbHNlLFxuICAgIFwiRFBHcyBkZXBsb3llZFwiOiBmYWxzZSxcbiAgICBcIkRQR3MgZGV2ZWxvcGVkXCI6IGZhbHNlLFxuICB9KTtcbiAgY29uc3QgW21hcEludGVyYWN0aXZlLCBzZXRNYXBJbnRlcmFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gc2Nyb2xsYW1hIHN0YXRlc1xuICBjb25zdCBbY3VycmVudFN0ZXBJbmRleCwgc2V0Q3VycmVudFN0ZXBJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gVGhpcyBjYWxsYmFjayBmaXJlcyB3aGVuIGEgU3RlcCBoaXRzIHRoZSBvZmZzZXQgdGhyZXNob2xkLiBJdCByZWNlaXZlcyB0aGVcbiAgLy8gZGF0YSBwcm9wIG9mIHRoZSBzdGVwLCB3aGljaCBpbiB0aGlzIGRlbW8gc3RvcmVzIHRoZSBpbmRleCBvZiB0aGUgc3RlcC5cbiAgY29uc3Qgb25TdGVwRW50ZXIgPSAoe2RhdGF9KSA9PiB7XG4gICAgc2V0Q3VycmVudFN0ZXBJbmRleChkYXRhKTtcbiAgICAvLyBDaGVjayBhbmQgc2V0IHNlbGVjdGVkR29vZCBmcm9tIGdzaGVldFxuICAgIGlmIChwcm9wcy5zdG9yeVtkYXRhXS5zaG93RFBHKSB7XG4gICAgICBzZXRTZWxlY3RlZEdvb2QoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICBzZXRQcmV2R29vZChwcmV2U3RhdGUpO1xuICAgICAgICByZXR1cm4gcHJvcHMuZGlnaXRhbEdvb2RzLmZpbHRlcihcbiAgICAgICAgICAoZWwpID0+XG4gICAgICAgICAgICBlbC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihwcm9wcy5zdG9yeVtkYXRhXS5zaG93RFBHLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxuICAgICAgICApWzBdOyAvLyBmaWx0ZXIgYW5kIGdyYWIgMXN0IHJlc3VsdFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNsZWFyIHN0YXRlIGlmIHRoZXJlIGlzIG5vIGRwZyBpbiBnc2hlZXRcbiAgICAgIHNldFNlbGVjdGVkR29vZCgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgIHNldFByZXZHb29kKHByZXZTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBDaGVjayBhbmQgc2V0IHZpc2libGUgbGF5ZXIgZnJvbSBnc2hlZXRcbiAgICBpZiAocHJvcHMuc3RvcnlbZGF0YV0uc2hvd0ZpbHRlcikge1xuICAgICAgbGV0IG5ld1Zpc2libGVMYXllciA9IHt9O1xuICAgICAgT2JqZWN0LmtleXModmlzaWJsZUxheWVyKS5mb3JFYWNoKFxuICAgICAgICAodikgPT4gKG5ld1Zpc2libGVMYXllclt2XSA9IHByb3BzLnN0b3J5W2RhdGFdLnNob3dGaWx0ZXIuaW5jbHVkZXModikpXG4gICAgICApO1xuICAgICAgc2V0VmlzaWJsZUxheWVyKG5ld1Zpc2libGVMYXllcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFZpc2libGVMYXllcih7XG4gICAgICAgIFwiUGF0aGZpbmRlcnMgRXhwbG9yYXRvcnlcIjogZmFsc2UsXG4gICAgICAgIFwiUGF0aGZpbmRlcnMgQ29uZmlybWVkXCI6IGZhbHNlLFxuICAgICAgICBcIkRQR3MgZGVwbG95ZWRcIjogZmFsc2UsXG4gICAgICAgIFwiRFBHcyBkZXZlbG9wZWRcIjogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0Q291bnRyeSA9IChjb2RlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRHb29kKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHNldFByZXZHb29kKHByZXZTdGF0ZSk7XG4gICAgICByZXR1cm4ge307XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXBsb3ltZW50cyA9IHByb3BzLmRpZ2l0YWxHb29kcy5maWx0ZXIoKGdvb2QpID0+XG4gICAgICBPYmplY3Qua2V5cyhnb29kLmxvY2F0aW9ucy5kZXBsb3ltZW50Q291bnRyaWVzKS5pbmNsdWRlcyhjb2RlKVxuICAgICk7XG4gICAgY29uc3QgZGV2ZWxvcG1lbnRzID0gcHJvcHMuZGlnaXRhbEdvb2RzLmZpbHRlcigoZ29vZCkgPT5cbiAgICAgIE9iamVjdC5rZXlzKGdvb2QubG9jYXRpb25zLmRldmVsb3BtZW50Q291bnRyaWVzKS5pbmNsdWRlcyhjb2RlKVxuICAgICk7XG4gICAgY29uc3QgY291bnRyeU5hbWUgPSBwcm9wcy5jb3VudHJpZXNbY29kZV0ubmFtZTtcbiAgICAvLyBzZXQgY291bnRyeSBuYW1lIGluIHNlYXJjaGJveFxuICAgIHNlYXJjaFJlZi5jdXJyZW50LmNoYW5nZUlucHV0KGNvdW50cnlOYW1lKTtcbiAgICAvLyBjb3VudCBzZGdzIGZvciBlYWNoIGNvdW50cnlcbiAgICBjb25zdCBzZGdzRGVwbG95bWVudHNJbmZvID0gT2JqZWN0LmVudHJpZXMoXG4gICAgICBkZXBsb3ltZW50c1xuICAgICAgICAucmVkdWNlKFxuICAgICAgICAgIChhY2N1bSwgY3VycikgPT4gW1xuICAgICAgICAgICAgLi4uYWNjdW0sXG4gICAgICAgICAgICAuLi5jdXJyLlNER3MubWFwKChzZGcpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNkZy5TREdOdW1iZXI7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtdXG4gICAgICAgIClcbiAgICAgICAgLnJlZHVjZShcbiAgICAgICAgICAoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYWNjW2N1cnJdID8gKythY2NbY3Vycl1bXCJkcGdzXCJdIDogKGFjY1tjdXJyXVtcImRwZ3NcIl0gPSAxKSwgYWNjO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy9pbml0aWFsIHZhbHVlIGhlbHBzIHVzIGNyZWF0ZSBhbGwgZWxlbWVudHMgb2Ygb2JqZWN0XG4gICAgICAgICAgey4uLnNkZ3NEZWZhdWx0KCl9XG4gICAgICAgIClcbiAgICApO1xuICAgIC8vIGNvdW50IHR5cGVzIG9mIGRwZ3MgZm9yIGVhY2ggY291bnRyeVxuICAgIGNvbnN0IHR5cGVEZXBsb3ltZW50c0luZm8gPSBPYmplY3QuZW50cmllcyhcbiAgICAgIGRlcGxveW1lbnRzXG4gICAgICAgIC5yZWR1Y2UoKGFjY3VtLCBjdXJyKSA9PiBbLi4uYWNjdW0sIC4uLmN1cnIudHlwZS5tYXAoKHR5cGUpID0+IHR5cGUpXSwgW10pXG4gICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgKGFjYywgY3VycikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFjY1tjdXJyXSA/ICsrYWNjW2N1cnJdIDogKGFjY1tjdXJyXSA9IDEpLCBhY2M7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAvL2luaXRpYWwgdmFsdWUgaGVscHMgdXMgY3JlYXRlIGFsbCBlbGVtZW50cyBvZiBvYmplY3RcbiAgICAgICAgICB7Y29udGVudDogMCwgZGF0YTogMCwgc29mdHdhcmU6IDAsIHN0YW5kYXJkOiAwLCBcIkFJIG1vZGVsXCI6IDB9XG4gICAgICAgIClcbiAgICApO1xuXG4gICAgc2V0Wm9vbSg2KTtcbiAgICBzZXRMb25MYXQoW3Byb3BzLmNvdW50cmllc1tjb2RlXS5sb24sIHByb3BzLmNvdW50cmllc1tjb2RlXS5sYXRdKTtcbiAgICBzZXRTZWxlY3RlZENvdW50cnkoe1xuICAgICAgZGVwbG95bWVudHM6IGRlcGxveW1lbnRzLFxuICAgICAgZGV2ZWxvcG1lbnRzOiBkZXZlbG9wbWVudHMsXG4gICAgICBwYXRoZmluZGVyOiBwcm9wcy5jb3VudHJpZXNbY29kZV0ucGF0aGZpbmRlcixcbiAgICAgIG5hbWU6IGNvdW50cnlOYW1lLFxuICAgICAgc2Rnc0RlcGxveW1lbnRzOiBzZGdzRGVwbG95bWVudHNJbmZvLFxuICAgICAgdHlwZURlcGxveW1lbnRzOiB0eXBlRGVwbG95bWVudHNJbmZvLFxuICAgIH0pO1xuICAgIHJlZi5jdXJyZW50LmNsZWFyU3RhdGVzRnJvbVBhcmVudCgpO1xuICAgIHNlYXJjaFJlZi5jdXJyZW50LmNoYW5nZUlucHV0KGNvdW50cnlOYW1lKTtcbiAgICB3aWR0aCA8IDEwMDggJiYgcmVmLmN1cnJlbnQuc2Nyb2xsRnJvbU1hcCgpO1xuICB9O1xuICBjb25zdCBoYW5kbGVTZWxlY3RHb29kUG9wdXAgPSAoZ29vZE5hbWUpID0+IHtcbiAgICBzZXRTZWxlY3RlZEdvb2QoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgc2V0UHJldkdvb2QocHJldlN0YXRlKTtcbiAgICAgIHJldHVybiBwcm9wcy5kaWdpdGFsR29vZHMuZmlsdGVyKFxuICAgICAgICAoZWwpID0+IGVsLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGdvb2ROYW1lLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxuICAgICAgKVswXTsgLy8gZmlsdGVyIGFuZCBncmFiIDFzdCByZXN1bHRcbiAgICB9KTtcbiAgICBzZXRTZWxlY3RlZENvdW50cnkoe30pO1xuICAgIHNlYXJjaFJlZi5jdXJyZW50LmNoYW5nZUlucHV0KGdvb2ROYW1lKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VTZWFyY2hib3ggPSAoZ29vZCkgPT4ge1xuICAgIHNldFNlbGVjdGVkR29vZCgocHJldlN0YXRlKSA9PiB7XG4gICAgICBzZXRQcmV2R29vZChwcmV2U3RhdGUpO1xuICAgICAgcmV0dXJuIGdvb2Q7XG4gICAgfSk7XG4gICAgc2V0U2VsZWN0ZWRDb3VudHJ5KHt9KTtcbiAgICByZWYuY3VycmVudC5jbGVhclN0YXRlc0Zyb21QYXJlbnQoKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlTGF5ZXJUb2dnbGUgPSAobGF5ZXIpID0+IHtcbiAgICBzZXRWaXNpYmxlTGF5ZXIoKHByZXZTdGF0ZSkgPT4gKHsuLi5wcmV2U3RhdGUsIFtsYXllcl06ICFwcmV2U3RhdGVbbGF5ZXJdfSkpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDbGVhclNlYXJjaGJveCA9ICgpID0+IHtcbiAgICBzZXRTZWxlY3RlZEdvb2QoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgc2V0UHJldkdvb2QocHJldlN0YXRlKTtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9KTtcbiAgICBzZXRTZWxlY3RlZENvdW50cnkoe30pO1xuICAgIHJlZi5jdXJyZW50LmNsZWFyU3RhdGVzRnJvbVBhcmVudCgpO1xuICB9O1xuICBjb25zdCBoYW5kbGVTY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcbiAgICB3aWR0aCA8IDEwMDhcbiAgICAgID8gcmVmLmN1cnJlbnQuc2Nyb2xsRnJvbVBhcmVudCgpXG4gICAgICA6IG1haW5SZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyhmYWxzZSwge1xuICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICAgIGJsb2NrOiBcImVuZFwiLFxuICAgICAgICAgIGlubGluZTogXCJuZWFyZXN0XCIsXG4gICAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e21haW5SZWZ9IGNsYXNzTmFtZT0ndmlzQ29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtsb2FkaW5nID8gXCJ3aGl0ZUJhY2tcIiA6IFwiaW5hY3RpdmVcIn0+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtcImxvYWRlclwifSBzcmM9e2RwZ2FMb2dvfT48L2ltZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21hcEludGVyYWN0aXZlID8gXCJtYXBDb250YWluZXIgcmlnaHRcIiA6IFwibWFwQ29udGFpbmVyXCJ9PlxuICAgICAgICAgIHttYXBJbnRlcmFjdGl2ZSAmJiB3aWR0aCA8IDEwMDggJiYgKFxuICAgICAgICAgICAgPFNlYXJjaEJveFxuICAgICAgICAgICAgICByZWY9e3NlYXJjaFJlZn1cbiAgICAgICAgICAgICAgZ29vZHM9e3Byb3BzLmRpZ2l0YWxHb29kc31cbiAgICAgICAgICAgICAgY291bnRyaWVzPXtwcm9wcy5jb3VudHJpZXN9XG4gICAgICAgICAgICAgIG9uU2VsZWN0Q291bnRyeT17aGFuZGxlU2VsZWN0Q291bnRyeX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRHb29kPXtzZWxlY3RlZEdvb2QubmFtZX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRDb3VudHJ5PXtzZWxlY3RlZENvdW50cnkubmFtZX1cbiAgICAgICAgICAgICAgb25TZWxlY3RHb29kPXtoYW5kbGVDaGFuZ2VTZWFyY2hib3h9XG4gICAgICAgICAgICAgIGNsZWFyU2VsZWN0ZWRHb29kPXtoYW5kbGVDbGVhclNlYXJjaGJveH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cHJvcHMuc3RvcnkubGVuZ3RoICYmIHByb3BzLnN0b3J5W2N1cnJlbnRTdGVwSW5kZXhdLmltYWdlICE9IFwiZmFsc2VcIiAmJiAhbWFwSW50ZXJhY3RpdmUgJiYgKFxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzdGVwSW1hZ2VcIiBzcmM9e3Byb3BzLnN0b3J5W2N1cnJlbnRTdGVwSW5kZXhdLmltYWdlVXJsfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPE1hcFxuICAgICAgICAgICAgc3R5bGU9XCJtYXBib3g6Ly9zdHlsZXMvcm9saWthc2kvY2tuNjdhOTVqMDIybTE3bWNxb2c4MmcwNVwiXG4gICAgICAgICAgICBjZW50ZXI9e1xuICAgICAgICAgICAgICBtYXBJbnRlcmFjdGl2ZVxuICAgICAgICAgICAgICAgID8gbG9uTGF0XG4gICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocHJvcHMuc3RvcnlbY3VycmVudFN0ZXBJbmRleF0ubG9uZ2l0dWRlKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChwcm9wcy5zdG9yeVtjdXJyZW50U3RlcEluZGV4XS5sYXRpdHVkZSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB6b29tPXtcbiAgICAgICAgICAgICAgbWFwSW50ZXJhY3RpdmUgPyBbem9vbV0gOiBbcGFyc2VGbG9hdChwcm9wcy5zdG9yeVtjdXJyZW50U3RlcEluZGV4XS56b29tKV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBpdGNoPXtcbiAgICAgICAgICAgICAgdmlzaWJsZUxheWVyW1wiRFBHcyBkZXZlbG9wZWRcIl0gfHwgdmlzaWJsZUxheWVyW1wiRFBHcyBkZXBsb3llZFwiXSA/IDYwIDogMFxuICAgICAgICAgICAgfSAvLyBwaXRjaCBpbiBkZWdyZWVzXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXttYXBJbnRlcmFjdGl2ZSA/IFwiZW5hYmxlZFwiIDogXCJkaXNhYmxlZFwifVxuICAgICAgICAgICAgbW92aW5nTWV0aG9kPVwiZmx5VG9cIlxuICAgICAgICAgICAgb25EcmFnRW5kPXsobWFwLCBldmVudERhdGEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG1hcEludGVyYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgc2V0TG9uTGF0KFttYXAuZ2V0Q2VudGVyKCkubG5nLCBtYXAuZ2V0Q2VudGVyKCkubGF0XSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvblpvb21FbmQ9eyhtYXAsIGV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobWFwSW50ZXJhY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBzZXRab29tKG1hcC5nZXRab29tKCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25TdHlsZUxvYWQ9eyhtYXApID0+IHtcbiAgICAgICAgICAgICAgdmFyIGxheWVycyA9IG1hcC5nZXRTdHlsZSgpLmxheWVycztcbiAgICAgICAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IHN5bWJvbCBsYXllciBpbiB0aGUgbWFwIHN0eWxlXG4gICAgICAgICAgICAgIHZhciBmaXJzdFN5bWJvbElkO1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChsYXllcnNbaV0udHlwZSA9PT0gXCJzeW1ib2xcIikge1xuICAgICAgICAgICAgICAgICAgZmlyc3RTeW1ib2xJZCA9IGxheWVyc1tpXS5pZDtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZXQgaGFyZHdhcmVJbWcgPSBuZXcgSW1hZ2UoMjAsIDIwKTtcbiAgICAgICAgICAgICAgaGFyZHdhcmVJbWcub25sb2FkID0gKCkgPT4gbWFwLmFkZEltYWdlKFwiaGFyZHdhcmUtcGF0dGVyblwiLCBoYXJkd2FyZUltZyk7XG4gICAgICAgICAgICAgIGhhcmR3YXJlSW1nLnNyYyA9IGhhcmR3YXJlUGF0dGVybjtcbiAgICAgICAgICAgICAgLy9hZGQgbGF5ZXIgZm9yIGVhY2ggZ29vZCB3aXRoIG1hcFxuICAgICAgICAgICAgICBwcm9wcy5kaWdpdGFsR29vZHMubWFwKChnb29kKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgbGF5ZXIgaXMgYWxyZWFkeSBjcmVhdGVkXG4gICAgICAgICAgICAgICAgaWYgKG1hcC5nZXRMYXllcihnb29kLm5hbWUgKyBcIi1kZXZlbG9wXCIpKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnb29kLm5hbWUgKyBcIiBpcyBsYXllciBhbHJlYWR5IGNyZWF0ZWRcIik7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG1hcC5hZGRMYXllcihcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBnb29kLm5hbWUgKyBcIi1kZXZlbG9wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInZlY3RvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIm1hcGJveDovL3JvbGlrYXNpLjJrbjRqdnloXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcInNvdXJjZS1sYXllclwiOiBcIm5lXzEwbV9hZG1pbl8wX2NvdW50cmllcy1keGxhc3hcIixcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZpbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ2ZpbGwtY29sb3InOiAnI2RiM2Q0NCcsIC8vIHRoaXMgaXMgdGhlIGNvbG9yIHlvdSB3YW50IHlvdXIgdGlsZXNldCB0byBoYXZlIChyZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZpbGwtcGF0dGVyblwiOiBcImhhcmR3YXJlLXBhdHRlcm5cIiwgLy90aGlzIGhlbHBzIHVzIGRpc3Rpbmd1aXNoIGluZGl2aWR1YWwgY291bnRyaWVzIGEgYml0IGJldHRlciBieSBnaXZpbmcgdGhlbSBhbiBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RTeW1ib2xJZFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eShnb29kLm5hbWUgKyBcIi1kZXZlbG9wXCIsIFwidmlzaWJpbGl0eVwiLCBcIm5vbmVcIik7XG5cbiAgICAgICAgICAgICAgICAgIG1hcC5zZXRGaWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIGdvb2QubmFtZSArIFwiLWRldmVsb3BcIixcbiAgICAgICAgICAgICAgICAgICAgW1wiaW5cIiwgXCJBRE0wX0EzX0lTXCJdLmNvbmNhdChcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhnb29kLmxvY2F0aW9ucy5kZXZlbG9wbWVudENvdW50cmllcylcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKTsgLy8gVGhpcyBsaW5lIGxldHMgdXMgZmlsdGVyIGJ5IGNvdW50cnkgY29kZXMuXG5cbiAgICAgICAgICAgICAgICAgIG1hcC5hZGRMYXllcihcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBnb29kLm5hbWUgKyBcIi1kZXBsb3lcIixcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidmVjdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwibWFwYm94Oi8vcm9saWthc2kuMmtuNGp2eWhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwic291cmNlLWxheWVyXCI6IFwibmVfMTBtX2FkbWluXzBfY291bnRyaWVzLWR4bGFzeFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmlsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnZmlsbC1jb2xvcic6ICcjZGIzZDQ0JywgLy8gdGhpcyBpcyB0aGUgY29sb3IgeW91IHdhbnQgeW91ciB0aWxlc2V0IHRvIGhhdmUgKHJlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbC1jb2xvclwiOiBcIiMzMzMzQUJcIiwgLy90aGlzIGhlbHBzIHVzIGRpc3Rpbmd1aXNoIGluZGl2aWR1YWwgY291bnRyaWVzIGEgYml0IGJldHRlciBieSBnaXZpbmcgdGhlbSBhbiBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZpbGwtb3BhY2l0eVwiOiAwLjIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RTeW1ib2xJZFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eShnb29kLm5hbWUgKyBcIi1kZXBsb3lcIiwgXCJ2aXNpYmlsaXR5XCIsIFwibm9uZVwiKTtcblxuICAgICAgICAgICAgICAgICAgbWFwLnNldEZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgZ29vZC5uYW1lICsgXCItZGVwbG95XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcImluXCIsIFwiQURNMF9BM19JU1wiXS5jb25jYXQoXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZ29vZC5sb2NhdGlvbnMuZGVwbG95bWVudENvdW50cmllcylcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKTsgLy8gVGhpcyBsaW5lIGxldHMgdXMgZmlsdGVyIGJ5IGNvdW50cnkgY29kZXMuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAvLyBEZWNsYXJlIHRoZSBpbWFnZVxuICAgICAgICAgICAgICBpZiAobWFwLmdldExheWVyKFwiUGF0aGZpbmRlcnMgRXhwbG9yYXRvcnlcIikpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhdGhmaW5kZXJzIEV4cGxvcmF0b3J5IGlzIGxheWVyIGFscmVhZHkgY3JlYXRlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGV4cGxvcmF0b3J5SW1nID0gbmV3IEltYWdlKDIwLCAyMCk7XG4gICAgICAgICAgICAgICAgZXhwbG9yYXRvcnlJbWcub25sb2FkID0gKCkgPT5cbiAgICAgICAgICAgICAgICAgIG1hcC5hZGRJbWFnZShcImV4cGxvcmF0b3J5LXBhdHRlcm5cIiwgZXhwbG9yYXRvcnlJbWcpO1xuICAgICAgICAgICAgICAgIGV4cGxvcmF0b3J5SW1nLnNyYyA9IGV4cGxvcmF0b3J5UGF0dGVybjtcblxuICAgICAgICAgICAgICAgIC8vIFVzZSBpdFxuICAgICAgICAgICAgICAgIG1hcC5hZGRMYXllcihcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkaW5nIGEgbGF5ZXIgY29udGFpbmluZyB0aGUgdGlsZXNldCB3aXRoIGNvdW50cnkgYm91bmRhcmllc1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJQYXRoZmluZGVycyBFeHBsb3JhdG9yeVwiLCAvL3RoaXMgaXMgdGhlIG5hbWUgb2Ygb3VyIGxheWVyLCB3aGljaCB3ZSB3aWxsIG5lZWQgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ2ZWN0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwibWFwYm94Oi8vcm9saWthc2kuMmtuNGp2eWhcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJzb3VyY2UtbGF5ZXJcIjogXCJuZV8xMG1fYWRtaW5fMF9jb3VudHJpZXMtZHhsYXN4XCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmlsbFwiLFxuICAgICAgICAgICAgICAgICAgICBwYWludDoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbC1wYXR0ZXJuXCI6IFwiZXhwbG9yYXRvcnktcGF0dGVyblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbC1vcGFjaXR5XCI6IDAuNSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZmlyc3RTeW1ib2xJZFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBtYXAuc2V0RmlsdGVyKFxuICAgICAgICAgICAgICAgICAgXCJQYXRoZmluZGVycyBFeHBsb3JhdG9yeVwiLFxuICAgICAgICAgICAgICAgICAgW1wiaW5cIiwgXCJBRE0wX0EzX0lTXCJdLmNvbmNhdChPYmplY3Qua2V5cyhwcm9wcy5wYXRoZmluZGVyRXhwbG9yYXRvcnkpKVxuICAgICAgICAgICAgICAgICk7IC8vIFRoaXMgbGluZSBsZXRzIHVzIGZpbHRlciBieSBjb3VudHJ5IGNvZGVzLlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKG1hcC5nZXRMYXllcihcIlBhdGhmaW5kZXJzIENvbmZpcm1lZFwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGF0aGZpbmRlcnMgQ29uZmlybWVkIGxheWVyIGlzIGFscmVhZHkgY3JlYXRlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRGVjbGFyZSB0aGUgaW1hZ2VcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlybWVkSW1nID0gbmV3IEltYWdlKDIwLCAyMCk7XG4gICAgICAgICAgICAgICAgY29uZmlybWVkSW1nLm9ubG9hZCA9ICgpID0+XG4gICAgICAgICAgICAgICAgICBtYXAuYWRkSW1hZ2UoXCJjb25maXJtZWQtcGF0dGVyblwiLCBjb25maXJtZWRJbWcpO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1lZEltZy5zcmMgPSBjb25maXJtZWRQYXR0ZXJuO1xuXG4gICAgICAgICAgICAgICAgLy8gVXNlIGl0XG4gICAgICAgICAgICAgICAgbWFwLmFkZExheWVyKFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGRpbmcgYSBsYXllciBjb250YWluaW5nIHRoZSB0aWxlc2V0IHdpdGggY291bnRyeSBib3VuZGFyaWVzXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIlBhdGhmaW5kZXJzIENvbmZpcm1lZFwiLCAvL3RoaXMgaXMgdGhlIG5hbWUgb2Ygb3VyIGxheWVyLCB3aGljaCB3ZSB3aWxsIG5lZWQgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ2ZWN0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwibWFwYm94Oi8vcm9saWthc2kuMmtuNGp2eWhcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJzb3VyY2UtbGF5ZXJcIjogXCJuZV8xMG1fYWRtaW5fMF9jb3VudHJpZXMtZHhsYXN4XCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmlsbFwiLFxuICAgICAgICAgICAgICAgICAgICBwYWludDoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbC1wYXR0ZXJuXCI6IFwiY29uZmlybWVkLXBhdHRlcm5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImZpbGwtb3BhY2l0eVwiOiAwLjUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0U3ltYm9sSWRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgbWFwLnNldEZpbHRlcihcbiAgICAgICAgICAgICAgICAgIFwiUGF0aGZpbmRlcnMgQ29uZmlybWVkXCIsXG4gICAgICAgICAgICAgICAgICBbXCJpblwiLCBcIkFETTBfQTNfSVNcIl0uY29uY2F0KE9iamVjdC5rZXlzKHByb3BzLnBhdGhmaW5kZXJDb25maXJtZWQpKVxuICAgICAgICAgICAgICAgICk7IC8vIFRoaXMgbGluZSBsZXRzIHVzIGZpbHRlciBieSBjb3VudHJ5IGNvZGVzLlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKG1hcC5nZXRMYXllcihcImNvdW50cmllc1wiKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY291bnRyaWVzIGxheWVyIGlzIGFscmVhZHkgY3JlYXRlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWFwLmFkZExheWVyKFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGRpbmcgYSBsYXllciBjb250YWluaW5nIHRoZSB0aWxlc2V0IHdpdGggY291bnRyeSBib3VuZGFyaWVzXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImNvdW50cmllc1wiLCAvL3RoaXMgaXMgdGhlIG5hbWUgb2Ygb3VyIGxheWVyLCB3aGljaCB3ZSB3aWxsIG5lZWQgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ2ZWN0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwibWFwYm94Oi8vcm9saWthc2kuMmtuNGp2eWhcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJzb3VyY2UtbGF5ZXJcIjogXCJuZV8xMG1fYWRtaW5fMF9jb3VudHJpZXMtZHhsYXN4XCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmlsbFwiLFxuICAgICAgICAgICAgICAgICAgICBwYWludDoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbC1jb2xvclwiOiBcIndoaXRlXCIsIC8vdGhpcyBoZWxwcyB1cyBkaXN0aW5ndWlzaCBpbmRpdmlkdWFsIGNvdW50cmllcyBhIGJpdCBiZXR0ZXIgYnkgZ2l2aW5nIHRoZW0gYW4gb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbC1vcGFjaXR5XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZmlyc3RTeW1ib2xJZFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBtYXAuc2V0RmlsdGVyKFxuICAgICAgICAgICAgICAgICAgXCJjb3VudHJpZXNcIixcbiAgICAgICAgICAgICAgICAgIFtcImluXCIsIFwiQURNMF9BM19JU1wiXS5jb25jYXQoT2JqZWN0LmtleXMocHJvcHMuY291bnRyaWVzKSlcbiAgICAgICAgICAgICAgICApOyAvLyBUaGlzIGxpbmUgbGV0cyB1cyBmaWx0ZXIgYnkgY291bnRyeSBjb2Rlcy5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbWFwLmdldExheWVyKFwiY291bnRyaWVzXCIpJywgbWFwLmdldExheWVyKFwiY291bnRyaWVzXCIpKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCAzZCBsYXllciB3aXRoIGV4dHJ1ZGVzXG4gICAgICAgICAgICAgICAgbWFwLmFkZFNvdXJjZShcIkRQR3MgZGV2ZWxvcGVkLXBvbHlnb25zLXNvdXJjZVwiLCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImdlb2pzb25cIixcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHByb3BzLmRldlBvbHlnb25zLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG1hcC5hZGRTb3VyY2UoXCJEUEdzIGRlcGxveWVkLXBvbHlnb25zLXNvdXJjZVwiLCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImdlb2pzb25cIixcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHByb3BzLmRlcFBvbHlnb25zLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbWFwLmFkZExheWVyKHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcIkRQR3MgZGV2ZWxvcGVkXCIsXG4gICAgICAgICAgICAgICAgICBzb3VyY2U6IFwiRFBHcyBkZXZlbG9wZWQtcG9seWdvbnMtc291cmNlXCIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImZpbGwtZXh0cnVzaW9uXCIsXG4gICAgICAgICAgICAgICAgICBwYWludDoge1xuICAgICAgICAgICAgICAgICAgICBcImZpbGwtZXh0cnVzaW9uLWNvbG9yXCI6IFwiI0ZGOTUyQVwiLFxuICAgICAgICAgICAgICAgICAgICBcImZpbGwtZXh0cnVzaW9uLWhlaWdodFwiOiBbXCJnZXRcIiwgXCJoZWlnaHRcIl0sXG4gICAgICAgICAgICAgICAgICAgIFwiZmlsbC1leHRydXNpb24tYmFzZVwiOiBbXCJnZXRcIiwgXCJiYXNlXCJdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBtYXAuYWRkTGF5ZXIoe1xuICAgICAgICAgICAgICAgICAgaWQ6IFwiRFBHcyBkZXBsb3llZFwiLFxuICAgICAgICAgICAgICAgICAgc291cmNlOiBcIkRQR3MgZGVwbG95ZWQtcG9seWdvbnMtc291cmNlXCIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImZpbGwtZXh0cnVzaW9uXCIsXG4gICAgICAgICAgICAgICAgICBwYWludDoge1xuICAgICAgICAgICAgICAgICAgICBcImZpbGwtZXh0cnVzaW9uLWNvbG9yXCI6IFwiIzMzMzNBQlwiLFxuICAgICAgICAgICAgICAgICAgICBcImZpbGwtZXh0cnVzaW9uLWhlaWdodFwiOiBbXCJnZXRcIiwgXCJoZWlnaHRcIl0sXG4gICAgICAgICAgICAgICAgICAgIFwiZmlsbC1leHRydXNpb24tYmFzZVwiOiBbXCJnZXRcIiwgXCJiYXNlXCJdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgW1wiRFBHcyBkZXBsb3llZFwiLCBcIkRQR3MgZGV2ZWxvcGVkXCJdLm1hcCgobGF5ZXIsIGkpID0+XG4gICAgICAgICAgICAgICAgICBtYXAuYWRkTGF5ZXIoe1xuICAgICAgICAgICAgICAgICAgICBpZDogYCR7bGF5ZXJ9LXRleHRgLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IGAke2xheWVyfS1wb2x5Z29ucy1zb3VyY2VgLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN5bWJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBwYWludDoge1xuICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1jb2xvclwiOiBbXCIjMzMzM0FCXCIsIFwiI0ZGOTUyQVwiXVtpXSxcbiAgICAgICAgICAgICAgICAgICAgICBcInRleHQtaGFsby1jb2xvclwiOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInRleHQtaGFsby13aWR0aFwiOiAxLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcInRleHQtZmllbGRcIjogW1wiZ2V0XCIsIFwidGV4dC1maWVsZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBcInRleHQtc2l6ZVwiOiBbXCJpbnRlcnBvbGF0ZVwiLCBbXCJsaW5lYXJcIl0sIFtcInpvb21cIl0sIDQuNSwgMCwgNSwgMTZdLFxuICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1vZmZzZXRcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnRlcnBvbGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1wibGluZWFyXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1wiem9vbVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDQuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcImxpdGVyYWxcIiwgWzAsIDAuNV1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcImxpdGVyYWxcIiwgWzAsIDNdXSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIC8vIHNldCBtYXAgc28gd2UgY2FuIHJlc2l6ZSgpIGl0IGluIGZ1dHVyZSBmcm9tIGFueXdoZXJlXG4gICAgICAgICAgICAgICAgc2V0TWFwSW5zdGFuY2UobWFwKTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCBjb3VudHJ5IGluZm8gd2hlbiBjbGlja2VkIG9uIGNvdW50cnkgd2l0aCBhbnkgZGF0YVxuICAgICAgICAgICAgICAgIG1hcC5vbihcImNsaWNrXCIsIFwiY291bnRyaWVzXCIsIGZ1bmN0aW9uIChtYXBFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVTZWxlY3RDb3VudHJ5KG1hcEVsZW1lbnQuZmVhdHVyZXNbMF0ucHJvcGVydGllcy5BRE0wX0EzX0lTKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtYXAub24oXCJtb3VzZWVudGVyXCIsIFwiY291bnRyaWVzXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIG1hcC5nZXRDYW52YXMoKS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtYXAub24oXCJtb3VzZWxlYXZlXCIsIFwiY291bnRyaWVzXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIG1hcC5nZXRDYW52YXMoKS5zdHlsZS5jdXJzb3IgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxab29tQ29udHJvbCBwb3NpdGlvbj1cImJvdHRvbS1yaWdodFwiIC8+XG4gICAgICAgICAgICA8TWFwQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgICAgeyhtYXApID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2aXNpYmxlTGF5ZXIpLm1hcCgobGF5ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9nZ2xlIFwiLCBsYXllciwgXCIgdmlzaWJpbGl0eVwiKTtcbiAgICAgICAgICAgICAgICAgIG1hcC5nZXRMYXllcihsYXllcilcbiAgICAgICAgICAgICAgICAgICAgPyBtYXAuc2V0TGF5b3V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZUxheWVyW2xheWVyXSA/IFwidmlzaWJsZVwiIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgLy8gdG9nZ2xlIHRleHQgbGF5ZXIgZm9yIDNkIHZpc3VhbGl6YXRpb25zXG4gICAgICAgICAgICAgICAgICBpZiAoW1wiRFBHcyBkZXZlbG9wZWRcIiwgXCJEUEdzIGRlcGxveWVkXCJdLmluY2x1ZGVzKGxheWVyKSkge1xuICAgICAgICAgICAgICAgICAgICBtYXAuZ2V0TGF5ZXIobGF5ZXIgKyBcIi10ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgPyBtYXAuc2V0TGF5b3V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyICsgXCItdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZUxheWVyW2xheWVyXSA/IFwidmlzaWJsZVwiIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJldkdvb2QubmFtZSkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2dnbGUgcHJldmdvb2QgdmlzaWJpbGl0eVwiKTtcbiAgICAgICAgICAgICAgICAgIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eShwcmV2R29vZC5uYW1lICsgXCItZGV2ZWxvcFwiLCBcInZpc2liaWxpdHlcIiwgXCJub25lXCIpO1xuICAgICAgICAgICAgICAgICAgbWFwLnNldExheW91dFByb3BlcnR5KHByZXZHb29kLm5hbWUgKyBcIi1kZXBsb3lcIiwgXCJ2aXNpYmlsaXR5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkR29vZC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvZ2dsZSBzZWxlY3RlZCBnb29kIHZpc2liaWxpdHlcIik7XG4gICAgICAgICAgICAgICAgICBtYXAuc2V0TGF5b3V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkR29vZC5uYW1lICsgXCItZGV2ZWxvcFwiLFxuICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCJcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBtYXAuc2V0TGF5b3V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkR29vZC5uYW1lICsgXCItZGVwbG95XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA8L01hcENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgPC9NYXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SW5WaWV3XG4gICAgICAgICAgYXM9XCJkaXZcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoaW5WaWV3KSA9PiB7XG4gICAgICAgICAgICBzZXRNYXBJbnRlcmFjdGl2ZSghaW5WaWV3KTtcbiAgICAgICAgICAgIGlmIChtYXBJbnN0YW5jZSkgbWFwSW5zdGFuY2UucmVzaXplKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsZXJcIj5cbiAgICAgICAgICAgIDxTY3JvbGxhbWEgb25TdGVwRW50ZXI9e29uU3RlcEVudGVyfSBvZmZzZXQ9XCIwLjdcIj5cbiAgICAgICAgICAgICAge3Byb3BzLnN0b3J5Lm1hcCgoXywgc3RlcEluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPFN0ZXAgZGF0YT17c3RlcEluZGV4fSBrZXk9e3N0ZXBJbmRleH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNjcm9sbHktcCAke3N0ZXBJbmRleCA9PSAwID8gXCJmaXJzdFwiIDogXCJcIn0gJHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwSW5kZXggPT0gcHJvcHMuc3RvcnkubGVuZ3RoIC0gMSA/IFwibGFzdFwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHA+e18udGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgIHtzdGVwSW5kZXggPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBTY3JvbGwgZG93biB0byBzZWUgdGhlIHN0b3J5IG9yIHNraXAgaXQgYW5ke1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVTY3JvbGxUb0JvdHRvbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9yZSB0aGUgbWFwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxBcnJvd3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1Njcm9sbGFtYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9JblZpZXc+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBzZWxlY3RlZEdvb2QubmFtZSB8fCAoT2JqZWN0LnZhbHVlcyh2aXNpYmxlTGF5ZXIpLnNvbWUoaXRlbSA9PiBpdGVtKSAmJiAhbWFwSW50ZXJhY3RpdmUpICYmIHByb3BzLnN0b3J5W2N1cnJlbnRTdGVwSW5kZXhdLmltYWdlID09IFwiZmFsc2VcIlxuICAgICAgICAgICAgICA/IFwibWFwLW92ZXJsYXkgYWN0aXZlXCJcbiAgICAgICAgICAgICAgOiBcIm1hcC1vdmVybGF5XCJcbiAgICAgICAgICB9XG4gICAgICAgICAgaWQ9XCJsZWdlbmRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWdlbmRDb250YWluZXJcIj5cbiAgICAgICAgICAgIHtzZWxlY3RlZEdvb2QubmFtZSAmJiBsZWdlbmRzLm1hcCgobGVnZW5kLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17bGVnZW5kICsgaW5kZXh9PlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWdlbmQta2V5XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPT0gMFxuICAgICAgICAgICAgICAgICAgICAgID8ge2JhY2tncm91bmRJbWFnZTogYHVybCgke2hhcmR3YXJlUGF0dGVybn0pYH1cbiAgICAgICAgICAgICAgICAgICAgICA6IHtiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1tpbmRleF19XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57bGVnZW5kfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHshbWFwSW50ZXJhY3RpdmUgJiYgT2JqZWN0LmVudHJpZXModmlzaWJsZUxheWVyKS5tYXAoKGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gbGF5ZXJbMV0gJiZcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2xheWVyWzBdICsgaW5kZXh9PlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWdlbmQta2V5IHJlY3RhbmdsZVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17bGF5ZXJTdHlsZXNbbGF5ZXJbMF1dXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57bGF5ZXJbMF19PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge21hcEludGVyYWN0aXZlICYmIHdpZHRoID49IDEwMDggJiYgKFxuICAgICAgICA8SW5mb0NvbXBvbmVudFxuICAgICAgICAgIHNlbGVjdGVkR29vZD17c2VsZWN0ZWRHb29kfVxuICAgICAgICAgIHNlbGVjdGVkQ291bnRyeT17c2VsZWN0ZWRDb3VudHJ5fVxuICAgICAgICAgIG9uU2VsZWN0R29vZD17aGFuZGxlU2VsZWN0R29vZFBvcHVwfVxuICAgICAgICAgIG9uU2VsZWN0Q291bnRyeT17aGFuZGxlU2VsZWN0Q291bnRyeX1cbiAgICAgICAgICBvbkxheWVyVG9nZ2xlPXtoYW5kbGVMYXllclRvZ2dsZX1cbiAgICAgICAgICB2aXNpYmxlTGF5ZXI9e3Zpc2libGVMYXllcn1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICBTZWFyY2hCb3g9e1xuICAgICAgICAgICAgPFNlYXJjaEJveFxuICAgICAgICAgICAgICByZWY9e3NlYXJjaFJlZn1cbiAgICAgICAgICAgICAgZ29vZHM9e3Byb3BzLmRpZ2l0YWxHb29kc31cbiAgICAgICAgICAgICAgY291bnRyaWVzPXtwcm9wcy5jb3VudHJpZXN9XG4gICAgICAgICAgICAgIG9uU2VsZWN0Q291bnRyeT17aGFuZGxlU2VsZWN0Q291bnRyeX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRHb29kPXtzZWxlY3RlZEdvb2QubmFtZX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRDb3VudHJ5PXtzZWxlY3RlZENvdW50cnkubmFtZX1cbiAgICAgICAgICAgICAgb25TZWxlY3RHb29kPXtoYW5kbGVDaGFuZ2VTZWFyY2hib3h9XG4gICAgICAgICAgICAgIGNsZWFyU2VsZWN0ZWRHb29kPXtoYW5kbGVDbGVhclNlYXJjaGJveH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHt3aWR0aCA8IDEwMDggJiYgKFxuICAgICAgICA8SW5mb0NvbXBvbmVudFxuICAgICAgICAgIHNlbGVjdGVkR29vZD17c2VsZWN0ZWRHb29kfVxuICAgICAgICAgIHNlbGVjdGVkQ291bnRyeT17c2VsZWN0ZWRDb3VudHJ5fVxuICAgICAgICAgIG9uU2VsZWN0R29vZD17aGFuZGxlU2VsZWN0R29vZFBvcHVwfVxuICAgICAgICAgIG9uU2VsZWN0Q291bnRyeT17aGFuZGxlU2VsZWN0Q291bnRyeX1cbiAgICAgICAgICB2aXNpYmxlTGF5ZXI9e3Zpc2libGVMYXllcn1cbiAgICAgICAgICBvbkxheWVyVG9nZ2xlPXtoYW5kbGVMYXllclRvZ2dsZX1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHtmb3J3YXJkUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlLCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRwZ0JhZGdlIGZyb20gXCIuLi9wdWJsaWMvZHBnQmFkZ2Uuc3ZnXCI7XG5pbXBvcnQgVXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi9Vc2VXaW5kb3dEaW1lbnNpb25zXCI7XG5cbmNvbnN0IFNlYXJjaEJveCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXG4gICAgcHJvcHMuc2VsZWN0ZWRHb29kXG4gICAgICA/IHByb3BzLnNlbGVjdGVkR29vZFxuICAgICAgOiBwcm9wcy5zZWxlY3RlZENvdW50cnlcbiAgICAgID8gcHJvcHMuc2VsZWN0ZWRDb3VudHJ5XG4gICAgICA6IFwiXCJcbiAgKTtcbiAgY29uc3Qge3dpZHRofSA9IFVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgY29uc3QgaGFuZGxlTW91c2VPdmVyID0gKCkgPT4ge1xuICAgICFtZW51T3BlbiAmJiBzZXRNZW51T3Blbih0cnVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBtZW51T3BlbiAmJiBzZXRNZW51T3BlbihmYWxzZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZU1lbnVDbGljayA9ICgpID0+IHtcbiAgICAhbWVudU9wZW4gJiYgc2V0TWVudU9wZW4odHJ1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZU1lbnVTZWxlY3QgPSAoKSA9PiB7XG4gICAgbWVudU9wZW4gJiYgc2V0TWVudU9wZW4oZmFsc2UpO1xuICB9O1xuICBjb25zdCBbc2VhcmNoRm9jdXNlZCwgc2V0U2VhcmNoRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uRm9jdXMgPSAoKSA9PiBzZXRTZWFyY2hGb2N1c2VkKHRydWUpO1xuICBjb25zdCBvbkJsdXIgPSAoKSA9PiBzZXRTZWFyY2hGb2N1c2VkKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGl0ZW0sIGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBIZXJlLCB3ZSBpbnZva2UgdGhlIGNhbGxiYWNrIHdpdGggdGhlIG5ldyB2YWx1ZVxuICAgIHNldElucHV0VmFsdWUoaXRlbS5uYW1lKTtcbiAgICBwcm9wcy5vblNlbGVjdEdvb2QoaXRlbSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVNlbGVjdENvdW50cnkgPSAoaXRlbSwgZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIEhlcmUsIHdlIGludm9rZSB0aGUgY2FsbGJhY2sgd2l0aCB0aGUgbmV3IHZhbHVlXG4gICAgc2V0SW5wdXRWYWx1ZShpdGVtLm5hbWUpO1xuICAgIHByb3BzLm9uU2VsZWN0Q291bnRyeShpdGVtLmNvZGUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDbGVhciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgc2V0SW5wdXRWYWx1ZShcIlwiKTtcbiAgICBwcm9wcy5jbGVhclNlbGVjdGVkR29vZCgpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChldmVudCkgPT4ge1xuICAgIHNldElucHV0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlSW5wdXRTaXplID0gKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiMnJlbVwiO1xuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gIH07XG4gIGNvbnN0IGNoYW5nZUlucHV0ID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG4gIH07XG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYW5nZUlucHV0OiBjaGFuZ2VJbnB1dCxcbiAgICB9O1xuICB9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoYW5kbGVJbnB1dFNpemUodGV4dFJlZi5jdXJyZW50KTtcbiAgICAvLyBjb2RlIHRvIHJ1biBhZnRlciByZW5kZXIgZ29lcyBoZXJlXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RDb250YWluZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17aGFuZGxlTWVudUNsaWNrfVxuICAgICAgICBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgIGlkPVwiZGctbWVudVwiXG4gICAgICA+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHJlZj17dGV4dFJlZn1cbiAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxuICAgICAgICAgIG9uQmx1cj17KGUpID0+IG9uQmx1cihlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hJbnB1dFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgZGlnaXRhbCBnb29kIG9yIGNvdW50cnlcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoZSl9XG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17bWVudU9wZW4gfHwgc2VhcmNoRm9jdXNlZCA/IFwiYXJyb3cgdXAgYWN0aXZlXCIgOiBcImFycm93IGRvd24gYWN0aXZlXCJ9XG4gICAgICAgID48L3NwYW4+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZW51U2VsZWN0fVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgICAgICBpZD1cImRnLW1lbnUtZHJvcGRvd25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17bWVudU9wZW4gfHwgc2VhcmNoRm9jdXNlZCA/IFwiYWN0aXZlXCIgOiBcIlwifVxuICAgICAgICA+XG4gICAgICAgICAge3Byb3BzLmdvb2RzXG4gICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAoZWwpID0+IGVsLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgIT09IC0xXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSlcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxhIGtleT17aXRlbS5uYW1lICsgaW5kZXh9IGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGhhbmRsZVNlbGVjdChpdGVtLCBlKX0+XG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICB7d2lkdGggPiAxMDA4ICYmIDxpbWcgd2lkdGg9XCI0NXB4XCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz17ZHBnQmFkZ2V9PjwvaW1nPn1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAge09iamVjdC52YWx1ZXMocHJvcHMuY291bnRyaWVzKVxuICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgKGVsKSA9PiBlbC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lICsgaW5kZXh9XG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVTZWxlY3RDb3VudHJ5KGl0ZW0sIGUpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlSWNvblwiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGVhcihlKX0+XG4gICAgICAgIDxzcGFuPng8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQm94O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU56a2lJR2hsYVdkb2REMGlOemtpSUhacFpYZENiM2c5SWpBZ01DQTNPU0EzT1NJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNEtQR2NnWTJ4cGNDMXdZWFJvUFNKMWNtd29JMk5zYVhBd0tTSStDanhzYVc1bElIa3hQU0l0TVM0MUlpQjRNajBpT1RNdU56YzFJaUI1TWowaUxURXVOU0lnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTUM0MUlEQXVPRFkyTURJMUlEQXVOVEEzTnpZeklDMHdMamcyTVRRNU55QXRNemN1TURrNU5TQXRNQzQ0T1RReU5UY3BJaUJ6ZEhKdmEyVTlJaU15UVVFNFFUZ2lJSE4wY205clpTMTNhV1IwYUQwaU15SXZQZ284YkdsdVpTQjVNVDBpTFRFdU5TSWdlREk5SWprekxqYzNOU0lnZVRJOUlpMHhMalVpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RBdU5TQXdMamcyTmpBeU5TQXdMalV3TnpjMk15QXRNQzQ0TmpFME9UY2dMVEl4TGpJeE1pQXRNQzQ0T1RReU5UY3BJaUJ6ZEhKdmEyVTlJaU15UVVFNFFUZ2lJSE4wY205clpTMTNhV1IwYUQwaU15SXZQZ284YkdsdVpTQjVNVDBpTFRFdU5TSWdlREk5SWprekxqYzNOU0lnZVRJOUlpMHhMalVpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RBdU5TQXdMamcyTmpBeU5TQXdMalV3TnpjMk15QXRNQzQ0TmpFME9UY2dMVFV1TXpJME5UZ2dMVEF1T0RrME1qVTNLU0lnYzNSeWIydGxQU0lqTWtGQk9FRTRJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqTWlMejRLUEd4cGJtVWdlVEU5SWkweExqVWlJSGd5UFNJNU15NDNOelVpSUhreVBTSXRNUzQxSWlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNnd0xqVWdNQzQ0TmpZd01qVWdNQzQxTURjM05qTWdMVEF1T0RZeE5EazNJREV3TGpVMk1qa2dMVEF1T0RrME1qVTNLU0lnYzNSeWIydGxQU0lqTWtGQk9FRTRJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqTWlMejRLUEd4cGJtVWdlVEU5SWkweExqVWlJSGd5UFNJNU15NDNOelVpSUhreVBTSXRNUzQxSWlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNnd0xqVWdNQzQ0TmpZd01qVWdNQzQxTURjM05qTWdMVEF1T0RZeE5EazNJREkyTGpRMU1ETWdMVEF1T0RrME1qVTNLU0lnYzNSeWIydGxQU0lqTWtGQk9FRTRJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqTWlMejRLUEd4cGJtVWdlVEU5SWkweExqVWlJSGd5UFNJNU15NDNOelVpSUhreVBTSXRNUzQxSWlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNnd0xqVWdNQzQ0TmpZd01qVWdNQzQxTURjM05qTWdMVEF1T0RZeE5EazNJRFF5TGpNek56Z2dMVEF1T0RrME1qVTNLU0lnYzNSeWIydGxQU0lqTWtGQk9FRTRJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqTWlMejRLUEd4cGJtVWdlVEU5SWkweExqVWlJSGd5UFNJNU15NDNOelVpSUhreVBTSXRNUzQxSWlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNnd0xqVWdNQzQ0TmpZd01qVWdNQzQxTURjM05qTWdMVEF1T0RZeE5EazNJRFU0TGpJeU5USWdMVEF1T0RrME1qVTNLU0lnYzNSeWIydGxQU0lqTWtGQk9FRTRJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqTWlMejRLUEd4cGJtVWdlVEU5SWkweExqVWlJSGd5UFNJNU15NDNOelVpSUhreVBTSXRNUzQxSWlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNnd0xqVWdNQzQ0TmpZd01qVWdNQzQxTURjM05qTWdMVEF1T0RZeE5EazNJRGMwTGpFeE1qY2dMVEVwSWlCemRISnZhMlU5SWlNeVFVRTRRVGdpSUhOMGNtOXJaUzEzYVdSMGFEMGlNeUl2UGdvOEwyYytDanhrWldaelBnbzhZMnhwY0ZCaGRHZ2dhV1E5SW1Oc2FYQXdJajRLUEhKbFkzUWdkMmxrZEdnOUlqYzVJaUJvWldsbmFIUTlJamM1SWlCbWFXeHNQU0ozYUdsMFpTSWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29MVEVnTUNBd0lERWdOemtnTUNraUx6NEtQQzlqYkdsd1VHRjBhRDRLUEM5a1pXWnpQZ284TDNOMlp6NEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakl1TXl3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvSklIWnBaWGRDYjNnOUlqQWdNQ0E1TWk0eE9TQTBOaTQwTnlJZ2MzUjViR1U5SW1WdVlXSnNaUzFpWVdOclozSnZkVzVrT201bGR5QXdJREFnT1RJdU1Ua2dORFl1TkRjN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajRLUEhOMGVXeGxJSFI1Y0dVOUluUmxlSFF2WTNOeklqNEtDUzV6ZERCN1ptbHNiRG9qTWtNeU5qbEJPMzBLQ1M1emRERjdabWxzYkRvak9ESkVRa1V4TzMwS0NTNXpkREo3Wm1sc2JEcHViMjVsTzNOMGNtOXJaVG9qUmtaR1JrWkdPM04wY205clpTMXRhWFJsY214cGJXbDBPakV3TzMwS1BDOXpkSGxzWlQ0S1BHYytDZ2s4Wno0S0NRazhaejRLQ1FrSlBHYytDZ2tKQ1FrOFp6NEtDUWtKQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5Oek11TlRJc05EUXVOVGhJT0M0MU1Vd3hMakkwTERNd0xqVTFiREF1TVRZdE1DNHpORXd4TkM0M01Td3hMamc1YkRZMExqazFMREJzTnk0eU5Td3hOQzR3TjB3M015NDFNaXcwTkM0MU9Ib2dUVGt1TkRJc05ETXVNRGhvTmpNdU1UUUtDUWtKQ1FrSmJERXlMalk0TFRJM0xqQTRiQzAyTGpRNUxURXlMalpJTVRVdU5qZE1NaTQ1TVN3ek1DNDFNa3c1TGpReUxEUXpMakE0ZWlJdlBnb0pDUWtKUEM5blBnb0pDUWs4TDJjK0Nna0pQQzluUGdvSlBDOW5QZ29KUEdjK0Nna0pQR2MrQ2drSkNUeG5QZ29KQ1FrSlBHYytDZ2tKQ1FrSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTVNJZ1pEMGlUVGN6TGpVeUxEUTBMalU0U0RndU5URk1NUzR5TkN3ek1DNDFOV3d3TGpFMkxUQXVNelJNTVRRdU56RXNNUzQ0T1d3Mk5DNDVOU3d3YkRjdU1qVXNNVFF1TURkTU56TXVOVElzTkRRdU5UaDZJRTA1TGpReUxEUXpMakE0YURZekxqRTBDZ2tKQ1FrSkNXd3hNaTQyT0MweU55NHdPR3d0Tmk0ME9TMHhNaTQyU0RFMUxqWTNUREl1T1RFc016QXVOVEpNT1M0ME1pdzBNeTR3T0hvaUx6NEtDUWtKQ1R3dlp6NEtDUWtKUEM5blBnb0pDVHd2Wno0S0NUd3ZaejRLQ1R4d2IyeDVaMjl1SUdOc1lYTnpQU0p6ZERFaUlIQnZhVzUwY3owaU1UUXVOekVzTVM0NE9TQTNPQzQzTlN3eExqZzVJRGcxTGpJMExERTFMams1SURjeUxqVTJMRFF6TGpBNElEa3VORElzTkRNdU1EZ2dNaTQ1TVN3ek1DNDFNaUFKSWk4K0NnazhaejRLQ1FrOFp6NEtDUWtKUEhCaGRHZ2dZMnhoYzNNOUluTjBNQ0lnWkQwaVRURTRMakExTERFMUxqUm9OQzR4TVdNMExqRTBMREFzTnk0MU1pd3pMak0yTERjdU5USXNOeTQxTW5NdE15NHpPQ3czTGpVeUxUY3VOVElzTnk0MU1tZ3ROQzR4TVZZeE5TNDBlaUJOTWpJdU1UUXNNamd1T0RRS0NRa0pDV016TGpNMExEQXNOUzQ1TkMweUxqVXpMRFV1T1RRdE5TNDVNbE15TlM0ME9Dd3hOeXd5TWk0eE5Dd3hOMmd0TWk0MU1YWXhNUzQ0TTBneU1pNHhOSG9pTHo0S0NRa0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFRReUxqTXpMREU1TGpVNFl6QXNNaTR6TXkweExqZzJMRFF1TVRZdE5DNHhPU3cwTGpFMmFDMHpMamM1ZGpZdU4yZ3RNUzQyVmpFMUxqUm9OUzR6T1VNME1DNDBOeXd4TlM0MExEUXlMak16TERFM0xqSTRMRFF5TGpNekxERTVMalU0ZWdvSkNRa0pJRTAwTUM0M015d3hPUzQyTVdNd0xURXVOaTB4TGpJekxUSXVOall0TWk0M015MHlMalkyYUMwekxqWTBkalV1TWpkb015NDJORU16T1M0MUxESXlMakl5TERRd0xqY3pMREl4TGpJMkxEUXdMamN6TERFNUxqWXhlaUl2UGdvSkNRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTlRrdU5URXNNakl1TkRkMk1DNDBOV013TERRdU1qWXRNeTQwTml3M0xqY3lMVGN1TnpJc055NDNNbU10TkM0eU9Td3dMVGN1TnpJdE15NDBOaTAzTGpjeUxUY3VOekpqTUMwMExqSTJMRE11TkRRdE55NDNNaXczTGpjeUxUY3VOeklLQ1FrSkNXTXlMamc0TERBc05TNHpPU3d4TGpVNExEWXVOamtzTXk0NU1Xd3RNUzR6T0N3d0xqYzRZeTB4TGpBekxURXVPRFl0TXk0d015MHpMakE0TFRVdU16RXRNeTR3T0dNdE15NHpPU3d3TFRZdU1USXNNaTQzTVMwMkxqRXlMRFl1TVRKek1pNDNNeXcyTGpFeUxEWXVNVElzTmk0eE1nb0pDUWtKWXpNdU1ETXNNQ3cxTGpVMExUSXVNVFlzTmk0d01pMDFMakEzYUMwMkxqQTBkaTB4TGpWSU5Ua3VOVEY2SWk4K0Nna0pQQzluUGdvSlBDOW5QZ29KUEdjK0Nna0pQR2MrQ2drSkNUeHlaV04wSUhnOUlqWTNMalF5SWlCNVBTSXhNUzR3TkNJZ1kyeGhjM005SW5OME1DSWdkMmxrZEdnOUlqRTVMamt5SWlCb1pXbG5hSFE5SWpFNUxqa3lJaTgrQ2drSkNRb0pDUWtKUEhKbFkzUWdlRDBpTmpjdU16Z2lJSGs5SWpFd0xqazJJaUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d3TGpnMk5pQXdMalVnTFRBdU5TQXdMamcyTmlBeU1DNDRNakF4SUMwek5TNDROalkxS1NJZ1kyeGhjM005SW5OME1DSWdkMmxrZEdnOUlqRTVMamt5SWlCb1pXbG5hSFE5SWpFNUxqa3lJaTgrQ2drSkNUeHlaV04wSUhnOUlqWTNMak00SWlCNVBTSXhNQzQ1TmlJZ2RISmhibk5tYjNKdFBTSnRZWFJ5YVhnb01DNDROallnTFRBdU5TQXdMalVnTUM0NE5qWWdMVEF1TURrM05TQTBNUzQwTnpFMEtTSWdZMnhoYzNNOUluTjBNQ0lnZDJsa2RHZzlJakU1TGpreUlpQm9aV2xuYUhROUlqRTVMamt5SWk4K0Nna0pQQzluUGdvSkNUeHdiMng1YkdsdVpTQmpiR0Z6Y3owaWMzUXlJaUJ3YjJsdWRITTlJamN5TGpNMExESXhMakUxSURjMkxqRXlMREkwTGpreklEZ3pMalE0TERFM0xqVTNJQWtKSWk4K0NnazhMMmMrQ2p3dlp6NEtQQzl6ZG1jK0NnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOemtpSUdobGFXZG9kRDBpTnpraUlIWnBaWGRDYjNnOUlqQWdNQ0EzT1NBM09TSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEdjZ1kyeHBjQzF3WVhSb1BTSjFjbXdvSTJOc2FYQXdLU0krQ2p4c2FXNWxJSGt4UFNJdE1TNDFJaUI0TWowaU9UTXVOemMxSWlCNU1qMGlMVEV1TlNJZ2RISmhibk5tYjNKdFBTSnRZWFJ5YVhnb0xUQXVOU0F3TGpnMk5qQXlOU0F0TUM0MU1EYzNOak1nTFRBdU9EWXhORGszSURFeE5pNHdPVGtnTFRBdU9EazBNalUzS1NJZ2MzUnliMnRsUFNJalJqQTJNRGMySWlCemRISnZhMlV0ZDJsa2RHZzlJak1pTHo0S1BHeHBibVVnZVRFOUlpMHhMalVpSUhneVBTSTVNeTQzTnpVaUlIa3lQU0l0TVM0MUlpQjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3RNQzQxSURBdU9EWTJNREkxSUMwd0xqVXdOemMyTXlBdE1DNDROakUwT1RjZ01UQXdMakl4TWlBdE1DNDRPVFF5TlRjcElpQnpkSEp2YTJVOUlpTkdNRFl3TnpZaUlITjBjbTlyWlMxM2FXUjBhRDBpTXlJdlBnbzhiR2x1WlNCNU1UMGlMVEV1TlNJZ2VESTlJamt6TGpjM05TSWdlVEk5SWkweExqVWlJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLQzB3TGpVZ01DNDROall3TWpVZ0xUQXVOVEEzTnpZeklDMHdMamcyTVRRNU55QTROQzR6TWpRMklDMHdMamc1TkRJMU55a2lJSE4wY205clpUMGlJMFl3TmpBM05pSWdjM1J5YjJ0bExYZHBaSFJvUFNJeklpOCtDanhzYVc1bElIa3hQU0l0TVM0MUlpQjRNajBpT1RNdU56YzFJaUI1TWowaUxURXVOU0lnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTFRBdU5TQXdMamcyTmpBeU5TQXRNQzQxTURjM05qTWdMVEF1T0RZeE5EazNJRFk0TGpRek56RWdMVEF1T0RrME1qVTNLU0lnYzNSeWIydGxQU0lqUmpBMk1EYzJJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqTWlMejRLUEd4cGJtVWdlVEU5SWkweExqVWlJSGd5UFNJNU15NDNOelVpSUhreVBTSXRNUzQxSWlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNndE1DNDFJREF1T0RZMk1ESTFJQzB3TGpVd056YzJNeUF0TUM0NE5qRTBPVGNnTlRJdU5UUTVOeUF0TUM0NE9UUXlOVGNwSWlCemRISnZhMlU5SWlOR01EWXdOellpSUhOMGNtOXJaUzEzYVdSMGFEMGlNeUl2UGdvOGJHbHVaU0I1TVQwaUxURXVOU0lnZURJOUlqa3pMamMzTlNJZ2VUSTlJaTB4TGpVaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtDMHdMalVnTUM0NE5qWXdNalVnTFRBdU5UQTNOell6SUMwd0xqZzJNVFE1TnlBek5pNDJOakl5SUMwd0xqZzVOREkxTnlraUlITjBjbTlyWlQwaUkwWXdOakEzTmlJZ2MzUnliMnRsTFhkcFpIUm9QU0l6SWk4K0NqeHNhVzVsSUhreFBTSXRNUzQxSWlCNE1qMGlPVE11TnpjMUlpQjVNajBpTFRFdU5TSWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29MVEF1TlNBd0xqZzJOakF5TlNBdE1DNDFNRGMzTmpNZ0xUQXVPRFl4TkRrM0lESXdMamMzTkRnZ0xUQXVPRGswTWpVM0tTSWdjM1J5YjJ0bFBTSWpSakEyTURjMklpQnpkSEp2YTJVdGQybGtkR2c5SWpNaUx6NEtQR3hwYm1VZ2VURTlJaTB4TGpVaUlIZ3lQU0k1TXk0M056VWlJSGt5UFNJdE1TNDFJaUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d0TUM0MUlEQXVPRFkyTURJMUlDMHdMalV3TnpjMk15QXRNQzQ0TmpFME9UY2dOQzQ0T0Rjek15QXRNU2tpSUhOMGNtOXJaVDBpSTBZd05qQTNOaUlnYzNSeWIydGxMWGRwWkhSb1BTSXpJaTgrQ2p3dlp6NEtQR1JsWm5NK0NqeGpiR2x3VUdGMGFDQnBaRDBpWTJ4cGNEQWlQZ284Y21WamRDQjNhV1IwYUQwaU56a2lJR2hsYVdkb2REMGlOemtpSUdacGJHdzlJbmRvYVhSbElpOCtDand2WTJ4cGNGQmhkR2crQ2p3dlpHVm1jejRLUEM5emRtYytDZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5UnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU15MWpNREV4SURZMkxqRTBOVFkyTVN3Z01qQXhNaTh3TWk4d05pMHhORG8xTmpveU55QWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTlROaUFvVFdGamFXNTBiM05vS1NJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwRk5URTNPRUV5UVRrNVFUQXhNVVV5T1VFeE5VSkRNVEEwTmtFNE9UQTBSQ0lnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBGTlRFM09FRXlRams1UVRBeE1VVXlPVUV4TlVKRE1UQTBOa0U0T1RBMFJDSStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa1UxTVRjNFFUSTRPVGxCTURFeFJUSTVRVEUxUWtNeE1EUTJRVGc1TURSRUlpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rVTFNVGM0UVRJNU9UbEJNREV4UlRJNVFURTFRa014TURRMlFUZzVNRFJFSWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K200UUd1UUFBQXlSSlJFRlVlTnJFbDIxb2pXRVl4ODk1VERQYk1ObEJLNDZJVWlObVB2SEJTVWphcWMwSDhwRjUrYURVS1BFQnFVMk5oUlFwWDVSdjVqV2xESVdsTUN2N01NU1dzV3dtYjN0cFh1YjRYWFdkUEh2YzkvR2M0MW51K25lZGM3LzhyLzk5UGZmTGRZZERQc3Zrd3Nna1RCd3NBL1BBREpDbnpYMmdIVHdCdDhIbDdwNTM3LzN3aG4wNFhvRFpEY3BCbGsrOVA4QUZjQWdoelJrSndQRjR6R0d3MFk5UVMwbUFNMkFuUWo3N0ZxQ3pydGN3QjFIazgxU1lvakhLNER5R3VRNm1oSUlyQldCOVhtN3VnLzZCL25ackJIQmVncmtGeG9WR3Bud0JNU0xSOUVjRWNDNHFiOHBQMTRCV2NCY1VnZXdNbkYzVDM0VnFoV01Ga1RoTEpBYWx3bkVOT0FLaUhwSnExRlpnSTJBVDZIWnR1eFp3UjlHaWRTSHRJMzBqT3JiYXd4bFZYNzgvQWJOZmhIbG9tRVVKSkk4OU8yTXFlRTc5VDgvbms4bk1CbS9kSzU3NmhaZ21BM2NwL1I0bDkvVWVTeGlITFZJbE5tNG5GZlQwYnh5dUlqN0xIUlRLYWkremRKb2J3TUt6Y1pTSmIwZVBWNVBLTitCcUFBS0U0N1VsTW5FUkVMTU0zRWRZUC95cmQrWFliMm1PaVlCaVE4T1Fub1JCbFhybDlKWml4N0QxcEhUYXp1NE1veUJjbllhbXFBaklNVFI4RzRGVDhMdWhMc2V4WFlZaklDQmlxaFFCdlliNmZMWklKQ2pQeXBWdmFPb1ZBVzJXY2FzQ25MMk5xODJ4SEpOU3FsQ2VGY0RzaGFQSzB0d2tBaG9zalpMMzFRWXcrMXJsTXBXR01BcmwyM1NCc1paTzU4RjJ0bEpYbWpPWFMrczRXR3ZwTWlCSlQvSTJQSW5aNmxJczkvaEJzTlMxaFM2QkcwRFNxbVlFRFJsQ1hRcm15NTBQMW9EUktUU2VnbU5iVXNBMHpETXdSaFBKWGVDRTN2V0xQUU12YW42WDhBZ0lhMXZjUjRBa0daa0RSNGVqSjFVSHBzYVZJMGcyTElucE9zTkZVdWQxcmh4U1YrZnpDOVdvejJFWmtXUXVqYTcvQitqVXJndElNcHk5WUNXNG40SzQxWWZ6Um5lVzVFMUtKVGU0QjJacTFRNUVIRXRqNFUzQWZFelI1U1ZZNGw3UVlRUEpkTjJhczdSS0JGMEJQWnFxSDRWZ01BTUJMOEJ5eHI3eTh6Q1ppRGxuT2NFS0lQbVVwZ0I1WjJ3dzVSZE9paVJpTmFqVW1XZGE1SUc2V2Joc3lZMmZ4Nm04Z0xjb0pESkZrSDIxOU0zV2UxK2NuZGE5M3BmeWNacElKRUwvcy93U1lBRG1PQXdBUWdkcEJBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCNEFBQUFlQ0FZQUFBQTdNSzZpQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUt1U1VSQlZIZ0J4VmU5bGRwQUVGNWtCNUFCRmNnVm5EcndYdWJNZElBdWM4WmRCWWdLZks3QVhBZm56Qmx5QitjS3BHc0E0WXdJL0ExdnhoNldXU0hlQmN4N3ExMzJtNTF2Wm44SDU2NGt2VXVVaHhCVUdVcktoV1NEOGtKbEErbHFxeE14K0h5djE1dWo2YytvbHZ2OS9nbjhTL2NXNGdoaDdmNUhHK3VyNGNBdEhLaGRSSklXMGpsSVYweEtoaDVRUm9LanZVVDVwb2crb055SkV4aGJqY2ZqdWJ0RWlIUTBHdTJwWVBBanJ5MzE1OXhmRFZtb1RYMW8zcXZ4aFJyZmpWeVJObWhQTktaSWNxVS9VZnJEb0wvcFJBN2xWRHdOU1hXMHhyaFZHSFhnRkdGZVkwZHJ6R3RLOVFJYjR6bXdQNlVQMW5IaFR1V0p4MzNXbldSRDlnRnZValBhdG9oa0pwckkyS0ZNcTU1dWhWVmgxRW5IaUR4anZ5eGl2amhLL3BtSG1CVjFJbDZoMDNOZkdScE9rdVJqREJOUlR0MFk4SkpyTHpNaUVXZGkyRHIwdTkwdTVlYUxpMHRKSHdTUWhRQkhYV3F1STJJTSttMVpWTVlxRnhlNXA0Y1IvSlhybEQ3dnRUSzhtbUVUekNJRHlZRWF1RHNqaDQzWWh0TW5jVmNTaWJpbUQ5Mi9XSTY3VUltUFdBbzhCZjVxR2FJalIvY3ptcHVtYVVZRy9naWNadk93SklrbUJwQTZXMlQ5MnVZNTVUcTJBVzgwbmdUS1Byd0FTQkNwYkRydjRwS3hiaDBDUEJ2K2hEalk3cmxoOUo5akxpSXdMR2ZkdW1RODE2VmtLWHB6TGRqQXpJajZXWXhiTXhJYWQ2ZE9IVzRzeWs3TWtmTEs0Qm43R3NQMGs2Z3d1ZWRYQmphMzNvRHdPQzNZcy92d1dZVDhZTytucm1ORVpBTll3ZGl0YXhPVlBSd2xBc0VMTkRHaXJVSlNsUWdVcm92RVVoZDY2RnRTbjF3Y3BLVlM0d3VMNDUzVnVkMXV5MzYvMytNajRBZURRWTdmZjlEK2laTFIzWTBYaXhRb2N0S3BVUjZnOHdWOTM5SCtSSFlvb1ZpdjE0WEZjUzY5VFRrclNWVjM3YzZrdDN3MEtZc3BJNlk3Si9RNXFxbTZCRXpwUW5nUnNYSkEvc0pRa2ZOY2M3bm9MOHpWNUM4ZzJVbkZYWDlFRHdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESXlMakV1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJbk4wWVhKMFgyaGxjbVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb0pJSGRwWkhSb1BTSXhNSEI0SWlCb1pXbG5hSFE5SWpFd2NIZ2lJSFpwWlhkQ2IzZzlJakFnTUNBeE5TQXhOU0lnYzNSNWJHVTlJbVZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbTVsZHlBd0lEQWdNVFVnTVRVN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajRLUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STBaR09UVXlRVHNpSUdROUlrMHhNeTQzT1RFNUxETXVNall4T1dNd0xEQXRNUzQyTnpZc01TNDJOelV0TWk0eE1UWXpMREl1TVRJd09HTXRNQzR3T0RVc01DNHdPRFl4TFRBdU1UWTRPQ3d3TGpFeE16VXRNQzR5T0RJc01DNHdPVFl4Q2dsakxUQXVNVFE0TVMwd0xqQXlNall0TUM0eU9UYzBMVEF1TURNNExUQXVORFEyTWkwd0xqQTFOVGhqTFRBdU5EQTNNaTB3TGpBME9EVXRNQzQ0TVRRMUxUQXVNRGsyTmkweExqSXlPVEl0TUM0eE5EVTRRemt1TmpRNUxEUXVOamcxTWl3NUxqVTNPRGNzTkM0eE1EUTVMRGt1TlRFM055d3pMalV5TXpZS0NVTTVMalV4TWl3ekxqUTJPRGtzT1M0MU5UQTVMRE11TXprME15dzVMalU1TWpVc015NHpOVEl5WXpBdU5UQTNNUzB3TGpVeE16UXNNUzQ1TWpZeExURXVPVEk0Tnl3eUxqRXpOQzB5TGpFek5tTXRNQzQwTlRBNExUQXVNakV5T1MweExqSXlORE10TUM0eU9UWTRMVEV1T0RBd055MHdMakl3TXpFS0NXTXRNaTR4T0RBeExEQXVNelUwTXkwekxqVXhNVElzTWk0MU16UXRNaTQ0TWpBMkxEUXVOakkxUXpjdU1UUXpNaXcxTGpjMU15dzNMakV4T1RRc05TNDRNakF4TERjdU1ETTNOQ3cxTGprd01rTTFMakU0T1RFc055NDNORFUwTERNdU16UXpOaXc1TGpVNU1UUXNNUzQwT1Rnc01URXVORE0zTkFvSll5MHdMakEyTVRZc01DNHdOakUyTFRBdU1USXpNU3d3TGpFeU5DMHdMakUzTnprc01DNHhPVEV6WXkwd0xqVXlOalFzTUM0Mk5EY3pMVEF1TXpnM015d3hMall5TmpRc01DNHlPVGMwTERJdU1UQXlZekF1TmpBME5Dd3dMalF4T1Rjc01TNHpOalU0TERBdU16UTBNaXd4TGprd05UTXRNQzR4T1RRNENnbGpNUzQ0TlRNMExURXVPRFV4T1N3ekxqY3dOVGt0TXk0M01EUTNMRFV1TlRVMkxUVXVOVFU1T0VNNUxqRTNNRGNzTnk0NE9EUXNPUzR5TkRNM0xEY3VPRFV5Tml3NUxqTTNOemtzTnk0NE9UZ3pZekF1TmpFNE9Td3dMakl4TURrc01TNHlOVEkwTERBdU1qTTFOQ3d4TGpnNE9EUXNNQzR3T0RnMENnbGpNUzQ1TXpnMkxUQXVORFEzT0N3ekxqRXlOVEV0TWk0ek56TXlMREl1TmpVME9TMDBMak13TXpSRE1UTXVPRGc1TlN3ekxqVTFNeklzTVRNdU9EUXpMRE11TkRJME5Dd3hNeTQzT1RFNUxETXVNall4T1hvaUx6NEtQQzl6ZG1jK1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURJMUxqSXVNeXdnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlreGhlV1Z5WHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29KSUhacFpYZENiM2c5SWpBZ01DQTVNQzQ1SURZNUxqRWlJSE4wZVd4bFBTSmxibUZpYkdVdFltRmphMmR5YjNWdVpEcHVaWGNnTUNBd0lEa3dMamtnTmprdU1Uc2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGdvOGMzUjViR1VnZEhsd1pUMGlkR1Y0ZEM5amMzTWlQZ29KTG5OME1IdG1hV3hzT2lNeFJqRTRPRGM3ZlFvSkxuTjBNWHRtYVd4c09pTXlRVEU0UVRNN2ZRb0pMbk4wTW50bWFXeHNPaU16TVRJNFFqTTdmUW9KTG5OME0zdG1hV3hzT2lNNE4wUkJSVEU3ZlFvOEwzTjBlV3hsUGdvOFp6NEtDVHhuUGdvSkNUeG5QZ29KQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5Oall1TlN3eE5XTXdMVEF1TXl3d0xqTXRNQzQxTERBdU5pMHdMalZqTUM0ekxEQXNNQzQxTERBdU1pd3dMalVzTUM0MVl6QXNNQzR6TFRBdU15d3dMalV0TUM0MUxEQXVOVU0yTmk0M0xERTFMallzTmpZdU5Td3hOUzR6TERZMkxqVXNNVFY2Q2drSkNRa2dUVFkyTGpZc01UWXVOV2d3TGpoMk5TNHhhQzB3TGpoV01UWXVOWG9pTHo0S0NRa0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFRjMExqTXNNVFl1TlhZMUxqVmpNQ3d4TGpVdE1TNHlMREl1TmkweUxqWXNNaTQyWXkweExqRXNNQzB5TGpFdE1DNDNMVEl1TlMweExqaHNNQzQzTFRBdU0yTXdMaklzTUM0M0xEQXVPU3d4TGpNc01TNDRMREV1TXdvSkNRa0pZekVzTUN3eExqa3RNQzQ0TERFdU9TMHhMamxXTWpGakxUQXVOU3d3TGpVdE1TNHhMREF1T0MweExqa3NNQzQ0WXkweExqVXNNQzB5TGpZdE1TNHlMVEl1TmkweUxqWmpNQzB4TGpVc01TNHlMVEl1Tml3eUxqWXRNaTQyWXpBdU55d3dMREV1TkN3d0xqTXNNUzQ0TERBdU4zWXRNQzQyQ2drSkNRbElOelF1TTNvZ1RUY3pMalVzTVRrdU1XTXdMVEV0TUM0NExURXVPUzB4TGprdE1TNDVZeTB4TERBdE1TNDVMREF1T0MweExqa3NNUzQ1WXpBc01Td3dMamdzTVM0NUxERXVPU3d4TGpsRE56SXVOeXd5TUM0NUxEY3pMalVzTWpBdU1TdzNNeTQxTERFNUxqRjZJaTgrQ2drSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazAzTmk0eExERTFZekF0TUM0ekxEQXVNeTB3TGpVc01DNDJMVEF1TldNd0xqTXNNQ3d3TGpVc01DNHlMREF1TlN3d0xqVmpNQ3d3TGpNdE1DNHpMREF1TlMwd0xqVXNNQzQxUXpjMkxqUXNNVFV1Tml3M05pNHhMREUxTGpNc056WXVNU3d4TlhvS0NRa0pDU0JOTnpZdU15d3hOaTQxYURBdU9IWTFMakZvTFRBdU9GWXhOaTQxZWlJdlBnb0pDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk9EQXNNVGN1TTNZeUxqbGpNQ3d3TGpVc01DNDBMREF1T0N3d0xqZ3NNQzQ0YURBdU5uWXdMalpqTFRBdU1Td3dMakV0TUM0MExEQXVNaTB3TGpjc01DNHlZeTB3TGpnc01DMHhMalV0TUM0MkxURXVOUzB4TGpSMkxUTm9MVEF1T1hZdE1DNDRDZ2tKQ1Fsb01DNDVkaTB5TGpKSU9EQjJNaTR5YURFdU5IWXdMamhJT0RCNklpOCtDZ2tKQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMDROeTQ0TERJeGRqQXVOMk10TUM0eExEQXVNUzB3TGpJc01DNHhMVEF1TkN3d0xqRmpMVEF1Tml3d0xURXRNQzQwTFRFdU1pMHdMamxqTFRBdU5Dd3dMall0TVM0eExEQXVPUzB5TERBdU9XTXRNUzR4TERBdE1TNDNMVEF1TmkweExqY3RNUzQwQ2drSkNRbGpNQzB3TGprc01DNDNMVEV1TkN3eExqY3RNUzQwYURFdU9YWXRNQzQwWXpBdE1DNDRMVEF1TmkweExqSXRNUzQwTFRFdU1tTXRNQzQ0TERBdE1TNDBMREF1TkMweExqUXNNUzR5YUMwd0xqaGpNQzB4TGpJc01TMHlMREl1TWkweVl6RXVNaXd3TERJdU1pd3dMamdzTWk0eUxESjJNUzQ1Q2drSkNRbGpNQ3d3TGpVc01DNHlMREF1Tnl3d0xqVXNNQzQzU0RnM0xqaDZJRTA0Tmk0eExERTVMamwyTFRBdU0yZ3RNUzQ0WXkwd0xqWXNNQzB4TERBdU15MHhMREF1T0dNd0xEQXVOU3d3TGpRc01DNDRMREVzTUM0NFF6ZzFMaklzTWpFc09EVXVPU3d5TUM0MkxEZzJMakVzTVRrdU9Yb2lMejRLQ1FrSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUVGc0TGpnc01USXVNMmd3TGpoMk9TNDBhQzB3TGpoV01USXVNM29pTHo0S0NRa0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFRZMExqa3NNekIyTFRNdU0yZ3dMamgyTXk0eVl6QXNNQzQ0TERBdU5Td3hMaklzTVM0eExERXVNbU13TGpjc01Dd3hMakV0TUM0MUxERXVNUzB4TGpKMkxUTXVNbWd3TGpoV016QmpNQ3d4TGpJdE1DNDRMREV1T1MweExqa3NNUzQ1Q2drSkNRbEROalV1Tnl3ek1TNDVMRFkwTGprc016RXVNaXcyTkM0NUxETXdlaUl2UGdvSkNRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTnpNdU1Td3lOaTQyWXkwd0xqY3NNQzB4TGpRc01DNHpMVEV1T1N3d0xqaDJMVE11Tm1NdE1DNHpMVEF1TVMwd0xqVXRNQzR4TFRBdU9DMHdMakoyT0M0emFEQXVPSFl0TUM0M1l6QXVOU3d3TGpVc01TNHhMREF1T0N3eExqa3NNQzQ0Q2drSkNRbGpNUzQxTERBc01pNDJMVEV1TWl3eUxqWXRNaTQyVXpjMExqVXNNall1Tml3M015NHhMREkyTGpaNklFMDNNeTR4TERNeExqRmpMVEVzTUMweExqa3RNQzQ0TFRFdU9TMHhMamxqTUMweExEQXVPQzB4TGprc01TNDVMVEV1T1dNeExEQXNNUzQ1TERBdU9Dd3hMamtzTVM0NUNna0pDUWxETnpRdU9Td3pNQzR6TERjMExqRXNNekV1TVN3M015NHhMRE14TGpGNklpOCtDZ2tKQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMDNOeTR5TERJeUxqUklOemgyT1M0MGFDMHdMamhXTWpJdU5Ib2lMejRLQ1FrSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUVGM1TGpnc01qVXVNbU13TFRBdU15d3dMak10TUM0MUxEQXVOaTB3TGpWak1DNHpMREFzTUM0MUxEQXVNaXd3TGpVc01DNDFZekFzTUM0ekxUQXVNeXd3TGpVdE1DNDFMREF1TlFvSkNRa0pRemd3TGpFc01qVXVPQ3czT1M0NExESTFMalVzTnprdU9Dd3lOUzR5ZWlCTk9EQXNNall1TjJnd0xqaDJOUzR4U0Rnd1ZqSTJMamQ2SWk4K0Nna0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWswNE1pNDBMREk1TGpOak1DMHhMalVzTVM0eUxUSXVOaXd5TGpZdE1pNDJZekV1TWl3d0xESXVNaXd3TGpnc01pNDFMREV1T0dndE1DNDRZeTB3TGpNdE1DNDJMVEF1T1MweExURXVOeTB4WXkweExEQXRNUzQ1TERBdU9DMHhMamtzTVM0NUNna0pDUWx6TUM0NExERXVPU3d4TGprc01TNDVZekF1Tnl3d0xERXVOQzB3TGpRc01TNDNMVEZvTUM0NFl5MHdMak1zTVM0eExURXVNeXd4TGpndE1pNDFMREV1T0VNNE15NDFMRE14TGprc09ESXVOQ3d6TUM0M0xEZ3lMalFzTWprdU0zb2lMejRLQ1FrSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUVFkyTGpnc016Y3VNWFl3TGpKak1Dd3lMakl0TVM0NExETXVPUzB6TGprc015NDVZeTB5TGpJc01DMHpMamt0TVM0NExUTXVPUzB6TGpsak1DMHlMaklzTVM0M0xUTXVPU3d6TGprdE15NDVZekV1TlN3d0xESXVOeXd3TGpnc015NDBMRElLQ1FrSkNXd3RNQzQzTERBdU5HTXRNQzQxTFRBdU9TMHhMalV0TVM0MkxUSXVOeTB4TGpaakxURXVOeXd3TFRNdU1Td3hMalF0TXk0eExETXVNV013TERFdU55d3hMalFzTXk0eExETXVNU3d6TGpGak1TNDFMREFzTWk0NExURXVNU3d6TGpFdE1pNDJhQzB6TGpGMkxUQXVPRWcyTmk0NGVpSXZQZ29KQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5OamdzTXpndU5tTXdMVEV1TlN3eExqSXRNaTQyTERJdU5pMHlMalpqTVM0MUxEQXNNaTQyTERFdU1pd3lMallzTWk0Mll6QXNNUzQxTFRFdU1pd3lMall0TWk0MkxESXVOa00yT1M0eUxEUXhMak1zTmpnc05EQXVNU3cyT0N3ek9DNDJlZ29KQ1FrSklFMDNNaTQxTERNNExqWmpNQzB4TFRBdU9DMHhMamt0TVM0NUxURXVPV010TVN3d0xURXVPU3d3TGpndE1TNDVMREV1T1hNd0xqZ3NNUzQ1TERFdU9Td3hMamxETnpFdU55dzBNQzQxTERjeUxqVXNNemt1Tnl3M01pNDFMRE00TGpaNklpOCtDZ2tKQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMDNOQzQwTERNNExqWmpNQzB4TGpVc01TNHlMVEl1Tml3eUxqWXRNaTQyWXpFdU5Td3dMREl1Tml3eExqSXNNaTQyTERJdU5tTXdMREV1TlMweExqSXNNaTQyTFRJdU5pd3lMallLQ1FrSkNVTTNOUzQyTERReExqTXNOelF1TkN3ME1DNHhMRGMwTGpRc016Z3VObm9nVFRjNExqa3NNemd1Tm1Nd0xURXRNQzQ0TFRFdU9TMHhMamt0TVM0NVl5MHhMREF0TVM0NUxEQXVPQzB4TGprc01TNDVjekF1T0N3eExqa3NNUzQ1TERFdU9Rb0pDUWtKUXpjNExqRXNOREF1TlN3M09DNDVMRE01TGpjc056Z3VPU3d6T0M0MmVpSXZQZ29KQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5PRFl1TWl3ek1TNDRkamt1TkdndE1DNDRkaTB3TGpkakxUQXVOU3d3TGpVdE1TNHhMREF1T0MweExqa3NNQzQ0WXkweExqVXNNQzB5TGpZdE1TNHlMVEl1TmkweUxqWmpNQzB4TGpVc01TNHlMVEl1Tml3eUxqWXRNaTQyQ2drSkNRbGpNQzQzTERBc01TNDBMREF1TXl3eExqa3NNQzQ0ZGkwMExqbElPRFl1TW5vZ1RUZzFMalFzTXpndU5tTXdMVEV0TUM0NExURXVPUzB4TGprdE1TNDVZeTB4TERBdE1TNDVMREF1T0MweExqa3NNUzQ1Y3pBdU9Dd3hMamtzTVM0NUxERXVPUW9KQ1FrSlF6ZzBMalVzTkRBdU5TdzROUzQwTERNNUxqY3NPRFV1TkN3ek9DNDJlaUl2UGdvSkNRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOT0RjdU5TdzBNQzR5YkRBdU9DMHdMak5qTUM0eExEQXVOQ3d3TGpVc01DNDJMREVzTUM0Mll6QXVOU3d3TERBdU9DMHdMak1zTUM0NExUQXVOMk13TFRBdU5DMHdMak10TUM0MkxUQXVPUzB3TGpnS0NRa0pDV010TUM0NUxUQXVNeTB4TGpRdE1DNDRMVEV1TkMweExqWmpNQzB3TGprc01DNDNMVEV1TkN3eExqVXRNUzQwWXpBdU5pd3dMREV1TXl3d0xqUXNNUzQxTERBdU9FdzVNQ3d6Tnk0eVl5MHdMakV0TUM0ekxUQXVOQzB3TGpRdE1DNDRMVEF1TkFvSkNRa0pZeTB3TGpRc01DMHdMamNzTUM0eUxUQXVOeXd3TGpaak1Dd3dMalFzTUM0ekxEQXVOaXd3TGprc01DNDVZekF1Tnl3d0xqTXNNUzQwTERBdU5pd3hMalFzTVM0MVl6QXNNQzQ1TFRBdU55d3hMalV0TVM0MkxERXVOVU00T0M0MUxEUXhMak1zT0RjdU55dzBNQzQ0TERnM0xqVXNOREF1TW5vaUNna0pDUWt2UGdvSkNRazhaejRLQ1FrSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazAyTUM0ekxEUTJMamhNTmpBdU15dzBOaTQ0YkMwd0xqY3NNUzQzYUMwd0xqUnNNaTAwTGpkc01pdzBMamRvTFRBdU5Hd3RNQzQzTFRFdU5td3dMVEF1TVd3dE1DNDVMVEl1TWt3Mk1DNHpMRFEyTGpoNklFMDJNQzR4TERRMkxqZG9NaTR4Q2drSkNRa0piREF1TVN3d0xqTklOakJNTmpBdU1TdzBOaTQzZWlJdlBnb0pDUWtKUEhCaGRHZ2dZMnhoYzNNOUluTjBNQ0lnWkQwaVRUWTBMakVzTkRNdU5YWTFMakZvTFRBdU0zWXROUzR4U0RZMExqRjZJaTgrQ2drSkNRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTmpVdU5DdzBNeTQxZGpVdU1XZ3RNQzR6ZGkwMUxqRklOalV1TkhvaUx6NEtDUWtKQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMDJOaTQxTERRMFl6QXNNQ3d3TGpFdE1DNHhMREF1TWkwd0xqRmpNQzR4TERBc01DNHhMREFzTUM0eUxEQXVNV013TERBc01DNHhMREF1TVN3d0xqRXNNQzR5WXpBc01DNHhMREFzTUM0eExUQXVNU3d3TGpJS0NRa0pDUWxqTUN3d0xUQXVNU3d3TGpFdE1DNHlMREF1TVdNdE1DNHhMREF0TUM0eExEQXRNQzR5TFRBdU1XTXdMREF0TUM0eExUQXVNUzB3TGpFdE1DNHlRelkyTGpVc05EUXVNU3cyTmk0MUxEUTBMakVzTmpZdU5TdzBOSG9nVFRZMkxqa3NORFV1Tm5ZemFDMHdMak4yTFROSU5qWXVPWG9pTHo0S0NRa0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWswMk55NDVMRFEyTGpKak1DNHhMVEF1TWl3d0xqTXRNQzQwTERBdU5TMHdMalZqTUM0eUxUQXVNU3d3TGpVdE1DNHlMREF1Tnkwd0xqSmpNQzR6TERBc01DNDFMREF1TVN3d0xqY3NNQzR5Q2drSkNRa0pZekF1TWl3d0xqRXNNQzR6TERBdU15d3dMalFzTUM0Mll6QXVNU3d3TGpJc01DNHlMREF1TlN3d0xqSXNNQzQ0WXpBc01DNHpMVEF1TVN3d0xqWXRNQzR5TERBdU9HTXRNQzR4TERBdU1pMHdMak1zTUM0MExUQXVOQ3d3TGpaakxUQXVNaXd3TGpFdE1DNDBMREF1TWkwd0xqY3NNQzR5Q2drSkNRa0pZeTB3TGpNc01DMHdMalV0TUM0eExUQXVOeTB3TGpKakxUQXVNaTB3TGpFdE1DNDBMVEF1TXkwd0xqVXRNQzQxWXkwd0xqRXRNQzR5TFRBdU1pMHdMalV0TUM0eUxUQXVPRU0yTnk0M0xEUTJMamNzTmpjdU9DdzBOaTQxTERZM0xqa3NORFl1TW5vZ1RUWTRMaklzTkRjdU53b0pDUWtKQ1dNd0xqRXNNQzR5TERBdU1pd3dMak1zTUM0MExEQXVOR013TGpJc01DNHhMREF1TkN3d0xqRXNNQzQyTERBdU1XTXdMaklzTUN3d0xqUXRNQzR4TERBdU5TMHdMakp6TUM0ekxUQXVNeXd3TGpRdE1DNDBZekF1TVMwd0xqSXNNQzR4TFRBdU5Dd3dMakV0TUM0MkNna0pDUWtKY3kwd0xqRXRNQzQxTFRBdU1TMHdMalpqTFRBdU1TMHdMakl0TUM0eUxUQXVNeTB3TGpRdE1DNDBZeTB3TGpJdE1DNHhMVEF1TXkwd0xqSXRNQzQxTFRBdU1tTXRNQzR5TERBdE1DNDBMREF0TUM0MkxEQXVNV010TUM0eUxEQXVNUzB3TGpNc01DNHlMVEF1TkN3d0xqUUtDUWtKQ1FsakxUQXVNU3d3TGpJdE1DNHlMREF1TkMwd0xqSXNNQzQzUXpZNExEUTNMak1zTmpndU1TdzBOeTQxTERZNExqSXNORGN1TjNvZ1RUY3dMallzTkRVdU5uWXphQzB3TGpOMkxUTklOekF1Tm5vaUx6NEtDUWtKQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMDNNeTR6TERRMll5MHdMakV0TUM0eExUQXVNeTB3TGpJdE1DNDFMVEF1TW1NdE1DNHlMREF0TUM0ekxEQXRNQzQxTERBdU1XTXRNQzR4TERBdU1TMHdMaklzTUM0eUxUQXVNeXd3TGpNS0NRa0pDUWxqTFRBdU1Td3dMakV0TUM0eExEQXVNeTB3TGpFc01DNDFkakV1T0dndE1DNHpkaTB6YURBdU0zWXdMalpqTUM0eExUQXVNaXd3TGpJdE1DNDBMREF1TkMwd0xqVmpNQzR5TFRBdU1Td3dMalF0TUM0eUxEQXVOaTB3TGpKak1DNHpMREFzTUM0MUxEQXVNU3d3TGpjc01DNHpDZ2tKQ1FrSll6QXVNaXd3TGpJc01DNHlMREF1TlN3d0xqSXNNQzQ0ZGpKb0xUQXVNM1l0TVM0NVF6Y3pMalVzTkRZdU5DdzNNeTQwTERRMkxqSXNOek11TXl3ME5ub2lMejRLQ1FrSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazAzTlM0eExEUTNMamRqTUM0eExEQXVNaXd3TGpJc01DNHpMREF1TkN3d0xqUmpNQzR5TERBdU1Td3dMalFzTUM0eUxEQXVOaXd3TGpKak1DNHlMREFzTUM0ekxEQXNNQzQwTFRBdU1XTXdMakVzTUN3d0xqTXRNQzR4TERBdU5DMHdMaklLQ1FrSkNRbGpNQzR4TFRBdU1Td3dMakl0TUM0eUxEQXVNaTB3TGpKMk1DNDBZeTB3TGpFc01DNHhMVEF1TWl3d0xqSXRNQzQwTERBdU0yTXRNQzR5TERBdU1TMHdMalFzTUM0eExUQXVOaXd3TGpGakxUQXVNeXd3TFRBdU5pMHdMakV0TUM0NExUQXVNbk10TUM0MExUQXVNeTB3TGpVdE1DNDJDZ2tKQ1FrSll5MHdMakV0TUM0eUxUQXVNaTB3TGpVdE1DNHlMVEF1T0dNd0xUQXVNeXd3TGpFdE1DNDJMREF1TWkwd0xqaGpNQzR4TFRBdU1pd3dMak10TUM0MExEQXVOUzB3TGpaak1DNHlMVEF1TVN3d0xqVXRNQzR5TERBdU9DMHdMakpqTUM0eUxEQXNNQzQwTERBc01DNDJMREF1TVFvSkNRa0pDV013TGpJc01DNHhMREF1TXl3d0xqSXNNQzQwTERBdU0zWXdMalJqTUMwd0xqRXRNQzR4TFRBdU1pMHdMakl0TUM0eVl5MHdMakV0TUM0eExUQXVNaTB3TGpFdE1DNDBMVEF1TW1NdE1DNHhMREF0TUM0ekxUQXVNUzB3TGpRdE1DNHhZeTB3TGpJc01DMHdMalFzTUM0eExUQXVOaXd3TGpJS0NRa0pDUWxqTFRBdU1pd3dMakV0TUM0ekxEQXVNeTB3TGpRc01DNDBZeTB3TGpFc01DNHlMVEF1TWl3d0xqUXRNQzR5TERBdU5sTTNOU3cwTnk0MUxEYzFMakVzTkRjdU4zb2lMejRLQ1FrSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazAzT0M0MExEUTRMalJqTFRBdU1pMHdMakV0TUM0MExUQXVNeTB3TGpVdE1DNDJZeTB3TGpFdE1DNHlMVEF1TWkwd0xqVXRNQzR5TFRBdU9ITXdMakV0TUM0MkxEQXVNaTB3TGpoak1DNHhMVEF1TWl3d0xqTXRNQzQwTERBdU5TMHdMalVLQ1FrSkNRbGpNQzR5TFRBdU1Td3dMalV0TUM0eUxEQXVOeTB3TGpKak1DNHpMREFzTUM0MUxEQXVNU3d3TGpjc01DNHlZekF1TWl3d0xqRXNNQzQwTERBdU15d3dMalVzTUM0MVl6QXVNU3d3TGpJc01DNHlMREF1TlN3d0xqSXNNQzQ0WXpBc01Dd3dMREF1TVN3d0xEQXVNUW9KQ1FrSkNXTXdMREFzTUN3d0xqRXNNQ3d3TGpGSU56aDJMVEF1TTJneUxqTnNMVEF1TVN3d0xqSmpNQ3d3TERBdE1DNHhMREF0TUM0eFl6QXNNQ3d3TFRBdU1Td3dMVEF1TVdNd0xUQXVNaXd3TFRBdU5DMHdMakV0TUM0MVl5MHdMakV0TUM0eUxUQXVNaTB3TGpNdE1DNDBMVEF1TkFvSkNRa0pDV010TUM0eUxUQXVNUzB3TGpNdE1DNHhMVEF1TlMwd0xqRmpMVEF1TWl3d0xUQXVOQ3d3TGpFdE1DNDJMREF1TW1NdE1DNHlMREF1TVMwd0xqTXNNQzR5TFRBdU5Dd3dMalJqTFRBdU1Td3dMakl0TUM0eExEQXVOQzB3TGpFc01DNDNZekFzTUM0ekxEQXNNQzQxTERBdU1Td3dMamNLQ1FrSkNRbGpNQzR4TERBdU1pd3dMaklzTUM0ekxEQXVOQ3d3TGpSak1DNHlMREF1TVN3d0xqUXNNQzR5TERBdU5pd3dMakpqTUM0eUxEQXNNQzQwTFRBdU1Td3dMall0TUM0eFl6QXVNaTB3TGpFc01DNHpMVEF1TXl3d0xqVXRNQzQxYkRBdU15d3dMaklLQ1FrSkNRbGpMVEF1TWl3d0xqTXRNQzQwTERBdU5TMHdMallzTUM0MmN5MHdMalVzTUM0eUxUQXVPQ3d3TGpKRE56Z3VPU3cwT0M0MkxEYzRMallzTkRndU5TdzNPQzQwTERRNExqUjZJaTgrQ2drSkNUd3ZaejRLQ1FrSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUVFU1TGpFc01UUm9NaTR4WXpJdU1Td3dMRE11T0N3eExqY3NNeTQ0TERNdU9HTXdMREl1TVMweExqY3NNeTQ0TFRNdU9Dd3pMamhvTFRJdU1WWXhOSG9nVFRZeExqSXNNakF1T0dNeExqY3NNQ3d6TFRFdU15d3pMVE1LQ1FrSkNXTXdMVEV1TnkweExqTXRNeTB6TFROb0xURXVNM1kyU0RZeExqSjZJaTgrQ2drSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazAyTXk0NUxESTJMak5qTUN3eExqSXRNQzQ1TERJdU1TMHlMakVzTWk0eGFDMHhMamwyTXk0MGFDMHdMamgyTFRjdU5tZ3lMamRETmpNc01qUXVNaXcyTXk0NUxESTFMakVzTmpNdU9Td3lOaTR6ZWlCTk5qTXVNU3d5Tmk0ekNna0pDUWxqTUMwd0xqZ3RNQzQyTFRFdU15MHhMalF0TVM0emFDMHhMamgyTWk0M2FERXVPRU0yTWk0MUxESTNMallzTmpNdU1Td3lOeTR4TERZekxqRXNNall1TTNvaUx6NEtDUWs4TDJjK0NnazhMMmMrQ2drOFp6NEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXhJaUJrUFNKTk16TXVOQ3d3VERBc01UVjJORFV1Tm13eE15NHhMRGd1Tkd3ek15NHpMVEUxVmpndU5Vd3pNeTQwTERCNklFMHhNeTR4TERVMExqZFdNak11Tkd3eU1DNHpMVGt1TjNZek1TNDJUREV6TGpFc05UUXVOM29pTHo0S0NRazhjRzlzZVdkdmJpQmpiR0Z6Y3owaWMzUXlJaUJ3YjJsdWRITTlJak16TGpRc01DQXpNeTQwTERFekxqZ2dNVE11TVN3eU15NDBJREFzTVRVZ0NRa2lMejRLQ1FrOGNHOXNlV2R2YmlCamJHRnpjejBpYzNRd0lpQndiMmx1ZEhNOUlqRXpMakVzTmprdU1TQXdMRFl3TGpZZ01Dd3hOU0F4TXk0eExESXpMalFnQ1FraUx6NEtDUWs4Y0c5c2VXZHZiaUJqYkdGemN6MGljM1F4SWlCd2IybHVkSE05SWpNekxqUXNNQ0F6TXk0MExEUTFMalFnTkRZdU5DdzFOQzR4SURRMkxqUXNPQzQxSUFrSklpOCtDZ2tKUEhCdmJIbG5iMjRnWTJ4aGMzTTlJbk4wTWlJZ2NHOXBiblJ6UFNJeE15NHhMRFk1TGpFZ05EWXVOQ3cxTkM0eElETXpMalFzTkRVdU5DQXhNeTR4TERVMExqY2dDUWtpTHo0S0NRazhjRzlzZVdkdmJpQmpiR0Z6Y3owaWMzUXpJaUJ3YjJsdWRITTlJak16TGpVc05EVXVOQ0EwTmk0MUxEVTBMakVnTkRZdU5Td3pPUzQwSUFrSklpOCtDZ2s4TDJjK0Nqd3ZaejRLUEM5emRtYytDZz09XCIiXSwic291cmNlUm9vdCI6IiJ9