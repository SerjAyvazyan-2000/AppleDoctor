import React, {useState} from "react";
import "./style.scss"

const Menu = ({menuActive}) => {
    const [activeNav, setActiveNav] = useState("#")

    return <nav className= {!menuActive ?"header-menu" : "header-menu active"}>
            <ul className="header-list">
                <li>
                    <a href="#" onClick={() => setActiveNav("#")}
                       className={activeNav === "#" ? "active" : ''}>О нас</a>
                </li>
                <li>
                    <a href="#about" onClick={() => setActiveNav("#about")}
                       className={activeNav === "#about" ? "active" : ''}>Отзывы</a>
                </li>
                <li>
                    <a href="#priseDevice" onClick={() => setActiveNav("#priseDevice")}
                       className={activeNav === "#priseDevice" ? "active" : ''}>цены</a>
                </li>
                <li>
                    <a href="#contact " onClick={() => setActiveNav("#контакты")}
                       className={activeNav === "#portfolio" ? "active" : ''}>контакты </a>
                </li>
            </ul>
    </nav>
}

export default Menu