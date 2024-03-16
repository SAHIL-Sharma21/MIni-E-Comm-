//Cart context

import React, {createContext, useContext, useState} from "react";

interface ItemsArray {
    price: number | null,
    title: string | null,
}

interface CartProvider {
    items: ItemsArray | null,
    setItems: (items: ItemsArray | null) => void,
}

const CartContext = createContext<CartProvider | null>(null);


export const  useCart = () =>{
     return useContext(CartContext);
}

interface CartProps {
    children: React.ReactNode,
}

interface CartData {
    price: number | null,
    title: string | null,
}

export const CartProvider: React.FC<CartProps> = (props) => {

    const [items, setItems] = useState <CartData | null>(null);
    return <CartContext.Provider value={{items, setItems}}>{props.children}</CartContext.Provider>
}