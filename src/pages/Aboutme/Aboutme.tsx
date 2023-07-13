import React from "react";
import "./Aboutme.css";
import imgprofile from "../../assets/img/perfil.png";
import CssIcon from "../../components/icons/Css";
import HtmlIcon from "../../components/icons/Html";
import JsIcon from "../../components/icons/JsIcon";
import TsIcon from "../../components/icons/TsIcon";
import ReactIcon from "../../components/icons/ReactIcon";
import GitIcon from "../../components/icons/GitIcon";
import DownloadIcon from "../../components/icons/DownloadIcon";
import pdf from "../../../public/cv.pdf";

export type AboutmeProps = {};

const Aboutme: React.FC<AboutmeProps> = () => {
	return (
		<main>
			<div className="aboutme-container">
				<h2 className="h2Style">¡Bienvenido a mi portafolio digital!</h2>
				<div className="aboutme-dec-img">
					<div className="aboutme">
						<p>
							Soy Iván Pereira, un programador autodidacta con una pasión por la
							tecnología y el aprendizaje constante. Mi trayectoria comenzó en
							el mundo de la música, donde mi pasión por la guitarra eléctrica
							despertó mi curiosidad por la tecnología. Esto me llevó a estudiar
							ingeniería en electrónica y embarcarme en un viaje de
							autodidactismo en el campo de la programación.
						</p>
						<p>
							A lo largo de mi carrera, he adquirido habilidades en diversas
							tecnologias, como JavaScript, HTML y CSS, y he participado en
							cursos como Jovenes Programadores, OpenBootcamp y Oracle One
							Education. Estos cursos han fortalecido mi base de conocimientos.
						</p>
						<p>
							Estoy en busca de nuevas oportunidades laborales donde pueda
							aplicar mis habilidades y conocimientos. Me considero un
							apasionado del aprendizaje y estoy constantemente explorando
							nuevas tecnologías y tendencias en el desarrollo web. Mi objetivo
							es seguir creciendo como profesional y contribuir al éxito de los
							proyectos en los que participo.
						</p>
						<p>
							Me encanta la intersección entre la creatividad y la tecnología.
							Los ordenadores son una de las cosas que más me apasionan, ya que
							me permiten dar vida a mis ideas y resolver problemas de manera
							innovadora. Estoy emocionado por las posibilidades que el mundo de
							la programación ofrece y estoy dispuesto a enfrentar nuevos
							desafíos.
						</p>
					</div>
					<img className="imgprofile" src={imgprofile} alt="" />
				</div>
			</div>
			<h2 className="h2Style">Tecnologías</h2>
			<div className="tech">
				<HtmlIcon />
				<CssIcon />
				<JsIcon />
				<TsIcon />
				<ReactIcon />
				<GitIcon />
			</div>
			<h2 className="h2Style">Descargar CV</h2>
			<a className="download-icon-container" href={pdf}>
				<DownloadIcon />
			</a>
		</main>
	);
};

export default Aboutme;
