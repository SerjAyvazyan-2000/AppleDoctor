import React, {useState} from "react";
import "./style.scss"

const Menu = ({menuActive}) => {
    const [activeNav, setActiveNav] = useState("#")
    const navList = [
        {name:' О нас',href:"#",icon:"icon-home",id:1},
        {name:' Отзывы',href:"#about",icon:"icon-bubble",id:2},
        {name:' цены',href:"#priseDevice",icon:"icon-coin-dollar",id:3},
        {name:' контакты',href:"#contact",icon:"icon-phone",id:4},

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
                {/*<li>*/}
                {/*    <a href="#" onClick={() => setActiveNav("#")}*/}
                {/*       className={activeNav === "#" ? "active" : ''}>*/}
                {/*        <span  className="icon-home"></span>*/}
                {/*        О нас</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#about" onClick={() => setActiveNav("#about")}*/}
                {/*       className={activeNav === "#about" ? "active" : ''}>*/}
                {/*        <span  className="icon-bubble"></span>*/}
                {/*        Отзывы</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#priseDevice" onClick={() => setActiveNav("#priseDevice")}*/}
                {/*       className={activeNav === "#priseDevice" ? "active" : ''}>*/}
                {/*        <span  className="icon-coin-dollar"></span>*/}

                {/*        цены</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#contact " onClick={() => setActiveNav("#контакты")}*/}
                {/*       className={activeNav === "#portfolio" ? "active" : ''}>*/}
                {/*        <span  className="icon-phone"></span>*/}

                {/*        контакты </a>*/}
                {/*</li>*/}
            </ul>
    </nav>
}

export default Menu