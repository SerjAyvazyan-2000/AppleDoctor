import React, {useState} from 'react';
import "./style.scss"
import MyModal from "../../UI/myModal/myModal";
import {useInformation} from "../../hooks/useInformation";

const Categories = ({categories}) => {
    const [openModal, setOpenModal] = useState(false)
    const [categoriesName, setCategoriesName] = useState('')
    const [newList, setNewList] = useState([])
    const {products} = useInformation()
    const handleClick = (name) => {
        setOpenModal(!openModal)
        setCategoriesName(name)
        let newList = products.filter(item => item.categories === name)
        if (!newList.length) {
            setCategoriesName('')
        }
        setNewList(newList)
    }
    return <>

        <div className="categories-block">
        {categories.map((item, index) => {
            return <div key={item.id} className="categories-item">
                <div onClick={() => handleClick(item.categories)} style={{backgroundImage: `url(${item.img})`}}
                     key={item.id}
                     className="categories-img G-image"></div>
                <p>{item.name}</p>
            </div>
        })}

        <MyModal
            openModal={openModal}
            categoriesName={categoriesName}
            products={newList}
            onClose={handleClick}>

        </MyModal>

    </div>
        </>
};

export default Categories;