import React from 'react';

import style from './MainScreenStyle.module.css';

import HeaderContainer from '../../components/Header/HeaderContainer';
import Step1Screen from '../GameSteps/Step1/Step1Screen';
import Step2Screen from '../GameSteps/Step2/Step2Screen';

const MainScreen = () => {
    const chips = {
        scissors: {
            colors: {
                outer: 'hsl(39, 89%, 49%)',
                inner: 'hsl(40, 84%, 53%)'
            },
            icon: 'scissors'
        },
        rock: {
            colors: {
                outer: 'hsl(349, 71%, 52%)',
                inner: 'hsl(349, 70%, 56%)'
            },
            icon: 'rock'
        },
        paper: {
            colors: {
                outer: 'hsl(230, 89%, 62%)',
                inner: 'hsl(230, 89%, 65%)'
            },
            icon: 'paper'
        },
        lizard: {
            colors: {
                outer: 'hsl(261, 73%, 60%)',
                inner: 'hsl(261, 72%, 63%)'
            },
            icon: 'lizard'
        },
        spock: {
            colors: {
                outer: 'hsl(189, 59%, 53%)',
                inner: 'hsl(189, 58%, 57%)'
            },
            icon: 'spock'
        }
    }
    const [score, setScore] = React.useState(0);
    const [picked, setPicked] = React.useState(null);
    const [random, setRandom] = React.useState(null);

    React.useEffect(() => {
        if (typeof (Storage) !== "undefined") {
            let wls = JSON.parse(window.localStorage.getItem('rpc_game'));
            if (wls && wls.score !== null && wls.score !== undefined) {
                setScore(wls.score)
            }
        } else {
            alert(`Your play results can't be saved in your browser.`)
        }

    }, []);

    React.useEffect(() => {
        if (picked) {
            let randomKey = Object.keys(chips)[Math.floor(Math.random() * Object.keys(chips).length)];
            setRandom(randomKey);
        }
    }, [picked])
    return (
        <>
            <div className={style.mainContainer}>
                <header>
                    <HeaderContainer score={score} />
                </header>

                <main>
                    <div className={style.contentContainer}>
                        {
                            !picked
                                ? <Step1Screen setPicked={setPicked} chips={chips} />
                                : <Step2Screen pickedChip={chips[picked]} thp={chips[random]} setPicked={setPicked} scoring={{ score, setScore }} />
                        }
                    </div>
                </main>

            </div>

        </>
    );
};

export default MainScreen;