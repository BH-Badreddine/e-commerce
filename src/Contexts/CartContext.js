import React, { createContext, useEffect, useState } from 'react'


export const Cartctx = createContext();

export default function CartContext(props) {
  
   const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('shoppingProd')) || []);

   useEffect(() => {
    localStorage.setItem('shoppingProd',JSON.stringify(cartItems));
   }, [cartItems])

   const addItemToCart = (prod) => {
    const IsprodExist = cartItems.filter(item => item.id===prod.id);
    if(IsprodExist.length === 0) {//le produit n'existe pas dans le Cart, donc je vais l'ajouter
        const item = {
            id: prod.id,
            img: prod.img,
            name: prod.name,
            quantity: 1,
            price: prod.price
        };
        setCartItems(prevCartItems => [...prevCartItems, item]);
        //console.log(cartItems);
    }
    //si le produit existe dans le Cart, on ne fait rien(on ne va pas l'ajouter une autre fois, ni le supprimer)   
   }

   const increaseQuantity = (prod) => {
    const cartItemsInc = cartItems.map(item => {
        if(item.id === prod.id) {
            return  {...item, quantity: item.quantity+1};
        } else {
            return item;
        }
    });
    setCartItems(cartItemsInc);
    console.log(cartItems)
   }
  
   const deleteItemFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
   } 

   const decreaseQuantity = (prod) => {
    const cartItemsDecr = cartItems.map(item => {
        if(item.id === prod.id) {
            //if(item.quantity > 1) {
                return {...item, quantity: item.quantity-1}
            //} else {
               // deleteItemFromCart(prod.id);
            //}   
        } else {
            return item;    
        }
    });
    setCartItems(cartItemsDecr);
    console.log(cartItems)
   }


    return (
        <Cartctx.Provider value={{cartItems,addItemToCart,increaseQuantity,decreaseQuantity,deleteItemFromCart}}>
            {props.children}
        </Cartctx.Provider>
  )
}
