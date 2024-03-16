//making cart here
import React from "react";
import {useCart} from '../context/CartContext'

const Cart: React.FC = () => {

const cart = useCart();

//total bill calculation logic using reduce method
const total = cart?.items.reduce((acc, amt) => {
    return acc + amt.price;
}, 0);


    return(
        <>
            <div>
                <h1>Our cart to checkout</h1>
                {cart && cart?.items.length > 0 ? (
                    <>
                       {cart.items.map((item) => (
                        <div key={item.id}>
                            <h2>item name: {item.title}</h2>
                            <h2>item price: {item.price}</h2>
                        </div>
                       ))}
                    </>
                ) : (
                    <p>Your cart is empty!</p>
                )}
                <h1>Total Bill: ${total}</h1>
            </div>
        </>
    )
}

export default Cart;