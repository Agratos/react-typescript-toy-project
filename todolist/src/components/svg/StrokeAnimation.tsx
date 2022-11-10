import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import getTotalLength from 'src/utils/getTotalLength';

interface ISvgStrokeAnimationProps {
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    id: string;
    size: number;
}

const StrokeAnimation = ({Svg, id, size}:ISvgStrokeAnimationProps) => {
    const [dasharray, setDashArray] = useState<number[]>([])
    const [dashoffset, setDashOffset] = useState<number[]>([]);

    useEffect(() => { // 변수 설정
        const temp = getTotalLength({id, size});
        setDashArray(temp);
        setDashOffset(temp);
    },[])

    return(
        <Wapper>
            <SvgWrapper>
                <Svg />
            </SvgWrapper>
        </Wapper>
    )
}
const createCSS = () => {
    let styles:string = '';

    styles += `
        animation: fill-white-svg 2s ease forwards 3s;
        mask{
            animation: fill-white-mask 2s ease forwards 3.5s;
        }
        @keyframes line-animation {
            to{
                stroke-dashoffset: 0;
            }
        }
        @keyframes fill-white-mask {
            from{
                fill: white !important;
            }
            to{
                fill: transparent;
            }
        }
        @keyframes fill-white-svg {
            to {
            //transform: rotate(360deg);
                fill: white;
            }
        }
    `

    for(let i = 0; i < 8 ; i++){
        styles += `
            > path:nth-child(${i + 1}){
                stroke-dasharray: 371.52294921875;
                stroke-dashoffset: 371.52294921875;
                animation: line-animation 2s ease forwards;
            }
        `
    }
    return css`${styles}`;
}
const Wapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(233, 233, 233);   
`;
const SvgWrapper = styled.div`
    ${createCSS()}
`;

export default StrokeAnimation;