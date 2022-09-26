import React from 'react';
import style from './GameResultStyle.module.css';

const GameResult = ({ setPicked, gameResult }) => {
    const report = {
        win: 'You Win',
        lose: 'You Lose',
        draw: 'Draw'
    }
    return (
        <div className={style.container}>
            <div className={style.resultText}>{report[gameResult]}</div>
            <div>
                <div className={style.button} onClick={() => setPicked(null)}>Play Again</div>
            </div>
        </div>
    );
};

export default GameResult;