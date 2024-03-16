//making cart here
import React from "react";
import {useCart} from '../context/CartContext'

const Cart: React.FC = () => {

const cart = useCart();

console.log(typeof(cart?.items));


    return(
        <>
            <div>
                <h1>Our cart to checkout</h1>
                <h2>cart price: {cart?.items?.price}</h2>
                <h2>cart title: {cart?.items?.title}</h2>
            </div>
        </>
    )
}

export default Cart;