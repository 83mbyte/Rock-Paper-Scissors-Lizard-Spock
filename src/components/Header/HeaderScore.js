import React from 'react';
import style from './HeaderStyle.module.css';

const HeaderScore = ({ score }) => {
    return (
        <div className={style.scoreContainer}>
            <div className={style.scoreText}>SCORE</div>
            <div className={style.scoreTextDark}>{score}</div>
        </div>
    );
};

export default HeaderScore;