(this["webpackJsonpthesis"] = this["webpackJsonpthesis"] || []).push([["main"],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5 lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./amplify-amazon-button_5.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-amazon-button_5.entry.js",
		12
	],
	"./amplify-auth-fields_9.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-auth-fields_9.entry.js",
		13
	],
	"./amplify-authenticator.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-authenticator.entry.js",
		3
	],
	"./amplify-button_3.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-button_3.entry.js",
		14
	],
	"./amplify-chatbot.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-chatbot.entry.js",
		15
	],
	"./amplify-checkbox.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-checkbox.entry.js",
		16
	],
	"./amplify-confirm-sign-in_7.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-confirm-sign-in_7.entry.js",
		4
	],
	"./amplify-container.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-container.entry.js",
		17
	],
	"./amplify-federated-buttons_2.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-federated-buttons_2.entry.js",
		18
	],
	"./amplify-federated-sign-in.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-federated-sign-in.entry.js",
		19
	],
	"./amplify-form-field_4.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-form-field_4.entry.js",
		20
	],
	"./amplify-greetings.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-greetings.entry.js",
		21
	],
	"./amplify-icon-button.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-icon-button.entry.js",
		22
	],
	"./amplify-icon.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-icon.entry.js",
		0,
		23
	],
	"./amplify-link.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-link.entry.js",
		24
	],
	"./amplify-nav_2.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-nav_2.entry.js",
		25
	],
	"./amplify-photo-picker.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-photo-picker.entry.js",
		26
	],
	"./amplify-picker.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-picker.entry.js",
		27
	],
	"./amplify-radio-button_2.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-radio-button_2.entry.js",
		5
	],
	"./amplify-s3-album.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-s3-album.entry.js",
		6
	],
	"./amplify-s3-image-picker.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-s3-image-picker.entry.js",
		7
	],
	"./amplify-s3-image.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-s3-image.entry.js",
		8
	],
	"./amplify-s3-text-picker.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-s3-text-picker.entry.js",
		9
	],
	"./amplify-s3-text.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-s3-text.entry.js",
		10
	],
	"./amplify-select-mfa-type.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-select-mfa-type.entry.js",
		28
	],
	"./amplify-sign-in-button.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-sign-in-button.entry.js",
		0,
		29
	],
	"./amplify-toast.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-toast.entry.js",
		30
	],
	"./amplify-tooltip.entry.js": [
		"./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-tooltip.entry.js",
		31
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@aws-amplify/ui-components/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/cesium/Source/Core sync recursive":
/*!**********************************************!*\
  !*** ./node_modules/cesium/Source/Core sync ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/cesium/Source/Core sync recursive";

/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!antd/dist/antd.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/antd/dist/antd.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "#app-layout {\n  height: -moz-fit-content;\n  height: fit-content; \n  min-height: 100%;\n}\n\n.authLoading {\n  height: 100%;\n}\n.ant-divider-primary {\n  border-color: rgba(0,0,0,0.8);\n  border-width: 2px;\n}\n.ant-divider-secondary {\n  border-color: rgba(0,0,0,0.2);\n}\n.tab-col {\n  padding: 0;\n  padding-bottom: 3em;\n}\n.tab-row {\n  width: 100%;\n  margin-top: 1em;\n}\n.ant-row {\n  width: 100%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/alpha/CameraComponent.css":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/alpha/CameraComponent.css ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".video-component, .canvas-component {\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.video-container {\n  display: flex;\n  overflow-y: hidden;\n  flex-grow: 1;\n  height: 100%;\n}\n\n.ant-spin-container, .ant-spin-nested-loading {\n  display:flex;\n  flex-grow:1\n}\n\n.imageUpload-btn {\n  display: flex;\n  color: blue;\n  justify-content: center;\n  margin-bottom: 1.5em;\n}\n\n.button-container {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  z-index: 10;\n}\n\n.camera-button {\n  width:100%\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/alpha/ImageProcess.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/alpha/ImageProcess.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".selectedColorLayer {\n  background-color: beige\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/alpha/MenuComponent.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/alpha/MenuComponent.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".menu-popover .ant-popover-arrow{\n  border-color: transparent !important;\n  box-shadow: none !important;\n}\n\n.menu-popover .ant-popover-inner {\n  background-color: transparent;\n  box-shadow: none;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Gallery.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Gallery.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".gallery-figure {\n  margin: 0;\n  opacity: 80%;\n}\n\n.gallery-figure figcaption{\n  display: none;\n  background-color: #000000B3;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  color: white;\n  text-align: center;\n  font-size: large;\n  padding: 2em;\n  font-weight: bold;\n}\n\n.gallery-figure:hover > figcaption {\n  display: block;\n}\n\n.gallery-figure figcaption:hover {\n  display:block;\n}\n\n.gallery-main {\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n  padding: 2em 2em 0 2em;\n  flex-grow: 1;\n  margin-bottom: 5em;\n}\n\n.gallery-container {\n  height: -moz-fit-content;\n  height: fit-content; \n  min-height: 100%;\n}\n\n@media only screen and (min-width: 600px) {\n  .gallery-container {\n    padding: 0 2em; \n  }\n  .gallery-main {\n    padding: 2em 0 0 0;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .gallery-container {\n    padding: 0 3em;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  .gallery-container{\n    padding: 0 8em;\n  }\n}\n\n@media only screen and (min-width: 1600px) {\n  .gallery-container{\n    padding: 0 15em;\n  }\n}\n\n@media (hover:none) {\n  .gallery-figure figcaption {\n    display: block;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Landing.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Landing.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".info-button{\n  position: absolute;\n  top: 1.5em;\n  right: 1.5em;\n}\n\n.info-button svg{\n  height: 2em;\n  width: 2em;\n}\n\n.primary-btn {\n  text-align: center;\n  font-size: 1.5em;\n  height: auto;\n}\n\n.main-component{\n  display: flex;\n  flex-flow: column nowrap;\n  flex-grow: 1;\n  justify-content: space-between;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NotAuthenticated.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/NotAuthenticated.css ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".auth-container {\n  min-height: 0 !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ProjectQuickView.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/ProjectQuickView.css ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".projectView-collapse {\n  background-color: white;\n  font-size: inherit;\n  margin: 0 -2em;\n}\n\n.projectView-collapse-panel {\n  border: 0 !important;\n  padding: 0 2em;\n}\n\n.projectView-collapse-panel .ant-collapse-header {\n  display: none;\n}\n\n.projectView-collapse-panel .ant-collapse-content-box {\n  padding: 0;\n}\n\n.scrolled-active {\n  font-weight: bold;\n}\n\n.auth-modal .ant-modal-content {\n  height: 0;\n  box-shadow: none;\n}\n\n@media only screen and (min-width: 600px) {\n  .projectView-collapse {\n    margin: 0 -2em;\n  }\n  .projectView-collapse-panel {\n    margin: 0;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .projectView-collapse {\n    margin: 0 -3em;\n  }\n  .projectView-collapse-panel {\n    margin: 0 1em;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  .projectView-collapse {\n    margin: 0 -8em;\n  }\n  .projectView-collapse-panel {\n    margin: 0 6em;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n#root {\n  height: 100%;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n}\n\n.serif-font {\n  font-family: 'Antic Slab', serif;\n}\n\n.justify-text {\n  text-align: justify;\n  text-justify: auto;\n}\n\n.indent-text {\n  text-indent: 2em;\n}\n\nbutton > * {\n  pointer-events: none;\n}\n\n@media only screen and (min-width: 900px) {\n  body {\n    font-size: 18px !important;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  body {\n    font-size: 20px !important;\n  }\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n  margin-left: 2px;\n}\n\n::-webkit-scrollbar-track {\n  background: #F0F2F5; \n}\n\n::-webkit-scrollbar-thumb {\n  background: rgba(0,0,0,0.2); \n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(0,0,0,0.3); \n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js */ "./node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Contexts */ "./src/Contexts.js");
/* harmony import */ var _components_WorkInProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/WorkInProgress */ "./src/components/WorkInProgress.js");
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Landing */ "./src/components/Landing.js");
/* harmony import */ var _alpha_MainComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alpha/MainComponent */ "./src/alpha/MainComponent.js");
var _jsxFileName = "/home/bounces/Work/projects/M.Arch-thesis/src/App.js";











