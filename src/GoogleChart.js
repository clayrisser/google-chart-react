import React from 'react';
import _ from 'underscore';

export default class GoogleChart extends React.Component {
	constructor() {
		super();
	}

	componentWillMount() {
		this.setVariables();
	}

	setVariables() {
		if (!this.props.chartID || this.props.chartID === '') { // prevents overlap of charts
			var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			this.chartID = _.sample(possible, 18).join('');
		} else {
			this.chartID = this.props.chartID;
		}
		if (this.props.drawChart) {
			this.drawChart = this.props.drawChart;
		} else {
			this.drawChart = function() {
				document.getElementById(this.chartID).innerHTML = 'Chart not created.';
			}
		}
		if (window.googleChartReactPackages) {
			this.packages = window.googleChartReactPackages;
		} else {
			this.packages = this.props.packages;
		}
	}

	componentDidMount() {
		document.getElementById(this.chartID).innerHTML = 'Loading . . .';
		if (!GoogleChart.libraryImported) {
			GoogleChart.libraryImported = true;
      this.importChartLibrary();
		}
		if (GoogleChart.libraryLoaded) { // if loaded, then draw chart
			this.drawChart(this.chartID);
		} else { // if not loaded, wait for load and draw chart
			window.addEventListener('googleChartReactLoaded-ai3r93', function() {
				document.getElementById(this.chartID).innerHTML = null;
				this.drawChart(this.chartID);
			}.bind(this));
		}
	}

	importChartLibrary() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function() {
			google.charts.load('current', {packages: this.packages});
			google.charts.setOnLoadCallback(function() {
				GoogleChart.libraryLoaded = true;
				window.dispatchEvent(new Event('googleChartReactLoaded-ai3r93'));
			}.bind(this));
    }.bind(this);
    script.src = 'https://www.gstatic.com/charts/loader.js';
    head.appendChild(script);
  }

	render() {
		return(
			<div>
				<div id={this.chartID}></div>
			</div>
		);
	}
}

GoogleChart.libraryImported = false;
GoogleChart.libraryLoaded = false;

GoogleChart.defaultProps = {
	packages: ['corechart']
};
