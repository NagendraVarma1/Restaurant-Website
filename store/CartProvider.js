import React, { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {
    const [items, setItems] = useState([])

    const addItemToCartHandler = (item) => {

        const existingCartItemIndex = items.findIndex((cartItem) => cartItem.id === item.id); //we will get the index number of the item with the id 
        const existingCartItem = items[existingCartItemIndex]; // we will get the data from the items array of that index and stored it in existingCartItem

        let updatedItems;

        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,  //here we will copy and store the data of the existingCartItem
                quantity: Number(existingCartItem.quantity) + Number(item.quantity) //we will update the quantity of the item
            }
            updatedItems = [...items]; // here we will copy and store the data of items array in updatedItems
            updatedItems[existingCartItemIndex] = updatedItem; // we will update the data of the array of the index number with the updatedItem
        }
        else{
            updatedItems = items.concat(item) // if there is no item presesnt with the id then we will add the item to the item array 
        }
        setItems(updatedItems) // here we will update the state
    };

    const removeItemFromCartHandler = (id) => {
        const itemIndex = items.findIndex((cartItem) => cartItem.id === id);  //we will get the index number of the item with the id 
        const item = items[itemIndex]   // we will get the data from the items array of that index and stored it in item 

        let newUpdatedItems;

        if(item.quantity === 1){
            newUpdatedItems = items.filter((item) => item.id !== id)
        }
        else{
            const newUpdatedItem = {
                ...item,    //here we will store the copy od data of the item and update the quantity
                quantity: Number(item.quantity) - 1
            }
            newUpdatedItems = [...items]; //here we will store the copy of array of items 
            newUpdatedItems[itemIndex] = newUpdatedItem; // we will update the value of data in the index number with the newUpdatedItems
        }
        setItems(newUpdatedItems) // we Will update the state here
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