function App() {
  const [pageTitle, setPageTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('CtySketch');
  const [cognitoPayload, setCognitoPayload] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  async function authUser() {
    try {
      let currSession = await aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].currentSession();
      setCognitoPayload(currSession.getIdToken().payload);
    } catch (err) {
      if (err !== "No current user") {
        alert(err);
      }
    } finally {
      setIsLoading(false);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    authUser();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    spinning: isLoading,
    wrapperClassName: "authLoading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    id: "app-layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4__["Helmet"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, pageTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contexts__WEBPACK_IMPORTED_MODULE_6__["AuthContext"].Provider, {
    value: {
      cognitoPayload,
      setCognitoPayload,
      isLoading
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contexts__WEBPACK_IMPORTED_MODULE_6__["ColorsContext"].Provider, {
    value: {
      color1: "black",
      color2: "rgba(0,0,0,0.3)",
      color3: "#fbd900",
      color4: "#008afb",
      color5: "#fb0043"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contexts__WEBPACK_IMPORTED_MODULE_6__["PageTitleContext"].Provider, {
    value: {
      pageTitle: pageTitle,
      setPageTitle: setPageTitle
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
    path: "/alpha/app",
    exact: true,
    component: _alpha_MainComponent__WEBPACK_IMPORTED_MODULE_9__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
    path: "/alpha",
    exact: true,
    component: _components_Landing__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
    path: "/",
    component: _components_WorkInProgress__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Contexts.js":
/*!*************************!*\
  !*** ./src/Contexts.js ***!
  \*************************/
/*! exports provided: ColorsContext, PageTitleContext, AuthContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsContext", function() { return ColorsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleContext", function() { return PageTitleContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ColorsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  color1: "#000000",
  color2: "#000000",
  color3: "#000000",
  color4: "#000000",
  color5: "#000000"
});
const PageTitleContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  pageTitle: "",
  setPageTitle: () => {}
});
const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  cognitoPayload: null,
  setCognitoPayload: () => {},
  isLoading: true
});

/***/ }),

/***/ "./src/alpha/CameraComponent.css":
/*!***************************************!*\
  !*** ./src/alpha/CameraComponent.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./CameraComponent.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/alpha/CameraComponent.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js */ "./node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./CameraComponent.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/alpha/CameraComponent.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./CameraComponent.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/alpha/CameraComponent.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/alpha/CameraComponent.js":
/*!**************************************!*\
  !*** ./src/alpha/CameraComponent.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CameraComponent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CameraComponent.css */ "./src/alpha/CameraComponent.css");
/* harmony import */ var _CameraComponent_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CameraComponent_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/modal/Modal */ "./node_modules/antd/lib/modal/Modal.js");
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/bounces/Work/projects/M.Arch-thesis/src/alpha/CameraComponent.js";






function ImageUpload({
  setDrawData,
  setCurrRenderState,
  setProcessingImg
}) {
  const [isModalOpen, setIsModalOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [fileBase64, setFileBase64] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const imgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const onModalOK = async () => {
    setProcessingImg(true);
    let passed = false;

    try {
      setIsModalOpen(false);
      const imageBmp = await createImageBitmap(imgRef.current);
      setDrawData(data => {
        return { ...data,
          "imageBmp": imageBmp
        };
      });
      passed = true;
    } catch (err) {
      console.log(err);
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error({
        content: "Error processing uploaded image"
      });
    } finally {
      setProcessingImg(false);
    }

    if (passed) {
      setCurrRenderState(curr => curr + 1);
    }
  };

  const onFileChange = () => {
    const file = inputRef.current.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      setFileBase64(reader.result);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "imageUpload-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_4___default.a, {
    title: "Upload Image",
    visible: isModalOpen,
    onOk: onModalOK,
    onCancel: () => setIsModalOpen(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    ref: imgRef,
    src: fileBase64,
    width: fileBase64 ? "100%" : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    ref: inputRef,
    onChange: onFileChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UploadOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }),
    onClick: () => setIsModalOpen(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, "Upload Image"));
}

function CameraComponent({
  drawDataState,
  setCurrRenderState
}) {
  const [drawData, setDrawData] = drawDataState;
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [processingImg, setProcessingImg] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const videoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const cameraHandleClick = async () => {
    setProcessingImg(true);
    const mediaStreamTrack = videoRef.current.srcObject.getVideoTracks()[0];
    const imageCap = new ImageCapture(mediaStreamTrack);

    try {
      const imageBmp = await imageCap.grabFrame();
      setDrawData(data => {
        return { ...data,
          "imageBmp": imageBmp
        };
      });
    } catch (err) {
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error({
        content: "Function requires access to a camera module"
      });
    } finally {
      setProcessingImg(false);
      setCurrRenderState(2);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    drawData.reset();

    if (isLoading) {
      navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment"
        },
        audio: false
      }).then(stream => {
        videoRef.current.srcObject = stream;
        setIsLoading(false);
      }).catch(err => {
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Device does not have a camera or access was denied");
      });
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    spinning: isLoading || processingImg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
    ref: videoRef,
    className: "video-component",
    autoPlay: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 38
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageUpload, {
    setDrawData: setDrawData,
    setCurrRenderState: setCurrRenderState,
    setProcessingImg: setProcessingImg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: processingImg,
    onClick: cameraHandleClick,
    className: "primary-btn camera-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CameraOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 106
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (CameraComponent);

/***/ }),

/***/ "./src/alpha/ImageProcess.css":
/*!************************************!*\
  !*** ./src/alpha/ImageProcess.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./ImageProcess.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/alpha/ImageProcess.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js */ "./node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./ImageProcess.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/alpha/ImageProcess.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./ImageProcess.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/alpha/ImageProcess.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/alpha/ImageProcess.js":
/*!***********************************!*\
  !*** ./src/alpha/ImageProcess.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageProcess_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageProcess.css */ "./src/alpha/ImageProcess.css");
/* harmony import */ var _ImageProcess_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ImageProcess_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/lib/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cesium__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cesium */ "./node_modules/cesium/Source/Cesium.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var _services_cv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/cv */ "./src/services/cv.js");
var _jsxFileName = "/home/bounces/Work/projects/M.Arch-thesis/src/alpha/ImageProcess.js";









async function processFixPerspective(baseImg, setDrawData) {
  try {
    const image = baseImg;
    const processedImage = await _services_cv__WEBPACK_IMPORTED_MODULE_7__["default"].getPerspFixed(image);
    setDrawData(dd => {
      return { ...dd,
        "fixperspResult": processedImage.data.imgPayload,
        "baseFixedPersp": processedImage.data.baseImgPayload
      };
    });
  } catch (err) {
    throw err;
  }
}

async function processColorRange(colorLayerIndex, currColorLayer, modify, baseImg) {
  try {
    const image = baseImg;
    const processedImage = await _services_cv__WEBPACK_IMPORTED_MODULE_7__["default"].getColorRange(image, currColorLayer.CLcolor);
    const ret = { ...currColorLayer,
      "colorResult": processedImage.data.imgPayload
    };
    modify(colorLayerIndex, ret);
    return ret;
  } catch (err) {
    throw err;
  }
}

async function processContour(colorLayerIndex, currColorLayer, modify) {
  try {
    const image = currColorLayer.colorResult;
    const processedImage = await _services_cv__WEBPACK_IMPORTED_MODULE_7__["default"].getContours(image, {
      threshold: 100
    });
    const ret = { ...currColorLayer,
      "contourResult": processedImage.data.imgPayload,
      "coordsResult": processedImage.data.payload
    };
    modify(colorLayerIndex, ret);
    return ret;
  } catch (err) {
    throw err;
  }
}

function _coordListToLongLats(coordList, siteLatLong) {
  const offset = new cesium__WEBPACK_IMPORTED_MODULE_4__["Cartesian3"].fromDegrees(siteLatLong[1], siteLatLong[0]); // const offset = new Cartesian3.fromDegrees(...siteLatLong)

  const cesiumC3list = coordList.map(coords => {
    let [x, y] = coords.map(coord => coord * 0.6); // 0.6m per pixel for zoom level 17

    let cesiumC3 = new cesium__WEBPACK_IMPORTED_MODULE_4__["Cartesian3"](x, y, 0);
    cesium__WEBPACK_IMPORTED_MODULE_4__["Cartesian3"].add(cesiumC3, offset, cesiumC3);
    let carto = cesium__WEBPACK_IMPORTED_MODULE_4__["Ellipsoid"].WGS84.cartesianToCartographic(cesiumC3);
    console.log({
      carto
    });
    return [cesium__WEBPACK_IMPORTED_MODULE_4__["Math"].toDegrees(carto.latitude), cesium__WEBPACK_IMPORTED_MODULE_4__["Math"].toDegrees(carto.longitude)];
  });
  return cesiumC3list;
}

function _coordListToGeoJSONprimitive(coordList, siteLatLong) {
  const cesiumC3 = _coordListToLongLats(coordList, siteLatLong);

  cesiumC3.push(cesiumC3[0]);
  return {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [cesiumC3]
    },
    properties: {}
  };
}

function toGeoJSON(coordsResult, siteLatLong) {
  const geojson = {
    type: "FeatureCollection",
    features: coordsResult.map(coordList => _coordListToGeoJSONprimitive(coordList, siteLatLong))
  }; // let blob = new Blob([ JSON.stringify(geojson) ], { type: "text/plain; charset=utf-8" })
  // const blobURL = URL.createObjectURL(blob)

  return JSON.stringify(geojson);
}

function PreviewDropDown({
  previewTypeState
}) {
  const [previewType, setPreviewType] = previewTypeState;
  const pairings = {
    "base": "Base Image",
    "fixpersp": "Fix Perspective",
    "color": "Color",
    "contour": "Contour"
  };

  const handleClick = event => setPreviewType(event.key);

  const menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, Object.keys(pairings).map(key => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    onClick: handleClick,
    key: key,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 41
    }
  }, pairings[key])));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    overlay: menu,
    trigger: ["click"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "text",
    block: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, "Preview: ", pairings[previewType], " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["DownOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 66
    }
  })));
}

