import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class ProjectDetail extends React.Component {
	state = {
		projectActions: []
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		axios
			.get(`http://localhost:4000/api/projects/${id}/actions`)
			.then((res) => {
				console.log(res.data);
				this.setState({
					projectActions: res.data
				});
			})
			.catch();
	}

	render() {
		return (
			<div>
				<h2>projectActions</h2>
				{this.state.projectActions.map((actions) => {
					return (
						<div key={actions.id}>
							<p>description: {actions.description}</p>
							<p>notes: {actions.notes}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default withRouter(ProjectDetail);
