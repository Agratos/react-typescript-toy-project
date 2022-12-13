import React, {useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import AlarmHeader from './AlarmHeader';
import TimeChoose from './components/TimeChoose';
import RepeatDay from './components/RepeatDay';

import alarmStore, { IAlarmState } from 'src/modules/zustand/alarm';
import { alarmProperties } from 'src/assets/properties/alarmProperties';
import { RefHandler, IDay } from './types';

const AlarmRegisterUpdate = () => {
    const { getId, getAlarm, setRegister , setUpdate, alarmPageIndex, setAlarmPageIndex, updateId, setUpdateId } = alarmStore();
    const [alarmDay, setAlarmDay] = useState<IDay>(alarmProperties.day);
    const [meridiem, setMeridiem] = useState<string>('');
    const [textarea, setTextarea] = useState<string>('');

    const timeRef = useRef<RefHandler>(null);

    useEffect(() => {
        switch(alarmPageIndex){
            case 1: // 등록
                const currentDay= new Date().getDay();
                const temp:IDay = {...alarmProperties.day}
                temp[currentDay] = !temp[currentDay]
                setAlarmDay(temp)
                dataReset();
                break;
            case 2: // 업데이트
                const {time ,meridiem, day, memo} = getAlarm(updateId!);

                setTextarea(memo);
                setAlarmDay(day);
                setMeridiem(meridiem);
                break;
            default:
                setUpdateId(0);
        }
    },[alarmPageIndex])

    const handleRegister = () => {
        setRegister({
            id: getId(),
            time: `
                ${timeProcess(11 - timeRef?.current?.hourRef?.current?.hour)}.
                ${timeProcess(60 - timeRef?.current?.minuteRef?.current?.minute)}
            `,
            meridiem,
            toggle: true,
            day: alarmDay,
            memo: textarea,
            repeat: 5
        })
        setAlarmPageIndex(0);
        dataReset();
    }

    const handleUpdate = () => {
        const {id, toggle, repeat} = getAlarm(updateId!);
        setUpdate({
            id,
            time: `
                ${timeProcess(11 - timeRef?.current?.hourRef?.current?.hour)}.
                ${timeProcess(60 - timeRef?.current?.minuteRef?.current?.minute)}
            `,
            meridiem,
            toggle,
            day: alarmDay,
            memo: textarea,
            repeat
        })
        setAlarmPageIndex(0);
        dataReset();
    }

    const timeProcess = (time: number):string => {
        if(time === 0){
            return `12`
        }else if(time < 10){
            return `0${time}`
        }
        return `${time}`;
    }

    const dataReset = () => {
        setTextarea('');
        setUpdateId(0);
    }

    const switchRender = () => {
        switch(alarmPageIndex){
            case 1 :
                return (
                    <Wrapper>
                        <AlarmHeader text={'Choose a time to wake up'} />
                        <TimeChoose 
                            meridiem={meridiem}
                            setMeridiem={setMeridiem}
                            ref={timeRef}
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
                            <MessageTextArea 
                                value={textarea}
                                onChange={(e) => setTextarea(e.target.value)} 
                            />
                            <MessageLabel>What's this for?</MessageLabel>
                        </MessageInputWrapper>
                        <RegisterButton
                            onClick={handleRegister}
                        >
                            ALL SETUP
                        </RegisterButton>
                    </Wrapper>
                )
            case 2 :
                return (
                    <Wrapper>
                        <AlarmHeader text={'Update a time to wake up'} />
                        <TimeChoose 
                            meridiem={meridiem}
                            setMeridiem={setMeridiem}
                            ref={timeRef}
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
                            <MessageTextArea 
                                value={textarea}
                                onChange={(e) => setTextarea(e.target.value)} 
                            />
                            <MessageLabel>What's this for?</MessageLabel>
                        </MessageInputWrapper>
                        <RegisterButton
                            onClick={handleUpdate}
                        >
                            UPDATE ALARM
                        </RegisterButton>
                    </Wrapper>
                )
            default: return <Wrapper></Wrapper>
        }
    }

    return switchRender()
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

export default AlarmRegisterUpdate;