function ColorLayer({
  colorLayers,
  remove,
  modify,
  index,
  colorLayerState,
  baseImg,
  setProcessingImg,
  isLoading,
  siteLatLong,
  setGeojson
}) {
  const [currColorLayer, setCurrColorLayer] = colorLayerState;
  const CLcolor = colorLayers[index]["CLcolor"];
  const CLname = colorLayers[index]["CLname"];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function processChanges() {
      try {
        let retColorLayer = await processColorRange(index, colorLayers[index], modify, baseImg);
        retColorLayer = await processContour(index, retColorLayer, modify);
        const geojson = toGeoJSON(retColorLayer.coordsResult, siteLatLong);
        setGeojson(geojson);
      } catch (err) {
        try {
          console.log(err.data.error.stack);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error({
            content: `Error processing image: ${err.data.error.message}`
          });
        } catch (e) {
          console.log(err);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error({
            content: `Error processing image: ${err.message}`
          });
        }
      } finally {
        setProcessingImg(false);
      }
    }

    if (!isLoading) {
      setProcessingImg(true);
      processChanges();
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    key: index,
    style: {
      display: 'flex',
      width: "100%",
      justifyContent: "center",
      marginRight: "1em",
      cursor: "default"
    },
    className: currColorLayer === index ? "selectedColorLayer" : null,
    onClick: () => setCurrColorLayer(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      borderBottom: "5px solid black",
      borderBottomColor: CLcolor.hex
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__["HiPencil"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 89
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }, CLname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MinusCircleOutlined"], {
    onClick: () => {
      remove(index);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }));
}

