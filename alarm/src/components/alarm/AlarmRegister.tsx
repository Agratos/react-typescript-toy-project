import { useState } from 'react';
import styled from 'styled-components';

import AlarmHeader from './AlarmHeader';
import RepeatDay from './components/RepeatDay';

import alarmStore from 'src/modules/zustand/alarm';
import { IAlarmState } from 'src/modules/zustand/alarm';
import objectConvertArray from 'src/utils/objectConvertArray';

const AlarmRegister = () => {
    const [alarmDay, setAlarmDay] = useState<any>({월: false,화: false,수: false,목: false,금: false,토: false,일: true});

    return (
        <Wrapper>
            <AlarmHeader text={'Choose a time to wake up'} />
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
const TimeChooseWrapper = styled.div``;
const RepeatDayWrapper = styled.div``;
const MessageInputWrapper = styled.div`
    display: flex;
    margin: 24px 0;
`;
const MessageInput = styled.textarea`
    width: 100%;
    height: 80px;
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