import React, { useContext, useState, useEffect } from 'react'
import {favoriCtx} from '../Contexts/FavoriContext';
import {Cartctx} from '../Contexts/CartContext';

export default function Product({ item }) {
    const {likedProd, setLikedProd} = useContext(favoriCtx);

    
    //const [heartColor, setHeartColor] = useState('');
    
        
   
   

    const itemFavHandler = (item) => {
        const isItemInFavori = likedProd.filter(prod => prod.id === item.id);
        /*if(likedProd.indexOf(item) === -1) {//produit n'existe pas --> je l'ajoute au favori
            setLikedProd(prevLikedProd => [...prevLikedProd, item]) ; 
            setHeartColor('red');    
        }
        else {//produit existe déjà dans le favori--> je le supprime du favori
            const likedProdFiltered = likedProd.filter(prod => prod.id !== item.id);
            setLikedProd(likedProdFiltered); 
            setHeartColor('black');
        } */
        if(isItemInFavori.length > 0) { //produit existe dans favori
            const likedProdFiltered = likedProd.filter(prod => prod.id !== item.id);
            setLikedProd(likedProdFiltered); 
            //setHeartColor('');
            
        } else {
            setLikedProd(prevLikedProd => [...prevLikedProd, item]) ; 
            //setHeartColor('red');
            
        }
    }
    
    const {cartItems, addItemToCart, deleteItemFromCart} = useContext(Cartctx);

    return (
        <div className='col-lg-3 col-md-5 col-sm-5 product-container mb-5 me-1'>
            <img src={item.img} height='60%' width="100%"  alt='product' />
            <div className="product-content">
                <p>{item.name}</p>
                <p>{item.price}DA</p>
                <i style={{color: likedProd.filter(prod => prod.id === item.id).length>0 ? 'red' : 'black' }} className="bi bi-heart-fill" onClick={() => itemFavHandler(item)}></i>  
            </div>
            {cartItems.filter(prod=>item.id===prod.id).length === 0 ? <button className='btn add' onClick={() => addItemToCart(item)} >Add to cart <i className="bi bi-cart3  ms-2"></i></button> 
             :  <button className='btn btn-danger remove' onClick={() => deleteItemFromCart(item.id)} >Remove from cart <i className="bi bi-cart3  ms-2"></i></button>  
            }
            
        </div>
    )
}
