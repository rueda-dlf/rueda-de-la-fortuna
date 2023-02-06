/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

function Interstitial(props) {
  const currEnglishWord = props.previousEnglishWord;
  const currForeignWord = props.previousForeignWord;
  const newRoundNumber = props.roundNumber + 1;
  const currLatestScore = props.score.latestScore;
  useEffect(() => {
    props.setRoundNumber(newRoundNumber);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      if (props.roundNumber > 3) {
        props.setGameOver(true);
      } else {
        props.setScore({ totalScore: props.score.totalScore, latestScore: 0 });
        props.setInterstitial(false);
      }
    }, 5000);
  });

  return (
    <div className='flex'>
      <div className='main-container' id='interstitial'>
        <div id='latestScore'>You got a score of {currLatestScore} points!</div>
        <div id='rowgap'></div>
        <div id='foreignWord'>Answer: {currForeignWord}</div>
        <div id='englishword'>{currEnglishWord}</div>
      </div>
    </div>
  );
}

export default Interstitial;
