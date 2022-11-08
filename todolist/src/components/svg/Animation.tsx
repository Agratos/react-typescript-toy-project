import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import Test from 'src/assets/images/svg/test.svg';

import getTotalLength from 'src/utils/getTotalLength';

const Animation = () => {
    const [dasharray, setDashArray] = useState<number>(0)
    const [dashoffset, setDashOffset] = useState<number>(0);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => { // 변수 설정
        const temp = getTotalLength({id: 'test_svg', size: 1})[0];
        setDashArray(temp);
        setDashOffset(temp);
    },[])

    useEffect(() => { // 성능 개선?
        const draw = setTimeout(() => {
            calcDashoffset();
            console.log('작동중');
        }, 25)
        
        if(!dashoffset) clearInterval(draw);
    },[dashoffset])

    const calcDashoffset = () => {
        setDashOffset((preOffset) => preOffset - 10 < 0 ? 0 : preOffset - 10); // 0 ~ length 사이
    }

    return (
        <Wrapper ref={wrapperRef}>
            <TestSvg dasharray={dasharray} dashoffset={dashoffset}/>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    position: absolute;
    top: 0px;
    left: -600px;
    z-index: -1;
`;
const TestSvg = styled(Test)<{dasharray:number, dashoffset: number}>`
    //margin-top: 20%;
    > path {
        stroke: yellowgreen;
        stroke-dasharray: ${({dasharray}) => dasharray};
        stroke-dashoffset: ${({dashoffset}) => dashoffset}
    }
    mix-blend-mode: difference;
`;

export default Animation;