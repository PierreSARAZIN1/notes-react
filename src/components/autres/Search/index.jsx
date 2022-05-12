import React from 'react';
import { useState } from 'react';
import DisWord from './DisWord';

const Search = () => {
    const [voila, setVoila] = useState("");

  const lesGo = () => {
      const word = document.getElementById('searchbar').value;
  };



  return (
    <div className="Counter" style={{ textAlign: 'center'}}>
      <h3> 3 : The Search Bar</h3>
        <div className='container'>
                <input className="form-control mr-sm-2" placeholder={"word"} id='searchbar' />
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={lesGo} >Search</button>
        </div>
    </div>
  );
};

export default Search;

