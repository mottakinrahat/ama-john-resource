import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    console.log(props);
    const { img, name, price, seller, ratings } = props.product;
    const handleAddCart = props.handleAddCart;


    return (
        <div className='product'>
            <img className='images' src={img} alt="" />
            <div className='productInfo'>
                <h6 className='productName'>{name}</h6>
                <p>$Price:{price}</p>
                <p>Manufacturer:{seller}</p>
                <p>rating:{ratings}Star</p>
            </div>
            <button onClick={() => handleAddCart(props.product)} className='btnCart'>Add to Cart <FontAwesomeIcon icon={faCoffee} /></button>
        </div>
    );
};

export default Product;