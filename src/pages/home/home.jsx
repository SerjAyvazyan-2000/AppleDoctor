import React, {useState} from 'react';
import "./style.scss"
import homeImage from "../../assets/images/home.JPG"
import logo from "../../assets/images/logo.png"
import MyModal from "../../UI/myModal/myModal";
import Menu from "../../components/Menu/menu";
import Header from "../header/header";

const Home = () => {
    const [openModal, setOpenModal] = useState(false)
    const [menuActive,setMenuActive] = useState(false)

    const handleClick = () => {
        setOpenModal(!openModal)
    }
    return <>
        <section id="home">
            <Header menuActive={menuActive} setMenuActive={setMenuActive}/>

            <div style={{backgroundImage: `url(${homeImage})`}} className="home-image G-image">
                <div className="home-menu-bg">

                    <div className="home-menu">
                        <Menu menuActive={menuActive} setMenuActive={setMenuActive}/>
                    </div>
                    <div className="header-contact">
                        <a href="tel:+7 (999)999-09-92">+7 (999)999-09-92</a>
                    </div>
                </div>
                <div className="G-container">

                    <div className="home-title-block">
                            <div className="logo-text">
                                <h3>Сеть сервисных центров</h3>
                            </div>
                            <div className="home-logo-text">
                                 <div className="homo-logo-title">
                                     <p>Диагностика бесплатно- даже при отказе от ремонта</p>

                                 </div>
                                <div className="home-logo">
                                        <img src={logo} alt=""/>
                                        <h1>
                                            <a href="#">Apple <span>Doctor</span></a>
                                        </h1>
                                </div>
                            </div>
                    </div>


                </div>

            </div>
        </section>
        <MyModal openModal={openModal} onClose={handleClick}/>
    </>
};

export default Home;