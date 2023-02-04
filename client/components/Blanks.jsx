// state passed from Board via props
// foreignWord
// timeRemaining

import React, { useState } from 'react';

function Blanks(props) {
  // create empty array in state to hold divs
  const [blanksArray, setBlanksArray] = useState([]);
  // split all characters from foreign word into an array
  const charArray = props.foreignWord.split('');
  // create array that will hold characters to hide
  const hiddenChars = [];
  // push all indices that aren't spaces into the hiddenChars array
  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] !== ' ') hiddenChars.push(i);
  }
  const letterCount = hiddenChars.length;

  // between 12 seconds and 2 seconds, progressively remove characters
  let pctTimeElapsed = (12 - props.timeRemaining) / 10;
  // progressively reveal charcaters until half are revealed
  let pctCharsRevealed =
    (letterCount.length - hiddenChars.length) / (letterCount.length / 2);
  // if more time has elapsed than characters have been revealed, remove an element from the hidden array
  if (pctTimeElapsed >= pctCharsRevealed && pctCharsRevealed < 1) {
    const temp = Math.floor(Math.random * hiddenChars.length);
    hiddenChars.splice(temp, 1);
  }

  function blanksArrayMaker() {
    const result = [];
    for (let i = 0; i < charArray.length; i++) {
      // if character at index is space, return space div
      if (charArray[i] === ' ') {
        result.push(<div key={i} className='blankspace'></div>);
      }
      // if letter is in hiddenChars array, return blank div without letter
      else if (true) result.push(<div key={i} className='space'></div>);
      // otherwise return blank div with letter
      else
        result.push(
          <div key={i} className='space'>
            {charArray[i]}
          </div>
        );
    }
    return result;
  }
  setBlanksArray(blanksArrayMaker());
}

export default Blanks;
