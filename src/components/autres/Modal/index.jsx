import React from 'react';

const Modal = (props) => {
    const {isOpenModal} = props
    
console.log(props.isOpen)
console.log(isOpenModal)
return (
    <p> Toggle = {props.isOpen}</p>
);
};

export default Modal;