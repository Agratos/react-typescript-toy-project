import styled from 'styled-components';

//import { TestComponent1, TestComponent2 } from '../components/test';

import AlarmList from 'src/components/alarm/AlarmList';
import AlarmRegister from 'src/components/alarm/AlarmRegister';

const MainPage = () => { 
    return (
        <Wrapper>
            <AlarmList />
            <AlarmRegister />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    ${({theme}) => theme.div.hCenter}
    flex: 1;
`;

export default MainPage;