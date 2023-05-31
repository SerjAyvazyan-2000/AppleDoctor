import React from 'react';
import "./style.scss"
import aboutImg from "../../assets/images/about.JPG"

const AboutUs = () => {
    return <section id="about">
        <div className="about-container">
            <div className="G-container">
                <div className="about-block">
                    <div className="about-description-block">
                        <div className="about-description-title ">
                            <h3>Apple <span>Doctor</span></h3>
                            <p>магазин и сервисный центр</p>
                        </div>
                        <div className="about-description ">
                            <h3>Сервисный центр, в который возвращаются.</h3>
                            <p>Apple Doctor предлагает широкий спектр услуг,
                                гибкие и доступные цены, оригинальные запчасти от проверенных поставщиков и бесплатную
                                диагностику вашего устройства. Работаем в сфере ремонта мобильной техники более 10 лет. </p>
                        </div>
                    </div>
                    <div  className="about-img">
                        <img src={aboutImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>

    </section>
};

export default AboutUs;
