import React, { useEffect, useState } from 'react';
import Board from './Board.jsx';
import Interstitial from './Interstitial.jsx';
import GameOver from './GameOver.jsx';

function App() {
  const [score, setScore] = useState({ totalScore: 0, latestScore: 0 });
  const [roundNumber, setRoundNumber] = useState(1);
  const [englishWord, setEnglishWord] = useState('');
  const [foreignWord, setForeignWord] = useState('');
  const [previousEnglishWord, setPreviousEnglishWord] = useState('');
  const [previousForeignWord, setPreviousForeignWord] = useState('');
  const [showInterstitial, setInterstitial] = useState(false);
  const [showGameOver, setGameOver] = useState(false);
  // make a request to backend for a random word on initial load. // useEffect(() => getWords());
  useEffect(() => {
    const i = Math.floor(Math.random() * 6025);

    fetch(`/api/db/${i}`)
      .then((res) => res.json())
      .then((words) => {
        setPreviousEnglishWord(englishWord);
        setPreviousForeignWord(foreignWord);
        setEnglishWord(words.englishWord);
        setForeignWord(words.spanishWord);
      })
      .catch((err) =>
        console.log(`Error in retrieving words from database. ${err}`)
      );
  }, [roundNumber]);

  // render Interstitial and Board and GameOver on screen
  if(showGameOver === true){
    return (
      <GameOver
        totalScore={score.totalScore}
        setScore={setScore}
        setRoundNumber={setRoundNumber}
        setInterstitial={setInterstitial}
        setGameOver={setGameOver}
      />
    );
  }else if(showInterstitial === true) {
    return (
      <Interstitial
        key={1}
        score={score}
        setScore={setScore}
        previous
        englishWord={englishWord}
        foreignWord={foreignWord}
        previousEnglishWord={previousEnglishWord}
        previousForeignWord={previousForeignWord}
        roundNumber={roundNumber}
        setRoundNumber={setRoundNumber}
        setInterstitial={setInterstitial}
        setGameOver={setGameOver}
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
