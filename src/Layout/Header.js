import React from 'react';
import MealsImg from '../Assets/meals.jpg';
import classes from './Header.module.css';
import CartButton from './CartButton';

// const [cartClickState, setCartClickState]= useState(false);


const Header = props =>
{
    const CartButtonClickHandler= () => {
        props.onCartButtonClick();
    }
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h2>Welcome to our Hotel</h2>
                <CartButton onClick={CartButtonClickHandler}/>
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImg} alt='Table full of meals'/>
            </div>
        </React.Fragment>
    )

}


export default Header;