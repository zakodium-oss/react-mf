(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(4);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(5);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(8);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(10);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/mf-parser/src/Format.js
var Format = __webpack_require__(202);
var Format_default = /*#__PURE__*/__webpack_require__.n(Format);

// EXTERNAL MODULE: ./node_modules/mf-parser/src/parse.js
var parse = __webpack_require__(564);
var parse_default = /*#__PURE__*/__webpack_require__.n(parse);

// EXTERNAL MODULE: ./node_modules/mf-parser/src/util/toDisplay.js
var toDisplay = __webpack_require__(565);
var toDisplay_default = /*#__PURE__*/__webpack_require__.n(toDisplay);

// CONCATENATED MODULE: ./src/components/MF.js
// eslint-disable-line no-unused-vars
var STYLE_SUPERIMPOSE={flexDirection:"column",display:"inline-flex",justifyContent:"center",textAlign:"left",verticalAlign:"middle"},STYLE_SUPERIMPOSE_SUP_SUB={lineHeight:1,fontSize:"70%"},mainStyle={fontFamily:"sans-serif"},MF_MF=/*#__PURE__*/function(_PureComponent){function MF(){return classCallCheck_default()(this,MF),possibleConstructorReturn_default()(this,getPrototypeOf_default()(MF).apply(this,arguments))}return inherits_default()(MF,_PureComponent),createClass_default()(MF,[{key:"render",value:function render(){var _this$props=this.props,mf=_this$props.mf,className=_this$props.className,style=_this$props.style,fullStyle=mainStyle;style&&(fullStyle=Object.assign({},mainStyle,style));var parsed;try{parsed=parse_default()(mf)}catch(e){// if not well formatted we just display the value
return react_default.a.createElement("span",{className:className,style:fullStyle},mf)}var displayed=toDisplay_default()(parsed);return react_default.a.createElement("span",{className:className,style:fullStyle},displayed.map(function(element,index){return getComponent(element,index)}))}}]),MF}(react["PureComponent"]);MF_MF.propTypes={mf:prop_types_default.a.string.isRequired,className:prop_types_default.a.string,style:prop_types_default.a.object};function getComponent(element,index){switch(element.kind){case Format_default.a.SUBSCRIPT:return react_default.a.createElement("sub",{key:index},element.value);case Format_default.a.SUPERSCRIPT:return react_default.a.createElement("sup",{key:index},element.value);case Format_default.a.SUPERIMPOSE:return react_default.a.createElement("span",{key:index,style:STYLE_SUPERIMPOSE},react_default.a.createElement("sup",{style:STYLE_SUPERIMPOSE_SUP_SUB},element.over),react_default.a.createElement("sub",{style:STYLE_SUPERIMPOSE_SUP_SUB},element.under));default:return element.value;}}MF_MF.__docgenInfo={description:"",methods:[],displayName:"MF",props:{mf:{type:{name:"string"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""},style:{type:{name:"object"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MF.js"]={name:"MF",docgenInfo:MF_MF.__docgenInfo,path:"src/components/MF.js"});
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport MF */__webpack_require__.d(__webpack_exports__, "a", function() { return MF_MF; });


/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(222);
__webpack_require__(567);
module.exports = __webpack_require__(568);


/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(139);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(563);
/* harmony import */ var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__);
var req=__webpack_require__(615);function loadStories(){req.keys().forEach(function(filename){return req(filename)})}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["addDecorator"])(Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__["withInfo"])({header:!1,inline:!0,source:!0,styles:{infoStory:{border:"1px solid rgb(238, 238, 238)",padding:30}}})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["addDecorator"])(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__["withKnobs"]),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["configure"])(loadStories,module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(319)(module)))

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./nestedObjectAssign": 498,
	"./nestedObjectAssign.js": 498
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 587;

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.stories.js": 616
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 615;

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(138);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(139);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(221);
var exampleMf="Al2(SO4)3";Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__["storiesOf"])("MF",module).add("Basic rendering",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[/* MF */ "a"],{mf:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["text"])("mf",exampleMf)})}).add("Using className",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style",null,".custom-css {\n  font-weight: bold;\n  color: red;\n}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[/* MF */ "a"],{mf:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["text"])("mf",exampleMf),className:"custom-css"}))}).add("Using inline style",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[/* MF */ "a"],{style:{color:"navy",fontSize:30},mf:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["text"])("mf",exampleMf)})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(319)(module)))

/***/ })

},[[566,2,4]]]);