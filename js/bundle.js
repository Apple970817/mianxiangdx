/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {



//引入别的js模块
__webpack_require__(1);
//require('./model2.js');
//require('../css/index.css');
//require('../css/test.less');


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Tab{
		constructor(str){
			this.parent=document.querySelector(str);
			this.aBtnList=this.parent.querySelectorAll('input');
			this.aLiList=this.parent.querySelectorAll('li');
			this.show();
		}
		show(){
			let _this=this;
			for(let i=0; i<this.aBtnList.length;i++){
				this.aBtnList[i].onclick=function(){
					_this.index=i;
					_this.fn(i);	
				};
			}		
		}
		fn(i){
			console.log(this);
			for(let j=0;j<this.aLiList.length;j++){
				this.aBtnList[j].className='';
				this.aLiList[j].className='';
			}
			this.aLiList[i].className='show';
			this.aBtnList[i].className='active';		
		}
	}
	
	class AutoPlayTab extends Tab{
		constructor(str){
			super(str);
			this.autoFn();
			this.index=0;
		}
		autoFn(){
			let _this=this;
			
			setInterval(function(){
					_this.index++
					if(_this.index==_this.aBtnList.length){	
						_this.index=0;								
					}
					_this.fn(_this.index);
			},2000);	
		}
	}		
	window.onload=function(){
		new Tab('#box');	
		new AutoPlayTab('#box2');
	}

/***/ })
/******/ ]);