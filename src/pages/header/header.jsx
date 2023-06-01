import React, {useState} from 'react';
import "./style.scss"
import logo from "../../assets/images/logo.png"
import Menu from "../../components/Menu/menu";

const Header = () => {
    const [menuActive,setMenuActive] = useState(false)
    return <header className="header-section G-align-center">
        <div className="G-container">
            <div className="header-block">

                <div className="header-logo">
                    <img src={logo} alt=""/>
                    <h1>
                        <a href="#">Apple <span>Doctor</span></a>
                    </h1>
                </div>


                <div className="header-menu">
                    <Menu menuActive={menuActive} setMenuActive={setMenuActive}/>

                   <div className="burger-btn" onClick={()=>setMenuActive(!menuActive)}>
                       <span ></span>
                   </div>
                </div>

            </div>

        </div>

    </header>
};

export default Header;