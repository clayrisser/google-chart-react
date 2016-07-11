require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if ("production" !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Script = function (_React$Component) {
  _inherits(Script, _React$Component);

  // A dictionary mapping script URL to a boolean value indicating if the script
  // has failed to load.


  // A dictionary mapping script URLs to a dictionary mapping
  // component key to component for all components that are waiting
  // for the script to load.

  function Script(props) {
    _classCallCheck(this, Script);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Script).call(this, props));

    _this.scriptLoaderId = 'id' + _this.constructor.idCount++; // eslint-disable-line space-unary-ops
    return _this;
  }

  // A counter used to generate a unique id for each component that uses
  // ScriptLoaderMixin.


  // A dictionary mapping script URL to a boolean value indicating if the script
  // has already been loaded.


  _createClass(Script, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var url = this.props.url;


      if (this.constructor.loadedScripts[url]) {
        this.runCallback('onLoad');
        return;
      }

      if (this.constructor.erroredScripts[url]) {
        this.runCallback('onError');
        return;
      }

      // If the script is loading, add the component to the script's observers
      // and return. Otherwise, initialize the script's observers with the component
      // and start loading the script.
      if (this.constructor.scriptObservers[url]) {
        this.constructor.scriptObservers[url][this.scriptLoaderId] = this.runCallback.bind(this);
        return;
      }

      this.constructor.scriptObservers[url] = _defineProperty({}, this.scriptLoaderId, this.runCallback.bind(this));

      this.createScript();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var url = this.props.url;

      var observers = this.constructor.scriptObservers[url];

      // If the component is waiting for the script to load, remove the
      // component from the script's observers before unmounting the component.
      if (observers) delete observers[this.scriptLoaderId];
    }
  }, {
    key: 'createScript',
    value: function createScript() {
      var _this2 = this;

      var url = this.props.url;

      var script = document.createElement('script');

      this.runCallback('onCreate', false);

      script.src = url;
      script.async = 1;

      var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(shouldRemoveObserver) {
        var observers = _this2.constructor.scriptObservers[url];
        Object.keys(observers).forEach(function (key) {
          if (shouldRemoveObserver(observers[key])) delete _this2.constructor.scriptObservers[url][_this2.scriptLoaderId];
        });
      };
      script.onload = function () {
        _this2.constructor.loadedScripts[url] = true;
        callObserverFuncAndRemoveObserver(function (observer) {
          observer('onLoad');
          return true;
        });
      };

      script.onerror = function () {
        _this2.constructor.erroredScripts[url] = true;
        callObserverFuncAndRemoveObserver(function (observer) {
          observer('onError');
          return true;
        });
      };

      document.body.appendChild(script);
    }
  }, {
    key: 'runCallback',
    value: function runCallback(type) {
      var required = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var callback = this.props[type];

      (0, _invariant2.default)(!required || typeof callback === 'function', 'Callback ' + type + ' must be function, got "' + (typeof callback === 'undefined' ? 'undefined' : _typeof(callback)) + '" instead');

      return callback && callback();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Script;
}(_react2.default.Component);

Script.propTypes = {
  onCreate: _react.PropTypes.func,
  onError: _react.PropTypes.func.isRequired,
  onLoad: _react.PropTypes.func.isRequired,
  url: _react.PropTypes.string.isRequired
};
Script.scriptObservers = {};
Script.loadedScripts = {};
Script.erroredScripts = {};
Script.idCount = 0;
exports.default = Script;
module.exports = exports['default'];
},{"invariant":1,"react":undefined}],"google-chart-react":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLoadScript = require('react-load-script');

var _reactLoadScript2 = _interopRequireDefault(_reactLoadScript);

var GoogleChart = (function (_React$Component) {
	_inherits(GoogleChart, _React$Component);

	function GoogleChart() {
		_classCallCheck(this, GoogleChart);

		_get(Object.getPrototypeOf(GoogleChart.prototype), 'constructor', this).call(this);
		this.script = 'https://www.gstatic.com/charts/loader.js';
	}

	_createClass(GoogleChart, [{
		key: 'handleScriptCreate',
		value: function handleScriptCreate() {
			this.setState({ scriptLoaded: false });
		}
	}, {
		key: 'handleScriptError',
		value: function handleScriptError() {
			this.setState({ scriptError: true });
			console.error('Failed to load ' + this.script);
		}
	}, {
		key: 'handleScriptLoad',
		value: function handleScriptLoad() {
			this.setState({ scriptLoaded: true });
			this.props.packages.push('corechart');
			google.charts.load('current', { packages: this.props.packages });
			google.charts.setOnLoadCallback(this.props.drawChart);
			console.log('yeah');
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(_reactLoadScript2['default'], {
					url: this.script,
					onCreate: this.handleScriptCreate.bind(this),
					onError: this.handleScriptError.bind(this),
					onLoad: this.handleScriptLoad.bind(this)
				}),
				_react2['default'].createElement('div', { id: 'chart_div' })
			);
		}
	}]);

	return GoogleChart;
})(_react2['default'].Component);

exports['default'] = GoogleChart;

GoogleChart.defaultProps = {
	packages: [],
	drawChart: function drawChart() {
		document.getElementById('chart_div').innerHTML = 'Chart not created.';
	}
};
module.exports = exports['default'];

},{"react":undefined,"react-load-script":2}]},{},[]);
