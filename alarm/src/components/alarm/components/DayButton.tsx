import styled, { css } from 'styled-components';

interface IDayButtonProps {
    day: string[]
}

const DayButton = ({day}:IDayButtonProps) => {
    return (
        <Wrapper toggle={day[1] === 'true' ? true : false}>
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
    margin: 4px;
    color: #414141;

    ${({toggle}) => toggle && css`
        background-color: #e5e517;
    `}
`;
const Day = styled.div`
    font-size: 16px;
    font-weight: 500;
`;

export default DayButton;