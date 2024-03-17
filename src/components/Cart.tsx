//making cart here
import React from "react";
import {useCart} from '../context/CartContext'

const Cart: React.FC = () => {

const cart = useCart();

//total bill calculation logic using reduce method
const total = cart?.items.reduce((acc, amt) => {
    return acc + amt.price;
}, 0);

if(cart?.items.length !== 0) {
    return (
        <>
            <h1>Cart</h1>
            {cart?.items.map((item) => (
                <div key={item.id}>
                    <h2>title:{item.title}</h2>
                    <h2>price: {item.price}</h2>
                </div>
            ))}
            <h1>Total Bill: ${total}</h1>
        </>
    )
} else {
    return (
        <h1>Your Cart is empty!</h1>
    )
}

    // return(
    //     <>
    //         <div className="w-1/2 p-3 m-3 h-auto mb-4 pb-4 bg-amber-500">
    //             <h1>Our cart to checkout</h1>
    //             {cart && cart?.items.length > 0 ? (
    //                 <>
    //                    {cart.items.map((item) => (
    //                     <div key={item.id}>
    //                         <h2>item name: {item.title}</h2>
    //                         <h2>item price: {item.price}</h2>
    //                     </div>
    //                    ))}
    //                 </>
    //             ) : (
    //                 <p>Your cart is empty!</p>
    //             )}
    //             <h1>Total Bill: ${total}</h1>
    //         </div>
    //     </>
    // )
}

export default Cart;