function ColorLayerModal({
  isModalOpenState,
  setColorLayers,
  CLcountState,
  setCurrColorLayer
}) {
  const [isModalOpen, setIsModalOpen] = isModalOpenState;
  const [CLcount, setCLcount] = CLcountState;
  const [CLcolorTemp, setCLColorTemp] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    hex: '#000000',
    hsv: {
      h: 0,
      s: 0,
      v: 0,
      a: 1
    }
  });
  const [CLnameTemp, setCLnameTemp] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(`currColorLayer${CLcount}`);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: "Add Color Layer",
    visible: isModalOpen,
    onOk: () => {
      setColorLayers(initValues => {
        return { ...initValues,
          [CLcount]: {
            "CLcolor": CLcolorTemp,
            "CLname": CLnameTemp
          }
        };
      });
      setCLcount(cnt => cnt + 1);
      setCurrColorLayer(CLcount.toString());
      setIsModalOpen(false);
    },
    onCancel: () => setIsModalOpen(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_3__["SketchPicker"], {
    color: CLcolorTemp,
    onChange: c => setCLColorTemp(c),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: CLnameTemp,
    onChange: event => setCLnameTemp(event.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }));
}

function ProcessSettings({
  colorLayerState,
  baseImg,
  setProcessingImg,
  colorLayersState,
  previewTypeState,
  isLoading,
  siteLatLong,
  setGeojson
}) {
  const [isModalOpen, setIsModalOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [colorLayers, setColorLayers] = colorLayersState;
  const [currColorLayer, setCurrColorLayer] = colorLayerState;
  const [CLcount, setCLcount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const remove = index => setColorLayers(CLs => {
    delete CLs[index];
    return { ...CLs
    };
  });

  const modify = (index, obj) => setColorLayers(CLs => {
    return { ...CLs,
      [index.toString()]: obj
    };
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    direction: "vertical",
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PreviewDropDown, {
    previewTypeState: previewTypeState,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }
  }), Object.keys(colorLayers).map(key => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorLayer, {
    key: key,
    index: key,
    colorLayers: colorLayers,
    colorLayerState: [currColorLayer, setCurrColorLayer],
    remove: remove,
    modify: modify,
    setProcessingImg: setProcessingImg,
    baseImg: baseImg,
    isLoading: isLoading,
    siteLatLong: siteLatLong,
    setGeojson: setGeojson,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      marginTop: "1em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorLayerModal, {
    isModalOpenState: [isModalOpen, setIsModalOpen],
    setColorLayers: setColorLayers,
    setCurrColorLayer: setCurrColorLayer,
    CLcountState: [CLcount, setCLcount],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => setIsModalOpen(true),
    type: "dashed",
    block: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["PlusOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 72
    }
  }), " Add Color Layer")));
}

function RenderCanvas({
  colorLayers,
  currColorLayer,
  previewType,
  drawDataState,
  setCurrRenderState,
  setProcessingImg
}) {
  const canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [drawData, setDrawData] = drawDataState;

  const setWidthAndDrawCanvas = imageBmp => {
    canvasRef.current.width = imageBmp.width;
    canvasRef.current.height = imageBmp.height;
    canvasRef.current.getContext('2d').drawImage(imageBmp, 0, 0);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function drawCanvas() {
      const imageBmp = drawData.imageBmp;
      setWidthAndDrawCanvas(imageBmp);
      const baseImg = canvasRef.current.getContext('2d').getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
      await setDrawData({ ...drawData,
        baseImg
      });
      setProcessingImg(true);
      await processFixPerspective(baseImg, setDrawData).then(() => setProcessingImg(false)).catch(err => {
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].error({
          content: `Error processing image: ${err.data.error.message}`,
          onClose: () => setCurrRenderState(currState => currState - 1)
        });
        console.log(err.data.error.stack);
      });
    }

    if (!drawData.fixperspResult) {
      drawCanvas();
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function drawCanvas() {
      let imageBmp = drawData.imageBmp;

      try {
        switch (previewType) {
          case "color":
            imageBmp = await createImageBitmap(colorLayers[currColorLayer].colorResult);
            setWidthAndDrawCanvas(imageBmp);
            break;

          case "contour":
            imageBmp = await createImageBitmap(colorLayers[currColorLayer].contourResult);
            setWidthAndDrawCanvas(imageBmp);
            break;

          case "fixpersp":
            imageBmp = await createImageBitmap(drawData.fixperspResult);
            setWidthAndDrawCanvas(imageBmp);
            break;

          default:
            //base
            setWidthAndDrawCanvas(imageBmp);
        }
      } catch (err) {
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].info('Add a Color Layer to proceed');
      }
    }

    drawCanvas();
  }, [currColorLayer, colorLayers, previewType]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      maxWidth: 640,
      maxHeight: 480
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    ref: canvasRef,
    className: "canvas-component",
    style: {
      flexGrow: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 7
    }
  })));
}

