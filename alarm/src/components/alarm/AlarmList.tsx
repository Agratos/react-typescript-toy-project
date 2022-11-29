import styled from 'styled-components';

import Header from 'src/components/alarm/AlarmHeader';
import AlarmCard from './AlarmCard';

const AlarmList = () => {
    return (
        <Wrapper>
            <Header />
            <AlarmCard 
                id={1}
            />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background-color: #171717;
    width: 350px;
    height: 650px;
    border-radius: 12px;

    align-items: center;
    text-align: center;

    color: #e9e9e9;
    font-size: 24px;
    padding: 16px;
    margin: 16px;
`;

export default AlarmList;