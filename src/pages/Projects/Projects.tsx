import React from "react";
import "./Projects.css";
import projectsData from "./projects.data";
import ProjectCard from "./component/ProjectCard";

export type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
	return (
		<main>
			<div className="projects-container">
				{projectsData.map(({ title, img, description, url }, index) => {
					return (
						<ProjectCard
							url={url}
							title={title}
							img={img}
							description={description}
							key={`projects-${index}-${title}`}
						/>
					);
				})}
			</div>
		</main>
	);
};

export default Projects;
