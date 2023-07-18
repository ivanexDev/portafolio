import React from "react";
import "./ProjectCards.css";
import { PageButton } from "../PageButton";
import { ProjectDataInterface } from "../../projects.data";

export type ProjectCardsProps = {
	data: ProjectDataInterface;
};

const ProjectCards: React.FC<ProjectCardsProps> = ({ data }) => {
	return (
		<div className="projectcards-container">
			<img src={data.img} alt="" />
			<h2 className="h2Style">{data.title}</h2>
			<p className="projectcards-container-p">{data.description}</p>
			<div className="line"></div>
			<div className="projectcards-container-link">
				{data.urls.map((url) => {
					return <PageButton url={url} />;
				})}
			</div>
		</div>
	);
};

export default ProjectCards;
