(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(302);
__webpack_require__(380);
module.exports = __webpack_require__(381);


/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(208);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(292);
/* harmony import */ var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_6__);
var req=__webpack_require__(623);function loadStories(){req.keys().forEach(function(filename){return req(filename)})}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__["addDecorator"])(Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_6__["withInfo"])({header:!1,inline:!0,source:!0,styles:{infoStory:{border:"1px solid rgb(238, 238, 238)",padding:30,fontFamily:"sans-serif"}}})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__["addDecorator"])(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__["withKnobs"]),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__["configure"])(loadStories,module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(150)(module)))

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./nestedObjectAssign": 242,
	"./nestedObjectAssign.js": 242
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 451;

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.stories.js": 624
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 623;

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);
var exampleMf="Al2(SO4)3",_ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style",null,".custom-css {\n  font-weight: bold;\n  color: red;\n}");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__["storiesOf"])("MF",module).add("Basic rendering",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[/* MF */ "a"],{mf:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["text"])("mf",exampleMf)})}).add("Using className",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,_ref,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[/* MF */ "a"],{mf:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["text"])("mf",exampleMf),className:"custom-css"}))}).add("Using inline style",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[/* MF */ "a"],{style:{color:"navy",fontSize:30},mf:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["text"])("mf",exampleMf)})}).add("Font-family monospace",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[/* MF */ "a"],{style:{fontFamily:"monospace"},mf:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["text"])("mf",exampleMf)})}).add("Charged salt",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[/* MF */ "a"],{mf:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["text"])("mf","2Na+.SO4(--)")})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(150)(module)))

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@storybook/core/node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@storybook/core/node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@storybook/core/node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@storybook/core/node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/@storybook/core/node_modules/core-js/modules/es6.object.set-prototype-of.js
var es6_object_set_prototype_of = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/@storybook/core/node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/mf-parser/src/Format.js
var Format = __webpack_require__(107);
var Format_default = /*#__PURE__*/__webpack_require__.n(Format);

// EXTERNAL MODULE: ./node_modules/mf-parser/src/parse.js
var parse = __webpack_require__(299);
var parse_default = /*#__PURE__*/__webpack_require__.n(parse);

// EXTERNAL MODULE: ./node_modules/mf-parser/src/util/toDisplay.js
var toDisplay = __webpack_require__(300);
var toDisplay_default = /*#__PURE__*/__webpack_require__.n(toDisplay);

// CONCATENATED MODULE: ./src/components/MF.js
function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _possibleConstructorReturn(self,call){return call&&("object"===_typeof(call)||"function"==typeof call)?call:_assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}// eslint-disable-line no-unused-vars
var STYLE_SUPERIMPOSE={flexDirection:"column",display:"inline-flex",justifyContent:"center",textAlign:"left",verticalAlign:"middle"},STYLE_SUPERIMPOSE_SUP_SUB={lineHeight:.8,fontSize:"80%"},MF_MF=/*#__PURE__*/function(_PureComponent){function MF(){return _classCallCheck(this,MF),_possibleConstructorReturn(this,_getPrototypeOf(MF).apply(this,arguments))}return _inherits(MF,_PureComponent),_createClass(MF,[{key:"render",value:function render(){var parsed,_this$props=this.props,mf=_this$props.mf,className=_this$props.className,style=_this$props.style;try{parsed=parse_default()(mf)}catch(e){// if not well formatted we just display the value
return react_default.a.createElement("span",{className:className,style:style},mf)}var displayed=toDisplay_default()(parsed);return react_default.a.createElement("span",{className:className,style:style},displayed.map(function(element,index){return getComponent(element,index)}))}}]),MF}(react["PureComponent"]);MF_MF.displayName="MF";MF_MF.propTypes={/** molecular formula */mf:prop_types_default.a.string.isRequired,className:prop_types_default.a.string,style:prop_types_default.a.object};function getComponent(element,index){switch(element.kind){case Format_default.a.SUBSCRIPT:return react_default.a.createElement("sub",{key:index},element.value);case Format_default.a.SUPERSCRIPT:return react_default.a.createElement("sup",{key:index},element.value);case Format_default.a.SUPERIMPOSE:return react_default.a.createElement("span",{key:index,style:STYLE_SUPERIMPOSE},react_default.a.createElement("span",{style:STYLE_SUPERIMPOSE_SUP_SUB},element.over),react_default.a.createElement("span",{style:STYLE_SUPERIMPOSE_SUP_SUB},element.under));default:return element.value;}}MF_MF.__docgenInfo={description:"",methods:[],displayName:"MF",props:{mf:{type:{name:"string"},required:!0,description:"molecular formula"},className:{type:{name:"string"},required:!1,description:""},style:{type:{name:"object"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\MF.js"]={name:"MF",docgenInfo:MF_MF.__docgenInfo,path:"src\\components\\MF.js"});
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport MF */__webpack_require__.d(__webpack_exports__, "a", function() { return MF_MF; });


/***/ })

},[[301,1,2]]]);