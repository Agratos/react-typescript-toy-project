import styled, { css } from 'styled-components';

interface IDayButtonProps {
    day: string[]
    toggle: boolean
}

const DayButton = ({day, toggle}:IDayButtonProps) => {
    return (
        <Wrapper toggle={toggle ? day[1] === 'true' ? true : false : false}>
            <Day>{day[0][0]}</Day>            
        </Wrapper>
    )
}
const Wrapper = styled.div<{toggle:boolean}>`
    ${({theme}) => theme.div.vhCenter}
    width: 24px;
    height: 24px;
    border: 2px solid #414141;
    border-radius: 50%;
    margin-left: 8px;
    color: #414141;

    ${({toggle}) => toggle && css`
        background-color: #c4b427;
    `}
    transition: all 0.5s ease-in-out;
`;
const Day = styled.div`
    font-size: 16px;
    font-weight: 500;
`;

export default DayButton;