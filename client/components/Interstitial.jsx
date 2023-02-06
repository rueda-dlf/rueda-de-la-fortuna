import React, {useState, useEffect} from 'react';
import GameOver from './GameOver.jsx';

function Interstitial(props) {
    const currEnglishWord = props.englishWord;
    const currForeignWord = props.foreignWord;
    const newRoundNumber = props.roundNumber + 1;

    props.setRoundNumber(newRoundNumber);
    useEffect(() => {
        setTimeout(() => {
            if (props.roundNumber === 11) {
                return (
                    <GameOver 
                        totalScore={props.score.totalScore}
                    />
                )
            }
            props.resetTimeout(false);
            props.setScore({totalScore: props.score.totalScore, latestScore: 0})
        }, 5000);
        });
        
    return (
        <div id='interstitial'>
            <div id='latestScore'>You got a score of {props.score.latestScore} points!</div>
            <div id='foreignWord'>{currForeignWord} </div>
            <div id='englishword'>{currEnglishWord}</div>
        </div>
        );
}

export default Interstitial;