import React, {useRef} from 'react';
import "./style.scss"
import contactImage from "../../assets/images/footer.JPG";
import ContactForm from "../../components/contactForm/contactForm";

const Contact = () => {



    return <section id="contact">
        <div style={{backgroundImage: `url(${contactImage})`}} className="contact-image G-image">
                <div className="G-container">
                    <div className="contact-container">
                        <div className="contact-information">
                            <div className="contact-title">

                                <h3>СЕРВИСНЫЙ ЦЕНТР В КОТОРЫЙ ВОЗВРАЩАЮТСЯ</h3>
                            </div>
                             <ContactForm/>
                        </div>
                        <div className="contact-tools">
                            <div className="contact-body">
                                <p>    Срочный ремонт техники Apple</p>
                            </div>
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