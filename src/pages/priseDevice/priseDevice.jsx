import React from 'react';
import "./style.scss"
import Categories from "../../components/categories/categories";
import {useInformation} from "../../hooks/useInformation";
const PriseDevice = () => {

    const {categories} = useInformation()
    return<section id="priseDevice">
        <div className="device-container">
            <div className="G-container">
                <div className="device-header">
                    <h3>Цены на ремонт техники Apple:</h3>
                    <p>Выберите устройство из списка</p>
                </div>
                <div className="categories-block">
                    <Categories categories={categories}/>
                </div>
            </div>
        </div>



        </section>

};

export default PriseDevice;