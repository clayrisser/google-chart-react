import React from 'react';
import ReactDOM from 'react-dom';
import GoogleChart from 'google-chart-react';

class App extends React.Component {
	constructor() {
		super();
		this.drawPieChart = function(chartID) {
			var data = new window.google.visualization.DataTable();
			data.addColumn('string', 'Topping');
			data.addColumn('number', 'Slices');
			data.addRows([
				['Mushrooms', 3],
				['Onions', 1],
				['Olives', 1],
				['Zucchini', 1],
				['Pepperoni', 2]
			]);
			var options = {
				'title':'How Much Pizza I Ate Last Night',
			 	'width':400,
			 	'height':300
			};
			var chart = new window.google.visualization.PieChart(document.getElementById(chartID));
			chart.draw(data, options);
		};
		this.drawBarChart = function(chartID) {
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Topping');
			data.addColumn('number', 'Slices');
			data.addRows([
				['Mushrooms', 3],
				['Onions', 1],
				['Olives', 1],
				['Zucchini', 1],
				['Pepperonis', 2]
			]);
			var options = {
				'title':'How Much Pizza I Ate Last Night',
			 	'width':400,
			 	'height':300
			};
			var chart = new google.visualization.BarChart(document.getElementById(chartID));
			chart.draw(data, options);
		};
	}

	render () {
		return (
			<div>
				<GoogleChart drawChart={this.drawPieChart} />
				<GoogleChart drawChart={this.drawBarChart} />
			</div>
		);
	}

}

ReactDOM.render(<App />, document.getElementById('app'));
