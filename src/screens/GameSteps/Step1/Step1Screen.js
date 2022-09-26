import React from 'react';
import ChipContainer from '../../../components/Chip/ChipContainer';
import style from './Step1ScreenStyle.module.css';

const Step1Screen = ({ chips, setPicked }) => {
    return (

        <div className={style.itemsAtPentagon}
            style={{
                backgroundImage: 'url("./images/bg-pentagon.svg")'
            }}>
            <div className={style.pentagonUpperRow}>
                <div className={style.middlePosition}>
                    <ChipContainer colors={{ outer: chips.spock.colors.outer, inner: chips.spock.colors.inner }} icon={chips.spock.icon} setPicked={setPicked} />
                </div>
                <div className={style.upperPosition}>
                    <ChipContainer colors={{ outer: chips.scissors.colors.outer, inner: chips.scissors.colors.inner }} icon={chips.scissors.icon} setPicked={setPicked} />
                </div>
                <div className={style.middlePosition}>
                    <ChipContainer colors={{ outer: chips.paper.colors.outer, inner: chips.paper.colors.inner }} icon={chips.paper.icon} setPicked={setPicked} />
                </div>
            </div>

            <div className={style.pentagonBottomRow}>
                <ChipContainer colors={{ outer: chips.lizard.colors.outer, inner: chips.lizard.colors.inner }} icon={chips.lizard.icon} setPicked={setPicked} />
                <ChipContainer colors={{ outer: chips.rock.colors.outer, inner: chips.rock.colors.inner }} icon={chips.rock.icon} setPicked={setPicked} />
            </div>

        </div>
    );
};

export default Step1Screen;