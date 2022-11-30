import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { ImAlarm } from 'react-icons/im';
import DayButton from './components/DayButton';
import ToggleButton from './components/ToggleButton';

import alarmStore from 'src/modules/zustand/alarm';

const AlarmCard = ({id}:{id:number}) => {
    const alarm = alarmStore().getAlarm(id);

    const [alarmDay, setAlarmDay] = useState<(string)[][]>([]);

    useEffect(() => {
        const temp = Object.keys(alarm.day).map((key) => [String(key), String(alarm.day[key])]);
        console.log(temp);
        setAlarmDay(temp);
    },[alarm.day])

    return (
        <Wrapper>
            <Header>
                <ImAlarm color={'yellow'} size={14} />
                <Message>{alarm.memo}</Message>
            </Header>
            <Body>
                <TimeToggleWrapper>
                    <TimeWrapper>
                        <Time>{alarm.time}</Time>
                        <Meridiem>AM</Meridiem>
                    </TimeWrapper>
                    <Toggle>
                        <ToggleButton id={alarm.id}/>
                    </Toggle>
                </TimeToggleWrapper>
                <RepeatDayWrapper>
                    <Repeat>Repeat</Repeat>
                    <DayButtonWrapper>
                        {alarmDay.map((day) => (
                            <DayButton 
                                key={alarm.id + day[0]}
                                day={day} 
                                toggle={alarm.toggle}
                            />
                        ))}
                    </DayButtonWrapper>
                </RepeatDayWrapper>
            </Body>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    color: #cecece;
    margin-bottom: 20px;
`;
const Header = styled.div`
    display: flex;
    align-items: baseline;

    background-color: #252525;
    padding: 14px 18px 10px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`;
const Message = styled.div`
    font-size: 14px;
    color: #8a8a8a;
    margin-left: 8px;
`;
const Body = styled.div`
    background-color: #252525;
    padding: 10px 18px;
    margin-top: 3px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
`;
const TimeToggleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
`;
const TimeWrapper = styled.div`
    display: flex;
    align-items: baseline;
`;
const Time = styled.div`
    display: flex;
    font-family: sans-serif;
    font-size: 30px;
    font-weight: 700;
`;
const Meridiem = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    font-weight: 700;
    margin-left: 8px;
`;
const Toggle = styled.div`
    ${({theme}) => theme.div.vhCenter}
    margin-right: 4px;
`;
const RepeatDayWrapper = styled(TimeWrapper)`
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

export default AlarmCard;