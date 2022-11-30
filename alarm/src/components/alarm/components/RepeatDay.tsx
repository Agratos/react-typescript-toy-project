import styled from 'styled-components';

import DayButton from './DayButton';

interface IRepeatDayParams {
    alarmDay: (string)[][];
    toggle: boolean;
}

const RepeatDay = ({alarmDay, toggle}: IRepeatDayParams) => {
    return (
        <Wrapper>
            <Repeat>Repeat</Repeat>
            <DayButtonWrapper>
                {alarmDay.map((day) => (
                    <DayButton 
                        key={day[0]}
                        day={day} 
                        toggle={toggle}
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