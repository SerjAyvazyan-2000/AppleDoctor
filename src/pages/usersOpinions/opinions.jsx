import React from 'react';
import opinionsFon from "../../assets/images/fonAbout.JPG"
import "./style.scss"
import homeImage from "../../assets/images/home.JPG";
import logo from "../../assets/images/logo.png"

const Opinions = () => {

    const opinionsList = [
        {
            name:"Вероника Миранова",
            img:logo,
            stars:5,
            text:' Lorem ipsum dolor sit amet, consectetur adipisicing\n' +
                '    elit. Adipisci aliquid, aut, dolore et eum facilis\n' +
                '    ipsam libero minima nemo odio omnis possimus praesentium\n' +
                '    quaerat ratione rerum saepe sunt. Cumque, quisquam?',
            data:'20 январь',
            id:1,

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
                        {opinionsList.map(item =>(
                             <div key={item.id} className="users-item">
                                 <div className="users-info">
                                     <img src={item.img} alt=""/>
                                     <p>{item.name}
                                         <p>{item.data}</p>
                                     </p>
                                 </div>
                                 <div className="users-description">
                                     <p>{item.text}</p>
                                 </div>
                             </div>
                        ))}
                    </div>

                    <div className="more-opinions-button">
                        <a href="https://yandex.ru/support/reviews/review.html"> больше отзыв в яндекс картах</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
};

export default Opinions;