import { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';

interface IDayButtonProps {
    active: boolean;
    day: string[];
    toggle: boolean;
    setAlarmDay?: Dispatch<SetStateAction<any>>
}

const DayButton = ({active, day, toggle, setAlarmDay}:IDayButtonProps) => {
    const switchDay = (day:string) => {
        switch(day){
            case '0': return '일';
            case '1': return '월';
            case '2': return '화';
            case '3': return '수';
            case '4': return '목';
            case '5': return '금';
            case '6': return '토';
        }
    }

    return (
        <Wrapper 
            active={active}
            toggle={toggle ? day[1] === 'true' ? true : false : false}
            onClick={() => setAlarmDay && setAlarmDay((arr:any) => {
                const temp = {
                    ...arr,
                    [`${day[0]}`]: !arr[`${day[0]}`]
                }
                return temp;
            })}
        >
            <Day>{switchDay(day[0][0])}</Day>            
        </Wrapper>
    )
}
const Wrapper = styled.div<{toggle:boolean, active:boolean}>`
    ${({theme}) => theme.div.vhCenter}
    width: 24px;
    height: 24px;
    border: 2px solid #414141;
    border-radius: 50%;
    margin-left: 8px;
    color: #8c8b8b;
    transition: all 0.5s ease-in-out;

    ${({toggle}) => toggle && css`
        background-color: #e6d011;
        color: #313131;
    `}
    ${({active}) => active && css`
        cursor: pointer;
    `}
`;
const Day = styled.div`
    ${({theme}) => theme.fontFamily.apple}
    font-size: 12px;
    font-weight: 700;
`;

export default DayButton;