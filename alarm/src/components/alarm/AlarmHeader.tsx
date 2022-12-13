import styled, { withTheme } from 'styled-components';

import { IoAlarmOutline } from 'react-icons/io5';
import { HiBackspace } from 'react-icons/hi';

import alarmStore from 'src/modules/zustand/alarm';

interface IAlarmHeaderParams {
    text: string
    rightPage?: boolean;
}

const AlarmHeader = ({text, rightPage = false}:IAlarmHeaderParams) => {
    const { setAlarmPageIndex } = alarmStore();

    const handleReturnButton = () => {
        setAlarmPageIndex(0);
    }

    return (
        <Wrapper>
            <IconTextWrapper>
                <IoAlarmOutline size={24} />
                <IconText>
                    Alarm
                </IconText>
                <ReturnButton
                    onClick={handleReturnButton}
                    rightPage={rightPage}
                >
                    <HiBackspace size={24} color={`white`}/>
                </ReturnButton>
            </IconTextWrapper> 
            <Title>
                {text}
            </Title>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    ${({theme}) => theme.div.vhCenter}
    margin-top: 4px;
    margin-bottom: 16px;
    color: #cecece;
`;
const IconTextWrapper = styled.div`
    ${({theme}) => theme.div.hCenter}
`;
const IconText = styled.div`
    font-size: 24px;
    margin-left: 8px;
    margin-top: 4px;
`;
const ReturnButton = styled.div<{rightPage:boolean}>`
    display: ${({rightPage}) => rightPage ? 'block' : 'none'};
    position: absolute;
    margin-left: 300px;
    cursor: pointer;
`;
const Title = styled.div`
    margin-top: 14px;

    font-size: 18px;
    font-weight: lighter;
    font-family: 'jua', sans-serif;
`;

export default AlarmHeader;