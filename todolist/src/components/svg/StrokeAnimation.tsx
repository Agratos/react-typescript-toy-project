import { useState, useEffect } from 'react';
import styled from 'styled-components';



import getTotalLength from 'src/utils/getTotalLength';

interface ISvgStrokeAnimationProps {
    svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    id: string;
    size: number;
}

const StrokeAnimation = ({svg, id, size}:ISvgStrokeAnimationProps) => {
    const [dasharray, setDashArray] = useState<number[]>([])
    const [dashoffset, setDashOffset] = useState<number[]>([]);

    useEffect(() => { // 변수 설정
        const temp = getTotalLength({id, size});
        setDashArray(temp);
        setDashOffset(temp);
    },[])

    console.log(dasharray, dashoffset)
    // const Svg = styled(Pointi)`
    //     position: absolute;
    //     top: 50%;
    //     left: 50%;
    //     transform: scale(1) translate(-50%, -50%);

    //     animation: fill-white-svg 2s ease forwards 3s;

    //     mask{
    //         animation: fill-white-mask 2s ease forwards 3.5s;
    //     }

    //     > path:nth-child(2){
    //         stroke-dasharray: 371.52294921875;
    //         stroke-dashoffset: 371.52294921875;
    //         animation: line-animation 2s ease forwards;
    //     }

    //     @keyframes line-animation {
    //         to{
    //             stroke-dashoffset: 0;
    //         }
    //     }
    //     @keyframes fill-white-mask {
    //         from{
    //             fill: white !important;
    //         }
    //         to{
    //             fill: transparent;
    //         }
    //     }
    //     @keyframes fill-white-svg {
    //         to {
    //             fill: white;
    //         }
    //     }
    // `;

    return(
        <Wapper>
            {/* <Svg /> */}
        </Wapper>
    )
}
const Wapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(233, 233, 233);   
`;


export default StrokeAnimation;