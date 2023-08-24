import React, { useContext, useState, useEffect } from 'react'
import { Cartctx } from '../Contexts/CartContext'

export default function Cart() {

    const { cartItems, increaseQuantity, decreaseQuantity, deleteItemFromCart } = useContext(Cartctx);

    const [total, setTotal] = useState(0);


    //Calculer le total : il change à chaque fois que 'cartItems'(changement de quantité ou suppression d'un item) 
    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < cartItems.length; i++) {
            sum = sum + cartItems[i].price * cartItems[i].quantity;
        }
        setTotal(sum);
    }, [cartItems]);


    return (
        <div className='cart-container'>
            <h2 className='mb-5'> -Shopping cart-</h2>

            {cartItems.length > 0 &&
                <>
                    {cartItems.map(prod => {
                        if (prod.quantity >= 1) {//afficher seulement les produits dont la quantité est sup ou égale à 1
                            return (
                                <div key={prod.id} className='cart-item-container row justify-content-start align-items-center mb-4'>
                                    <img src={prod.img} height='80px' width='100%' className='col-md-3' />
                                    <p className='col-md-2'> {prod.name} </p>
                                    <div className='quantity-container col-md-3'>
                                        <button onClick={() => decreaseQuantity(prod)} className='btn me-1'>-</button>
                                        <strong> {prod.quantity} </strong>
                                        <button onClick={() => increaseQuantity(prod)} className='btn ms-1'>+</button>
                                    </div>
                                    <p className='col-md-3'> {prod.price}<span> x {prod.quantity} </span> </p>
                                    <button className='btn btn-danger' onClick={() => deleteItemFromCart(prod.id)}><i className="bi bi-trash"></i></button>
                                </div>
                            )
                        } else {
                            deleteItemFromCart(prod.id)
                        }

                    })}
                    <div className="total-container">
                        <h3>Total net</h3>
                        
                            <p>{total}</p><span>DA</span> 

                    </div>

                </>}
            {cartItems.length === 0 && <h4>No item was added to the cart !</h4>}


        </div>
    )
}
