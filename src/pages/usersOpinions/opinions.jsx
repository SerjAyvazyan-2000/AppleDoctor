import React from 'react';
import opinionsFon from "../../assets/images/fonAbout.JPG"
import "./style.scss"
import homeImage from "../../assets/images/home.JPG";
import user from "../../assets/images/download.png"
import logo from "../../assets/images/logo.png"

const Opinions = () => {

    const opinionsList = [
        {
            name: "Егор М",
            img: user,
            stars: 5,
            text: 'Минусы не заменил 14 про сделали быстро.мастера супер.тепер толъко сюда',
            data: '20 январь',
            id: 1,

        }
    ]


    return <section id="opinions">

        <div className="opinions-container">
            <div style={{width:'760px',height:'500px'}}>
                <iframe style={{width:"100%",height:"100%"}} src="https://yandex.ru/maps-reviews-widget/1717455073?comments"></iframe>
            </div>
        </div>

    </section>
};

export default Opinions;