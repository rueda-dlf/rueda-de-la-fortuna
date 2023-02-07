import React, { useState } from 'react';

function InputBox(props) {
  const [guess, setGuess] = useState('');
  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const checkGuess = () => {
    //.replace(/[\u0300-\u036f]/g, "") idk difference between both but both works
    let normalizedWord = props.foreignWord
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '');
    if (guess === normalizedWord) {
      props.isGuessed(true);
    }
  };

  return (
    <div className='inputbox'>
      <h1>Enter your guess</h1>
      <div className='submit-container'>
        <input onChange={handleInputChange} />
        <button className='glowingbutton' onClick={checkGuess}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default InputBox;
