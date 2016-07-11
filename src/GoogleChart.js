import React from 'react';
import Script from 'react-load-script';

export default class GoogleChart extends React.Component {
	constructor() {
		super();
		this.script = 'https://www.gstatic.com/charts/loader.js';
	}

	handleScriptCreate() {
		this.setState({scriptLoaded: false});
	}

	handleScriptError() {
		this.setState({scriptError: true});
		console.error('Failed to load ' + this.script);
	}

	handleScriptLoad() {
		this.setState({scriptLoaded: true});
		console.log(google.charts);
		google.charts.load('current', {packages: ['corechart']});
		google.charts.setOnLoadCallback(this.props.drawChart);
		console.log('yeah');
	}

	render() {
		return (
			<div>
				<Script
					url={this.script}
					onCreate={this.handleScriptCreate.bind(this)}
		      onError={this.handleScriptError.bind(this)}
		      onLoad={this.handleScriptLoad.bind(this)}
				/>
				<div id="chart_div"></div>
			</div>
		);
	}
}

GoogleChart.defaultProps = {drawChart: function() {
	document.getElementById('chart_div').innerHTML = 'Chart not created.';
}};
