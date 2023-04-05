import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
    const savedCart=useLoaderData();
const[cart,setCart]=useState(savedCart);

const handleRemoveFromCart = (id) => {
    const removedCart=cart.filter(pd=>pd.id !== id)
    setCart(removedCart);
    removeFromDb(id);
}
    return (
        <div className='shopContainer'>
           <div className='reviewContainer'>
            {
                cart.map(product=><ReviewItem
                 key={product.id}
                 product={product}
                 handleRemoveFromCart={handleRemoveFromCart}
                >

                </ReviewItem>)
            }
            
             </div>
             <div className='cartContainer'>
                <Cart cart={cart} ></Cart>

             </div>
          
        </div>
    );
};

export default Orders;