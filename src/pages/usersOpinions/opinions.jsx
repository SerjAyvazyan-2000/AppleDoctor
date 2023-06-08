import React from 'react';
import "./style.scss"
import {useInformation} from "../../hooks/useInformation";

const Opinions = () => {
    const {aboutUs,discount} = useInformation()

    return <section id="opinions">

        <div className="opinions-container">
            <div className={"opinions-iframe"} >
                <iframe style={{width:"100%",height:"100%"}} src="https://yandex.ru/maps-reviews-widget/1717455073?comments"></iframe>
            </div>
        </div>

    </section>
};

export default Opinions;