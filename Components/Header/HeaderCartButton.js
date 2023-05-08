import React,{useContext} from "react";
import CartIcon from "../Cart/Carticon";
import CartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)
    let quantity = 0;
    cartCtx.items.forEach((item) => {
        quantity = quantity + Number(item.quantity);
    })

    return (
        <button className={classes.button} onClick={props.onCartClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{quantity}</span>
        </button>
    )
}

export default HeaderCartButton;