import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
import { Github } from "../../components/icons/Github";
import { Linkedin } from "../../components/icons/Linkedin";

export type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
	const [transitionValue, setTransitionValue] = useState(false);
	const [transitionValue2, setTransitionValue2] = useState(false);
	const [transitionValue3, setTransitionValue3] = useState(false);
	const [completeColorState, setCompleteColorState] = useState(false);

	useEffect(() => {
		handleTransition();
	}, [completeColorState]);

	const handleTransition = () => {
		setTimeout(() => {
			setTransitionValue3(false);
			setTransitionValue((prevTransitionValue) => !prevTransitionValue);
		}, 2000);
		setTimeout(() => {
			setTransitionValue((prevTransitionValue) => !prevTransitionValue);
			setTransitionValue2(!transitionValue2);
		}, 4000);

		setTimeout(() => {
			setTransitionValue2((prevTransitionValue2) => !prevTransitionValue2);
			setTransitionValue3((prevTransitionValue3) => !prevTransitionValue3);
			setCompleteColorState(!completeColorState);
		}, 6000);
	};

	const transition = `h1-nombre ${transitionValue ? "h-transition" : ""}`;
	const transition2 = `h1-nombre2 ${transitionValue2 ? "h-transition" : ""}`;
	const transition3 = `h1-nombre3 ${transitionValue3 ? "h-transition" : ""}`;
	const dev = `<Dev/>`;
	return (
		<main>
			<h1 className={transition}>Iván Pereira</h1>
			<h1 className={transition2}>Front-End</h1>
			<h1 className={transition3}>{dev}</h1>
			<p>Passionate about technological innovation. </p>
			<div className="social-networks">
				<a
					className="social-networks__link"
					href="https://github.com/ivanexdev">
					<Github />
				</a>
				<a href="https://www.linkedin.com/in/ipereirameza/">
					<Linkedin />
				</a>
			</div>
		</main>
	);
};

export default Home;
