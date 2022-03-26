import React , {useRef} from 'react';
import classes from './Input.module.css';


const Input = React.forwardRef((props,ref1) => {
    return (
        <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref = {ref1} {...props.input}></input>
        </div>
    )
    
       
    
})

export default Input;