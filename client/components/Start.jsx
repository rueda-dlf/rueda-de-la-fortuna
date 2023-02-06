import React from 'react';
import App from './App.jsx';

function Start() {
  return (
    <div id='startscreen'>
      <h1>Rueda de la Fortuna</h1>
      <button
        id='startbutton'
        onClick={() => {
          return <App />;
        }}
      >
        Start game
      </button>
    </div>
  );
}

export default Start;
