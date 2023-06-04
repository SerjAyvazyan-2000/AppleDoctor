import React, {useRef, useState} from 'react';
import emailjs from "emailjs-com";
import "./style.scss"

const ContactForm = () => {
    const form = useRef()

    const [message, setMessage] = useState({
        name: '',
        number: ''
    })
    const [errorText, setErrorText] = useState({
        name: '',
        number: ''
    })
    const validation = () => {
        let validate = true
        let errorString = {
            name: '',
            number: ''
        }
        if (!message.name.trim().length) {
            errorString.name = 'Fill in the required Name'
            validate = false
        }
        if (!message.name.trim().length) {
            errorString.number = 'Fill in the required Number'
            validate = false
        }
        setErrorText(errorString)
        return validate
    }
    const handleChange = (e) => {
        setMessage({...message, [e.target.name]: e.target.value})
        setErrorText({...errorText, [e.target.name]: ''})
    }
    const sendEmail = () => {
        if(validation()){
            emailjs.sendForm('service_eq6d2q1', 'template_2lrsve8', form.current, 'Epa5vfJnY8n-LxAU_')
        }
    };
    return <>
        <div className="contact-title">

            <h2>Сервисный центр на вднх</h2>
            <p> диагностика бесплатно даже при отказе от товара</p>
        </div>
        <form ref={form} className="contact-form">
            <div className="input-block">
                <label htmlFor="">
                    <input value={message.name} onChange={handleChange} name="name" type="text" placeholder="ваше имя" required/>
                    <p>{errorText.name}</p>
                </label>
            </div>
            <div className="input-block">
                <label htmlFor="">
                    <input value={message.number} onChange={handleChange} name="number" type="number" placeholder="+7 (999)999-09-92 " required/>
                    <p>{errorText.number}</p>
                </label>
            </div>
            <div className="textarea">
                <textarea name="message" rows="7" placeholder="Укажите проблему (необязательно)" required></textarea>
            </div>
        </form>
        <div className="send-message">
            <button onClick={sendEmail}>Отправить</button>
        </div>
    </>
};

export default ContactForm;