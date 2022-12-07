import React, {useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import AlarmHeader from './AlarmHeader';
import RepeatDay from './components/RepeatDay';

import alarmStore, { IAlarmState } from 'src/modules/zustand/alarm';

interface IHTMLDivElement extends HTMLDivElement{
    [index:string]: any
}

const AlarmRegister = () => {
    const { setRegister } = alarmStore();
    const [alarmDay, setAlarmDay] = useState<any>({월: false,화: false,수: false,목: false,금: false,토: false,일: true});
    const minuteRef = useRef<IHTMLDivElement>(null);
    const hourRef = useRef<IHTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [meridiem, setMeridiem] = useState<string>(''); 

    const hourList = Array(12).fill(0).map((arr, index) => {
        if(index > 8){
            return `${index + 1}`
        }
        return `0${index + 1}`
    });
    const minuteList = Array(60).fill(0).map((arr, index) => {
        if(index > 9){
            return `${index}`
        }
        return `0${index}`
    });

    useEffect(() => {
        let currentTime =  new Date().toLocaleTimeString();

        if(currentTime.includes('오후')){
            setMeridiem('PM')
            currentTime = currentTime.replace('오후 ','');
        }else if(currentTime.includes('오전')){
            setMeridiem('AM')
            currentTime = currentTime.replace('오전 ','');
        }

        const time = currentTime.split(':');

        hourRef.current!.hour = 12 - Number(time[0]);
        minuteRef.current!.minute = 60 - Number(time[1]);

        handleMouseMove(hourRef, 0)
        handleMouseMove(minuteRef, 0)
    },[])

    const handleMouseDown = (ref:React.RefObject<IHTMLDivElement>, position:number) => {
        const target = ref.current!;
        target.isClick = true;
        target.startPosition = position;
    }
    const handleMouseMove = (ref:React.RefObject<IHTMLDivElement>, position:number) => {
        const target = ref.current!;
        const checkHour = target.hour !== null && target.hour !== undefined && target.hour !== NaN

        if(target.isClick){
            if(target.startPosition - position >= 30){
                if(checkHour){
                    target.hour = target.hour - 1;
                    target.style.transition = `all 0s ease-in-out`;
                    target.style.transform = `translateY(${60 * (target.hour - 6)}px)`;
                    target.startPosition = position;
                }else{
                    target.minute = target.minute - 1;
                    target.style.transition = `all 0s ease-in-out`;
                    target.style.transform = `translateY(${60 * (target.minute - 30)}px)`;
                    target.startPosition = position;
                }
            }else if(target.startPosition - position <= -30){
                if(checkHour){
                    target.hour = target.hour + 1;
                    target.style.transition = `all 0s ease-in-out`;
                    target.style.transform = `translateY(${60 * (target.hour - 6)}px)`;
                    target.startPosition = position;
                }else {
                    target.minute = target.minute + 1;
                    target.style.transition = `all 0s ease-in-out`;
                    target.style.transform = `translateY(${60 * (target.minute - 30)}px)`;
                    target.startPosition = position;
                }
            }
        }else{ //  현재 시간 위치 수정
            if(checkHour){
                target.style.transition = `none`;
                target.style.transform = `translateY(${60 * (target.hour - 6)}px)`;
            }else{
                target.style.transition = `none`;
                target.style.transform = `translateY(${60 * (target.minute - 30)}px)`;
            }
        }
    }
    const handleMouseUp = (ref:React.RefObject<IHTMLDivElement>) => {
        ref.current!.isClick = false
    }  

    const handleRegister = () => {
        setRegister({
            id: 2,
            time: `${12 - hourRef.current!.hour}.${60 - minuteRef.current!.minute}`,
            toggle: true,
            day: alarmDay,
            memo: textareaRef.current!.value,
            repeat: 5
        })
    }

    return (
        <Wrapper>
            <AlarmHeader text={'Choose a time to wake up'} />
            <TimeChooseWrapper>
                <TimeChoose>
                    <HourSelect 
                        ref={hourRef}
                        onMouseDown={(e) => handleMouseDown(hourRef, e.clientY)}
                        onMouseMove={(e) => handleMouseMove(hourRef, e.clientY)}
                        onMouseUp={() => handleMouseUp(hourRef)}
                        onMouseLeave={() => handleMouseUp(hourRef)}
                    >
                        {hourList.map((hour) => (
                            <div key={`hour-${hour}`}>{hour}</div>
                        ))}
                    </HourSelect>
                    <Colon>:</Colon>
                    <MinuteSelect 
                        ref={minuteRef}
                        onMouseDown={(e) => handleMouseDown(minuteRef, e.clientY)}
                        onMouseMove={(e) => handleMouseMove(minuteRef, e.clientY)}
                        onMouseUp={() => handleMouseUp(minuteRef)}
                        onMouseLeave={() => handleMouseUp(minuteRef)}
                    >
                        {minuteList.map((minute) => (
                            <div key={`minute-${minute}`}>{minute}</div>
                        ))}
                    </MinuteSelect>
                </TimeChoose>
            </TimeChooseWrapper>
            <Meridiem>
                {meridiem}
            </Meridiem>
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
    align-items: center;
    text-align: center;
    margin: 20px 0;
    overflow: hidden;
`;
const TimeChoose = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
`;
const Colon = styled.div`
    ${({theme}) => theme.div.vhCenter}
    font-size: 40px;
    height: inherit;
`;
const HourSelect = styled.div`
    ${({theme}) => theme.div.vhCenter}
    font-size: 48px;
    height: inherit;
    overflow-y: hidden;
    padding-top: 60px;
    cursor: pointer;
`;
const MinuteSelect = styled(HourSelect)`
    padding-bottom: 120px;
`;
const Meridiem = styled.div`
    ${({theme}) => theme.div.vhCenter}
    position: absolute;
    margin-top: 258px;
    margin-left: 216px;
    font-size: 24px;
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