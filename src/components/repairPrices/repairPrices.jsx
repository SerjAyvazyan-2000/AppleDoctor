import React from 'react';
import "./style.scss"
import {useInformation} from "../../hooks/useInformation";

const RepairPrices = ({productInfo,onClose}) => {
    const {aboutWork} = useInformation()
    return <section id="productInfo" className="repair-prices-box">
        <div className="repair-prices-header"><h3>Цены на ремонт {productInfo.name}:</h3></div>
        <div className="repair-prices-table">
            <div className="typeWork-block">
                <div className="typeWork-title">
                    <div className="typeWork-block-title"><p>Вид работ</p></div>
                    <div className="typeWork-block-title"><p>Стоимость</p></div>
                </div>

                <div className="typeWork-block-info">

                    <div className="about-work-item">
                        <p>Диагностика:</p>
                        <p>{productInfo.diagnostics}</p>
                    </div>
                    <div className="about-work-item">
                        <p>Восстановление данных (телефон перезагружается на "яблоке")</p>
                        <p>{productInfo.bodyReplacement}</p>

                    </div>
                    <div className="about-work-item">
                        <p>Перенос данных</p>
                        <p>{productInfo.bodyReplacement}</p>
                    </div>
                    <div className="about-work-item">
                        <p>Ремонт Face ID</p>
                        <p>{productInfo.dataTransfer}</p>
                    </div>

                    <div className="about-work-item">
                        <p>Полировка экрана от царапин</p>
                        <p>{productInfo.displayModule}</p>
                    </div>


                    <div className="about-work-item">
                        <p>Замена сенсорного стекла (стекло экрана)</p>
                        <p>{productInfo.faceIDRepair}</p>
                    </div>
                    <div className="about-work-item">
                        <p>Замена сенсорного стекла + тачскрин (если сильно разбит или не работает сенсор)</p>
                        <p>{productInfo.polishingScreen}</p>
                    </div>
                    <div className="about-work-item">
                        <p>Замена дисплея (экрана), Original переклеенный</p>
                        <p>{productInfo.replacementDisplay}</p>
                    </div>

                    <div className="about-work-item">
                        <p>Замена дисплея (экрана), Original переклеенный</p>
                        <p>{productInfo.replacementDisplayOriginal}</p>
                    </div>
                    <div className="about-work-item">
                        <p>Замена дисплея (экрана), Original снятый</p>
                        <p>{productInfo.replacingBattery}</p>
                    </div>
                    <div className="about-work-item">
                        <p>Устранение ошибки дисплея (проверка подлинности экрана)</p>
                        <p>{productInfo.resolvingError}</p>
                    </div>
                    <div className="about-work-item">
                        <p>Замена дисплейного модуля (TFT High Copy) копия высокого качества</p>
                        <p>{productInfo.speakerMesh}</p>
                    </div>
                    <div className="about-work-item">
                        <p>Замена аккумуляторной батареи</p>
                        <p>{productInfo.speakerMesh}</p>
                    </div>
                    <div className="about-work-item">
                        <p>Устранение ошибки АКБ (проверка подлинности аккумуляторной батареи)</p>
                        <p>{productInfo.touchScreenIf}</p>
                    </div>
                    <div className="about-work-item">
                        <p>Замена линзы основной камеры (стекло камеры)</p>
                        <p>{productInfo.touchScreen}</p>
                    </div>
                    <div className="about-work-item">
                        <p>Замена корпуса (только снятый оригинал)</p>
                    </div>
                    <div className="about-work-item">
                        <p>Замена сетки динамика</p>
                    </div>
                    <div className="about-work-item">
                        <p>Замена основной (задней) камеры</p>
                    </div>
                    <p>Замена основной (задней) камеры</p>
                </div>

            </div>


        </div>

    </section>
};

export default RepairPrices;