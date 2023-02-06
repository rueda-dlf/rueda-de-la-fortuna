import React, { useState, useEffect } from 'react';


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
      if (props.roundNumber > 10) {
       props.setGameOver(true);
      }else{
        props.setScore({ totalScore: props.score.totalScore, latestScore: 0 });
        props.setInterstitial(false);
      }
    }, 5000);
  });

  return (
    <div id='interstitial'>
      <div id='latestScore'>You got a score of {currLatestScore} points!</div>
      <div id='foreignWord'>{currForeignWord} </div>
      <div id='englishword'>{currEnglishWord}</div>
    </div>
  );
}

export default Interstitial;
