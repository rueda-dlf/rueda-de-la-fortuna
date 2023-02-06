import React, { useEffect, useState } from 'react';
import Board from './Board.jsx';
import Interstitial from './Interstitial.jsx';

function App() {
  const [score, setScore] = useState({ totalScore: 0, latestScore: 0 });
  const [roundNumber, setRoundNumber] = useState(1);
  const [englishWord, setEnglishWord] = useState('');
  const [foreignWord, setForeignWord] = useState('');
  const [showInterstitial, setInterstitial] = useState(false);
  // make a request to backend for a random word on initial load. // useEffect(() => getWords());
  useEffect(() => {
    const i = Math.floor(Math.random() * 100);

    fetch(`/words/${i}`)
      .then((res) => res.json())
      .then((words) => {
        setEnglishWord(words.englishWord);
        setForeignWord(words.spanishWord);
      })
      .catch((err) =>
        console.log(`Error in retrieving words from database. ${err}`)
      );
  }, [roundNumber]);
  
  // render Interstitial and Board on screen
  if (showInterstitial === true) {
    return (
      <Interstitial
        key={1}
        score={score}
        setScore={setScore}
        englishWord={englishWord}
        foreignWord={foreignWord}
        roundNumber={roundNumber}
        setRoundNumber={setRoundNumber}
        setInterstitial={setInterstitial}
      />
    );
  } else {
    return (
      <Board
        key={0}
        score={score}
        setScore={setScore}
        roundNumber={roundNumber}
        englishWord={englishWord}
        foreignWord={foreignWord}
        setInterstitial={setInterstitial}
      />
    );
  }
}

export default App;
