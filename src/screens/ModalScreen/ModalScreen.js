import React from 'react';
import style from './ModalScreenStyle.module.css';

const ModalScreen = ({ show, setShow }) => {
    return (
        <>
            {
                show
                && <div className={style.modalOuterBg}>
                    <div className={style.modalContainer}>
                        <div className={style.content}>
                            <div className={style.headerText}>
                                RULES
                            </div>

                            <div className={style.closeBtn}>
                                <img src="images/icon-close.svg"
                                    alt="close"
                                    onClick={() => setShow(false)}
                                />
                            </div>

                            <div className={style.rulesImg}>
                                <img src="./images/image-rules.svg" alt="rules" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default ModalScreen;