import React from 'react';
import Modal from '../Modal';
import { useState } from 'react';

const Toggle = () => {
  const [count, setCount] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>Counting: {count}</p>

      <button onClick={toggleModal}>Toggle modal</button>
      <div>
      <Modal isOpen={isOpenModal} />
      </div>
      
    </div>
  );
};

export default Toggle;