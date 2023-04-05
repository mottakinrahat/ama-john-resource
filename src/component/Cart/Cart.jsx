import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total=0;
    let totalShipping=0;
    let quantity=0;
    for (const product of cart){

        if(product.quantity=== 0){
            product.quantity=1;
        }
        total =total+product.price*product.quantity;
        totalShipping=totalShipping+product.shipping;
        quantity =quantity+product.quantity;
    }
    const tax=total*7/100;
  
    return (
        <div className='cart'>
                <h2>order summary</h2>
                <p>Quantity: {quantity}</p>
                <p>Total Price:{total}</p>
                <p>Shipping:{totalShipping}</p>
                <p>Tax:{tax.toFixed(2)}</p>
                <h4>Grand Total:{total+ totalShipping+tax}</h4>
            </div>
    
    );
};

export default Cart;