import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import Test from 'src/assets/images/svg/test.svg';
import Test2 from 'src/assets/images/svg/test2.svg';

import getTotalLength from 'src/utils/getTotalLength';

interface ISvgAnimationProps {
    svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    id: string;
    size: number;
    spead: number;
}

const Animation = ({svg, id, size, spead}:ISvgAnimationProps) => {
    const [dasharray, setDashArray] = useState<number>(0)
    const [dashoffset, setDashOffset] = useState<number>(0);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => { // 변수 설정
        const temp = getTotalLength({id, size})[0];
        setDashArray(temp);
        setDashOffset(temp);
    },[])

    useEffect(() => { // 성능 개선?
        const draw = setTimeout(() => {
            calcDashoffset();
        }, spead)
        
        if(!dashoffset) clearInterval(draw);
    },[dashoffset])

    const calcDashoffset = () => {
        setDashOffset((preOffset) => preOffset - 10 < 0 ? 0 : preOffset - 10); // 0 ~ length 사이
    }


    const TestSvg = styled(svg)<{dasharray:number, dashoffset: number}>`
        > path {
            transform: scale(0.8);
            stroke: yellowgreen;
            stroke-dasharray: ${({dasharray}) => dasharray};
            stroke-dashoffset: ${({dashoffset}) => dashoffset}
        }
        mix-blend-mode: difference;
    `;

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
z-index: -1;
`;
export default Animation;