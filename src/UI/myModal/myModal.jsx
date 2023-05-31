import React, {useState} from 'react';
import "./style.scss"
import iPhone from "../../assets/images/iphone14promax.jpg";
import RepairPrices from "../../components/repairPrices/repairPrices";

const MyModal = ({productName,products, onClose}) => {
    const [productInfo,setProductInfo] = useState({
        name: "",
        diagnostics: '',
        DataRecovery:"",
        dataTransfer:'',
        faceIDRepair:'',
        polishingScreen:'',
        touchScreen :'',
        touchScreenIf:'',
        replacementDisplay:'',
        replacementDisplayOriginal:'',
        resolvingError:'',
        displayModule:'',
        replacingBattery:'',
        batteryError:'',
        replacingMainCamera:'',
        replacingMainRearCamera:'',
        speakerMesh:'',
        bodyReplacement :'',
        img: null,
        categories: '',
        id: ''
    })
    const handleClick = (item) => {
        setProductInfo(item)
    }
    return <div className="modal-block">
        <div onClick={onClose} className="modal-bg"></div>
        <div className="modal-content">
            <div className="modal-scroll">
                <div className="product-name"><h3>{productName}</h3></div>
                <div className="products-container">
                    {products.map((item, index) => {
                        return <div onClick={()=>handleClick(item)} key={item.id} className="product-item">
                            <div style={{backgroundImage: `url(${item.img})`}} className="product-img G-image"></div>
                            <p>{item.name}</p>
                        </div>
                    })}
                </div>
                {productInfo.name?
                    <RepairPrices productInfo={productInfo}/>
                : null}
            </div>

        </div>
    </div>
};
export default MyModal