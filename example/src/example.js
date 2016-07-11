var React = require('react');
var ReactDOM = require('react-dom');
var GoogleChart = require('google-chart-react');

var App = React.createClass({
	render () {
		return (
			<div>
				<GoogleChart />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
