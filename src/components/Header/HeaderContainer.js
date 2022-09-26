import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderScore from './HeaderScore';
import style from './HeaderStyle.module.css';


const HeaderContainer = ({ score }) => {
    return (
        <div className={style.container}>
            <HeaderLogo />
            <HeaderScore score={score} />
        </div>
    );
};

export default HeaderContainer;