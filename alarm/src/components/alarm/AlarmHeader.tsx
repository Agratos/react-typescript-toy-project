import styled from 'styled-components';

import { IoAlarmOutline } from 'react-icons/io5';

interface IAlarmHeaderParams {
    text: string
}

const AlarmHeader = ({text}:IAlarmHeaderParams) => {
    return (
        <Wrapper>
            <IconTextWrapper>
                <IoAlarmOutline size={24} />
                <IconText>
                    Alarm
                </IconText>
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
const Title = styled.div`
    margin-top: 28px;

    font-size: 18px;
    font-weight: lighter;
    font-family: 'jua', sans-serif;
`;

export default AlarmHeader;