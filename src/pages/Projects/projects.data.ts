import documento from "../../assets/img/notas.webp";
import chat from "../../assets/img/chat.png";
import tiempo from "../../assets/img/tiempo.webp";
import encriptador from "../../assets/img/encriptador.webp";
import cmd from "../../assets/img/cmd.webp";
import kristenLanding from "../../assets/img/kristen-yong.webp";
import curency from "../../assets/img/currency-convertion.webp";
import pokedex from "../../assets/img/pokedex.webp";

export const projectsData: ProjectDataInterface[] = [
  {
    title: "Organizador de Archivos",
    img: cmd,
    description:
      "Aplicacion de linea de comandos para organizar archivos y carpetas.",
    urls: [
      {
        tipo: "Github",
        url: "https://github.com/ivanexDev/desktop-organizer",
      },
    ],
  },
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
  {
    title: "Landing Page",
    img: kristenLanding,
    description:
      "Landing page en construcción con el trabajo de la escritora Kristen Yong.",
    urls: [
      {
        tipo: "LivePage",
        url: "https://kristen-yong.vercel.app/",
      },
      {
        tipo: "Github",
        url: "https://github.com/ivanexDev/kristen-yong",
      },
    ],
  },
  {
    title: "Currency Convertion",
    img: curency,
    description: "Conversion de divisas usando api externa.",
    urls: [
      {
        tipo: "LivePage",
        url: "https://currency-convertion-one.vercel.app/",
      },
      {
        tipo: "Github",
        url: "https://github.com/ivanexDev/currency-convertion",
      },
    ],
  },
  {
    title: "Pokedex",
    img: pokedex,
    description: "Pokedex desarrollada con Api externa de PokeApi.",
    urls: [
      {
        tipo: "LivePage",
        url: "https://pokemondex-ivanexdev.vercel.app/",
      },
      {
        tipo: "Github",
        url: "https://github.com/ivanexDev/pokemondex",
      },
    ],
  },
];

export interface ProjectDataInterface {
  title: string;
  img: string;
  description: string;
  urls: {
    tipo: string;
    url: string;
  }[];
}
