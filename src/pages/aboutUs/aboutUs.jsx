import React from 'react';
import "./style.scss"
import aboutImg from "../../assets/images/about.JPG"
import {useInformation} from "../../hooks/useInformation";

const AboutUs = () => {
    const {aboutUs,discount} = useInformation()
    return <section id="about">
            <div className="G-container">
                <div className="about-content">

                     <div className="justUs-block">
                         <div className="just-title">
                             <h3>ПОЧЕМУ ВЫБИРАЮТ Apple Doctor</h3>

                         </div>
                         <div className="just-items">
                             {aboutUs.map(item => (
                                 <div key={item.id} className="just-item">
                                     <div className="just-item-img ">
                                         <img className="G-image" src={item.img} alt=""/>
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
            </div>

    </section>
};

export default AboutUs;
