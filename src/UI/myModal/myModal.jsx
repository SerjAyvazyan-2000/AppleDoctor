import React, {useEffect, useState} from 'react';
import "./style.scss"
import RepairPrices from "../../components/repairPrices/repairPrices";
import Products from "../../components/products/products";
import ContactForm from "../../components/contactForm/contactForm";

const MyModal = ({categoriesName, products, onClose, openModal}) => {
    const [jobsList, setJobsList] = useState([])
    const [productName, setProductName] = useState('')
    const handleClick = (jobs, name,) => {
        if (jobs) {
            setJobsList(jobs)
        }
        setProductName(name)
    }
    useEffect(()=>{
        if(!openModal){
            setProductName('')

        }
    })

    return <>
        {/*<div className="modal-block">*/}
        {/*    <div onClick={onClose} className="modal-bg"></div>*/}
        {/*    <div className="modal-content">*/}
        {/*        <div className="modal-scroll">*/}
        {/*            <div className="onclose-modal">*/}
        {/*                <i onClick={onClose} className="icon-cross"></i>*/}
        {/*            </div>*/}
        {/*            <div className="product-name"><h3>{categoriesName}</h3></div>*/}
        {/*            {!categoriesName  ? <Contact/> : <Products products={products} handleClick={handleClick}/>}*/}

        {/*            {jobsList.length ?*/}
        {/*                <RepairPrices productName={productName} jobsList={jobsList}/>*/}
        {/*                : null}*/}

        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}

        <div className={openModal ? "popup active" : "popup"}>
            <div className="popup-body">
                <div className="popup-content">
                    <div className="modal-scroll">
                        <div className="onclose-modal">

                        </div>
                        <div className="popup-title">
                            <h3>{categoriesName}</h3>
                            <i onClick={onClose} className="icon-cross"></i>
                        </div>

                        <div className="popup-text">
                            {!categoriesName ?   <ContactForm/> : <Products products={products} handleClick={handleClick}/>}

                            {jobsList.length  && productName ?
                                <RepairPrices
                                    categoriesName={categoriesName}
                                    productName={productName}
                                    jobsList={jobsList}
                                    openModal={openModal}
                                />
                                : null}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
};
export default MyModal