import React from 'react';
import "./style.scss"
import {useInformation} from "../../hooks/useInformation";

const RepairPrices = ({jobsList, onClose,productName}) => {
    const {aboutWork} = useInformation()
    return <section id="productInfo" className="repair-prices-box">
            <div className="repair-prices-header"><h3>Цены на ремонт {productName}:</h3></div>
            <div className="repair-prices-table">
                <div className="typeWork-block">
                    <div className="typeWork-title">
                        <div className="typeWork-block-title"><p>Вид работ</p></div>
                        <div className="typeWork-block-title"><p>Стоимость</p></div>
                    </div>

                    <div className="typeWork-block-info">
                        {jobsList.length ?
                            <>
                                {jobsList.map(item => (
                                    <div className="about-work-item">
                                        <p>{item.name}:</p>
                                        <p>{item.price}</p>
                                    </div>
                                ))}
                            </>
                            : null}

                    </div>

                </div>
            </div>


    </section>
};

export default RepairPrices;