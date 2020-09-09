(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 1231:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.stories.js": 1232
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
webpackContext.id = 1231;

/***/ }),

/***/ 1232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var _addonActions=__webpack_require__(1233),_addonKnobs=__webpack_require__(355),_react=__webpack_require__(306),_react2=_interopRequireDefault(__webpack_require__(0)),_src=__webpack_require__(1246);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var exampleMf="Al2(SO4)3",_ref=/*#__PURE__*/_react2["default"].createElement("style",null,".custom-css {\n            font-weight: bold;\n            color: red;\n          }");// eslint-disable-next-line no-undef
(0,_react.storiesOf)("MF",module).add("Basic rendering",function(){return/*#__PURE__*/_react2["default"].createElement(_src.MF,{mf:(0,_addonKnobs.text)("mf",exampleMf)})}).add("Using className",function(){return/*#__PURE__*/_react2["default"].createElement("div",null,_ref,/*#__PURE__*/_react2["default"].createElement(_src.MF,{mf:(0,_addonKnobs.text)("mf",exampleMf),className:"custom-css"}))}).add("Using inline style",function(){return/*#__PURE__*/_react2["default"].createElement(_src.MF,{style:{color:"navy",fontSize:30},mf:(0,_addonKnobs.text)("mf",exampleMf)})}).add("Font-family monospace",function(){return/*#__PURE__*/_react2["default"].createElement(_src.MF,{style:{fontFamily:"monospace"},mf:(0,_addonKnobs.text)("mf",exampleMf)})}).add("Charged salt",function(){return/*#__PURE__*/_react2["default"].createElement(_src.MF,{mf:(0,_addonKnobs.text)("mf","2Na+.SO4(--)")})}).add("Passing props",function(){return/*#__PURE__*/_react2["default"].createElement(_src.MF,{mf:(0,_addonKnobs.text)("mf",exampleMf),onClick:(0,_addonActions.action)("onClick fired")})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(57)(module)))

/***/ }),

/***/ 1246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});Object.defineProperty(exports,"MF",{enumerable:!0,get:function get(){return _MF["default"]}});var _MF=_interopRequireDefault(__webpack_require__(1247));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}

/***/ }),

/***/ 1247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(2);__webpack_require__(11);__webpack_require__(18);__webpack_require__(9);__webpack_require__(12);__webpack_require__(27);__webpack_require__(29);__webpack_require__(77);__webpack_require__(37);__webpack_require__(65);__webpack_require__(4);__webpack_require__(80);__webpack_require__(10);__webpack_require__(1248);__webpack_require__(36);__webpack_require__(15);__webpack_require__(13);Object.defineProperty(exports,"__esModule",{value:!0});exports["default"]=void 0;var _Format=_interopRequireDefault(__webpack_require__(394)),_parse=_interopRequireDefault(__webpack_require__(1249)),_toDisplay=_interopRequireDefault(__webpack_require__(1251)),_propTypes=_interopRequireDefault(__webpack_require__(19)),_react=_interopRequireWildcard(__webpack_require__(0));function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var cache=new WeakMap;_getRequireWildcardCache=function(){return cache};return cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj){return{default:obj}}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var target=_objectWithoutPropertiesLoose(source,excluded),key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(0<=excluded.indexOf(key))continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={},sourceKeys=Object.keys(source),key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(0<=excluded.indexOf(key))continue;target[key]=source[key]}return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call)){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return!0}catch(e){return!1}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var STYLE_SUPERIMPOSE={flexDirection:"column",display:"inline-flex",justifyContent:"center",textAlign:"left",verticalAlign:"middle"},STYLE_SUPERIMPOSE_SUP_SUB={lineHeight:.8,fontSize:"80%"},MF=/*#__PURE__*/function(_PureComponent){_inherits(MF,_PureComponent);var _super=_createSuper(MF);function MF(){_classCallCheck(this,MF);return _super.apply(this,arguments)}_createClass(MF,[{key:"render",value:function render(){var _this$props=this.props,mf=_this$props.mf,otherProps=_objectWithoutProperties(_this$props,["mf"]),parsed;try{parsed=(0,_parse["default"])(mf)}catch(e){// If not well formatted, just display the raw value.
return/*#__PURE__*/_react["default"].createElement("span",otherProps,mf)}var displayed=(0,_toDisplay["default"])(parsed);return/*#__PURE__*/_react["default"].createElement("span",otherProps,displayed.map(getComponent))}}]);return MF}(_react.PureComponent);exports["default"]=MF;MF.displayName="MF";MF.propTypes={/** Molecular formula */mf:_propTypes["default"].string.isRequired,className:_propTypes["default"].string,style:_propTypes["default"].object};function getComponent(element,index){switch(element.kind){case _Format["default"].SUBSCRIPT:{return/*#__PURE__*/_react["default"].createElement("sub",{key:index},element.value)}case _Format["default"].SUPERSCRIPT:{return/*#__PURE__*/_react["default"].createElement("sup",{key:index},element.value)}case _Format["default"].SUPERIMPOSE:{return/*#__PURE__*/_react["default"].createElement("span",{key:index,style:STYLE_SUPERIMPOSE},/*#__PURE__*/_react["default"].createElement("span",{style:STYLE_SUPERIMPOSE_SUP_SUB},element.over),/*#__PURE__*/_react["default"].createElement("span",{style:STYLE_SUPERIMPOSE_SUP_SUB},element.under))}default:return element.value;}}MF.__docgenInfo={description:"",methods:[],displayName:"MF",props:{mf:{type:{name:"string"},required:!0,description:"Molecular formula"},className:{type:{name:"string"},required:!1,description:""},style:{type:{name:"object"},required:!1,description:""}}};if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src\\components\\MF.js"]={name:"MF",docgenInfo:MF.__docgenInfo,path:"src\\components\\MF.js"}}

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(410);
__webpack_require__(559);
module.exports = __webpack_require__(560);


/***/ }),

/***/ 474:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {__webpack_require__(31);__webpack_require__(12);__webpack_require__(10);__webpack_require__(32);__webpack_require__(13);var _react=__webpack_require__(306),_addonKnobs=__webpack_require__(355),_addonInfo=__webpack_require__(743),req=__webpack_require__(1231);function loadStories(){req.keys().forEach(function(filename){return req(filename)})}(0,_react.addDecorator)((0,_addonInfo.withInfo)({header:!1,inline:!0,source:!0,styles:{infoStory:{border:"1px solid rgb(238, 238, 238)",padding:30,fontFamily:"sans-serif"}}}));(0,_react.addDecorator)(_addonKnobs.withKnobs);(0,_react.configure)(loadStories,module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(57)(module)))

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./nestedObjectAssign": 356,
	"./nestedObjectAssign.js": 356
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
webpackContext.id = 746;

/***/ })

},[[409,1,2]]]);