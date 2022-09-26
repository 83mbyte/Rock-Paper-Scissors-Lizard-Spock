import React from 'react';
import style from './LoaderStyle.module.css';

const Loader = () => {
    return (

        <div className={style.container}>
            <img src="/images/loading-37.gif" alt="loader.." />
        </div>
    );
};

export default Loader;