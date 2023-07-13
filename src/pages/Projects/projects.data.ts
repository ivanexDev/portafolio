import img1 from "../../assets/img/laptop.jpg";

export const projectsData: ProjectDataInterface[] = [
	{
		title: "Encriptador",
		img: img1,
		description:
			"Aplicacion que busca encriptar de manera basica un texto cambiando vocales",
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
		img: img1,
		description:
			"Aplicacion que muestra la temperatura de distintas ciudades utilizando OpenWeather API",
		urls: [
			{
				tipo: "LivePage",
				url: "https://github.com/ivanexDev/react-weather",
			},
			{
				tipo: "Github",
				url: "https://reactweather-green.vercel.app/",
			},
		],
	},
	{
		title: "Chat",
		img: img1,
		description:
			"Chat en tiempo real utilizando React y base de datos Supabase, para manejar los mensajes",
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
		title: "Chat",
		img: img1,
		description:
			"Chat en tiempo real utilizando React y base de datos Supabase, para manejar los mensajes",
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
