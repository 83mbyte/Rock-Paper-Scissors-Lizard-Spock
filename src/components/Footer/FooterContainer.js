import React from 'react';
import style from './FooterStyle.module.css';


const FooterContainer = ({ showModal }) => {
    const rulesBtnClickHandler = () => {
        showModal(true)
    }
    return (
        <article>
            <div className={style.footerContainer}>
                <div className={style.rulesBtnContainer} onClick={rulesBtnClickHandler}><p className={style.btnText}>RULES</p></div>
            </div>
        </article>
    );
};

export default FooterContainer;