import React from 'react';

const ProjectList = (props) => {
	//console.log(props);
	return (
		<div>
			<p>Project list:</p>
			{props.projects.map((project) => {
				return (
					<div>
						<h2>{project.name}</h2>
						<p>{project.description}</p>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectList;
