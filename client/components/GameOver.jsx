import React from 'react';

function GameOver(props) {
  const currTotalScore = props.totalScore;
  props.setScore({ totalScore: 0, latestScore: 0 });
  props.setRoundNumber(1);
  
  const restartGame = () => {
    props.setInterstitial(false)
  }

  return(
    <div className='gameOver'>
      <h1>Game Over! You got a total score of {currTotalScore}</h1>
      <button className='restartButton' onClick={restartGame}>Play again!</button>
    </div>
  )
}

export default GameOver;