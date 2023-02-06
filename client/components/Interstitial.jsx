import React, {useState, useEffect} from 'react';
import GameOver from './GameOver.jsx';

function Interstitial(props) {
    const currEnglishWord = props.englishWord;
    const currForeignWord = props.foreignWord;
    const newRoundNumber = props.roundNumber + 1;
    const currLatestScore = props.score.latestScore;
    props.setRoundNumber(newRoundNumber);
    props.setScore({totalScore: props.score.totalScore, latestScore: 0});
    useEffect(() => {
        setTimeout(() => {
            if (props.roundNumber === 11) {
                return (
                    <GameOver 
                        totalScore={props.score.totalScore}
                        setScore={props.setScore}
                        setRoundNumber={props.setRoundNumber}
                        setInterstitial={props.setInterstitial} 
                    />
                )
            }
            props.setInterstitial(false);
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