import React from 'react';
import { useState } from 'react';
import CallBack from './CallBack';


const MarkdownInput = ({functionFromParent}) => {
    
    

    const [value, setValue] = useState('');
    const onChange = (event) => {
      setValue(event.target.value);
    };
    const saveData = () => {
        localStorage.setItem('items', JSON.stringify(value))
        console.log(localStorage)
    };
    const giveToParent = () => {
        functionFromParent(value)
    };
    giveToParent()
    return (
      <div>
          <h3 style={{ textAlign: 'center'}}>MarkDown Input</h3>
        <div>Input value: {value}</div>
        <input value={value} onChange={onChange} />
        {/* <CallBack word={value}/> */}
        <button onClick={saveData}>Save</button>
      </div>
    );
}; 
  export default MarkdownInput;
  