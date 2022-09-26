import React from 'react';
import style from './ChipStyle.module.css';

const ChipContainer = ({ colors, icon, setPicked, large }) => {
    const { outer, inner } = colors;
    return (
        <div className={!large ? style.container : style.containerLarge}  >

            <div className={!large ? style.colorOuterCircle : style.colorOuterCircleLarge} style={{ backgroundColor: outer }} onClick={() => {
                if (!large) {
                    setPicked(icon)
                }
            }} >
                <div className={!large ? style.colorInnerCircle : style.colorInnerCircleLarge} style={{ backgroundColor: inner }}  >

                    <div className={!large ? style.innerCircleGrey : style.innerCircleGreyLarge} >
                        <div className={!large ? style.innerCircleWhite : style.innerCircleWhiteLarge}  >

                            <div className={!large ? style.imgWrapper : style.imgWrapperLarge} >
                                <img src={`./images/icon-${icon}.svg`} alt={`${icon} icon`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChipContainer;