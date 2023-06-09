import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';

import Cart from '../../Cart/Cart';
import Product from '../../product/Product';
import './Shop.css'

const Shop = () => {
   const[products,setProducts]=useState([]);
   const[cart,setCart]=useState([]);
  

   useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data));
   },[]);

useEffect(()=>{
    const storedCart=getShoppingCart();
    const savedCart=[];
    //step1 get Id
    for(const id in storedCart){
    const addedProduct=products.find(product=>product.id === id)
   if(addedProduct){
     
    const quantity=storedCart[id];
    addedProduct.quantity=quantity; 
   }
   
    }
    setCart(savedCart);
   
},[products]);


   const handleAddCart=(product)=>{
   const newCart=[...cart,product];
   setCart(newCart);
  addToDb(product.id);

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