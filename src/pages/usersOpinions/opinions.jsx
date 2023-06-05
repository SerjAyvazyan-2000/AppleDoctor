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
        <div style={{backgroundImage: `url(${opinionsFon})`}} className="opinions-fon G-image">
            <div className="opinions-logo">
                <img src={logo} alt=""/>
            </div>
            <div className="opinions-container">
                <div className="opinions-title"><p>Что говорят о нас:</p></div>
                <div className="opinions-body">
                    <div className="opinions-header">
                        <h3>AppleDoctor</h3>
                        <p>Яндекс Карты</p>
                    </div>
                    <div className="reviews-block">
                        <h3>5,0</h3>
                        <p>
                            <span>&#11088;</span>
                            <span>&#11088;</span>
                            <span>&#11088;</span>
                            <span>&#11088;</span>
                            <p>456 отзывов 562 оценки </p>
                        </p>
                    </div>

                    <div className="opinions-button">
                        <span> поставьте нам оценку</span>
                        <a href="https://yandex.ru/support/reviews/review.html">оставить отзыв</a>
                    </div>
                    <div className="users-opinions">
                        {opinionsList.map(item => (
                            <div key={item.id} className="users-item">
                                <div className="users-info">
                                    <img src={item.img} alt=""/>

                                    <div className="users-name">
                                        <h3>{item.name}</h3>
                                        <p>{item.data}</p>

                                    </div>


                                </div>
                                <div className="user-stars">
                                    <span>&#11088;</span>
                                    <span>&#11088;</span>
                                    <span>&#11088;</span>
                                    <span>&#11088;</span>

                                </div>
                                <div className="users-description">
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="more-opinions-button">
                        <iframe src="https://yandex.ru/sprav/widget/rating-badge/45881699480?type=rating&theme=dark"
                                width="150"
                                height="50" frameBorder="0">больше отзыв в яндекс картах
                        </iframe>
                    </div>
                </div>


            </div>
        </div>
    </section>
};

export default Opinions;