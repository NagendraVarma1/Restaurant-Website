import React from "react";
import classes from './Quantity.module.css';
import Button from "../UI/Button";

const QuantityForm = () => {
    return (
        <form className={classes.fullForm}>
            <div className={classes.form}>
                <label>Amount</label>
                <input type="text" value={1}></input>
            </div>
            <div>
                <Button className={classes.button}>+Add</Button>
            </div>
            
        </form>
    )
}

export default QuantityForm;