function ImageProcess({
  drawDataState,
  setCurrRenderState,
  siteData,
  setGeojson
}) {
  const [drawData, setDrawData] = drawDataState;
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [processingImg, setProcessingImg] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [currColorLayer, setCurrColorLayer] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("0");
  const [colorLayers, setColorLayers] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(drawData.colorLayers || {});
  const [previewType, setPreviewType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("base");

  const handleGenerate = () => {
    setDrawData(DD => {
      return { ...DD,
        colorLayers
      };
    });
    setCurrRenderState(0);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function loadOpenCV() {
      await _services_cv__WEBPACK_IMPORTED_MODULE_7__["default"].load().then(() => console.log("opencv loaded successfully")).then(() => setIsLoading(false)).catch(err => {
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].error({
          content: 'Error loading OpenCV. Kindly try refreshing your browser'
        });
        console.log(err);
      });
    }

    loadOpenCV();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    spinning: processingImg || isLoading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    direction: "vertical",
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RenderCanvas, {
    colorLayers: colorLayers,
    currColorLayer: currColorLayer,
    previewType: previewType,
    drawDataState: [drawData, setDrawData],
    setCurrRenderState: setCurrRenderState,
    setProcessingImg: setProcessingImg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProcessSettings, {
    baseImg: drawData.fixperspResult,
    isLoading: isLoading,
    colorLayerState: [currColorLayer, setCurrColorLayer],
    isLoading: isLoading,
    setProcessingImg: setProcessingImg,
    colorLayersState: [colorLayers, setColorLayers],
    previewTypeState: [previewType, setPreviewType],
    siteLatLong: siteData.wgs84,
    setGeojson: setGeojson,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      position: "absolute",
      bottom: 0
    },
    disabled: Object.keys(colorLayers).length == 0 || processingImg,
    onClick: handleGenerate,
    className: "primary-btn camera-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 9
    }
  }, "Generate")));
}

/* harmony default export */ __webpack_exports__["default"] = (ImageProcess);

/***/ }),

/***/ "./src/alpha/MainComponent.js":
/*!************************************!*\
  !*** ./src/alpha/MainComponent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _CameraComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CameraComponent */ "./src/alpha/CameraComponent.js");
/* harmony import */ var _ImageProcess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageProcess */ "./src/alpha/ImageProcess.js");
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Gallery */ "./src/components/Gallery.js");
/* harmony import */ var _MenuComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuComponent */ "./src/alpha/MenuComponent.js");
/* harmony import */ var _MobiusComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MobiusComponent */ "./src/alpha/MobiusComponent.js");
var _jsxFileName = "/home/bounces/Work/projects/M.Arch-thesis/src/alpha/MainComponent.js";









function MainComponent() {
  const [drawData, setDrawData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    imageBmp: null,
    reset: () => {
      setDrawData(dd => {
        return {
          "reset": dd.reset
        };
      });
      console.log({
        drawData
      });
    }
  });
  const [siteData, setSiteData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [geojson, setGeojson] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [currRenderState, setCurrRenderState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1);

  const BackButton = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      position: "absolute",
      top: "1em",
      left: "1em",
      width: "4em",
      height: "4em",
      textAlign: "center",
      borderRadius: "50%",
      zIndex: 2
    },
    onClick: () => setCurrRenderState(s => Math.max(0, s - 1)),
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowLeftOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  });

  const ButtonContainer = () => {
    function CameraButton() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        style: {
          width: "4em",
          height: "4em",
          textAlign: "center",
          borderRadius: "50%"
        },
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CameraOutlined"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 17
          }
        }),
        onClick: () => setCurrRenderState(1),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
      direction: "vertical",
      style: {
        position: "absolute",
        top: "1em",
        right: "1em",
        zIndex: 2
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      siteData: siteData,
      currRenderState: currRenderState,
      setCurrRenderState: setCurrRenderState,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }), currRenderState !== 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CameraButton, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 32
      }
    }) : null);
  };

  const renderSwitch = renderState => {
    switch (renderState) {
      case 0:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonContainer, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 18
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MobiusComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          geojson: geojson,
          latlong: siteData.wgs84,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 37
          }
        }));

      case 1:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackButton, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 18
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonContainer, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 32
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CameraComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
          drawDataState: [drawData, setDrawData],
          setCurrRenderState: setCurrRenderState,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 51
          }
        }));

      case 2:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackButton, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 18
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageProcess__WEBPACK_IMPORTED_MODULE_4__["default"], {
          drawDataState: [drawData, setDrawData],
          setCurrRenderState: setCurrRenderState,
          siteData: siteData,
          setGeojson: setGeojson,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 32
          }
        }));

      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Gallery__WEBPACK_IMPORTED_MODULE_5__["default"], {
          setSiteData: setSiteData,
          setGeojson: setGeojson,
          setCurrRenderState: setCurrRenderState,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 16
          }
        });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "main-component",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, renderSwitch(currRenderState));
}

/* harmony default export */ __webpack_exports__["default"] = (MainComponent);

/***/ }),

/***/ "./src/alpha/MenuComponent.css":
/*!*************************************!*\
  !*** ./src/alpha/MenuComponent.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./MenuComponent.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/alpha/MenuComponent.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js */ "./node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./MenuComponent.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/alpha/MenuComponent.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./MenuComponent.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/alpha/MenuComponent.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/alpha/MenuComponent.js":
/*!************************************!*\
  !*** ./src/alpha/MenuComponent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _MenuComponent_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuComponent.css */ "./src/alpha/MenuComponent.css");
/* harmony import */ var _MenuComponent_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MenuComponent_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PrintModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PrintModal */ "./src/alpha/PrintModal.js");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js");
var _jsxFileName = "/home/bounces/Work/projects/M.Arch-thesis/src/alpha/MenuComponent.js";







