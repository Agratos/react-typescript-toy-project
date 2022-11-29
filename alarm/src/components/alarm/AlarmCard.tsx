import styled from 'styled-components';

import { ImAlarm } from 'react-icons/im';
import DayButton from './components/DayButton';

import alarmStore from 'src/modules/zustand/alarm';

const AlarmCard = ({id}:{id:number}) => {
    const alarm = alarmStore().getAlarm(id);

    return (
        <Wrapper>
            <Header>
                <ImAlarm color={'yellow'} size={14} />
                <Message>{alarm.memo}</Message>
            </Header>
            <Body>
                <TimeToggleWrapper>
                    <TimeWrapper>
                        <Time>7.30</Time>
                        <Meridiem>AM</Meridiem>
                    </TimeWrapper>
                    <Toggle></Toggle>
                </TimeToggleWrapper>
                <RepeatDayWrapper>
                    <Repeat>Repeat</Repeat>
                    <DayButton />
                    <DayButton />
                    <DayButton />
                    <DayButton />
                    <DayButton />
                    <DayButton />
                </RepeatDayWrapper>
            </Body>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    color: #cecece;
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
const TimeToggleWrapper = styled.div``;
const TimeWrapper = styled.div`
    display: flex;
    align-items: baseline;
`;
const Time = styled.div`
    display: flex;
    font-family: sans-serif;
    font-size: 30px;
    font-weight: 500;
`;
const Meridiem = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    font-weight: 700;
    margin-left: 8px;
`;
const Toggle = styled.div``;
const RepeatDayWrapper = styled(TimeWrapper)`
    margin: 14px 0;
    align-items: baseline;
`;
const Repeat = styled.div`
    ${({theme}) => theme.div.vhCenter}
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px;
    font-weight: bolder;
    color: #555555;

    align-items: end;
`;

export default AlarmCard;