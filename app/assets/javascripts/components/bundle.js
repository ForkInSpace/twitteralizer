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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/frontend/main.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/frontend/components/Navbar.jsx":
/*!***************************************************!*\
  !*** ./app/assets/frontend/components/Navbar.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "nav",
          null,
          React.createElement(
            "div",
            { className: "nav-wrapper" },
            React.createElement(
              "a",
              { href: "#", className: "brand-logo" },
              "Twitteralize"
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(React.Component);

exports.default = Navbar;

/***/ }),

/***/ "./app/assets/frontend/components/Tweet.jsx":
/*!**************************************************!*\
  !*** ./app/assets/frontend/components/Tweet.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tweet = function (_React$Component) {
  _inherits(Tweet, _React$Component);

  function Tweet() {
    _classCallCheck(this, Tweet);

    return _possibleConstructorReturn(this, (Tweet.__proto__ || Object.getPrototypeOf(Tweet)).apply(this, arguments));
  }

  _createClass(Tweet, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        { className: "collection-item avatar teal lighten-5" },
        React.createElement("img", { src: "images/yuna.jpg", alt: "", className: "circle" }),
        React.createElement(
          "i",
          { className: "material-icons circle" },
          "person_pin"
        ),
        React.createElement(
          "span",
          { className: "title" },
          this.props.name
        ),
        React.createElement(
          "p",
          null,
          this.props.body
        ),
        React.createElement(
          "a",
          { href: "#!", className: "secondary-content" },
          React.createElement(
            "i",
            { className: "material-icons" },
            "grade"
          )
        )
      );
    }
  }]);

  return Tweet;
}(React.Component);

exports.default = Tweet;

/***/ }),

/***/ "./app/assets/frontend/components/TweetBox.jsx":
/*!*****************************************************!*\
  !*** ./app/assets/frontend/components/TweetBox.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TweetBox = function (_React$Component) {
  _inherits(TweetBox, _React$Component);

  function TweetBox() {
    _classCallCheck(this, TweetBox);

    return _possibleConstructorReturn(this, (TweetBox.__proto__ || Object.getPrototypeOf(TweetBox)).apply(this, arguments));
  }

  _createClass(TweetBox, [{
    key: "sendTweet",
    value: function sendTweet(event) {
      event.preventDefault();
      this.props.sendTweet(this.tweetTextArea.value);
      this.tweetTextArea.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col s12 m8 offset-m2 l8 offset-l2" },
          React.createElement(
            "form",
            { onSubmit: this.sendTweet.bind(this) },
            React.createElement(
              "div",
              { className: "input-field" },
              React.createElement("textarea", { ref: function ref(input) {
                  return _this2.tweetTextArea = input;
                }, id: "textarea1", className: "materialize-textarea", "data-length": "120" }),
              React.createElement(
                "label",
                { htmlFor: "textarea1" },
                "What's happening?"
              ),
              React.createElement(
                "button",
                { type: "submit", className: "waves-effect waves-light btn right" },
                "Tweet"
              )
            )
          )
        )
      );
    }
  }]);

  return TweetBox;
}(React.Component);

exports.default = TweetBox;

/***/ }),

/***/ "./app/assets/frontend/components/Tweetslist.jsx":
/*!*******************************************************!*\
  !*** ./app/assets/frontend/components/Tweetslist.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tweet = __webpack_require__(/*! ./Tweet */ "./app/assets/frontend/components/Tweet.jsx");

var _Tweet2 = _interopRequireDefault(_Tweet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TweetsList = function (_React$Component) {
  _inherits(TweetsList, _React$Component);

  function TweetsList() {
    _classCallCheck(this, TweetsList);

    return _possibleConstructorReturn(this, (TweetsList.__proto__ || Object.getPrototypeOf(TweetsList)).apply(this, arguments));
  }

  _createClass(TweetsList, [{
    key: "render",
    value: function render() {
      var tweets = this.props.tweets.map(function (tweet) {
        return React.createElement(_Tweet2.default, _extends({ key: tweet.id }, tweet));
      });
      return React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col s12 m8 offset-m2 l8 offset-l2" },
          React.createElement(
            "ul",
            { className: "collection" },
            tweets
          )
        )
      );
    }
  }]);

  return TweetsList;
}(React.Component);

exports.default = TweetsList;

/***/ }),

/***/ "./app/assets/frontend/main.jsx":
/*!**************************************!*\
  !*** ./app/assets/frontend/main.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Navbar = __webpack_require__(/*! ./components/Navbar */ "./app/assets/frontend/components/Navbar.jsx");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _TweetBox = __webpack_require__(/*! ./components/TweetBox */ "./app/assets/frontend/components/TweetBox.jsx");

var _TweetBox2 = _interopRequireDefault(_TweetBox);

var _Tweetslist = __webpack_require__(/*! ./components/Tweetslist */ "./app/assets/frontend/components/Tweetslist.jsx");

var _Tweetslist2 = _interopRequireDefault(_Tweetslist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.state = { tweetsList: [] };
    return _this;
  }

  _createClass(Main, [{
    key: 'addTweet',
    value: function addTweet(tweetToAdd) {
      var _this2 = this;

      $.post("/tweets", { body: tweetToAdd }).success(function (savedTweet) {
        var newTweetsList = _this2.state.tweetsList;
        newTweetsList.unshift(savedTweet);
        _this2.setState({ tweetsList: newTweetsList });
      }).error(function (error) {
        return console.log(error);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      $.ajax("/tweets").success(function (data) {
        return _this3.setState({ tweetsList: data });
      }).error(function (error) {
        return console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container-flex' },
        React.createElement(_Navbar2.default, null),
        React.createElement(_TweetBox2.default, { sendTweet: this.addTweet.bind(this) }),
        React.createElement(_Tweetslist2.default, { tweets: this.state.tweetsList })
      );
    }
  }]);

  return Main;
}(React.Component);

var documentReady = function documentReady() {
  var reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(React.createElement(Main, null), reactNode);
  }
};

$(documentReady);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map