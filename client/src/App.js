import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		projects: []
  };
  
  componentDidMount(){
    
  }
	render() {
		return (
			<div className="App">
				<h1 style={{ textAlign: 'center' }}>Test Endpoints</h1>
			</div>
		);
	}
}

export default App;
