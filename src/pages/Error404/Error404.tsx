import React from "react";
import "./Error404.css";

export type Error404Props = {};

const Error404: React.FC<Error404Props> = () => {
	return (
		<main>
			<h2>Error 404.</h2>
			<p>Not Found</p>
		</main>
	);
};

export default Error404;
