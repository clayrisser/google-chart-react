require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _googleChartReact = require('google-chart-react');

var _googleChartReact2 = _interopRequireDefault(_googleChartReact);

var App = (function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
		window.googleChartReactPackages = ['corechart', 'gantt'];
	}

	_createClass(App, [{
		key: 'drawPieChart',
		value: function drawPieChart(chartID) {
			var data = new window.google.visualization.DataTable();
			data.addColumn('string', 'Topping');
			data.addColumn('number', 'Slices');
			data.addRows([['Mushrooms', 3], ['Onions', 1], ['Olives', 1], ['Zucchini', 1], ['Pepperoni', 2]]);
			var options = {
				'title': 'How Much Pizza I Ate Last Night',
				'width': 400,
				'height': 300
			};
			var chart = new window.google.visualization.PieChart(document.getElementById(chartID));
			chart.draw(data, options);
		}
	}, {
		key: 'drawBarChart',
		value: function drawBarChart(chartID) {
			var data = google.visualization.arrayToDataTable([['City', '2010 Population', '2000 Population'], ['New York City, NY', 8175000, 8008000], ['Los Angeles, CA', 3792000, 3694000], ['Chicago, IL', 2695000, 2896000], ['Houston, TX', 2099000, 1953000], ['Philadelphia, PA', 1526000, 1517000]]);
			var options = {
				title: 'Population of Largest U.S. Cities',
				chartArea: { width: '50%' },
				colors: ['#b0120a', '#ffab91'],
				hAxis: {
					title: 'Total Population',
					minValue: 0
				},
				vAxis: {
					title: 'City'
				}
			};
			var chart = new google.visualization.BarChart(document.getElementById(chartID));
			chart.draw(data, options);
		}
	}, {
		key: 'drawGanttChart',
		value: function drawGanttChart(chartID) {
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Task ID');
			data.addColumn('string', 'Task Name');
			data.addColumn('date', 'Start Date');
			data.addColumn('date', 'End Date');
			data.addColumn('number', 'Duration');
			data.addColumn('number', 'Percent Complete');
			data.addColumn('string', 'Dependencies');
			data.addRows([['Research', 'Find sources', new Date(2015, 0, 1), new Date(2015, 0, 5), null, 100, null], ['Write', 'Write paper', null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'], ['Cite', 'Create bibliography', null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'], ['Complete', 'Hand in paper', null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'], ['Outline', 'Outline paper', null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, 'Research']]);
			var options = {
				height: 275
			};
			var chart = new google.visualization.Gantt(document.getElementById(chartID));
			chart.draw(data, options);
			function daysToMilliseconds(days) {
				return days * 24 * 60 * 60 * 1000;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					'div',
					{ id: 'pieChart' },
					_react2['default'].createElement(
						'h2',
						null,
						'Pie Chart'
					),
					_react2['default'].createElement(_googleChartReact2['default'], { drawChart: this.drawPieChart })
				),
				_react2['default'].createElement(
					'div',
					{ id: 'barChart' },
					_react2['default'].createElement(
						'h2',
						null,
						'Bar Chart'
					),
					_react2['default'].createElement(_googleChartReact2['default'], { drawChart: this.drawBarChart })
				),
				_react2['default'].createElement(
					'div',
					{ id: 'ganttChart' },
					_react2['default'].createElement(
						'h2',
						null,
						'Gantt Chart'
					),
					_react2['default'].createElement(_googleChartReact2['default'], { drawChart: this.drawGanttChart })
				)
			);
		}
	}]);

	return App;
})(_react2['default'].Component);

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

},{"google-chart-react":undefined,"react":undefined,"react-dom":undefined}]},{},[1]);
