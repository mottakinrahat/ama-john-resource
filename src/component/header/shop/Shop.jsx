import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../../product/Product';
import './Shop.css'

const Shop = () => {
   const[products,setProducts]=useState([]);
   const[cart,setCart]=useState([]);
   console.log(cart);

   useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data));
   },[]);
   const handleAddCart=(product)=>{
   const newCart=[...cart,product];
   setCart(newCart);

 }


    return (
        <div className='shopContainer'>
            <div className="productsContainer">
           {
            products.map((product)=> <Product
            product={product}
            key={product.id}
            handleAddCart={handleAddCart}
            ></Product>)
           }
            </div>
            <div className="cartContainer">
             <Cart cart={cart}/>
            </div>
            
        </div>
    );
};

export default Shop;