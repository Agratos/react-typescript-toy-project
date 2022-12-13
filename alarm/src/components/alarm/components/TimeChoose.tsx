import React, {useState, useRef, useEffect, useImperativeHandle } from 'react';
import styled from 'styled-components';

import {RefHandler, IHTMLDivElement} from '../types';
import alarmStore from 'src/modules/zustand/alarm';

interface IProps {
    children?: React.ReactNode;
    meridiem: string;
    setMeridiem: React.Dispatch<React.SetStateAction<string>>;
}

const TimeChoose = React.forwardRef<RefHandler, IProps>(({meridiem, setMeridiem}:IProps, ref) => {
    const { getAlarm, updateId, alarmPageIndex } = alarmStore();
    const minuteRef = useRef<IHTMLDivElement>(null);
    const hourRef = useRef<IHTMLDivElement>(null);
    const hourList = (Array(12).fill(0).map((arr, index) => {
        if(index === 0){
            return '12'
        }
        else if(index > 9){
            return `${index}`
        }
        return `0${index}`
    }));
    const minuteList = Array(60).fill(0).map((arr, index) => {
        if(index > 9){
            return `${index}`
        }
        return `0${index}`
    });
    
    hourList.push('12', '01', '02');
    hourList.unshift('09', '10', '11');
    minuteList.push('00', '01', '02');
    minuteList.unshift('57', '58', '59');

    useImperativeHandle(ref, () => ({
        minuteRef,
        hourRef
    }));

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

        if(updateId){
            const {time} = getAlarm(updateId!);
            const timeTemp =  time.replace(/\n|\r|\s*/g, "").split('.')
            
            if(hourRef.current && minuteRef.current){
                hourRef.current.hour = 11 - Number(timeTemp[0])
                minuteRef.current.minute = 60 - Number(timeTemp[1])
            }
        }else{
            if(hourRef.current && minuteRef.current){
                hourRef.current.hour = 11 - (Number(time[0]) === 12 ? 0 : Number(time[0]));
                minuteRef.current.minute = 60 - Number(time[1]);
            }
        }

        handleMouseMove(hourRef, 0)
        handleMouseMove(minuteRef, 0)
    },[updateId])

    const handleMouseDown = (ref:React.RefObject<IHTMLDivElement>, position:number) => {
        if(ref.current){
            const target = ref.current;
            target.isClick = true;
            target.startPosition = position;
        }
    }

    const handleMouseMove = (ref:React.RefObject<IHTMLDivElement>, position:number, wheel:boolean = false) => {
        if(ref.current){
            const target = ref.current;
            const checkHour = target.hour !== null && target.hour !== undefined && target.hour !== NaN
            
            if(target.isClick || wheel){
                if(target.startPosition - position >= 30 || position === 100){
                    if(checkHour){
                        if(target.hour - 1 === -1){
                            target.hour = 11;
                            handleMeridiem();
                        }else{
                            target.hour = target.hour - 1;
                        }
                        !wheel && (target.startPosition = position);
                        timeTranslateY(ref, (target.hour - 6))
                    }else{
                        if(target.minute - 1 === -1){
                            console.log(target.minute)
                            target.minute = 59;
                        }else{
                            target.minute = target.minute - 1;
                        }
                        !wheel && (target.startPosition = position);
                        timeTranslateY(ref, (target.minute - 30))
                    }
                }else if(target.startPosition - position <= -30 || position === -100){
                    if(checkHour){
                        if(target.hour + 1 === 12){
                            target.hour = 0;
                            handleMeridiem();
                        }else{
                            target.hour = target.hour + 1;
                        }
                        !wheel && (target.startPosition = position);
                        timeTranslateY(ref, (target.hour - 6))
                    }else {
                        if(target.minute + 1 === 61){
                            target.minute = 1;
                        }else {
                            target.minute = target.minute + 1;
                        }
                        !wheel && (target.startPosition = position);
                        timeTranslateY(ref, (target.minute - 30))
                    }
                }
            }else{ //  현재 시간 위치 수정
                if(checkHour){
                    timeTranslateY(ref, (target.hour - 6), true)
                }else{
                    timeTranslateY(ref, (target.minute - 30), true)
                }
            }
        }
    }

    const handleMouseUp = (ref:React.RefObject<IHTMLDivElement>) => {
        ref.current!.isClick = false
    }  

    const handleMeridiem = () => {
        switch(meridiem){
            case 'AM':
                return setMeridiem('PM');
            case 'PM':
                return setMeridiem('AM');
        }
    }

    const timeTranslateY = (ref:React.RefObject<IHTMLDivElement>, number:number, reset:boolean = false) => {
        const target = ref.current!;

        switch(reset){
            case true:
                target.style.transition = `none`;
                break
            case false:
                target.style.transition = `all 0s ease-in-out`;
                break;
        }

        target.style.transform = `translateY(${60 * number}px)`;
    }

    return (
        <Wrapper>
            <TimeChooseWrapper>
                <HourSelect 
                    ref={hourRef}
                    onMouseDown={(e) => handleMouseDown(hourRef, e.clientY)}
                    onMouseMove={(e) => handleMouseMove(hourRef, e.clientY)}
                    onMouseUp={() => handleMouseUp(hourRef)}
                    onMouseLeave={() => handleMouseUp(hourRef)}
                    onWheel={(e) => handleMouseMove(hourRef, e.deltaY, true)}
                >
                    {hourList.map((hour, index) => (
                        <div key={`hour-${index}`}>{hour}</div>
                    ))}
                </HourSelect>
                <Colon>:</Colon>
                <MinuteSelect 
                    ref={minuteRef}
                    onMouseDown={(e) => handleMouseDown(minuteRef, e.clientY)}
                    onMouseMove={(e) => handleMouseMove(minuteRef, e.clientY)}
                    onMouseUp={() => handleMouseUp(minuteRef)}
                    onMouseLeave={() => handleMouseUp(minuteRef)}
                    onWheel={(e) => {
                        handleMouseMove(minuteRef, e.deltaY, true)
                    }}
                >
                    {minuteList.map((minute ,index) => (
                        <div key={`minute-${index}`}>{minute}</div>
                    ))}
                </MinuteSelect>
            </TimeChooseWrapper>
            <Meridiem
                onClick={handleMeridiem}
            >
                {meridiem}
            </Meridiem>
        </Wrapper>
    )
})   
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex:1;
    width: 100%;
    align-items: center;
    text-align: center;
    margin: 20px 0;
    overflow: hidden;
`;
const TimeChooseWrapper = styled.div`
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
    margin-left: 216px;
    font-size: 24px;
    cursor: pointer;
`;

export default TimeChoose;