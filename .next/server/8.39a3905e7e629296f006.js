exports.ids = [8];
exports.modules = {

/***/ "6nDx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapHelperComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Im+X");
/* harmony import */ var react_mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Map = react_mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default()({
  accessToken: "pk.eyJ1IjoibGFjYWJyYTAwIiwiYSI6ImNrc2htaXNyazF2a3cydW41Nml2ZjU1NmsifQ.TX8-R3V34NRBt9gTs2c0dg",
  maxZoom: 9,
  minZoom: 0,
  logoPosition: "bottom-right",
  pitchWithRotate: false
});
const zoomDefault = 2;
function MapHelperComponent(props) {
  const {
    0: zoom,
    1: setZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(zoomDefault);
  const {
    0: lonLat,
    1: setLonLat
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([props.lon, props.lat]);
  const {
    0: pitch,
    1: setPitch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handlePitch = () => setPitch(!pitch);

  return __jsx("div", null, __jsx(Map, {
    style: "mapbox://styles/rolikasi/ckn67a95j022m17mcqog82g05",
    center: lonLat,
    zoom: [zoom],
    pitch: pitch ? 60 : 0 // pitch in degrees
    ,
    containerStyle: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      right: 0
    },
    movingMethod: "flyTo",
    onMoveEnd: map => {
      setLonLat([map.getCenter().lng, map.getCenter().lat]);
      console.log(map.getCenter().lng, map.getCenter().lat);
    },
    onZoomEnd: map => {
      setZoom(map.getZoom());
      console.log("zoom", map.getZoom());
    }
  }, __jsx(react_mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["ZoomControl"], null)), __jsx("div", {
    className: "helper-overlay"
  }, __jsx("p", null, "Longitude: ", lonLat[0].toFixed(2)), __jsx("p", null, "Latitude: ", lonLat[1].toFixed(2)), __jsx("p", null, "Zoom: ", zoom.toFixed(2)), __jsx("button", {
    onClick: handlePitch
  }, "Pitch Map")));
}

/***/ })

};;