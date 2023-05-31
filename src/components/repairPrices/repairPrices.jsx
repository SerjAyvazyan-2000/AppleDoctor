import React from 'react';
import "./style.scss"

const RepairPrices = ({productInfo}) => {
    console.log(productInfo)
    return <div className="repair-prices-box">
        <div className="repair-prices-header"><h3>Цены на ремонт {productInfo.name}:</h3></div>
        <div className="repair-prices-table">

            <div className="typeWork-block">
                <div className="typeWork-block-title"><p>Вид работ</p></div>
                <div className="typeWork-block-info">
                    <p>Диагностика:</p>
                    <p>Восстановление данных (телефон перезагружается на "яблоке")</p>
                    <p>Перенос данных</p>
                    <p>Ремонт Face ID</p>
                    <p>Полировка экрана от царапин</p>
                    <p>Замена сенсорного стекла (стекло экрана)</p>
                    <p>Замена сенсорного стекла + тачскрин (если сильно разбит или не работает сенсор)</p>
                    <p>Замена дисплея (экрана), Original переклеенный</p>
                    <p>Замена дисплея (экрана), Original переклеенный</p>
                    <p>Замена дисплея (экрана), Original снятый</p>
                    <p>Устранение ошибки дисплея (проверка подлинности экрана)</p>
                    <p>Замена дисплейного модуля (TFT High Copy) копия высокого качества</p>
                    <p>Замена дисплейного модуля (OLED High Copy) копия высокого качества</p>
                    <p>Замена аккумуляторной батареи</p>
                    <p>Устранение ошибки АКБ (проверка подлинности аккумуляторной батареи)</p>
                    <p>Замена линзы основной камеры (стекло камеры)</p>
                    <p>Замена основной (задней) камеры</p>
                    <p>Замена сетки динамика</p>
                    <p>Замена корпуса (только снятый оригинал)</p>
                </div>
            </div>

            <div className="price-block">
                <div className="price-block-title"><p>Стоимость</p></div>
                <div className="price-block-info">
                      <p>{productInfo.diagnostics}</p>
                    <p>{productInfo.batteryError}</p>
                    <p>{productInfo.bodyReplacement}</p>
                    <p>{productInfo.dataTransfer}</p>
                    <p>{productInfo.displayModule}</p>
                    <p>{productInfo.faceIDRepair}</p>
                    <p>{productInfo.polishingScreen}</p>
                    <p>{productInfo.replacementDisplay}</p>
                    <p>{productInfo.replacementDisplayOriginal}</p>
                    <p>{productInfo.replacingBattery}</p>
                    <p>{productInfo.resolvingError}</p>
                    <p>{productInfo.speakerMesh}</p>
                    <p>{productInfo.touchScreen}</p>
                    <p>{productInfo.touchScreenIf}</p>


                </div>
            </div>

        </div>

    </div>
};

export default RepairPrices;