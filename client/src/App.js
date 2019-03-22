import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
	state = {
		projects: []
	};

	componentWillMount() {
		axios
			.get('http://localhost:4000/api/projects/')
			.then((res) => {
				console.log(res.data);
				this.setState({
					projects: res.data
				});
			})
			.catch();
	}

	componentDidMount() {}
	render() {
		return (
			<div className="App">
				<h1 style={{ textAlign: 'center' }}>Test Endpoints</h1>
			</div>
		);
	}
}

export default App;
