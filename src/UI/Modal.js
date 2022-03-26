import ReactDOM from 'react-dom';
import React from 'react';
import classes from './Modal.module.css';
import reactDom from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = props => {
    return (
    <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('overlay'))}
        {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overlay') )}
    </>
    )



}

export default Modal;