import React from 'react';
import "./style.scss"
import homeImage from "../../assets/images/home.JPG"
import logo from "../../assets/images/logo.png"

const Home = () => {
    return <section id="home">
        <div style={{backgroundImage: `url(${homeImage})`}} className="home-image G-image">
            <div className="home-description">
                <div className="G-container">
                    <div className="home-description-info">
                        <h3>Сеть сервисных центров</h3>
                    </div>

                    <div className="home-logo">
                        <div className="home-logo-text">
                            <h3>Диагностика бесплатно- даже при отказе от ремонта</h3>
                        </div>
                        <div className="home-logo-img">
                            <img src={logo} alt=""/>
                            <h3>Apple <span>Doctor</span></h3>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    </section>
};

export default Home;