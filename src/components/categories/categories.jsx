import React, {useState} from 'react';
import "./style.scss"
import MyModal from "../../UI/myModal/myModal";
import {useInformation} from "../../hooks/useInformation";

const Categories = ({categories}) => {
    const [openModal, setOpenModal] = useState(false)
    const [productName,setProductName] = useState('')
    const [newList,setNewList] = useState([])
    const { products} = useInformation()
    const handleClick = (name) => {
        setOpenModal(!openModal)
        setProductName(name)
         let newList = products.filter(item =>  item.categories === name)
        setNewList(newList)
    }
    return <>
        {categories.map((item, index) => {
            return <div className="categories-item">
                <div onClick={()=>handleClick(item.categories)} style={{backgroundImage: `url(${item.img})`}} key={item.id}
                     className="categories-img G-image"></div>
                <p>{item.name}</p>
            </div>
        })}
        {openModal ? <MyModal productName={productName} products={newList} onClose={handleClick}></MyModal> : null}

    </>
};

export default Categories;