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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "css/style.css";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(0);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(0);

__webpack_require__(4);

var _location = __webpack_require__(5);

var _location2 = _interopRequireDefault(_location);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var helloWorld = function helloWorld() {
    for (var i = 3; i > 0; i--) {
        console.log(i);
    }
    console.log('...');
    console.log('Hello World!');
};

helloWorld();

var clickButton = function clickButton() {
    _location2.default.getPosition();
};

document.getElementById('btnLocation').onclick = clickButton;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if ('serviceWorker' in navigator) {

    window.addEventListener('load', function () {
        navigator.serviceWorker.register('./sw.js').then(function (reg) {
            console.log('Registrado o ServiceWork', reg);
        }).catch(function (error) {
            return console.log('Erro ao registrar ' + error);
        });
    });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var viewLocation = function () {
    function viewLocation() {
        _classCallCheck(this, viewLocation);

        this.position = undefined;
        this.latitude = 0.0;
        this.longitude = 0.0;
    }

    _createClass(viewLocation, null, [{
        key: 'getLocationCurrency',
        value: async function getLocationCurrency() {
            if (navigator.geolocation) return new Promise(function (resolve, reject) {
                return navigator.geolocation.getCurrentPosition(resolve, reject);
            });else return new Promise(function (resolve) {
                return resolve({});
            });
        }
    }, {
        key: 'getPosition',
        value: async function getPosition() {

            var position = await this.getLocationCurrency();

            this.position = position;

            if (this.position !== undefined) {
                var _position$coords = this.position.coords,
                    latitude = _position$coords.latitude,
                    longitude = _position$coords.longitude;


                this.latitude = latitude;
                this.longitude = longitude;

                if (latitude !== undefined) {

                    var componentMaps = document.getElementById("location");
                    componentMaps.src = 'https://maps.google.com/maps?q=' + latitude + ',' + longitude + '&t=&z=20&ie=UTF8&iwloc=&output=embed';
                    document.getElementById('detail-location').innerHTML = 'Latitude: ' + latitude + ' Longitude: ' + longitude;
                }
            }
        }
    }]);

    return viewLocation;
}();

exports.default = viewLocation;

/***/ })
/******/ ]);