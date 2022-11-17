import React from "react";
import s from "./Header.module.css";


const Header = () => {
    return (
    <header className = {s.header}>
        <img src='https://www.ascom.net.tr/files/logo-logosu.png' alt="img"/>
    </header>
    )
}

export default Header;