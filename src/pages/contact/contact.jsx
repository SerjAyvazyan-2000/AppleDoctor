import  {useRef} from 'react';
import "./style.scss"
import contactImage from "../../assets/images/contact.jpg";
import emailjs from "emailjs-com"

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ew5ppuk', 'template_wr3n8gx', form.current, 'pp6TwyxOmOcVm8rmi')
        e.target.reset()
    };

    return <section id="contact">
        <div style={{backgroundImage: `url(${contactImage})`}} className="contact-image G-image">
                <div className="G-container">
                    <div className="contact-container">
                        <div className="contact-information">
                            <div className="contact-title">

                                <h2>Сервисный центр на вднх</h2>
                                <p> диагностика бесплатно даже при отказе от товара</p>
                            </div>
                                <form ref={form} onSubmit={sendEmail} className="contact-form">
                                    <div className="input-block">
                                        <label htmlFor="">
                                            <input name="name" type="text" placeholder="ваше имя" required/>
                                        </label>
                                    </div>
                                    <div className="input-block">

                                        <label htmlFor="">
                                            <input name="number" type="number" placeholder="+7 (999)999-09-92 " required/>
                                        </label>
                                    </div>
                                    <div className="textarea">
                                        <textarea name="message" rows="7" placeholder="Укажите проблему (необязательно)" required></textarea>
                                    </div>
                                    <div className="send-message">
                                        <button>Отправить</button>

                                    </div>
                                </form>

                        </div>
                        <div className="contact-tools">
                            <div className="contact-body">
                                <p>    срочный ремонт техники Apple</p>
                                <p>    Оставьте заявку и получите скидку</p>
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