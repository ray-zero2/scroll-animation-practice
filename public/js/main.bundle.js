/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./js/app.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Gl/Gl.js":
/*!*********************!*\
  !*** ./js/Gl/Gl.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gl; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./js/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Gl = /*#__PURE__*/function () {\n  function Gl($canvasElement) {\n    _classCallCheck(this, Gl);\n\n    this.$canvas = $canvasElement;\n    this.$container = document.querySelector('.container');\n    this.$span = document.querySelector('span');\n    this.viewProps = {\n      width: window.innerWidth,\n      height: window.innerHeight,\n      dpr: Math.min(devicePixelRatio, 2 || false)\n    };\n    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGL1Renderer\"]({\n      antialias: false,\n      canvas: this.$canvas\n    });\n    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"]();\n    this.clock = new three__WEBPACK_IMPORTED_MODULE_0__[\"Clock\"]();\n    this.cube = null;\n    this.isTouched = false;\n    this.percentage = 0;\n    this.maxHeight = (this.$container.clientHeight || this.$container.offsetHeight) - window.innerHeight;\n    this.event = {\n      y: 0,\n      deltaY: 0\n    };\n  }\n\n  _createClass(Gl, [{\n    key: \"render\",\n    value: function render() {\n      this.percentage = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"lerp\"])(0.9, this.event.y, this.percentage);\n      this.$span.innerText = 'scroll Y : ' + Math.round(this.percentage * 100) / 100;\n      this.cube.rotation.x += 0.01;\n      this.cube.rotation.y += 0.0125;\n      this.cube.rotation.z += 0.012;\n      this.renderer.render(this.scene, this.camera);\n    }\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      this.render();\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }, {\n    key: \"createObject\",\n    value: function createObject() {\n      this.cube = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](new three__WEBPACK_IMPORTED_MODULE_0__[\"BoxGeometry\"](50, 50, 50), new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshNormalMaterial\"]());\n      this.cube.position.y = 5;\n      this.cube.position.z = 1;\n    }\n  }, {\n    key: \"setRenderer\",\n    value: function setRenderer() {\n      var width = this.viewProps.width;\n      var height = this.viewProps.height;\n      this.renderer.width = width;\n      this.renderer.height = height;\n      this.renderer.setSize(width, height);\n    }\n  }, {\n    key: \"setCamera\",\n    value: function setCamera() {\n      var width = this.viewProps.width;\n      var height = this.viewProps.height;\n      this.camera.aspect = width / height;\n      this.camera.updateProjectionMatrix();\n    }\n  }, {\n    key: \"scroll\",\n    value: function scroll() {\n      var event = this.event; // console.log(event.deltaY);\n\n      var scroll = event.y + event.deltaY; // const scroll = (event.y + event.deltaY) * -1;\n\n      var adjustedScroll = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"clamp\"])(scroll, 0, this.maxHeight);\n      this.event.y = adjustedScroll;\n      console.log({\n        adjustedScroll: adjustedScroll\n      }); // const\n    }\n  }, {\n    key: \"handleResize\",\n    value: function handleResize(e) {\n      this.viewProps.width = window.innerWidth;\n      this.viewProps.height = window.innerHeight;\n      this.setRenderer();\n      this.setCamera();\n    }\n  }, {\n    key: \"handleWheel\",\n    value: function handleWheel(e) {\n      e.preventDefault(); // console.log(e.deltaY);\n      // const deltaY = (e.wheelDeltaY || e.deltaY) * 0.5;\n\n      var deltaY = e.deltaY * 0.5; // console.log(deltaY);\n\n      this.event.deltaY = deltaY;\n      this.scroll();\n    }\n  }, {\n    key: \"handleTouchStart\",\n    value: function handleTouchStart(e) {\n      this.isTouched = true;\n    }\n  }, {\n    key: \"handleTouchMove\",\n    value: function handleTouchMove(e) {\n      if (!this.isTouched) return;\n    }\n  }, {\n    key: \"handleTouchEnd\",\n    value: function handleTouchEnd(e) {\n      this.isTouched = false;\n    }\n  }, {\n    key: \"bind\",\n    value: function bind() {\n      window.addEventListener('resize', this.handleResize.bind(this), {\n        passive: true\n      });\n      window.addEventListener('wheel', this.handleWheel.bind(this), {\n        passive: false\n      });\n      window.addEventListener('touchstart', this.handleTouchStart.bind(this));\n      window.addEventListener('touchmove', this.handleTouchMove.bind(this));\n      window.addEventListener('touchend', this.handleTouchEnd.bind(this));\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.renderer.setPixelRatio(this.viewProps.dpr);\n      this.renderer.setClearColor(0x161216);\n      this.setRenderer();\n      this.camera.position.y = 10;\n      this.camera.position.z = 150;\n      this.setCamera();\n      this.createObject();\n      this.scene.add(this.cube);\n      this.bind();\n      this.animate();\n    }\n  }]);\n\n  return Gl;\n}();\n\n\n\n//# sourceURL=webpack:///./js/Gl/Gl.js?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Gl_Gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gl/Gl */ \"./js/Gl/Gl.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.gl = new _Gl_Gl__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector('#canvas'));\n    this.init();\n  }\n\n  _createClass(App, [{\n    key: \"init\",\n    value: function init() {\n      this.gl.init();\n    }\n  }]);\n\n  return App;\n}();\n\nnew App();\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/*! exports provided: clamp, lerp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clamp\", function() { return clamp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lerp\", function() { return lerp; });\nvar clamp = function clamp(value, min, max) {\n  return Math.max(min, Math.min(value, max));\n};\nvar lerp = function lerp(value, a, b) {\n  return (1 - value) * a + value * b;\n};\n\n//# sourceURL=webpack:///./js/utils.js?");

/***/ })

/******/ });