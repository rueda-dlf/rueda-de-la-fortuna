import React, {useState, useEffect} from 'react';

function Interstitial(props) {
    const currEnglishWord = props.englishWord;
    const currForeignWord = props.foreignWord;
    const newRoundNumber = props.roundNumber + 1;
    props.setRoundNumber(newRoundNumber);
    useEffect(() => {
        //maybe change setting timeout in state to diff name?
        setTimeout(() => {
            props.resetTimeout(false);
            //does it have to be props.score.totalScore?
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