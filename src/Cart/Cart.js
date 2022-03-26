import React, { useContext , useState} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../store/Cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [orderClicked, setOrderClicked] = useState(false)
  const cartctxt = useContext(CartContext);
  const CartItemAddHandler = (item) => {
    cartctxt.addItem({...item, amount:1})
  };
  const CartItemRemoveHandler = (id) => {
    cartctxt.removeItem( id)
  };
  const totalAmount1 = `$${cartctxt.totalAmount.toFixed(2)}`

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctxt.items.map((items) => (
        <CartItem
          key={items.id}
          name={items.name}
          price={items.price}
          amount={items.amount}
          onAdd={CartItemAddHandler.bind(null, items)}
          onRemove={CartItemRemoveHandler.bind(null, items.id)}
        ></CartItem>
      ))}
    </ul>
  );
  const buttonClickHandler = () => {
    setOrderClicked(true)
  }
  const modalActions =(
<div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.closeCartHandler}
        >
          Close
        </button>
        <button className={classes.button} onClick = {buttonClickHandler}>Submit</button>
      </div>
  )

 

  return (
    <Modal onClose={props.closeCartHandler}>
      {cartItems}
      <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount1}</span>
            </div>
            {orderClicked && <Checkout onCancel= {props.closeCartHandler} />}
            {!orderClicked && modalActions}
     
    </Modal>
  );
};

export default Cart;
