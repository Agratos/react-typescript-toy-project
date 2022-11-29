import styled from 'styled-components';

const DayButton = () => {
    const toggle = true
    return (
        <Wrapper>
            <Day>M</Day>            
        </Wrapper>
    )
}
const Wrapper = styled.div`
    ${({theme}) => theme.div.vhCenter}
    width: 24px;
    height: 24px;
    border: 2px solid #414141;
    border-radius: 50%;
    margin: 4px;
    color: #414141;
`;
const Day = styled.div`
    font-size: 16px;
    font-weight: 500;
`;

export default DayButton;