import moment from "moment";
import "../style/header.scss";

export const Header = () => {
    return `<header> 
        <h2>Hello World</h2> 
        ${moment().format("DD/MM/YYYY HH:mm:ss")}  
    </header>`;
};
