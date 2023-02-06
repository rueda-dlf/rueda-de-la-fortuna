/* eslint-disable react/prop-types */
// state passed from Board via props
// foreignWord
// timeRemaining

import React, { useEffect, useState } from 'react';

function Blanks(props) {
  if (props.foreignWord) {
    // create empty array in state to hold divs
    const [blanksArray, setBlanksArray] = useState([]);
    // split all characters from foreign word into an array
    const charArray = props.foreignWord.split('');
    // code to reveal letters as time elapses
    // create array that will hold characters to hide
    const [hiddenChars, setHiddenChars] = useState([]);

    useEffect(() => {
      // push all indices that aren't spaces into the hiddenChars array
      let tempArray = [];
      for (let i = 0; i < charArray.length; i++) {
        if (charArray[i] !== ' ') tempArray.push(i);
      }
      setHiddenChars(tempArray);
    }, []);

    useEffect(() => {
      const letterCount = props.foreignWord.trim().length;
      // between 12 seconds and 2 seconds, progressively remove characters
      let pctTimeElapsed = (12 - props.timeRemaining) / 10;
      // progressively reveal charcaters until half are revealed
      let pctCharsRevealed =
        (letterCount - hiddenChars.length) / (letterCount / 2);
      // if more time has elapsed than characters have been revealed, remove an element from the hidden array
      if (pctTimeElapsed >= pctCharsRevealed && pctCharsRevealed < 1) {
        const tempArray = [...hiddenChars];
        const tempIndex = Math.floor(Math.random() * tempArray.length);
        tempArray.splice(tempIndex, 1);
        setHiddenChars(tempArray);
      }
    }, [props.timeRemaining]);

    useEffect(() => {
      const result = [];
      for (let i = 0; i < charArray.length; i++) {
        // if character at index is space, return space div
        if (charArray[i] === ' ') {
          result.push(<div key={i} className='blankspace'></div>);
        }
        // if letter is in hiddenChars array, return blank div without letter
        else if (hiddenChars.includes(i))
          result.push(<div key={i} className='space'></div>);
        // otherwise return blank div with letter
        else
          result.push(
            <div key={i} className='space'>
              {charArray[i]}
            </div>
          );
      }
      setBlanksArray(result);
    }, [hiddenChars]);

    return <div className='blankscontainer'>{blanksArray}</div>;
  }
}

export default Blanks;