function MenuComponent({
  currRenderState,
  setCurrRenderState,
  siteData
}) {
  const [isMenuVisible, setMenuVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const childButtonStyle = {
    width: "3em",
    height: "3em",
    textAlign: "center",
    borderRadius: "50%",
    zIndex: 1
  };

  const GalleryButton = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      style: childButtonStyle,
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__["GrGallery"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 15
        }
      }),
      onClick: () => setCurrRenderState(-1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    });
  };

  const MenuContent = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
      direction: "vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GalleryButton, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrintModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      siteData: siteData,
      childButtonStyle: childButtonStyle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    title: null,
    overlayClassName: "menu-popover",
    content: MenuContent,
    placement: "left",
    trigger: "click",
    onVisibleChange: () => setMenuVisible(vis => !vis),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      width: "4em",
      height: "4em",
      textAlign: "center",
      borderRadius: "50%",
      zIndex: 10,
      padding: 0
    },
    icon: isMenuVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CloseOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 33
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MenuOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 52
      }
    }),
    type: isMenuVisible ? "default" : "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuComponent);

/***/ }),

/***/ "./src/alpha/MobiusComponent.js":
/*!**************************************!*\
  !*** ./src/alpha/MobiusComponent.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/home/bounces/Work/projects/M.Arch-thesis/src/alpha/MobiusComponent.js";



function MobiusComponent({
  geojson,
  latlong
}) {
  const mobiusIframe = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  function updateGeoJSON(currGeoJSON, latlong) {
    mobiusIframe.current.contentWindow.postMessage({
      messageType: 'update',
      params: {
        geojson: `'${currGeoJSON}'`,
        geolocation: `{"latitude":${latlong[0]}, "longitude":${latlong[1]}}`
      },
      keepSettings: true
    }, '*');
    setIsLoading(false);
  }

  function checkContentDoc() {
    mobiusIframe.current.contentDocument !== null ? setTimeout(checkContentDoc, 3000) : updateGeoJSON(geojson, latlong);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    checkContentDoc();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Spin"], {
    spinning: isLoading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    id: "mobiusIframe",
    ref: mobiusIframe,
    style: {
      width: "calc(100% - 6em)",
      height: "99vh",
      border: "none"
    },
    src: "https://mobius.design-automation.net/publish?file=_aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3BrZXJlZC9jdHlza2V0Y2gtbW9iaXVzL21haW4vY3R5c2tldGNoLm1vYg==",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MobiusComponent);

/***/ }),

/***/ "./src/alpha/PrintModal.js":
/*!*********************************!*\
  !*** ./src/alpha/PrintModal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _jsxFileName = "/home/bounces/Work/projects/M.Arch-thesis/src/alpha/PrintModal.js";




function ModalComponent({
  modalVisibleState,
  siteData
}) {
  const [isModalVisible, setModalVisible] = modalVisibleState;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    visible: isModalVisible,
    footer: null,
    onOk: () => {
      setModalVisible(false);
    },
    onCancel: () => setModalVisible(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Paragraph, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "Printable at 1:750 scale in A4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Paragraph, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: `${""}/templates/1-750grid.pdf`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Grid Template")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Paragraph, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: `${""}/${siteData.files[0]}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Site")));
}

function PrintModal({
  siteData,
  childButtonStyle
}) {
  const [isModalVisible, setModalVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalComponent, {
    siteData: siteData,
    modalVisibleState: [isModalVisible, setModalVisible],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: childButtonStyle,
    onClick: () => setModalVisible(true),
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PrinterOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PrintModal);

/***/ }),

/***/ "./src/aws-exports.js":
/*!****************************!*\
  !*** ./src/aws-exports.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.
const awsmobile = {
  "aws_project_region": "us-east-1",
  "aws_cognito_identity_pool_id": "us-east-1:31176272-220e-4468-948f-61c5ba7cd9b9",
  "aws_cognito_region": "us-east-1",
  "aws_user_pools_id": "us-east-1_6wr0ONCLj",
  "aws_user_pools_web_client_id": "48sqj3cdnchimh3upe958lrrp1",
  "oauth": {},
  "aws_appsync_graphqlEndpoint": "https://qhgybqx66fawtdaavzpv6filze.appsync-api.us-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS"
};
/* harmony default export */ __webpack_exports__["default"] = (awsmobile);

/***/ }),

/***/ "./src/components/Gallery.css":
/*!************************************!*\
  !*** ./src/components/Gallery.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Gallery.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Gallery.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js */ "./node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Gallery.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Gallery.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Gallery.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Gallery.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Gallery.js":
/*!***********************************!*\
  !*** ./src/components/Gallery.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Gallery_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery.css */ "./src/components/Gallery.css");
/* harmony import */ var _Gallery_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Gallery_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projects */ "./src/components/Projects.js");
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Contexts */ "./src/Contexts.js");
/* harmony import */ var _ProjectQuickView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectQuickView */ "./src/components/ProjectQuickView.js");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/main/esm/index.js");
var _jsxFileName = "/home/bounces/Work/projects/M.Arch-thesis/src/components/Gallery.js";








