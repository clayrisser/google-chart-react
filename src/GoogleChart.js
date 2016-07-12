import React from 'react';
import Script from 'react-load-script';
import _ from 'underscore';

export default class GoogleChart extends React.Component {

	constructor() {
		super();
		if (!GoogleChart.loaded) {
			GoogleChart.loaded = true;
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.onload = function() {
				window.google = google;
				google.charts.load('current', {packages: this.props.packages});
				google.charts.setOnLoadCallback(function() {
					window.dispatchEvent(new Event('googleChartReactLoaded-ai3r93'));
				}.bind(this));
			}.bind(this);
			script.src = 'https://www.gstatic.com/charts/loader.js';
			head.appendChild(script);
		}
	}

	componentWillMount() {
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
	}

	componentDidMount() {
		this.props.packages.push('corechart');
		window.addEventListener('googleChartReactLoaded-ai3r93', function() {
			this.drawChart(this.chartID);
		}.bind(this));
	}

	render() {
		return(
			<div>
				<div id={this.chartID}></div>
			</div>
		);
	}
}

GoogleChart.loaded = false;

GoogleChart.defaultProps = {
	packages: []
};
