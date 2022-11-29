import styled from 'styled-components';

const DayButton = () => {
    const toggle = true
    return (
        <Wrapper>
            <Day>W</Day>            
        </Wrapper>
    )
}
const Wrapper = styled.div`
    border: 2px solid #414141;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    color: #414141;
    margin: 4px;
`;
const Day = styled.div`
    ${({theme}) => theme.div.vhCenter}
    font-size: 16px;
    font-weight: 500;
`;

export default DayButton;