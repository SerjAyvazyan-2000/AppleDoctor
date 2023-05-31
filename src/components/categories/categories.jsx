import React from 'react';
import "./style.scss"

const Categories = ({categories}) => {
    return <>
        {categories.map((item, index) => {
            return <div className="categories-item">
                <div style={{backgroundImage: `url(${item.img})`}} key={item.id} className="categories-img G-image"></div>
                <p>{item.name}</p>
            </div>
        })}
    </>
};

export default Categories;