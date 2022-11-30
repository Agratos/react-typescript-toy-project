import styled, { css } from 'styled-components';

interface IDayButtonProps {
    day: string[];
    toggle: boolean;
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
    color: #8c8b8b;

    ${({toggle}) => toggle && css`
        background-color: #e6d011;
        color: #313131;
    `}
    transition: all 0.5s ease-in-out;
`;
const Day = styled.div`
    ${({theme}) => theme.fontFamily.apple}
    font-size: 12px;
    font-weight: 700;
`;

export default DayButton;