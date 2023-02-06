import React, { useState } from 'react';
import Board from './Board.jsx';
// add routes
function App() {
  const [score, setScore] = useState({totalScore: 0, latestScore: 0});
  const [roundNumber, setRoundNumber] = useState(0);
  const [englishWord, setEnglishWord] = useState('');
  const [foreignWord, setForeignWord] = useState('');
  const [isTimeout, setTimeout] = useState(false);

  // invoke getWords on initial screen load (componentDidMount / useEffect)
  // and after round ends 
  const getWords = () => {
    const i = Math.floor(Math.random() * 100);

    fetch(`/words/${i}`)
      .then((res) => res.json())
      .then((words) => {
        setEnglishWord(words[i]['translations'][0]);
        setForeignWord(words[i]);
      })
      .catch((err) => console.log(`Error in retrieving words from database. ${err}`))
  }

  // logic for rendering Board or Interstitial
  const changeScreen = () => {
    // if isTimeout is true or if latestScore is not 0, render Interstitial
    // else render Board
  }

  if (isTimeout || latestScore !== 0) {
    return () // render Interstitial
  } else { // render Board
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
        setTimeout={setTimeout}
        // setRoundScore={setRoundScore}
      />
    )
  }
  
}

export default App;