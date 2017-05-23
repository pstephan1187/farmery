/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// import state from "../state.json";
var state = __webpack_require__(11);

console.log(state);

module.exports = state;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bus = function () {
    function Bus() {
        _classCallCheck(this, Bus);

        this.events = {};
    }

    _createClass(Bus, [{
        key: "emit",
        value: function emit(event, args) {
            if (!this.events[event]) {
                return;
            }

            for (var i in this.events[event]) {
                var callback = this.events[event][i];
                callback(args);
            }
        }
    }, {
        key: "on",
        value: function on(event, callback) {
            if (!this.events[event]) {
                this.events[event] = [];
            }

            this.events[event].push(callback);
        }
    }]);

    return Bus;
}();

var bus = new Bus();

module.exports = bus;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Location = function () {
    function Location(state) {
        _classCallCheck(this, Location);

        window.console.log('creating location...');

        // this.id = location_key;
        this.state = state;
        this.bus = __webpack_require__(1);
    }

    _createClass(Location, [{
        key: 'init',
        value: function init() {
            console.log('initializing location: ' + this.getName() + '...');
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this.state.name;
        }
    }]);

    return Location;
}();

/* harmony default export */ __webpack_exports__["a"] = (Location);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_game_js__ = __webpack_require__(5);
// import state from "./state.js";


var state = __webpack_require__(0);

var game = new __WEBPACK_IMPORTED_MODULE_0__classes_game_js__["a" /* default */]();

game.init();

window.game = game;
window.character = game.character;
window.state = state;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
    function Character() {
        _classCallCheck(this, Character);

        window.console.log('creating character...');

        this.character = __webpack_require__(0).character;
    }

    _createClass(Character, [{
        key: "init",
        value: function init() {
            if (!this.character.name) {
                this.character.name = prompt("what is your name?");
            }
        }
    }, {
        key: "talkTo",
        value: function talkTo(person) {
            person.converse(this);
        }
    }, {
        key: "getName",
        value: function getName() {
            return this.character.name;
        }
    }]);

    return Character;
}();

/* harmony default export */ __webpack_exports__["a"] = (Character);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__character_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clock_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_people_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_locations_js__ = __webpack_require__(16);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        console.log('creating game...');
        this.state = __webpack_require__(0);

        this.time = this.state.time;
        this.character = new __WEBPACK_IMPORTED_MODULE_0__character_js__["a" /* default */]();
        this.people = new __WEBPACK_IMPORTED_MODULE_2__stores_people_js__["a" /* default */]();
        this.locations = new __WEBPACK_IMPORTED_MODULE_3__stores_locations_js__["a" /* default */]();
        this.clock = new __WEBPACK_IMPORTED_MODULE_1__clock_js__["a" /* default */]();
        this.ui = __webpack_require__(13);
    }

    _createClass(Game, [{
        key: "init",
        value: function init() {
            console.log('initializing.');
            this.ui.init();
            this.character.init();
            this.people.init();
            this.locations.init();
            this.clock.init();
        }
    }]);

    return Game;
}();

/* harmony default export */ __webpack_exports__["a"] = (Game);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_js__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Farm = function (_Location) {
  _inherits(Farm, _Location);

  function Farm() {
    _classCallCheck(this, Farm);

    return _possibleConstructorReturn(this, (Farm.__proto__ || Object.getPrototypeOf(Farm)).apply(this, arguments));
  }

  return Farm;
}(__WEBPACK_IMPORTED_MODULE_0__location_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Farm);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_js__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Market = function (_Location) {
  _inherits(Market, _Location);

  function Market() {
    _classCallCheck(this, Market);

    return _possibleConstructorReturn(this, (Market.__proto__ || Object.getPrototypeOf(Market)).apply(this, arguments));
  }

  return Market;
}(__WEBPACK_IMPORTED_MODULE_0__location_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Market);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person_js__ = __webpack_require__(9);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Abigail = function (_Person) {
    _inherits(Abigail, _Person);

    function Abigail() {
        _classCallCheck(this, Abigail);

        return _possibleConstructorReturn(this, (Abigail.__proto__ || Object.getPrototypeOf(Abigail)).apply(this, arguments));
    }

    _createClass(Abigail, [{
        key: 'defineMovements',
        value: function defineMovements() {
            this.bus.on('time', function (time) {
                if (time.state.hour === 12 && time.state.minute === 2) {
                    this.goTo('market');
                }
            }.bind(this));
        }
    }, {
        key: 'converse',
        value: function converse(character) {
            if (!this.state.has_met) {
                console.log('Hello! What is your name?');
                console.log(character.getName() + '? That\'s a nice name. I am ' + this.state.name + '. It\'s a pleasure to meet you!');

                this.state.has_met = true;
                this.state.relationship++;

                console.log(this);
                return;
            }

            if (this.state.relationship < 10) {
                console.log('Hello, ' + character.getName() + '.');

                this.state.relationship++;

                console.log(this);
                return;
            }

            if (this.state.relationship >= 10) {
                console.log('Hi, ' + character.getName() + '! How are you doing?');

                this.state.relationship++;

                console.log(this);
                return;
            }
        }
    }]);

    return Abigail;
}(__WEBPACK_IMPORTED_MODULE_0__person_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Abigail);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(state) {
        _classCallCheck(this, Person);

        window.console.log('creating person...');

        this.state = state;
        this.bus = __webpack_require__(1);
    }

    _createClass(Person, [{
        key: 'init',
        value: function init() {
            console.log('initializing person: ' + this.state.name + '...');
            this.defineMovements();
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this.state.name;
        }

        // TODO: use location objects

    }, {
        key: 'goTo',
        value: function goTo(location_key) {
            console.log(this.getName() + ' is going to ' + location_key);
            this.state.location = location_key;
        }
    }, {
        key: 'getLocation',
        value: function getLocation() {
            // get the location object here
        }
    }, {
        key: 'converse',
        value: function converse(character) {}
    }]);

    return Person;
}();

