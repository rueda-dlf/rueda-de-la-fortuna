import React from 'react';
import logoGif from '../assets/logoGif.gif';

function GameOver(props) {
  const currTotalScore = props.totalScore;

  const restartGame = () => {
    props.setScore({ totalScore: 0, latestScore: 0 });
    props.setRoundNumber(1);
    props.setInterstitial(false);
    props.setGameOver(false);
  };

  return (
    <div className='flex'>
      <div className='gameOver'>
        <img src={logoGif}></img>
        <h1>Game Over! You got a total score of {currTotalScore}</h1>
        <button className='glowingbutton' onClick={restartGame}>
          Play again!
        </button>
      </div>
    </div>
  );
}

export default GameOver;
