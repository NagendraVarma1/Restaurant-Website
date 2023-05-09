import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const removeItemFromCart = (id) => {
    cartCtx.removeItem(id)
  }

  let amount = 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        amount = amount + Number(item.price * item.quantity);
        return (
          <li key={item.id} className={classes.meals}>
              <div>
                <h3>{item.name}</h3>
                <div className={classes.details}>
                  <div className={classes.price}>${item.price}</div>
                  <div className={classes.quantity}>x{item.quantity}</div>
                  <button className={classes.minusbutton} onClick={() => removeItemFromCart(item.id)}>-</button>
                  <button className={classes.plusbutton}>+</button>
                </div>
              </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${amount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
