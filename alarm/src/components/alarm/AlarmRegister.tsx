import styled from 'styled-components';

import AlarmHeader from './AlarmHeader';

import alarmStore from 'src/modules/zustand/alarm';

const AlarmRegister = () => {
    const { registerToggle } = alarmStore();
    return (
        <Wrapper>
            <AlarmHeader text={'Choose a time to wake up'} />
            <RepeatDayWrapper>

            </RepeatDayWrapper>
            <MessageInputWrapper>
                <MessageInput>
                    
                </MessageInput>
            </MessageInputWrapper>
            <RegisterButton>
                ALL SET
            </RegisterButton>
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
    padding: 16px;
    margin: 16px;
`;
const TimeChooseWrapper = styled.div``;
const RepeatDayWrapper = styled.div``;
const MessageInputWrapper = styled.div``;
const MessageInput = styled.div``;
const MessageLabel = styled.label``;
const RegisterButton = styled.div`
    ${({theme}) => theme.fontFamily.apple}
    width: inherit;
    text-align: center;
    padding: 16px 0;
    border-radius: 60px;
    background-color: ${({theme}) => theme.color.yellow};
    color: ${({theme}) => theme.color.orange};
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;
`;

export default AlarmRegister