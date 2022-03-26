import React, {useRef, useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';


const MealItemForm = props => {
    const [formIsValid, setFormIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler= event =>
    {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        //console.log(enteredAmountNumber);
        if(enteredAmountNumber < 0 || enteredAmountNumber > 5 || enteredAmount.trim().length === 0)
        {
            setFormIsValid(false);
        }
        props.onAddToCart(enteredAmountNumber);
    }

    // const [itemsAdded, setItems] = useState({id : props.id, noofitems: 1})
    return (
        <form className={classes.form} onSubmit={submitHandler}>
    
        <Input label='Amount' 
        ref = {amountInputRef} input={{
            id: props.id,
            type:'number',
            min :'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button >+ Add</button>
    
    </form>
    )

}

export default MealItemForm;