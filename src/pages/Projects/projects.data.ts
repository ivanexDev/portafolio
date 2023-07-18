import documento from "../../assets/img/documento.png";
import chat from "../../assets/img/chat.png";
import tiempo from "../../assets/img/tiempo.png";
import encriptador from "../../assets/img/encriptador.png";

export const projectsData: ProjectDataInterface[] = [
	{
		title: "Encriptador",
		img: encriptador,
		description:
			"Aplicacion que busca encriptar de manera basica un texto cambiando vocales.",
		urls: [
			{
				tipo: "LivePage",
				url: "https://ivanexdev.github.io/Encriptador/",
			},
			{
				tipo: "Github",
				url: "https://github.com/ivanexDev/Encriptador",
			},
		],
	},
	{
		title: "App del tiempo",
		img: tiempo,
		description:
			"Aplicacion que muestra la temperatura de distintas ciudades utilizando OpenWeather API.",
		urls: [
			{
				tipo: "LivePage",
				url: "https://reactweather-green.vercel.app/",
			},
			{
				tipo: "Github",
				url: " https://github.com/ivanexDev/react-weather",
			},
		],
	},
	{
		title: "Chat",
		img: chat,
		description:
			"Chat en tiempo real utilizando React y base de datos Supabase, para manejar los mensajes.",
		urls: [
			{
				tipo: "LivePage",
				url: "https://react-chat-red.vercel.app/",
			},
			{
				tipo: "Github",
				url: "https://github.com/ivanexDev/ReactChat",
			},
		],
	},
	{
		title: "Notas Curso",
		img: documento,
		description:
			"Notas del curso, promedio persona, promedio del curso y alumno que obtuvo mejor promedio.",
		urls: [
			{
				tipo: "LivePage",
				url: "https://ivanexdev.github.io/promedio-curso/",
			},
			{
				tipo: "Github",
				url: "https://github.com/ivanexDev/promedio-curso",
			},
		],
	},
];

export interface ProjectDataInterface {
	title: string;
	img: string;
	description: string;
	urls: [
		{
			tipo: string;
			url: string;
		},
		{
			tipo: string;
			url: string;
		}
	];
}
