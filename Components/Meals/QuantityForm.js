import React,{useRef, useContext} from "react";
import classes from './Quantity.module.css';
import CartContext from "../../store/cart-context";

const QuantityForm = (props) => {
    const amountInput = useRef();

    const cartCntxt = useContext(CartContext)

    const addItemToCart = (event) => {
        event.preventDefault();
        const quantity = document.getElementById('amount_'+props.id).value
        cartCntxt.addItem({...props.item, quantity: quantity})
    }

    return (
        <form className={classes.fullForm}>
            <div className={classes.form}>
                <label htmlFor={'amount_'+props.id}>Amount</label>
                <input type="number" ref={amountInput} id={'amount_'+props.id} defaultValue={1}></input>
            </div>
            <div>
                <button className={classes.button} onClick={addItemToCart}>+Add</button>
            </div>
            
        </form>
    )
}

export default QuantityForm;