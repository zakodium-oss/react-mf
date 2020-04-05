(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 1218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.stories.js": 1219
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
webpackContext.id = 1218;

/***/ }),

/***/ 1219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(105);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(402);
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97);
var exampleMf="Al2(SO4)3",_ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style",null,".custom-css {\n            font-weight: bold;\n            color: red;\n          }");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__["storiesOf"])("MF",module).add("Basic rendering",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_4__[/* MF */ "a"],{mf:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__["text"])("mf",exampleMf)})}).add("Using className",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,_ref,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_4__[/* MF */ "a"],{mf:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__["text"])("mf",exampleMf),className:"custom-css"}))}).add("Using inline style",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_4__[/* MF */ "a"],{style:{color:"navy",fontSize:30},mf:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__["text"])("mf",exampleMf)})}).add("Font-family monospace",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_4__[/* MF */ "a"],{style:{fontFamily:"monospace"},mf:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__["text"])("mf",exampleMf)})}).add("Charged salt",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_4__[/* MF */ "a"],{mf:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__["text"])("mf","2Na+.SO4(--)")})}).add("Passing props",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_4__[/* MF */ "a"],{mf:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__["text"])("mf",exampleMf),onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__["action"])("onClick fired")})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(298)(module)))

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(406);
__webpack_require__(549);
module.exports = __webpack_require__(550);


/***/ }),

/***/ 468:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(105);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(388);
/* harmony import */ var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_7__);
var req=__webpack_require__(1218);function loadStories(){req.keys().forEach(function(filename){return req(filename)})}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__["addDecorator"])(Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_7__["withInfo"])({header:!1,inline:!0,source:!0,styles:{infoStory:{border:"1px solid rgb(238, 238, 238)",padding:30,fontFamily:"sans-serif"}}}));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__["addDecorator"])(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__["withKnobs"]);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__["configure"])(loadStories,module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(298)(module)))

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./nestedObjectAssign": 351,
	"./nestedObjectAssign.js": 351
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
webpackContext.id = 734;

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ MF_MF; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.create.js
var es_object_create = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.set-prototype-of.js
var es_object_set_prototype_of = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(1232);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/mf-parser/src/Format.js
var Format = __webpack_require__(132);
var Format_default = /*#__PURE__*/__webpack_require__.n(Format);

// EXTERNAL MODULE: ./node_modules/mf-parser/src/parse.js
var parse = __webpack_require__(403);
var parse_default = /*#__PURE__*/__webpack_require__.n(parse);

// EXTERNAL MODULE: ./node_modules/mf-parser/src/util/toDisplay.js
var toDisplay = __webpack_require__(404);
var toDisplay_default = /*#__PURE__*/__webpack_require__.n(toDisplay);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(16);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./src/components/MF.js
function _typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _extends(){_extends=Object.assign||function(target){for(var i=1,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var target=_objectWithoutPropertiesLoose(source,excluded),key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(0<=excluded.indexOf(key))continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={},sourceKeys=Object.keys(source),key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(0<=excluded.indexOf(key))continue;target[key]=source[key]}return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _createSuper(Derived){return function(){var Super=_getPrototypeOf(Derived),result;if(_isNativeReflectConstruct()){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call)){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return!0}catch(e){return!1}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}// eslint-disable-line no-unused-vars
var STYLE_SUPERIMPOSE={flexDirection:"column",display:"inline-flex",justifyContent:"center",textAlign:"left",verticalAlign:"middle"},STYLE_SUPERIMPOSE_SUP_SUB={lineHeight:.8,fontSize:"80%"},MF_MF=/*#__PURE__*/function(_PureComponent){_inherits(MF,_PureComponent);var _super=_createSuper(MF);function MF(){_classCallCheck(this,MF);return _super.apply(this,arguments)}_createClass(MF,[{key:"render",value:function render(){var _this$props=this.props,mf=_this$props.mf,className=_this$props.className,style=_this$props.style,otherProps=_objectWithoutProperties(_this$props,["mf","className","style"]),parsed;try{parsed=parse_default()(mf)}catch(e){// if not well formatted we just display the value
return/*#__PURE__*/react_default.a.createElement("span",_extends({className:className,style:style},otherProps),mf)}var displayed=toDisplay_default()(parsed);return/*#__PURE__*/react_default.a.createElement("span",_extends({className:className,style:style},otherProps),displayed.map(function(element,index){return getComponent(element,index)}))}}]);return MF}(react["PureComponent"]);MF_MF.displayName="MF";MF_MF.propTypes={/** molecular formula */mf:prop_types_default.a.string.isRequired,className:prop_types_default.a.string,style:prop_types_default.a.object};function getComponent(element,index){switch(element.kind){case Format_default.a.SUBSCRIPT:{return/*#__PURE__*/react_default.a.createElement("sub",{key:index},element.value)}case Format_default.a.SUPERSCRIPT:{return/*#__PURE__*/react_default.a.createElement("sup",{key:index},element.value)}case Format_default.a.SUPERIMPOSE:{return/*#__PURE__*/react_default.a.createElement("span",{key:index,style:STYLE_SUPERIMPOSE},/*#__PURE__*/react_default.a.createElement("span",{style:STYLE_SUPERIMPOSE_SUP_SUB},element.over),/*#__PURE__*/react_default.a.createElement("span",{style:STYLE_SUPERIMPOSE_SUP_SUB},element.under))}default:return element.value;}}MF_MF.__docgenInfo={description:"",methods:[],displayName:"MF",props:{mf:{type:{name:"string"},required:!0,description:"molecular formula"},className:{type:{name:"string"},required:!1,description:""},style:{type:{name:"object"},required:!1,description:""}}};if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/components/MF.js"]={name:"MF",docgenInfo:MF_MF.__docgenInfo,path:"src/components/MF.js"}}
// CONCATENATED MODULE: ./src/index.js


/***/ })

},[[405,1,2]]]);