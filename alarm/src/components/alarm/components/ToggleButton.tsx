import { useState } from 'react';
import styled, { css } from 'styled-components';

import alarmStore from 'src/modules/zustand/alarm';

interface IToggleButtonParams {
    id: number
}

const ToggleButton = ({id}: IToggleButtonParams) => {
    const toggle:boolean = alarmStore().getAlarm(id).toggle;
    const { setAlarmToggle } = alarmStore()

    return (
        <Wrapper>
            <Button toggle={toggle}>
                <Circle 
                    toggle={toggle}
                    onClick={() => setAlarmToggle(id)}
                />
            </Button>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    ${({theme}) => theme.div.vhCenter}
`;
const Button = styled.div<{toggle: boolean}>`
    width: 60px;
    height: 16px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background-color: ${({toggle}) => (toggle ? '#c57a1f' : '#504e58')};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
`;
const Circle = styled.div<{toggle: boolean}>` 
    background-color: ${({toggle}) => toggle ? '#dedb1b' : '#9c9b94'};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    position: absolute;
    left: 0px;
    transition: all 0.5s ease-in-out;
    ${({toggle}) =>
        toggle && css`
            transform: translate(40px, 0);
            transition: all 0.5s ease-in-out;
    `}
`;


export default ToggleButton;