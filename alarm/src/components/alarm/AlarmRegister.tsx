import React, {useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import AlarmHeader from './AlarmHeader';
import RepeatDay from './components/RepeatDay';

import alarmStore, { IAlarmState} from 'src/modules/zustand/alarm';

interface IHTMLDivElement extends HTMLDivElement{
    [index:string]: any
}

const AlarmRegister = () => {
    const [alarmDay, setAlarmDay] = useState<any>({월: false,화: false,수: false,목: false,금: false,토: false,일: true});
    const minuteRef = useRef<IHTMLDivElement>(null);
    const hourRef = useRef<IHTMLDivElement>(null);

    const minuteList = Array(60).fill(0).map((arr, index) => {return index});
    const hourList = Array(12).fill(0).map((arr, index) => {
        if(index > 8){
            return `${index + 1}`
        }
        return `0${index + 1}`
    });

    useEffect(() => {
        hourRef.current!.hour = 6;
    },[])

    const handleMouseDown = (ref:React.RefObject<IHTMLDivElement>, position:number) => {
        const target = ref.current!;
        target.isClick = true;
        target.startPosition = position;
    }
    const handleMouseMove = (ref:React.RefObject<IHTMLDivElement>, position:number) => {
        const target = ref.current!;
        if(target.isClick){
            if(target.startPosition - position >= 60){
                target.hour = target.hour - 1;
                target.style.transition = `all 0s ease-in-out`;
                target.style.transform = `translateY(${60 * (target.hour - 6)}px)`;
                target.startPosition = position;
            }else if(target.startPosition - position <= -60){
                target.hour = target.hour + 1;
                target.style.transition = `all 0s ease-in-out`;
                target.style.transform = `translateY(${60 * (target.hour - 6)}px)`;
                target.startPosition = position;
            }
        }
    }
    const handleMouseUp = (ref:React.RefObject<IHTMLDivElement>) => {
        ref.current!.isClick = false

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
                    <MinuteSelect ref={minuteRef}>
                        {minuteList.map((minute) => (
                            <div key={`minute-${minute}`}>{minute}</div>
                        ))}
                    </MinuteSelect>
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
            <RegisterButton
                onClick={() => console.log(`설정한 시각은 ${12 - hourRef.current!.hour} : 30 분 입니다.`)}
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