import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import DayButton from './DayButton';

import objectConvertArray from 'src/utils/objectConvertArray';

interface IRepeatDayParams {
    active: boolean;
    alarmDay: {
        [index: string]: boolean
    };
    toggle: boolean;
    setAlarmDay?: Dispatch<SetStateAction<any>>
}

const RepeatDay = ({active, alarmDay, toggle, setAlarmDay}: IRepeatDayParams) => {
    return (
        <Wrapper>
            <Repeat>Repeat</Repeat>
            <DayButtonWrapper>
                {objectConvertArray(alarmDay).map((day) => (
                    <DayButton 
                        key={day[0]}
                        active={active}
                        day={day} 
                        toggle={toggle}
                        setAlarmDay={setAlarmDay}
                    />
                ))}
            </DayButtonWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;
const Repeat = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    font-weight: bolder;
    color: #555555;
`;
const DayButtonWrapper = styled.div`
    display: flex;
`;

export default RepeatDay;