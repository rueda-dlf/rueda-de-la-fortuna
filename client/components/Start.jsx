import React, { useState } from 'react';
import App from './App.jsx';

function Start() {
  const [start, setStart] = useState(false);
  if (start === false) {
    return (
      <div id='startscreen'>
        <h1>Rueda de la Fortuna</h1>
        <button
          id='startbutton'
          onClick={() => {
            setStart(true);
          }}
        >
          Start game
        </button>
      </div>
    );
  }
  if (start === true) {
    return <App />;
  }
}

export default Start;
