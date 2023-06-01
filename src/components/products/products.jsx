import React from 'react';
import "./style.scss"

const Products = ({products,handleClick}) => {
    return <div className="products-container">
        {products.map((item, index) => {
            return <a href='#productInfo' onClick={() => handleClick(item.jobs,item.name)} key={item.id} className="product-item">
                <div style={{backgroundImage: `url(${item.img})`}} className="product-img G-image"></div>
                <p>{item.name}</p>
            </a>
        })}
    </div>
};

export default Products;