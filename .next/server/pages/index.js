module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"7":"d975df2cc62a69f0f99d"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "3WYz":
/***/ (function(module, exports) {

module.exports = require("csvtojson");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "7Nsf":
/***/ (function(module, exports) {

module.exports = require("react-scrollama");

/***/ }),

/***/ "Im+X":
/***/ (function(module, exports) {

module.exports = require("react-mapbox-gl");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Home(props) {
  const MapComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, "OmHB")), {
    ssr: false,
    loadableGenerated: {
      webpack: () => [/*require.resolve*/("OmHB")],
      modules: ["../components/mapComponent"]
    }
  });
  return __jsx("div", {
    className: "main"
  }, __jsx(MapComponent, {
    lon: 6,
    lat: 24.5,
    countries: props.data.countries,
    pathfinderExploratory: props.data.pathfinders.exploratory,
    pathfinderConfirmed: props.data.pathfinders.confirmed,
    digitalGoods: props.data.digitalGoods,
    story: props.data.story,
    devPolygons: props.data.polygons[1],
    depPolygons: props.data.polygons[0]
  }));
}
async function getStaticProps() {
  const renameCountry = {
    "Cote d'Ivoire": "Ivory Coast",
    DRC: "Congo, the Democratic Republic of the",
    Eswatini: "eSwatini (former Swaziland)",
    Tanzania: "United Republic of Tanzania",
    "United States of America": "United States",
    "Antigua And Barbuda": "Antigua and Barbuda",
    "Bolivia (Plurinational State of)": "Bolivia",
    "Bosnia And Herzegowina": "Bosnia and Herzegovina",
    "Cabo Verde": "Cape Verde",
    Czechia: "Czech Republic",
    "Côte d'Ivoire": "Ivory Coast",
    "Democratic Republic of the Congo": "Congo, the Democratic Republic of the",
    "Iran (Islamic Republic Of)": "Iran",
    Luxemburg: "Luxembourg",
    "Micronesia, Federated States Of": "Micronesia",
    "Saint Kitts And Nevis": "Saint Kitts and Nevis",
    "Saint Vincent And The Grenadines": "Saint Vincent and the Grenadines",
    // +
    "Sao Tome And Principe": "Sao Tome and Principe",
    // +
    "Sint Maarten": "Sint Maarten (Dutch part)",
    "Slovakia (Slovak Republic)": "Slovakia",
    "South Georgia And South S.S.": "South Georgia and the South Sandwich Islands",
    "St. Pierre And Miquelon": "Saint Pierre and Miquelon",
    "State of Palestine": "Palestine",
    "Syrian Arab Republic": "Syria",
    "Trinidad And Tobago": "Trinidad and Tobago",
    "Turks And Caicos Islands": "Turks and Caicos Islands",
    "United Republic of Tanzania": "United Republic of Tanzania",
    "Virgin Islands (British)": "Virgin Islands, British",
    US: "United States",
    UK: "United Kingdom",
    "Cote D'Ivoire": "Ivory Coast",
    USA: "United States",
    Africa: "Africa",
    // ???
    Bravil: "Bravil",
    // ???
    Haita: "Haiti",
    // ???
    Zimbwabwe: "Zimbabwe",
    "United Kingdom of Great Britain And Northern Ireland": "United Kingdom",
    Vanuata: "Vanuatu",
    Bosnia: "Bosnia and Herzegovina",
    "Cote d’Ivoire": "Ivory Coast",
    Kazahkstan: "Kazakhstan",
    "North Korea": "Korea, Democratic People's Republic of",
    "Republic of Congo": "Congo",
    "Palestine State": "Palestine",
    "United Kingdom of Great Britain and Northern Ireland": "United Kingdom",
    "Korea (the Republic of Korea)": "Korea, Democratic People's Republic of",
    "Viet Nam": "Vietnam",
    Macedonia: "North Macedonia",
    "Congo (the Democratic Republic of the Congo)": "Congo, the Democratic Republic of the",
    "Brunei Darussalam": "Brunei",
    Curaçao: "Curaçao",
    // The Netherlands Antilles (AN, ANT, 530) was divided into Bonaire, Saint Eustatius and Saba (BQ, BES, 535), Curaçao (CW, CUW, 531) and Sint Maarten (Dutch part) (SX, SXM, 534).
    "Virgin Islands (U.S.)": "Virgin Islands, U.S.",
    "Bonaire, Sint Eustatius, and Saba": "Bonaire, Sint Eustatius, and Saba",
    // The Netherlands Antilles (AN, ANT, 530) was divided into Bonaire, Saint Eustatius and Saba (BQ, BES, 535), Curaçao (CW, CUW, 531) and Sint Maarten (Dutch part) (SX, SXM, 534).
    "Falkland Islands": "Falkland Islands (Malvinas)",
    "The Faroe Islands": "Faroe Islands",
    Kyrgyztan: "Kyrgyzstan",
    SouthAfrica: "South Africa",
    Swaziland: "eSwatini (former Swaziland)",
    VietNam: "Vietnam",
    Curaçao: "Curaçao",
    "Lao People's Democratic Republic": "Laos"
  };

  const convertArrayToObject = (array, key) => array.reduce((acc, curr) => (acc[curr[key]] = curr, acc), {});

  const csv = __webpack_require__("3WYz");

  const nodefetch = __webpack_require__("4vsW");

  const csvFilePath = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(process.cwd(), "public/countries_codes_and_coordinates.csv");
  const loadAlpha = await csv().fromFile(csvFilePath).then(jsonObj => {
    return convertArrayToObject(jsonObj, "Country");
  });

  const fetchData = async () => {
    const alpha3 = _objectSpread({}, loadAlpha);

    var countries = {};
    var mismatched = {}; //TODO: add an ability to fetch more than 100 dpgs

    const result = await fetch("https://api.github.com/search/code?q=repo:unicef/publicgoods-candidates+path:digitalpublicgoods+filename:.json&per_page=100");
    const goodsFileNames = await result.json();

    const handleCountries = data => {
      let deployGoods = {};
      let developmentGoods = {};
      let c = countries;
      ["deploymentCountries", "developmentCountries"].map(el => {
        data.locations[el].map(country => {
          country = renameCountry[country] ? renameCountry[country] : country;

          if (!alpha3[country]) {
            // console.log("Mismatched good " + country);
            mismatched[country] = country + " deploy " + data.name;
          } else {
            if (!Object.keys(c).find(e => e == alpha3[country]["Alpha-3"])) {
              c[alpha3[country]["Alpha-3"]] = {};
            }

            let code = alpha3[country]["Alpha-3"];
            el == "deploymentCountries" ? deployGoods[code] = country : developmentGoods[code] = country;
            c[code]["name"] = country;
            c[code]["code"] = code;
            c[code]["lat"] = alpha3[country]["Latitude (average)"];
            c[code]["lon"] = alpha3[country]["Longitude (average)"];
          }
        });
      });
      data.locations.deploymentCountries = deployGoods;
      data.locations.developmentCountries = developmentGoods;
      countries = c;
      return data;
    };

    const digitalGoodsData = await goodsFileNames.items.map(async filename => {
      const res = await fetch("https://raw.githubusercontent.com/unicef/publicgoods-candidates/master/digitalpublicgoods/" + filename.name);
      const fileContents = await res.text();
      const nomineeRes = await fetch("https://raw.githubusercontent.com/unicef/publicgoods-candidates/master/nominees/" + filename.name);
      const nomineeFileContents = await nomineeRes.text();

      try {
        let goodsData = JSON.parse(fileContents);
        let nomineeData = JSON.parse(nomineeFileContents);
        return _objectSpread(_objectSpread({}, handleCountries(goodsData)), nomineeData);
      } catch (error) {
        // handle linked json
        const res = await fetch("https://raw.githubusercontent.com/unicef/publicgoods-candidates/master/digitalpublicgoods/" + fileContents);
        const nestedFileContent = await res.text();
        const nnomineeRes = await fetch("https://raw.githubusercontent.com/unicef/publicgoods-candidates/master/nominees/" + filename.name);
        const nestedNomineeFileContents = await nnomineeRes.text();
        let ngoodsData = JSON.parse(nestedFileContent);
        ngoodsData.name = filename.name.replace(".json", "");
        let nnomineeData = JSON.parse(nestedNomineeFileContents);
        return _objectSpread(_objectSpread({}, handleCountries(ngoodsData)), nnomineeData);
      }
    });
    var digitalGoodsArr = await Promise.all(digitalGoodsData);

    const addStory = results => {
      // replace all //n //r, FALSE
      for (let i = 0; i < results.length; i++) {
        results[i].text = results[i].text.replace(/[\r\n]+/gm, " ");
        results[i].image = results[i].image.replace("FALSE", false);
        results[i].image = results[i].image.replace("TRUE", true);
      }

      return results;
    };

    const loadGsheet = async (sheetId, sheetGidNumber) => {
      let sheetResponse = await nodefetch(`https://docs.google.com/spreadsheets/u/1/d/${sheetId}/export?format=csv&id=${sheetId}&gid=${sheetGidNumber}`);
      let resultText = await sheetResponse.text();
      return await csv().fromString(resultText);
    };

    const storyData = addStory(await loadGsheet("1t75gYVhdUjPD1532DbPYN49FLXFhpRwEBFiS4Hbk6_Q", 728344896));

    const addCountries = async (results, label) => {
      let s = {};
      let l = {};
      let c = countries;
      results.map((el, i) => {
        let country = renameCountry[el.Country] ? renameCountry[el.Country] : el.Country;

        if (!alpha3[country]) {
          console.log("Mismatched " + country);
          mismatched[country] = country + " " + label;
        } else {
          if (!Object.keys(c).find(e => e == alpha3[country]["Alpha-3"])) {
            c[alpha3[country]["Alpha-3"]] = {};
          }

          let code = alpha3[country]["Alpha-3"];
          c[code][label] = el;
          c[code]["name"] = country;
          c[code]["code"] = code;
          c[code]["lat"] = alpha3[country]["Latitude (average)"];
          c[code]["lon"] = alpha3[country]["Longitude (average)"];
          el.Status == "Confirmed" ? s[code] = el : l[code] = el;
        }
      });
      countries = c;
      return {
        confirmed: s,
        exploratory: l
      };
    };

    const pathfinderData = await loadGsheet("1t75gYVhdUjPD1532DbPYN49FLXFhpRwEBFiS4Hbk6_Q", 635692465);
    const pathfinders = await addCountries(pathfinderData, "pathfinder");
    const polygonsDirectory = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(process.cwd(), "public");
    const filenames = await fs__WEBPACK_IMPORTED_MODULE_2__["promises"].readdir(polygonsDirectory);
    const polygons = filenames.filter(el => ["polygons-deployments.geojson", "polygons-developments.geojson"].includes(el)).map(async (filename, index) => {
      const filePath = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(polygonsDirectory, filename);
      const fileContents = await fs__WEBPACK_IMPORTED_MODULE_2__["promises"].readFile(filePath, "utf8");
      const polygon = JSON.parse(fileContents);
      let arrayOfCountries = index == 0 ? "deploymentCountries" : "developmentCountries";
      polygon["features"].map(el => {
        el.properties["text-field"] = digitalGoodsArr.filter(good => Object.keys(good.locations[arrayOfCountries]).includes(el.properties.iso)).length.toString();
        el.properties["height"] = parseFloat(el.properties["text-field"]) * 20000;
        el.properties["base"] = el.properties["height"] == 0 ? 999999999999 : 0;
        el.properties["height"] += el.properties["height"] == 0 ? 999999999999 : 0;
      });
      return polygon;
    });
    console.log("missmathes", mismatched);
    return {
      countries: countries,
      digitalGoods: digitalGoodsArr,
      pathfinders: pathfinders,
      polygons: await Promise.all(polygons),
      story: storyData
    };
  };

  return {
    props: {
      data: await fetchData()
    },
    revalidate: 60
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ka8R":
/***/ (function(module, exports) {

module.exports = require("react-google-charts");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "p1tF":
/***/ (function(module, exports) {

module.exports = require("react-intersection-observer");

/***/ })

/******/ });