import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import getTotalLength from 'src/utils/getTotalLength';

interface ISvgAnimationProps {
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    id: string;
    size: number;
    spead: number;
    color: string;
}

const Animation = ({Svg, id, size, spead, color}:ISvgAnimationProps) => {
    const [dasharray, setDashArray] = useState<number>(0)
    const [dashoffset, setDashOffset] = useState<number>(0);

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

    return (
        <Wrapper color={color}>
            <Svg 
                stroke='green'
                strokeDasharray={dasharray} 
                strokeDashoffset={dashoffset}
                
            />
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
    & path {
        stroke: ${({color}) => color};
    }
`;
export default Animation;