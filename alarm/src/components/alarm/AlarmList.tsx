import styled from 'styled-components';

import { MdOutlineAlarmAdd } from 'react-icons/md';
import Header from 'src/components/alarm/AlarmHeader';
import AlarmCard from './AlarmCard';

import alarmStore from 'src/modules/zustand/alarm';

const AlarmList = () => {
    const { alarm, setRegisterToggle } = alarmStore()

    return (
        <Wrapper>
            <Header text={'Your Alarms'}/>
            <Body>
                {alarm.map((data) => (
                    <AlarmCard 
                        key={`alarm-card-${data.id}`}
                        id={data.id}
                    />
                ))}
            </Body>
            <ButtonWrapper>
                <AddButton
                    onClick={setRegisterToggle}
                >
                    <MdOutlineAlarmAdd size={28} color={'#dd641e'}/>
                </AddButton>
            </ButtonWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 350px;
    height: 650px;
    margin: 16px;
    padding: 16px;
    border-radius: 12px;
    background-color: #171717;
    color: #e9e9e9;
    font-size: 24px;
`;
const ButtonWrapper = styled.div`
    ${({theme}) => theme.div.hCenter}
`;
const Body = styled.div`
    flex: 1;
`;
const AddButton = styled.div`
    ${({theme}) => theme.div.vhCenter}

    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.color.yellow};
    cursor: pointer;
`;

export default AlarmList;