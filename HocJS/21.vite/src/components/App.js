import "../style/global.css";
import { button } from "./button";
import { Footer } from "./footer";
import { Header } from "./headers";
import { Products } from "./products";
import image from "../image/1045-2.jpg";
import config from "../config.json";
const { app_name, page_limit } = config;

export const App = () => {
    return `${Header()}
    <h1 class="text-[red] text-3xl font-bold italic underline">Học lập trình không dễ</h1>
    ${button()}
    ${Products()}
    <p>AppName: ${app_name}</p>
    <p>PageLimit: ${page_limit}</p>
    <p>Server API: ${import.meta.env.VITE_SERVER_API}</p>
    <p>Google Client ID: ${import.meta.env.VITE_GOOGLE_CLIENT_ID}</p>
    <p>Google Client Secret: ${import.meta.env.VITE_GOOGLE_CLIENT_SECRET}</p>
    <div><img src="${image}" alt="" width="400"/></div>
    <div>
        <img src="/image/vite.svg" />
    </div>

    ${Footer()}`;
};
