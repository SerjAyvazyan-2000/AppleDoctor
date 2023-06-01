import React, {useState} from 'react';
import "./style.scss"
import iPhone from "../../assets/images/iphone14promax.jpg";
import RepairPrices from "../../components/repairPrices/repairPrices";
import Product from "../../components/products/products";
import Products from "../../components/products/products";
import ScrollTop from "../../components/scrollTop/scrollTop";

const MyModal = ({productName,products, onClose}) => {
    const [scroll,setScroll] = useState(false)

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


    return <>
   <div className="modal-block">
        <div onClick={onClose} className="modal-bg"></div>
        <div className="modal-content">
            <div className="modal-scroll">
                <div className="product-name"><h3>{productName}</h3></div>
              <Products products={products} handleClick={handleClick}/>
                {productInfo.name?
                    <RepairPrices productInfo={productInfo}/>
                : null}
             <div className="onclose-modal">
                  <i onClick={onClose} className="icon-cross"></i>
             </div>
            </div>

        </div>
   </div>
    </>
};
export default MyModal