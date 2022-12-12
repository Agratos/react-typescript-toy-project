import React, {useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import AlarmHeader from './AlarmHeader';
import TimeChoose from './components/TimeChoose';
import RepeatDay from './components/RepeatDay';

import alarmStore, { IAlarmState } from 'src/modules/zustand/alarm';
import { RefHandler } from './types';

const AlarmRegister = () => {
    const { setRegister, getId, registerToggle } = alarmStore();
    const [alarmDay, setAlarmDay] = useState<any>({월: false,화: false,수: false,목: false,금: false,토: false,일: false});
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [meridiem, setMeridiem] = useState<string>('');

    const testRef = useRef<RefHandler>(null);

    useEffect(() => {
        let currentDay= new Date().getDay();

        switch(currentDay){
            case 0:
                setAlarmDay((day: any) => {
                    day['일'] = true
                    return day
                })
                break;
            case 1:
                setAlarmDay((day: any) => {
                    day['월'] = true
                    return day
                })
                break;
            case 2:
                setAlarmDay((day: any) => {
                    day['화'] = true
                    return day
                })
                break;
            case 3:
                setAlarmDay((day: any) => {
                    day['수'] = true
                    return day
                })
                break;
            case 4:
                setAlarmDay((day: any) => {
                    day['목'] = true
                    return day
                })
                break;
            case 5:
                setAlarmDay((day: any) => {
                    day['금'] = true
                    return day
                })
                break;
            case 6:
                setAlarmDay((day: any) => {
                    day['토'] = true
                    return day
                })
                break;
        }
    },[])

    const handleRegister = () => {
        setRegister({
            id: getId(),
            time: `
                ${timeProcess(11 - testRef?.current?.hourRef?.current?.hour)}.
                ${timeProcess(60 - testRef?.current?.minuteRef?.current?.minute)}
            `,
            meridiem,
            toggle: true,
            day: alarmDay,
            memo: textareaRef.current!.value,
            repeat: 5
        })
    }

    const handleUpdate = () => {
        
    }

    const timeProcess = (time: number):string => {
        if(time === 0){
            return `12`
        }else if(time < 10){
            return `0${time}`
        }
        return `${time}`;
    }

    return ( registerToggle ?
        <Wrapper>
            <AlarmHeader text={'Choose a time to wake up'} />
            <TimeChoose 
                meridiem={meridiem}
                setMeridiem={setMeridiem}
                ref={testRef}
            />
            <RepeatDayWrapper>
                <RepeatDay 
                    active={true}
                    alarmDay={alarmDay}
                    toggle={true}
                    setAlarmDay={setAlarmDay}
                />
            </RepeatDayWrapper>
            <MessageInputWrapper>
                <MessageTextArea ref={textareaRef}/>
                <MessageLabel>What's this for?</MessageLabel>
            </MessageInputWrapper>
            <RegisterButton
                onClick={handleRegister}
            >
                ALL SET
            </RegisterButton>
        </Wrapper>
        : 
        <Wrapper>
            
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
const RepeatDayWrapper = styled.div``;
const MessageInputWrapper = styled.div`
    display: flex;
    margin: 24px 0;
    width: 100%;
    height: 80px;
`;
const MessageTextArea = styled.textarea`
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