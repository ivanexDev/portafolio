import React from "react";
import "./Projects.css";
import { ProjectCards } from "./components/ProjectCards";
import { projectsData } from "./projects.data";

export type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <main>
      <div className="projects-container">
        {projectsData.map((data, index) => {
          return <ProjectCards data={data} key={`${data.title}-${index}`} />;
        })}
      </div>
    </main>
  );
};

export default Projects;
