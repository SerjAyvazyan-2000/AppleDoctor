import React from 'react';
import "./style.scss"

const Products = ({products,handleClick}) => {
    return <a href="#productInfo" className="products-container">
        {products.map((item, index) => {
            return <div onClick={() => handleClick(item)} key={item.id} className="product-item">
                <div style={{backgroundImage: `url(${item.img})`}} className="product-img G-image"></div>
                <p>{item.name}</p>
            </div>
        })}
    </a>
};

export default Products;