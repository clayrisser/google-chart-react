import React from 'react';
import ReactDOM from 'react-dom';
import GoogleChart from 'google-chart-react';

class App extends React.Component {
	constructor() {
		super();
		window.googleChartReactPackages = ['corechart', 'gantt'];
	}

	drawPieChart(chartID) {
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
	}

	drawBarChart(chartID) {
		var data = google.visualization.arrayToDataTable([
			['City', '2010 Population', '2000 Population'],
			['New York City, NY', 8175000, 8008000],
			['Los Angeles, CA', 3792000, 3694000],
			['Chicago, IL', 2695000, 2896000],
			['Houston, TX', 2099000, 1953000],
			['Philadelphia, PA', 1526000, 1517000]
		]);
		var options = {
			title: 'Population of Largest U.S. Cities',
			chartArea: {width: '50%'},
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

	drawGanttChart(chartID) {
		var data = new google.visualization.DataTable();
		data.addColumn('string', 'Task ID');
		data.addColumn('string', 'Task Name');
		data.addColumn('date', 'Start Date');
		data.addColumn('date', 'End Date');
		data.addColumn('number', 'Duration');
		data.addColumn('number', 'Percent Complete');
		data.addColumn('string', 'Dependencies');
		data.addRows([
			['Research', 'Find sources',
			 new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
			['Write', 'Write paper',
			 null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
			['Cite', 'Create bibliography',
			 null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'],
			['Complete', 'Hand in paper',
			 null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
			['Outline', 'Outline paper',
			 null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, 'Research']
		]);
		var options = {
			height: 275
		};
		var chart = new google.visualization.Gantt(document.getElementById(chartID));
		chart.draw(data, options);
		function daysToMilliseconds(days) {
			return days * 24 * 60 * 60 * 1000;
		}
	}

	render () {
		return (
			<div>
				<div id="pieChart">
					<h2>Pie Chart</h2>
					<GoogleChart drawChart={this.drawPieChart} />
				</div>
				<div id="barChart">
					<h2>Bar Chart</h2>
					<GoogleChart drawChart={this.drawBarChart} />
				</div>
				<div id="ganttChart">
					<h2>Gantt Chart</h2>
					<GoogleChart drawChart={this.drawGanttChart} />
				</div>
			</div>
		);
	}

}

ReactDOM.render(<App />, document.getElementById('app'));
