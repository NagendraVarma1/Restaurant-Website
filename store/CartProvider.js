import React, { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {
    const [items, setItems] = useState([])

    const addItemToCartHandler = (item) => {

        const existingCartItemIndex = items.findIndex((cartItem) => cartItem.id === item.id);

        const existingCartItem = items[existingCartItemIndex];

        let updatedItems;

        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                quantity: Number(existingCartItem.quantity) + Number(item.quantity)
            }
            updatedItems = [...items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else{
            updatedItems = items.concat(item)
        }
        setItems(updatedItems)
    };

    const removeItemFromCartHandler = (id) => {};

    const cartContext = {
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider