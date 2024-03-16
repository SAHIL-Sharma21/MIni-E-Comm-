//Cart context

import React, {createContext, useContext, useState} from "react";

interface ItemsData {
    title: string,
    price: number,
    id: number
}

interface CartContextType {
    items: ItemsData[],
    setItems:React.Dispatch<React.SetStateAction<ItemsData[]>>;
    // setItems: () => void,
}

const CartContext = createContext<CartContextType | null>(null);


export const  useCart = () =>{
     return useContext(CartContext);
}

interface CartProps {
    children: React.ReactNode,
}


export const CartProvider: React.FC<CartProps> = (props) => {

    const [items, setItems] = useState<ItemsData[]>([]);

    return <CartContext.Provider value={{items, setItems}}>{props.children}</CartContext.Provider>
}