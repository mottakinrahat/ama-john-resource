import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total=0;
    let totalShipping=0;
    for (const product of cart){
        total =total+product.price;
        totalShipping=totalShipping+product.shipping;
    }
    const tax=total*7/100;
  
    return (
        <div className='cart'>
                <h2>order summary</h2>
                <p>Selected {cart.length}</p>
                <p>Total Price:{total}</p>
                <p>Shipping:{totalShipping}</p>
                <p>Tax:{tax.toFixed(2)}</p>
                <h4>Grand Total:{total+ totalShipping+tax}</h4>
            </div>
    
    );
};

export default Cart;