import React from 'react';
import opinionsFon from "../../assets/images/fonAbout.JPG"
import "./style.scss"
import homeImage from "../../assets/images/home.JPG";
import user from "../../assets/images/download.png"
import logo from "../../assets/images/logo.png"
import {useInformation} from "../../hooks/useInformation";

const Opinions = () => {
    const {aboutUs,discount} = useInformation()

    return <section id="opinions">

        <div className="opinions-container">
            <div style={{width:'760px',height:'500px'}}>
                <iframe style={{width:"100%",height:"100%"}} src="https://yandex.ru/maps-reviews-widget/1717455073?comments"></iframe>
            </div>
        </div>

    </section>
};

export default Opinions;