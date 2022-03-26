import React, {useContext, useEffect, useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './CartButton.module.css';
import CartContext from '../store/Cart-context';

const CartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const totalCartItems =  cartCtx.items.reduce( (curNum, item) => {
        return curNum + item.amount
    }, 0);

    const btnclasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
const {items } = cartCtx;


    useEffect( () => {
        if(cartCtx.items.length === 0)
        {
            return 
        }
        setBtnIsHighlighted(true);
const timer = setTimeout( () => {
    setBtnIsHighlighted(false);
}, 300);
return () => {
    clearTimeout(timer);
}
    }, [items])
    return(
        
            <button className={btnclasses} onClick={props.onClick}>
                <span className = {classes.icon}>
                <CartIcon />
                </span>
                <span>My Cart</span>
                <span className={classes.badge}>{totalCartItems}</span>
            </button>
    );
    
};

export default CartButton;