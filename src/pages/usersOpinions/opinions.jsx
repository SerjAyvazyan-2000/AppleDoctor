import React from 'react';
import "./style.scss"
import logo from "../../assets/images/logo.png"
import {useInformation} from "../../hooks/useInformation";

const Opinions = () => {
    const {aboutUs,discount} = useInformation()

    return <section id="opinions">


        <div className="opinions-info">
            <div className="opinions-container">
                <div style={{backgroundImage:`url(${logo})`}} className="opinions-logo G-image"></div>
            </div>

            <div className={"opinions-iframe"} >
                <div className="opinions-title">
                    <h3>Что говорят о нас:</h3>

                </div>

                <iframe style={{width:"100%",height:"100%"}} src="https://yandex.ru/maps-reviews-widget/1717455073?comments"></iframe>
            </div>
        </div>

    </section>
};

export default Opinions;