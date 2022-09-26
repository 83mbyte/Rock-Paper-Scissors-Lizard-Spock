import React from 'react';
import style from './HeaderStyle.module.css';

const HeaderLogo = () => {
    return (
        <div className={style.headerLogo}>
            <img src="images/logo.svg" alt="rock paper scissors logo" />
        </div>
    );
};

export default HeaderLogo;