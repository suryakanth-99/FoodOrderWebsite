import React,{useRef, useState} from 'react';
import classes from './checkout.module.css';
const isEmpty = value =>  value.trim() === '' ;
const isZipcodeValid = value => value.trim().length ===5;
const Checkout = props => {
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const zipcodeInputRef = useRef();
    const cityInputRef = useRef();
    const [formValidity, setFormValidity] = useState({
        name: true,
        street: true,
        zipcode:true,
        city:true
    })

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName= nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredZipcode = zipcodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

         const enteredNameIsValid = !isEmpty(enteredName);
         const enteredStreetIsValid = !isEmpty(enteredStreet);
         const enteredCityIsValid = !isEmpty(enteredCity);
        const  enteredZipcodeIsValid = isZipcodeValid(enteredZipcode);

        const formIsValid = enteredZipcodeIsValid && enteredCityIsValid && enteredNameIsValid && enteredStreetIsValid;
        setFormValidity({
            name : enteredNameIsValid,
            street : enteredStreetIsValid,
            zipcode : enteredZipcodeIsValid,
            city: enteredCityIsValid
        })
    }
    return (
        <form className={classes.form} onSubmit = {submitHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref ={nameInputRef} />
                {!formValidity.name && <p>enter a valid name</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref = {streetInputRef}></input>
                {!formValidity.street && <p>enter a valid street</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='zipcode'>ZipCode</label>
                <input type='text' id='zipcode' ref={zipcodeInputRef}></input>
                {!formValidity.zipcode && <p>enter a valid zipcode</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef}></input>
                {!formValidity.city && <p>enter a valid city</p>}
            </div>
            <div className={classes.actions}>
            <button type='button' onClick= {props.onCancel}>Cancel</button>
            <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
    
}

export default Checkout;