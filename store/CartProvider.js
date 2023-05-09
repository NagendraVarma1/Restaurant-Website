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

    const removeItemFromCartHandler = (id) => {
        const itemIndex = items.findIndex((cartItem) => cartItem.id === id);
        const item = items[itemIndex]

        let newUpdatedItems;

        if(item.quantity === 1){
            newUpdatedItems = items.filter((item) => item.id !== id)
        }
        else{
            const newUpdatedItem = {
                ...item,
                quantity: Number(item.quantity) - 1
            }
            newUpdatedItems = [...items];
            newUpdatedItems[itemIndex] = newUpdatedItem;
        }
        setItems(newUpdatedItems)
    };

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