import React from 'react';
import "./style.scss"
import aboutImg from "../../assets/images/IMG_3507.JPG"
import {useInformation} from "../../hooks/useInformation";

const AboutUs = () => {
    const {aboutUs, discount} = useInformation()
    return <section id="about">
        <div className="G-container">
            <div className="about-content">
                <div className="about-info">
                    <div className="about-info-title">
                        <h3>Apple <span>Doctor</span></h3>
                        <p>Магазин и Сервисный центр</p>
                    </div>
                    <div className="about-info-body">
                        <h3> Сервисный центр, в который возвращаются.</h3>
                        <p>Apple Doctor предлагает широкий спектр услуг, гибкие и доступные цены, оригинальные запчасти
                            от проверенных поставщиков и бесплатную диагностику вашего устройства.
                            Работаем в сфере ремонта мобильной техники более 10 лет. </p>
                    </div>
                </div>
                <div className="about-img-block">
                    <div className="about-img G-image">
                        <img src={aboutImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>

    </section>
};

export default AboutUs;
