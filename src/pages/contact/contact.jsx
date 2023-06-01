import React from 'react';
import "./style.scss"
import contactImage from "../../assets/images/contact.jpg";

const Contact = () => {

    const handleClick = (e) => {
         e.preventDefault()
    }
    return <section id="contact">
        <div style={{backgroundImage: `url(${contactImage})`}} className="contact-image G-image">
                <div className="G-container">

                    <div className="contact-container">
                        <div className="contact-information">
                            <div className="contact-title">
                                <h2>Cервисный центр na вднх</h2>
                                <p>диагностика бесплатно даже отказа от товара</p>
                            </div>
                            <div className="contact-body">
                                <p>срочный ремонт техники на Apple</p>
                                <p>оставь заявку получи скидку</p>
                            </div>
                            <form className="contact-form">
                                <div className="input-block">
                                    <label htmlFor="">
                                        <input type="number" placeholder="+7 (999)999-09-92"/>
                                    </label>
                                </div>
                                <div className="input-block">
                                    <label htmlFor="">
                                        <input type="text" placeholder="ваше имя"/>
                                    </label>
                                </div>
                                <div className="send-message">
                                    <button onClick={(e)=>handleClick(e)}>Отправить</button>
                                </div>
                            </form>
                        </div>
                        <div className="contact-tools">
                            <div className="contact-number">
                                <a href="tel:+7 (999)999-09-92">+7 (999)999-09-92</a>

                            </div>
                             <div className="contact-icons">
                                     <ul className="icons-list">
                                         <li className="icon whatsapp">

                                             <span className="tooltip">Whatsapp</span>
                                             <a href="https://api.whatsapp.com/send?phone+7 999 999-09-92" className="icon-whatsapp"></a>
                                         </li>
                                         <li className="icon vk">
                                             <span className="tooltip">В Контакте</span>
                                             <a href="https://vk.com/appledoctorservice" className="icon-vk"></a>
                                         </li>
                                         <li className="icon telegram">
                                             <span className="tooltip">Telegram</span>
                                             <a href="https://t.me/appledoctorservice" className="icon-telegram"></a>

                                         </li>
                                     </ul>
                             </div>
                        </div>

                    </div>

                </div>
        </div>
    </section>
};

export default Contact;