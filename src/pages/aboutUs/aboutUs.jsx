import React from 'react';
import "./style.scss"
import aboutImg from "../../assets/images/aboutFon.png"
import {useInformation} from "../../hooks/useInformation";

const AboutUs = () => {
    const {aboutUs,discount} = useInformation()
    return <section id="about" style={{backgroundImage:`url(${aboutImg})`}}>
            <div className="G-container">
                <div className="about-content">
                     <div className="justUs-block">
                         <div className="just-title">
                             <h3>ПОЧЕМУ ВЫБИРАЮТ Apple Doctor</h3>
                         </div>
                         <div className="just-items">
                             {aboutUs.map(item => (
                                 <div key={item.id} className="just-item">
                                     <div className="holder">
                                         <div className="star">
                                             <div></div>
                                             <div></div>
                                             <div></div>
                                             <div></div>
                                         </div>
                                     </div>
                                     <div className="just-item-description">
                                         <h3>{item.title}</h3>
                                         <p>{item.text}</p>
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </div>
                </div>
                    <div className="discount-block">
                        {discount.map(item => (
                            <div className="discount-items">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                </div>


            </div>

    </section>
};

export default AboutUs;
