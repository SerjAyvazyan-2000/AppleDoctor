import React, {useState} from "react";
import "./style.scss"

const Menu = ({menuActive}) => {
    const [activeNav, setActiveNav] = useState("#")

    return <div className={menuActive ? "menu-burger active" : "menu"}>
        <div className={menuActive ? "menu-content-burger " : "menu-content"}>
            <ul>
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
                    <a href="#контакты " onClick={() => setActiveNav("#контакты")}
                       className={activeNav === "#portfolio" ? "active" : ''}>контакты </a>
                </li>
            </ul>
        </div>
    </div>
}

export default Menu