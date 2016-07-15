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

},{"google-chart-react":undefined,"react":undefined,"react-dom":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9qYW1yaXp6aS9Qcm9qZWN0cy9nb29nbGUtY2hhcnQtcmVhY3QvZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztxQkNBa0IsT0FBTzs7Ozt3QkFDSixXQUFXOzs7O2dDQUNSLG9CQUFvQjs7OztJQUV0QyxHQUFHO1dBQUgsR0FBRzs7QUFDRyxVQUROLEdBQUcsR0FDTTt3QkFEVCxHQUFHOztBQUVQLDZCQUZJLEdBQUcsNkNBRUM7QUFDUixRQUFNLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7RUFDekQ7O2NBSkksR0FBRzs7U0FNSSxzQkFBQyxPQUFPLEVBQUU7QUFDckIsT0FBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN2RCxPQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNwQyxPQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNuQyxPQUFJLENBQUMsT0FBTyxDQUFDLENBQ1osQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQ2hCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUNiLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUNiLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUNmLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUNoQixDQUFDLENBQUM7QUFDSCxPQUFJLE9BQU8sR0FBRztBQUNiLFdBQU8sRUFBQyxpQ0FBaUM7QUFDekMsV0FBTyxFQUFDLEdBQUc7QUFDWCxZQUFRLEVBQUMsR0FBRztJQUNaLENBQUM7QUFDRixPQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxD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TSxTQUFTOztBQXVHakMsc0JBQVMsTUFBTSxDQUFDLGlDQUFDLEdBQUcsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgR29vZ2xlQ2hhcnQgZnJvbSAnZ29vZ2xlLWNoYXJ0LXJlYWN0JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR3aW5kb3cuZ29vZ2xlQ2hhcnRSZWFjdFBhY2thZ2VzID0gWydjb3JlY2hhcnQnLCAnZ2FudHQnXTtcblx0fVxuXG5cdGRyYXdQaWVDaGFydChjaGFydElEKSB7XG5cdFx0dmFyIGRhdGEgPSBuZXcgd2luZG93Lmdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpO1xuXHRcdGRhdGEuYWRkQ29sdW1uKCdzdHJpbmcnLCAnVG9wcGluZycpO1xuXHRcdGRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCAnU2xpY2VzJyk7XG5cdFx0ZGF0YS5hZGRSb3dzKFtcblx0XHRcdFsnTXVzaHJvb21zJywgM10sXG5cdFx0XHRbJ09uaW9ucycsIDFdLFxuXHRcdFx0WydPbGl2ZXMnLCAxXSxcblx0XHRcdFsnWnVjY2hpbmknLCAxXSxcblx0XHRcdFsnUGVwcGVyb25pJywgMl1cblx0XHRdKTtcblx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdCd0aXRsZSc6J0hvdyBNdWNoIFBpenphIEkgQXRlIExhc3QgTmlnaHQnLFxuXHRcdFx0J3dpZHRoJzo0MDAsXG5cdFx0XHQnaGVpZ2h0JzozMDBcblx0XHR9O1xuXHRcdHZhciBjaGFydCA9IG5ldyB3aW5kb3cuZ29vZ2xlLnZpc3VhbGl6YXRpb24uUGllQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2hhcnRJRCkpO1xuXHRcdGNoYXJ0LmRyYXcoZGF0YSwgb3B0aW9ucyk7XG5cdH1cblxuXHRkcmF3QmFyQ2hhcnQoY2hhcnRJRCkge1xuXHRcdHZhciBkYXRhID0gZ29vZ2xlLnZpc3VhbGl6YXRpb24uYXJyYXlUb0RhdGFUYWJsZShbXG5cdFx0XHRbJ0NpdHknLCAnMjAxMCBQb3B1bGF0aW9uJywgJzIwMDAgUG9wdWxhdGlvbiddLFxuXHRcdFx0WydOZXcgWW9yayBDaXR5LCBOWScsIDgxNzUwMDAsIDgwMDgwMDBdLFxuXHRcdFx0WydMb3MgQW5nZWxlcywgQ0EnLCAzNzkyMDAwLCAzNjk0MDAwXSxcblx0XHRcdFsnQ2hpY2FnbywgSUwnLCAyNjk1MDAwLCAyODk2MDAwXSxcblx0XHRcdFsnSG91c3RvbiwgVFgnLCAyMDk5MDAwLCAxOTUzMDAwXSxcblx0XHRcdFsnUGhpbGFkZWxwaGlhLCBQQScsIDE1MjYwMDAsIDE1MTcwMDBdXG5cdFx0XSk7XG5cdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHR0aXRsZTogJ1BvcHVsYXRpb24gb2YgTGFyZ2VzdCBVLlMuIENpdGllcycsXG5cdFx0XHRjaGFydEFyZWE6IHt3aWR0aDogJzUwJSd9LFxuXHRcdFx0Y29sb3JzOiBbJyNiMDEyMGEnLCAnI2ZmYWI5MSddLFxuXHRcdFx0aEF4aXM6IHtcblx0XHRcdFx0dGl0bGU6ICdUb3RhbCBQb3B1bGF0aW9uJyxcblx0XHRcdFx0bWluVmFsdWU6IDBcblx0XHRcdH0sXG5cdFx0XHR2QXhpczoge1xuXHRcdFx0XHR0aXRsZTogJ0NpdHknXG5cdFx0XHR9XG5cdFx0fTtcblx0XHR2YXIgY2hhcnQgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQmFyQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2hhcnRJRCkpO1xuXHRcdGNoYXJ0LmRyYXcoZGF0YSwgb3B0aW9ucyk7XG5cdH1cblxuXHRkcmF3R2FudHRDaGFydChjaGFydElEKSB7XG5cdFx0dmFyIGRhdGEgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCk7XG5cdFx0ZGF0YS5hZGRDb2x1bW4oJ3N0cmluZycsICdUYXNrIElEJyk7XG5cdFx0ZGF0YS5hZGRDb2x1bW4oJ3N0cmluZycsICdUYXNrIE5hbWUnKTtcblx0XHRkYXRhLmFkZENvbHVtbignZGF0ZScsICdTdGFydCBEYXRlJyk7XG5cdFx0ZGF0YS5hZGRDb2x1bW4oJ2RhdGUnLCAnRW5kIERhdGUnKTtcblx0XHRkYXRhLmFkZENvbHVtbignbnVtYmVyJywgJ0R1cmF0aW9uJyk7XG5cdFx0ZGF0YS5hZGRDb2x1bW4oJ251bWJlcicsICdQZXJjZW50IENvbXBsZXRlJyk7XG5cdFx0ZGF0YS5hZGRDb2x1bW4oJ3N0cmluZycsICdEZXBlbmRlbmNpZXMnKTtcblx0XHRkYXRhLmFkZFJvd3MoW1xuXHRcdFx0WydSZXNlYXJjaCcsICdGaW5kIHNvdXJjZXMnLFxuXHRcdFx0IG5ldyBEYXRlKDIwMTUsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCA1KSwgbnVsbCwgIDEwMCwgIG51bGxdLFxuXHRcdFx0WydXcml0ZScsICdXcml0ZSBwYXBlcicsXG5cdFx0XHQgbnVsbCwgbmV3IERhdGUoMjAxNSwgMCwgOSksIGRheXNUb01pbGxpc2Vjb25kcygzKSwgMjUsICdSZXNlYXJjaCxPdXRsaW5lJ10sXG5cdFx0XHRbJ0NpdGUnLCAnQ3JlYXRlIGJpYmxpb2dyYXBoeScsXG5cdFx0XHQgbnVsbCwgbmV3IERhdGUoMjAxNSwgMCwgNyksIGRheXNUb01pbGxpc2Vjb25kcygxKSwgMjAsICdSZXNlYXJjaCddLFxuXHRcdFx0WydDb21wbGV0ZScsICdIYW5kIGluIHBhcGVyJyxcblx0XHRcdCBudWxsLCBuZXcgRGF0ZSgyMDE1LCAwLCAxMCksIGRheXNUb01pbGxpc2Vjb25kcygxKSwgMCwgJ0NpdGUsV3JpdGUnXSxcblx0XHRcdFsnT3V0bGluZScsICdPdXRsaW5lIHBhcGVyJyxcblx0XHRcdCBudWxsLCBuZXcgRGF0ZSgyMDE1LCAwLCA2KSwgZGF5c1RvTWlsbGlzZWNvbmRzKDEpLCAxMDAsICdSZXNlYXJjaCddXG5cdFx0XSk7XG5cdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHRoZWlnaHQ6IDI3NVxuXHRcdH07XG5cdFx0dmFyIGNoYXJ0ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkdhbnR0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNoYXJ0SUQpKTtcblx0XHRjaGFydC5kcmF3KGRhdGEsIG9wdGlvbnMpO1xuXHRcdGZ1bmN0aW9uIGRheXNUb01pbGxpc2Vjb25kcyhkYXlzKSB7XG5cdFx0XHRyZXR1cm4gZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGRpdiBpZD1cInBpZUNoYXJ0XCI+XG5cdFx0XHRcdFx0PGgyPlBpZSBDaGFydDwvaDI+XG5cdFx0XHRcdFx0PEdvb2dsZUNoYXJ0IGRyYXdDaGFydD17dGhpcy5kcmF3UGllQ2hhcnR9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGlkPVwiYmFyQ2hhcnRcIj5cblx0XHRcdFx0XHQ8aDI+QmFyIENoYXJ0PC9oMj5cblx0XHRcdFx0XHQ8R29vZ2xlQ2hhcnQgZHJhd0NoYXJ0PXt0aGlzLmRyYXdCYXJDaGFydH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgaWQ9XCJnYW50dENoYXJ0XCI+XG5cdFx0XHRcdFx0PGgyPkdhbnR0IENoYXJ0PC9oMj5cblx0XHRcdFx0XHQ8R29vZ2xlQ2hhcnQgZHJhd0NoYXJ0PXt0aGlzLmRyYXdHYW50dENoYXJ0fSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==
