import React, { useState } from 'react';
import App from './App.jsx';
import logoGif from '../assets/logoGif.gif';

function Start() {
  const [start, setStart] = useState(false);
  if (start === false) {
    return (
      <div className='flex'>
        <div className='main-container' id='startscreen'>
          <img src={logoGif}></img>
          {/* <h1>Rueda de la Fortuna</h1> */}
         
          <button
            id='startbutton'
            onClick={() => {
              setStart(true);
            }}
          >
            START GAME
          </button>
        </div>
      </div>
    );
  }
  if (start === true) {
    return <App />;
  }
}

export default Start;
