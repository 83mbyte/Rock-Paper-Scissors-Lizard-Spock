import React from 'react';
import ChipContainer from '../../../components/Chip/ChipContainer';
import GameResult from '../../../components/GameResult/GameResult';
import Loader from '../../../components/Loader/Loader';
import style from './Step2ScreenStyle.module.css';

const Step2Screen = ({ pickedChip, thp, setPicked, scoring }) => {
    const { score, setScore } = scoring;
    const [showThp, setShowThp] = React.useState(false);
    const [showResult, setShowResult] = React.useState(false);
    const [gameResult, setGameResult] = React.useState(null);

    React.useEffect(() => {
        setTimeout(() => {
            setShowThp(true);
        }, 2000)
    }, [showThp])

    React.useEffect(() => {

        if (showThp) {
            setTimeout(() => {
                setShowResult(true)
            }, 500)
        }
    }, [showThp])

    React.useEffect(() => {
        const winProcedure = () => {
            window.localStorage.setItem('rpc_game', JSON.stringify({ score: score + 1 }));
            setScore(score + 1);
            setGameResult('win');
        }
        const loseProcedure = () => {
            window.localStorage.setItem('rpc_game', JSON.stringify({ score: score - 1 }));
            setScore(score - 1);
            setGameResult('lose');
        }
        if (showResult) {

            switch (pickedChip.icon) {
                case 'scissors':
                    if (thp.icon === 'paper' || thp.icon === 'lizard') {
                        winProcedure();
                    }
                    else if (thp.icon === 'rock' || thp.icon === 'spock') {
                        loseProcedure();
                    }
                    else {
                        setGameResult('draw');
                    }
                    break;
                case 'paper':
                    if (thp.icon === 'rock' || thp.icon === 'spock') {
                        winProcedure();
                    }
                    else if (thp.icon === 'lizard' || thp.icon === 'scissors') {
                        loseProcedure();
                    }
                    else {
                        setGameResult('draw');
                    }
                    break;
                case 'rock':
                    if (thp.icon === 'lizard' || thp.icon === 'scissors') {
                        winProcedure();
                    }
                    else if (thp.icon === 'spock' || thp.icon === 'paper') {
                        loseProcedure();
                    }
                    else {
                        setGameResult('draw');
                    }
                    break;
                case 'lizard':
                    if (thp.icon === 'spock' || thp.icon === 'paper') {
                        winProcedure();
                    }
                    else if (thp.icon === 'scissors' || thp.icon === 'rock') {
                        loseProcedure();
                    }
                    else {
                        setGameResult('draw');
                    }
                    break;
                case 'spock':
                    if (thp.icon === 'scissors' || thp.icon === 'rock') {
                        winProcedure();
                    }
                    else if (thp.icon === 'lizard' || thp.icon === 'paper') {
                        loseProcedure();
                    }
                    else {
                        setGameResult('draw');
                    }
                    break;
                default:
                    break;
            }
        }
    }, [showResult])
    return (
        <div className={style.container}>
            <div className={style.contentContainer}>
                <div className={style.column_picked}>
                    <div className={style.headerText}>You Picked</div>
                    <div className={style.chipArea}>
                        <ChipContainer large={true} colors={{ outer: pickedChip.colors.outer, inner: pickedChip.colors.inner }} icon={pickedChip.icon} />
                    </div>
                </div>

                <div className={style.column_result}>
                    {
                        showResult && <GameResult setPicked={setPicked} gameResult={gameResult} />
                    }

                </div>

                <div className={style.column_thp}>
                    <div className={style.headerText}>The House Picked</div>
                    <div className={style.chipArea}>
                        {
                            showThp
                                ? <ChipContainer large={true} colors={{ outer: thp.colors.outer, inner: thp.colors.inner }} icon={thp.icon} />
                                : <Loader size={'large'} />
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Step2Screen;