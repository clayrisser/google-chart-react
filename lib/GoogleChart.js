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

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var GoogleChart = (function (_React$Component) {
	_inherits(GoogleChart, _React$Component);

	function GoogleChart() {
		_classCallCheck(this, GoogleChart);

		_get(Object.getPrototypeOf(GoogleChart.prototype), 'constructor', this).call(this);
	}

	_createClass(GoogleChart, [
  {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (GoogleChart.libraryLoaded) {
        // if loaded, then draw chart
        this.drawChart(this.chartID);
      }
    }
  },
  {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.setVariables();
		}
	}, {
		key: 'setVariables',
		value: function setVariables() {
			if (!this.props.chartID || this.props.chartID === '') {
				// prevents overlap of charts
				var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
				this.chartID = _underscore2['default'].sample(possible, 18).join('');
			} else {
				this.chartID = this.props.chartID;
			}
			if (this.props.drawChart) {
				this.drawChart = this.props.drawChart;
			} else {
				this.drawChart = function () {
					document.getElementById(this.chartID).innerHTML = 'Chart not created.';
				};
			}
			if (window.googleChartReactPackages) {
				this.packages = window.googleChartReactPackages;
			} else {
				this.packages = this.props.packages;
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			document.getElementById(this.chartID).innerHTML = 'Loading . . .';
			if (!GoogleChart.libraryImported) {
				GoogleChart.libraryImported = true;
				this.importChartLibrary();
			}
			if (GoogleChart.libraryLoaded) {
				// if loaded, then draw chart
				this.drawChart(this.chartID);
			} else {
				// if not loaded, wait for load and draw chart
				window.addEventListener('googleChartReactLoaded-ai3r93', (function () {
					document.getElementById(this.chartID).innerHTML = null;
					this.drawChart(this.chartID);
				}).bind(this));
			}
		}
	}, {
		key: 'importChartLibrary',
		value: function importChartLibrary() {
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.onload = (function () {
				google.charts.load('current', { packages: this.packages });
				google.charts.setOnLoadCallback((function () {
					GoogleChart.libraryLoaded = true;
					window.dispatchEvent(new Event('googleChartReactLoaded-ai3r93'));
				}).bind(this));
			}).bind(this);
			script.src = 'https://www.gstatic.com/charts/loader.js';
			head.appendChild(script);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement('div', { id: this.chartID })
			);
		}
	}]);

	return GoogleChart;
})(_react2['default'].Component);

exports['default'] = GoogleChart;

GoogleChart.libraryImported = false;
GoogleChart.libraryLoaded = false;

GoogleChart.defaultProps = {
	packages: ['corechart']
};
module.exports = exports['default'];