const GalleryFigure = ({
  project,
  expand,
  setSelectedProject,
  setSelectedInfo,
  quickViewRef
}) => {
  const handleClick = () => {
    setSelectedProject(project.friendlyExt);
    setSelectedInfo(project);
    expand();
    quickViewRef.current.scrollIntoView();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "gallery-figure",
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, project.images[0] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: `${""}/${project.images[0].path}`,
    alt: project.title,
    style: {
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 28
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: `hsl(${Object(mathjs__WEBPACK_IMPORTED_MODULE_6__["randomInt"])(20, 100)}, 100%, ${Object(mathjs__WEBPACK_IMPORTED_MODULE_6__["randomInt"])(50, 100)}%)`,
      width: "100%",
      height: 200,
      textAlign: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, project.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figcaption", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, project.subtitle));
};

function Gallery({
  setSiteData,
  setCurrRenderState,
  setGeojson
}) {
  const [selectedProject, setSelectedProject] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [selectedInfo, setSelectedInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [expandedKey, setExpandedKey] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    color1,
    color2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Contexts__WEBPACK_IMPORTED_MODULE_4__["ColorsContext"]);
  const quickViewRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const menuStyle = {
    borderBottom: `2px dotted ${color2}`,
    paddingBottom: "1em"
  };
  const colParams = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 8,
    xl: 6,
    xxl: 6
  };
  const projects = _Projects__WEBPACK_IMPORTED_MODULE_3__["projectList"].map(project => {
    if (selectedProject && project.friendlyExt === selectedProject && !selectedInfo) {
      setSelectedInfo(project);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], Object.assign({
      key: project.id
    }, colParams, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GalleryFigure, {
      project: project,
      setSelectedProject: setSelectedProject,
      setSelectedInfo: setSelectedInfo,
      expand: () => setExpandedKey("extras"),
      quickViewRef: quickViewRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gallery-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    id: "titleSpace",
    direction: "vertical",
    style: { ...menuStyle,
      padding: "2em 0",
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "" + "/ctysketch.png",
    width: 300,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Paragraph, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Select a Site")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "gallery-main",
    ref: quickViewRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    direction: "vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    activeKey: expandedKey,
    bordered: false,
    className: "projectView-collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Collapse"].Panel, {
    key: "extras",
    className: "projectView-collapse-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, selectedProject ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectQuickView__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedInfo: selectedInfo,
    setSiteData: setSiteData,
    setCurrRenderState: setCurrRenderState,
    setGeojson: setGeojson,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 36
    }
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      margin: "0.5em 0",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => setExpandedKey(""),
    style: {
      width: "100%"
    },
    type: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "tab-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, projects))));
}

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./src/components/Landing.css":
/*!************************************!*\
  !*** ./src/components/Landing.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Landing.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Landing.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js */ "./node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Landing.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Landing.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Landing.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Landing.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Landing.js":
/*!***********************************!*\
  !*** ./src/components/Landing.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Landing_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing.css */ "./src/components/Landing.css");
/* harmony import */ var _Landing_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Landing_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Contexts */ "./src/Contexts.js");
var _jsxFileName = "/home/bounces/Work/projects/M.Arch-thesis/src/components/Landing.js";







function Landing() {
  const style = {
    justifyContent: "center"
  };
  const {
    color2,
    color4
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Contexts__WEBPACK_IMPORTED_MODULE_5__["ColorsContext"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    size: "large",
    direction: "vertical",
    style: {
      flexGrow: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: { ...style,
      paddingTop: "10em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "" + '/ctysketch.png',
    width: 300,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "ver 0.1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: { ...style,
      paddingTop: "5em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/alpha/app",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    style: {
      backgroundColor: color4,
      borderColor: color4
    },
    className: "primary-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }
  }, "Start")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Link, {
    target: "_blank",
    href: "https://docs.ctysketch.com",
    style: {
      color: color2
    },
    className: "info-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["InfoCircleOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 33
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./src/components/NotAuthenticated.css":
/*!*********************************************!*\
  !*** ./src/components/NotAuthenticated.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./NotAuthenticated.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NotAuthenticated.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js */ "./node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./NotAuthenticated.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NotAuthenticated.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./NotAuthenticated.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NotAuthenticated.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/NotAuthenticated.js":
/*!********************************************!*\
  !*** ./src/components/NotAuthenticated.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var _aws_amplify_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/ui-components */ "./node_modules/@aws-amplify/ui-components/dist/index.mjs");
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Contexts */ "./src/Contexts.js");
/* harmony import */ var _aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-amplify/ui-react */ "./node_modules/@aws-amplify/ui-react/lib-esm/index.js");
/* harmony import */ var _NotAuthenticated_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NotAuthenticated.css */ "./src/components/NotAuthenticated.css");
/* harmony import */ var _NotAuthenticated_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NotAuthenticated_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/bounces/Work/projects/M.Arch-thesis/src/components/NotAuthenticated.js";







function NotAuthenticated() {
  const setCognitoPayload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Contexts__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]).setCognitoPayload;

  async function authUser() {
    try {
      let currSession = await aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].currentSession();
      setCognitoPayload(currSession.getIdToken().payload);
    } catch (err) {
      if (err !== "No current user") {
        alert(err);
      }
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => Object(_aws_amplify_ui_components__WEBPACK_IMPORTED_MODULE_2__["onAuthUIStateChange"])(authUser));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_4__["AmplifyAuthenticator"], {
    usernameAlias: "email",
    className: "amplifyAuth",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_4__["AmplifySignUp"], {
    slot: "sign-up",
    usernameAlias: "email",
    headerText: "Create a CtySketch account",
    formFields: [{
      type: "email",
      label: "E-mail",
      placeholder: "email@email.mail",
      required: true
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_4__["AmplifySignIn"], {
    slot: "sign-in",
    usernameAlias: "email",
    headerText: "Get started!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (NotAuthenticated);

/***/ }),

/***/ "./src/components/ProjectQuickView.css":
/*!*********************************************!*\
  !*** ./src/components/ProjectQuickView.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./ProjectQuickView.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ProjectQuickView.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js */ "./node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./ProjectQuickView.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ProjectQuickView.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./ProjectQuickView.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ProjectQuickView.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/ProjectQuickView.js":
/*!********************************************!*\
  !*** ./src/components/ProjectQuickView.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectQuickView_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectQuickView.css */ "./src/components/ProjectQuickView.css");
/* harmony import */ var _ProjectQuickView_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProjectQuickView_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Contexts */ "./src/Contexts.js");
/* harmony import */ var _components_NotAuthenticated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NotAuthenticated */ "./src/components/NotAuthenticated.js");
var _jsxFileName = "/home/bounces/Work/projects/M.Arch-thesis/src/components/ProjectQuickView.js";





const colParams = {
  xs: 24,
  sm: 24,
  md: 12
};

function ModalComponent({
  modalVisibleState
}) {
  const [isModalVisible, setModalVisible] = modalVisibleState;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    visible: isModalVisible,
    footer: null,
    onOk: () => {
      setModalVisible(false);
    },
    onCancel: () => setModalVisible(false),
    className: "auth-modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NotAuthenticated__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
}

function ProjectQuickView({
  selectedInfo,
  setSiteData,
  setCurrRenderState,
  setGeojson
}) {
  const {
    color2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Contexts__WEBPACK_IMPORTED_MODULE_3__["ColorsContext"]);
  const {
    pageTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Contexts__WEBPACK_IMPORTED_MODULE_3__["PageTitleContext"]);
  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Contexts__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]);
  const [isModalVisible, setModalVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  async function setGeojson_() {
    // reads file and set geojson
    const geojsonPath = selectedInfo.geojson;
    fetch("" + '/' + geojsonPath).then(res => res.json()).then(data => {
      const data_ = JSON.stringify(data);
      setGeojson(data_);
    });
  }

  const ImageCol = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], Object.assign({
    className: "tab-col"
  }, colParams, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    direction: "vertical",
    size: "small",
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, selectedInfo.images.map((imageObj, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "" + '/' + imageObj.path,
    alt: imageObj.alt,
    key: `${selectedInfo.id}-${index}.jpg`,
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }))));

  const DetailsCol = () => {
    const CreateJoin = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalComponent, {
      modalVisibleState: [isModalVisible, setModalVisible],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      style: {
        backgroundColor: "rgba(0,0,0,0.8)",
        color: "white"
      },
      onClick: () => {
        if (authContext.cognitoPayload) {
          setSiteData(selectedInfo);
          setCurrRenderState(state => state + 1);
        } else {
          setModalVisible(true);
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }, "Create Session"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      style: {
        backgroundColor: "rgba(0,0,0,0.8)",
        color: "white"
      },
      onClick: () => {
        // setSiteData(selectedInfo)
        // setCurrRenderState(state=>state+1)
        console.log("join room");
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }
    }, "Join Session"));

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], Object.assign({
      className: "tab-col"
    }, colParams, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Title, {
      level: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }
    }, selectedInfo.title, ": ", selectedInfo.subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Descriptions"], {
      column: 1,
      style: {
        paddingBottom: "1.5em"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Descriptions"].Item, {
      label: "Location",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }
    }, selectedInfo.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Descriptions"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateJoin, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    }))), selectedInfo.texts.map((descr, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Paragraph, {
      className: "serif-font",
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 53
      }
    }, descr)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setGeojson_();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    direction: "vertical",
    size: "large",
    style: {
      width: "100%",
      paddingBottom: "3em",
      borderBottom: `2px dotted ${color2}`,
      margin: "2em 0 0 0"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 16,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DetailsCol, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageCol, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectQuickView);

