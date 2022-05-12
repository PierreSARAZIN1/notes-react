import React from 'react';

const CallBack = (props) => {
    const word = props.word
    console.log(word)

    return (
        <p> CallBack : y'a le console log de ce que t'écrits, en loccurence : {word}</p>
        
    );
};

export default CallBack;