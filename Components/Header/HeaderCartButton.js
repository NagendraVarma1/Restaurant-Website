import CartIcon from "../Cart/Carticon";
import classes from './HeaderCartButton.module.css';
import Button from "../UI/Button";

const HeaderCartButton = (props) => {
    return (
        <Button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>0</span>
        </Button>
    )
}

export default HeaderCartButton;