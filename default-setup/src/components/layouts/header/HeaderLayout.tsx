import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderTitle from 'src/assets/images/svg/header-title.svg';

import useGetTotalLength from 'src/hooks/useGetTotalLength';

const HeaderLayout = () => {
    //console.log(useGetTotalLength({id: 'header-title_svg', size: 8}))
    return (
        <Wrapper>
            <TextWrapper>
                <IntroduceText>
                    EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.
                </IntroduceText>
                <TitleWrapper>
                    <Title />
                </TitleWrapper>
            </TextWrapper>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    height: fit-content;
    width: 100vw;
    border-bottom: 0.5px solid black;
`;
const TextWrapper = styled.div`
    margin: 16px;
`;
const IntroduceText = styled.div`
    text-align: center;
    font-size: 14px;
`;
const TitleWrapper = styled.div`
    text-align: center;
    margin-top: 8px;
`;
const Title = styled(HeaderTitle)`
    transform: scale(1) ;

    > path:nth-child(2){
        stroke-dasharray: 248.09719848632812;
        stroke-dashoffset: 248.09719848632812;
        animation: line-animation 2s ease forwards;
    }
    > path:nth-child(3){
        stroke-dasharray: 258.83404541015625;
        stroke-dashoffset: 258.83404541015625;
        animation: line-animation 2s ease forwards 0.3s;
    }
    > path:nth-child(4){
        stroke-dasharray: 173.49522399902344;
        stroke-dashoffset: 173.49522399902344;
        animation: line-animation 2s ease forwards 0.6s;
    }
    > path:nth-child(5){
        stroke-dasharray: 171.2396697998047;
        stroke-dashoffset: 171.2396697998047;
        animation: line-animation 2s ease forwards 0.9s;
    }
    > path:nth-child(6){
        stroke-dasharray: 188.04856872558594;
        stroke-dashoffset: 188.04856872558594;
        animation: line-animation 2s ease forwards 1.2s;
    }
    > path:nth-child(7){
        stroke-dasharray: 173.49539184570312;
        stroke-dashoffset: 173.49539184570312;
        animation: line-animation 2s ease forwards 1.5s;
    }
    > path:nth-child(8){
        stroke-dasharray: 332.95587158203125;
        stroke-dashoffset: 332.95587158203125;
        animation: line-animation 2s ease forwards 1.8s;
    }
    > path:nth-child(9){
        stroke-dasharray: 225.71719360351562;
        stroke-dashoffset: 225.71719360351562;
        animation: line-animation 2s ease forwards 2.1s;
    }

    @keyframes line-animation {
        to{
            stroke-dashoffset: 0;
        }
    }
`;


export default React.memo(HeaderLayout);