/* harmony default export */ __webpack_exports__["a"] = (Person);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Clock = function () {
    function Clock() {
        _classCallCheck(this, Clock);

        this.state = __webpack_require__(0).time;
        this.bus = __webpack_require__(1);
        console.log(this.state);
    }

    _createClass(Clock, [{
        key: "init",
        value: function init() {
            this.interval = setInterval(this.tick.bind(this), 10);
        }
    }, {
        key: "tick",
        value: function tick() {
            this.state.minute++;

            // increment hour
            if (this.state.minute >= 60) {
                this.state.hour++;
                this.state.minute = 0;
            }

            if (this.state.hour >= 24) {
                this.state.day++;
                this.state.hour = 0;
            }

            if (this.state.day >= 31) {
                this.state.season++;
                this.state.day = 1;
            }

            if (this.state.season >= 4) {
                this.state.year++;
                this.state.season = 0;
            }

            this.bus.emit('time', this);

            // console.log(this.getFormattedDate() + ' ' +this.getFormattedTime());
        }
    }, {
        key: "getFormattedDate",
        value: function getFormattedDate() {
            var season;

            switch (this.state.season) {
                case 0:
                    season = 'Spring';
                    break;
                case 1:
                    season = 'Summer';
                    break;
                case 2:
                    season = 'Fall';
                    break;
                case 3:
                    season = 'Winter';
                    break;
            }

            return season + ' ' + this.state.day + ' Year ' + this.state.year;
        }
    }, {
        key: "getFormattedTime",
        value: function getFormattedTime() {
            var hour = this.state.hour;

            var meridiem = 'AM';

            var minute = "" + this.state.minute + "";;
            var pad = "00";
            var minute = pad.substring(0, pad.length - minute.length) + minute;

            if (hour >= 12) {
                meridiem = 'PM';

                if (hour >= 13) {
                    hour -= 12;
                }
            }

            if (hour === 0) {
                hour = 12;
            }

            return hour + ':' + minute + ' ' + meridiem;
        }
    }]);

    return Clock;
}();

/* harmony default export */ __webpack_exports__["a"] = (Clock);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
	"time": {
		"hour": 12,
		"minute": 0,
		"year": 1,
		"season": 3,
		"day": 29
	},
	"character": {
		"name": ""
	},
	"people": {
		"abigail": {
			"name": "Abigail",
			"gender": "femail",
			"has_met": false,
			"relationship": 0,
			"location": "farm"
		}
	},
	"locations": {
		"market": {
			"name": "Market"
		},
		"farm": {
			"name": "Farm"
		}
	}
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UI = function () {
    function UI() {
        _classCallCheck(this, UI);

        this.bus = __webpack_require__(1);
    }

    _createClass(UI, [{
        key: 'init',
        value: function init() {
            this.updateTime();
        }
    }, {
        key: 'updateTime',
        value: function updateTime() {
            this.bus.on('time', function (time) {
                var el = document.getElementById('datetime');
                el.textContent = time.getFormattedDate() + ' ' + time.getFormattedTime();
            }.bind(this));
        }
    }]);

    return UI;
}();

var ui = new UI();

module.exports = ui;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_people_abigail_js__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var state = __webpack_require__(11);

var People = function () {
	function People() {
		_classCallCheck(this, People);

		this.abigail = new __WEBPACK_IMPORTED_MODULE_0__classes_people_abigail_js__["a" /* default */](state.people.abigail);
	}

	_createClass(People, [{
		key: "init",
		value: function init() {
			this.abigail.init();
		}
	}]);

	return People;
}();

/* harmony default export */ __webpack_exports__["a"] = (People);

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_locations_market_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_locations_farm_js__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var state = __webpack_require__(11);

var Locations = function () {
	function Locations() {
		_classCallCheck(this, Locations);

		this.market = new __WEBPACK_IMPORTED_MODULE_0__classes_locations_market_js__["a" /* default */](state.locations.market);
		this.farm = new __WEBPACK_IMPORTED_MODULE_1__classes_locations_farm_js__["a" /* default */](state.locations.farm);
	}

	_createClass(Locations, [{
		key: "init",
		value: function init() {
			this.market.init();
			this.farm.init();
		}
	}]);

	return Locations;
}();

/* harmony default export */ __webpack_exports__["a"] = (Locations);

/***/ })
/******/ ]);