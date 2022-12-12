import { useEffect } from 'react';
import styled from 'styled-components';

import { MdOutlineAlarmAdd } from 'react-icons/md';
import Header from 'src/components/alarm/AlarmHeader';
import AlarmCard from './AlarmCard';

import alarmStore from 'src/modules/zustand/alarm';

const AlarmList = () => {
    const { alarm, alarmPageIndex , setAlarmPageIndex } = alarmStore()

    const handleRegisterButton = () => {
        if(alarmPageIndex === 1){
            setAlarmPageIndex(0);
        }else{
            setAlarmPageIndex(1);
        }
    }

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
                    onClick={handleRegisterButton}
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
    margin-left: 8px;
    padding-right: 8px;

    overflow-y: auto;
    ::-webkit-scrollbar{
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #9c9c9c;
        border-radius: 16px;
    }

    
    //-ms-overflow-style: none; /* IE and Edge */
    //scrollbar-width: none; /* Firefox */
    //::-webkit-scrollbar {
    //    display: none; /* Chrome, Safari, Opera*/
    //}
    
`;
const AddButton = styled.div`
    ${({theme}) => theme.div.vhCenter}
    margin-top: 20px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.color.yellow};
    cursor: pointer;
`;

export default AlarmList;