/***/ }),

/***/ "./src/components/Projects.js":
/*!************************************!*\
  !*** ./src/components/Projects.js ***!
  \************************************/
/*! exports provided: projectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectList", function() { return projectList; });
const projectList = [{
  id: "site-01",
  friendlyExt: "site01",
  title: "Neighbourhood Renewal",
  subtitle: "Hong Lim Complex",
  texts: [// abstract
  "Honglim Complex description"],
  location: "Chinatown, Singapore",
  wgs84: [1.284778, 103.845553],
  // latitude, longitude
  files: ["templates/honglimcomplex.pdf"],
  geojson: ["templates/honglimtest.geojson"],
  images: [{
    path: "templates/honglimcomplex-00.jpg",
    alt: ""
  }, {
    path: "templates/honglimcomplex-01.jpg",
    alt: ""
  }],
  video: []
}];

/***/ }),

/***/ "./src/components/WorkInProgress.js":
/*!******************************************!*\
  !*** ./src/components/WorkInProgress.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Landing_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing.css */ "./src/components/Landing.css");
/* harmony import */ var _Landing_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Landing_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Contexts */ "./src/Contexts.js");
var _jsxFileName = "/home/bounces/Work/projects/M.Arch-thesis/src/components/WorkInProgress.js";






function WorkInProgress() {
  const style = {
    justifyContent: "center"
  };
  const {
    color2,
    color4
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Contexts__WEBPACK_IMPORTED_MODULE_4__["ColorsContext"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    size: "large",
    direction: "vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: { ...style,
      paddingTop: "10em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "" + '/ctysketch.png',
    width: 300,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Title, {
    style: {
      fontSize: "1em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "Coming Soon")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Link, {
    style: {
      fontSize: "1em"
    },
    href: "/alpha",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "try alpha"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Link, {
    target: "_blank",
    href: "https://docs.ctysketch.com",
    style: {
      color: color2
    },
    className: "info-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["InfoCircleOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (WorkInProgress);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js */ "./node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aws-exports */ "./src/aws-exports.js");
var _jsxFileName = "/home/bounces/Work/projects/M.Arch-thesis/src/index.js";







aws_amplify__WEBPACK_IMPORTED_MODULE_5__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_6__["default"]);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(
/*#__PURE__*/
// <React.StrictMode>
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}), // </React.StrictMode>,
document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/services/cv.js":
/*!****************************!*\
  !*** ./src/services/cv.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class CV {
  _dispatch(event) {
    const {
      msg
    } = event;
    this._status[msg] = ['loading'];
    this.worker.postMessage(event);
    return new Promise((res, rej) => {
      let interval = setInterval(() => {
        const status = this._status[msg];
        console.log(status);
        if (status[0] === 'done') res(status[1]);
        if (status[0] === 'error') rej(status[1]);

        if (status[0] !== 'loading') {
          delete this._status[msg];
          clearInterval(interval);
        }
      }, 50);
    });
  }

  load() {
    if (window.Worker) {
      this._status = {};
      this.worker = new Worker("" + '/js/cv.worker.js');

      this.worker.onmessage = e => {
        if (e.data.error) {
          this._status[e.data.msg] = ['error', e];
        } else {
          this._status[e.data.msg] = ['done', e];
        }
      };

      return this._dispatch({
        msg: 'load'
      });
    } else {
      alert('Your browser does not support Web Workers');
    }
  }

  greyscaleVideo(payload) {
    return this._dispatch({
      msg: 'greyscale',
      payload
    });
  }

  getContours(payload, settings) {
    return this._dispatch({
      msg: 'contour',
      payload,
      settings
    });
  }

  getColorRange(payload, settings) {
    return this._dispatch({
      msg: 'colorRange',
      payload,
      settings
    });
  }

  getPerspFixed(payload, settings) {
    return this._dispatch({
      msg: 'fixPersp',
      payload,
      settings
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CV());

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/bounces/Work/projects/M.Arch-thesis/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/bounces/Work/projects/M.Arch-thesis/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/bounces/Work/projects/M.Arch-thesis/src/index.js */"./src/index.js");


/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[1,"runtime-main",2]]]);
//# sourceMappingURL=main.chunk.js.map