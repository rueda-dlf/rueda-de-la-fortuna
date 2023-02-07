<<<<<<< HEAD
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
=======
>>>>>>> 2cd9729dd4064872e12ea2c55aa9f5e1e663ad4f
