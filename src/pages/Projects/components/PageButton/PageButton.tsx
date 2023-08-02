import React from "react";
import "./PageButton.css";

export type PageButtonProps = {
	url: {
		tipo: string;
		url: string;
	};
};

const PageButton: React.FC<PageButtonProps> = ({ url }) => {
	return (
		<a href={url.url} className="pagebutton" target="_blank" rel="noreferrer">
			{url.tipo}
		</a>
	);
};

export default PageButton;
