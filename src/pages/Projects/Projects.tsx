import React from "react";
import "./Projects.css";
import { ProjectCards } from "./components/ProjectCards";
import { projectsData } from "./projects.data";

export type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
	return (
		<main>
			<div className="projects-container">
				{projectsData.map((data) => {
					return <ProjectCards data={data} />;
				})}
			</div>
		</main>
	);
};

export default Projects;
