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
            <SvgWrapper dasharray={dasharray} dashoffset={dashoffset}>
                <Svg />
            </SvgWrapper>
        </Wapper>
    )
}
const createCSS = (dasharray: number[], dashoffset: number[]) => {
    let styles:string = '';

    styles += `
        transform: scale(1);

        //animation: fill-white-svg 2s ease forwards 3s;

        // mask{
        //     animation: fill-white-mask 2s ease forwards 3.5s;
        // }

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
                fill: white;
            }
        }
    `  

    for(let i = 0 ; i < 8 ; i++){
        styles += `
            & path:nth-child(${i + 2}){
                stroke-dasharray: ${dasharray[i]};
                stroke-dashoffset: ${dashoffset[i]};
                animation: line-animation 2s ease forwards ${0.3 * i}s;
            }
        `
    }
    return css`${styles}`;
}
const Wapper = styled.div`
    width: 100%;
    height: 100%;
`;
const SvgWrapper = styled.div<{dasharray:number[], dashoffset:number[]}>`
    ${({dasharray, dashoffset}) => createCSS(dasharray, dashoffset)}
`;

export default StrokeAnimation;