// NoteDisplay

import React from 'react';
//import { useState } from 'react';
import Showdown from 'showdown';
const converter = new Showdown.Converter();



const NoteDisplay = (props) => {
    const markdownValue = props.data
    const htmlValue = converter.makeHtml(markdownValue)

    const createMarkup = () => {
        return {__html: htmlValue};
      }
    
    return (
      <div className="" >
        <h3 style={{ textAlign: 'center'}}> NoteDisplay</h3>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
    );
  };
  
  export default NoteDisplay;