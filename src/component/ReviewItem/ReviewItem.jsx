import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ReviewItem = ({product,handleRemoveFromCart}) => {
    const{id,img,price,name,quantity}=product;
    return (
       
          <div className='rivewItem'>
           <img src={img} alt="" />
           <div className='reviewDetails'>
            <p className='productTitle'>{name}</p>
            <p> Price:<span className='OrangeText'>${price}</span> </p>
           
            <p>Quantity:<span className='OrangeText'>{quantity}</span></p>
            
           </div>
           <button onClick={()=>handleRemoveFromCart(id)} className='btnDelete'>
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
           </button>
          </div>
      
    );
};

export default ReviewItem;