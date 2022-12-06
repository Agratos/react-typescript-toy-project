import { useState } from 'react';
import styled from 'styled-components';

import AlarmHeader from './AlarmHeader';
import RepeatDay from './components/RepeatDay';

import alarmStore, { IAlarmState} from 'src/modules/zustand/alarm';

const AlarmRegister = () => {
    const [alarmDay, setAlarmDay] = useState<any>({월: false,화: false,수: false,목: false,금: false,토: false,일: true});

    const minuteList = Array(60).fill(0).map((arr, index) => {return index});
    const hourList = Array(12).fill(0).map((arr, index) => {
        if(index > 9){
            return `${index + 1}`
        }
        return `0${index + 1}`
    });

    return (
        <Wrapper>
            <AlarmHeader text={'Choose a time to wake up'} />
            <TimeChooseWrapper>
                <TimeChoose>
                    <HourSelect>
                        {hourList.map((hour) => (
                            <div>{hour}</div>
                        ))}
                    </HourSelect>
                    <Colon>:</Colon>
                    <TimeSelect>
                        {minuteList.map((minute) => (
                            <div>{minute}</div>
                        ))}
                    </TimeSelect>
                </TimeChoose>
            </TimeChooseWrapper>
            <RepeatDayWrapper>
                <RepeatDay 
                    active={true}
                    alarmDay={alarmDay}
                    toggle={true}
                    setAlarmDay={setAlarmDay}
                />
            </RepeatDayWrapper>
            <MessageInputWrapper>
                <MessageInput />
                <MessageLabel>What's this for?</MessageLabel>
            </MessageInputWrapper>
            <RegisterButton>
                ALL SET
            </RegisterButton>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #171717;
    width: 350px;
    height: 650px;
    border-radius: 12px;

    align-items: center;
    text-align: center;

    color: #e9e9e9;
    padding: 16px;
    margin: 16px;
`;
const TimeChooseWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex:1;
    width: 100%;
    height: 264px;
    align-items: center;
    text-align: center;
`;
const TimeChoose = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    height: inherit;
`;
const HourSelect = styled.div`
    //${({theme}) => theme.div.vhCenter}
    display: flex;
    flex-direction: column;
    font-size: 48px;
    height: inherit;
    overflow-y: hidden;
`;
const Colon = styled(HourSelect)``;
const TimeSelect = styled(HourSelect)``;
const RepeatDayWrapper = styled.div``;
const MessageInputWrapper = styled.div`
    display: flex;
    margin: 24px 0;
    width: 100%;
    height: 80px;
`;
const MessageInput = styled.textarea`
    width: inherit;
    height: inherit;
    background-color: inherit;
    resize: none;
    color: #ebeaea;
    border-radius: 4px;
    padding: 8px;
    :focus {
        outline: none
    }
`;
const MessageLabel = styled.div`
    position: absolute;
    margin-top: -10px;
    margin-left: 8px;
    padding: 0 10px;
    background-color: #171717;
    font-size: 14px;
    color: #d5d5d5;
`;
const RegisterButton = styled.div`
    ${({theme}) => theme.fontFamily.apple}
    width: inherit;
    text-align: center;
    padding: 16px 0;
    border-radius: 60px;
    background-color: ${({theme}) => theme.color.yellow};
    color: ${({theme}) => theme.color.orange};
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;
`;

export default AlarmRegister