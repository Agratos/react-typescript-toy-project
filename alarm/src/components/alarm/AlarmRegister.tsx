import { useState } from 'react';
import styled from 'styled-components';

import AlarmHeader from './AlarmHeader';
import RepeatDay from './components/RepeatDay';

import alarmStore from 'src/modules/zustand/alarm';
import { IAlarmState } from 'src/modules/zustand/alarm';
import objectConvertArray from 'src/utils/objectConvertArray';

const AlarmRegister = () => {
    //const { registerToggle } = alarmStore();
    //const [registerData, setRegisterData] = useState<IAlarmState>()
    const [alarmDay, setAlarmDay] = useState<string[][]>(objectConvertArray({월: false,화: false,수: false,목: false,금: false,토: false,일: true}))
    //let alarmDay = objectConvertArray({월: false,화: false,수: false,목: false,금: false,토: false,일: true})
    
    //console.log(`1111`,alarmDay);

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
                <MessageInput>
                    
                </MessageInput>
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
const MessageInputWrapper = styled.div``;
const MessageInput = styled.div``;
const MessageLabel = styled.label``;
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