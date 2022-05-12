import React from 'react';
import { useState } from 'react';

const Colors = () => {
  const [color, lastColor] = useState("red");

  const blue = () => {
    lastColor("blue");
  };

  const green = () => {
    lastColor("green");
  };

  const red = () => {
    lastColor("red");
  };
  
  const yellow = () => {
    lastColor("yellow");
  };


  return (
    <div className="Counter" style={{ textAlign: 'center'}}>
      <h3> 2 : The colors</h3>
      <button style={{ margin: '5px'}} className='btn btn-primary' onClick={blue}>Blue</button>
      <button style={{ margin: '5px'}} className='btn btn-success' onClick={green}>Green</button>
      <button style={{ margin: '5px'}} className='btn btn-danger' onClick={red}>Red</button>
      <button style={{ margin: '5px'}} className='btn btn-warning' onClick={yellow}>Yellow</button>
      
      <p>The last color clicked is <span style={{ color: color}}> {color} </span></p>
    </div>
  );
};

export default Colors;