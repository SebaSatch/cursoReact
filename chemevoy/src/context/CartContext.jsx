import { createContext, useState, useEffect, useContext } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {

        const [cartList,setCartList] = useState([])
        const addToCart = (finder) => {
            setCartList([...cartList, finder])
        }
        

    return(
        <CartContext.Provider value={
            {cartList, addToCart}
         }>
            {children}
        </CartContext.Provider>

    )




 }
        
        















