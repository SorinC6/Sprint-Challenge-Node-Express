import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProjectList = (props) => {
	//console.log(props);
	return (
		<div>
			<p>Project list:</p>
			<Container>
				{props.projects.map((project) => {
					return (
						<ProjectWrapper key={project.id} to={`/project/${project.id}`}>
							<h2>{project.name}</h2>
							<p>Description: {project.description}</p>
						</ProjectWrapper>
					);
				})}
			</Container>
		</div>
	);
};

export default ProjectList;

const ProjectWrapper = styled(Link)`
	border: 1px solid black;
	width: 400px;
	padding: 20px;
	margin: 10px;
	text-align: center;
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
