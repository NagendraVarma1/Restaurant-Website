import React, { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {
    const [items, setItems] = useState([])

    const addItemToCartHandler = (item) => {
        setItems([...items, item])
        console.log('Inside addItemToCartHandler', cartContext)
    };

    const removeItemFromCartHandler = (id) => {};

    const cartContext = {
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
        {console.log('Inside CartContext.Provider', cartContext)}
    </CartContext.Provider>
};

export default CartProvider