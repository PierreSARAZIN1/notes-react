import React from 'react';
import MarkdownInput from '../MarkdownInput';
import NoteDisplay from '../NoteDisplay';
import { useState } from 'react';

const App = () => {
    const [aValue, setValeur] = useState("");

    const parentFunction =  (word) => {
        setValeur(word)
    };

    return (
    <div>
    <MarkdownInput functionFromParent={parentFunction}/>
    <p>Le parent récupère {aValue}</p>
    <NoteDisplay data={aValue}/>
    </div>
        
    );
}; 
  export default App;