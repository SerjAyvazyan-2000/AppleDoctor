import React, {useState} from "react";
import "./style.scss"

const Menu = ({menuActive}) => {
    const [activeNav, setActiveNav] = useState("#")
    const navList = [
        {name:' О нас',href:"#",icon:"icon-home",id:1},
        {name:' Отзывы',href:"#about",icon:"icon-bubble",id:2},
        {name:' Цены',href:"#priseDevice",icon:"icon-coin-dollar",id:3},
        {name:' Контакты',href:"#contact",icon:"icon-phone",id:4},

    ]

    return <nav className= {!menuActive ?"header-menu" : "header-menu active"}>
            <ul className="header-list">
                {navList.map(item => (
                    <li key={item.id}>
                        <a className={activeNav === item.href ? "active" : ''} onClick={()=>setActiveNav(item.href)} href={item.href}>
                            <span className={item.icon}></span>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
    </nav>
}

export default Menu