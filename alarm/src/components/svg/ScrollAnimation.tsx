import { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import Svg from 'src/assets/images/svg/header-title.svg';

import getTotalLength from 'src/utils/getTotalLength';

const ScrollAnimation = () => {
    const [dasharray, setDashArray] = useState<number>(0)
    const [dashoffset, setDashOffset] = useState<number>(0);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => { // 변수 설정
        const temp = getTotalLength({id: 'header-title_svg', size: 1})[0];
        setDashArray(temp);
        setDashOffset(temp);
    },[])
    
    useEffect(() => { // 이벤트 등록 dasharray가 변경 되면 다시 셋팅;
        dasharray && window.addEventListener('scroll', calcDashoffset) // dasharray가 0이 아닐때

        return () => window.removeEventListener('scroll', calcDashoffset)
    },[dasharray])

    const calcDashoffset = () => {
        const length = dasharray;
        const scrollY = window.scrollY + (window.innerHeight * 0.8); // 처음 시작 위치 설정 가능
        const ratio = (scrollY - document.body.offsetTop) / document.body.offsetHeight;
        const value = length - (length * ratio);
        console.log(value);
        setDashOffset(value < 0 ? 0 : value > length ? length : value); // 0 ~ length 사이
    }

    return (
        <Wrapper ref={wrapperRef} color={'white'}>
            <Svg strokeDasharray={dasharray} strokeDashoffset={dashoffset}/>
        </Wrapper>
    )
}
const Wrapper = styled.div<{color: string}>`
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: black;
    & path {
        stroke: ${({color}) => color};
    }
`;

export default ScrollAnimation;