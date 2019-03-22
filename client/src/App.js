import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import { Route } from 'react-router-dom';

class App extends Component {
	state = {
		projects: []
	};

	componentWillMount() {
		axios
			.get('http://localhost:4000/api/projects/')
			.then((res) => {
				//console.log(res.data);
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

				<Route exact path="/" render={(props) => <ProjectList {...props} projects={this.state.projects} />} />

				<Route path="/project/:id" component={ProjectDetail} />
			</div>
		);
	}
}

export default App;
