import React, { useEffect, useState } from 'react';
import Board from './Board.jsx';
import Interstitial from './Interstitial.jsx';

function App() {
  const [score, setScore] = useState({ totalScore: 0, latestScore: 0 });
  const [roundNumber, setRoundNumber] = useState(0);
  const [englishWord, setEnglishWord] = useState('');
  const [foreignWord, setForeignWord] = useState('');
  const [isTimeout, resetTimeout] = useState(false);
  // make a request to backend for a random word on initial load. // useEffect(() => getWords());
  useEffect(() => {
    const i = Math.floor(Math.random() * 100);

    fetch(`/words/${i}`)
      .then((res) => res.json())
      .then((words) => {
        setEnglishWord(words[i]['translations'][0]);
        setForeignWord(words[i]);
      })
      .catch((err) =>
        console.log(`Error in retrieving words from database. ${err}`)
      );
  }, [roundNumber]);
  
  // render Interstitial and Board on screen
  if (isTimeout || score.latestScore !== 0) {
    return (
      <Interstitial
        key={1}
        score={score}
        setScore={setScore}
        englishWord={englishWord}
        foreignWord={foreignWord}
        roundNumber={roundNumber}
        setRoundNumber={setRoundNumber}
        resetTimeout={resetTimeout}
      />
    );
  } else {
    return (
      <Board
        key={0}
        score={score}
        setScore={setScore}
        roundNumber={roundNumber}
        setRoundNumber={setRoundNumber}
        englishWord={englishWord}
        foreignWord={foreignWord}
        isTimeout={isTimeout}
        resetTimeout={resetTimeout}
      />
    );
  }
}

export default App;
