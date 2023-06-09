import React, {useState} from 'react';
import "./style.scss"
import homeImage from "../../assets/images/fon.jpg"
import logo from "../../assets/images/logo.png"
import MyModal from "../../UI/myModal/myModal";

const Home = () => {
    const [openModal, setOpenModal] = useState(false)
    const handleClick = () => {
        setOpenModal(!openModal)
    }
    return <>
        <section id="home">
            <div style={{backgroundImage: `url(${homeImage})`}} className="home-image G-image">
                <div className="home-description">
                    <div className="G-container">
                        <div className="home-description-info">
                            <h3>Сеть сервисных центров</h3>
                            <p onClick={handleClick}>Срочный ремонт?</p>
                        </div>
                        <div className="home-logo-text-border"></div>
                        <div className="home-logo-block">
                            <div className="logo-bg"></div>
                            <div className="logo-text">
                                <h3>Диагностика <span>бесплатно</span> даже при отказе от <span>ремонта</span></h3>

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