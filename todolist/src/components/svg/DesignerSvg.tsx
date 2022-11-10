import { useEffect } from 'react';
import styled from 'styled-components';

import Logo from 'src/assets/images/svg/designer.svg';
import Pointi from 'src/assets/images/svg/pointi.svg';

import useGetTotalLength from 'src/hooks/useGetTotalLength';

const DesignerSvg = () => {
    return(
        <Wapper>
            <Svg />
        </Wapper>
    )
}
const Wapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(233, 233, 233);   
`;
const Svg = styled(Pointi)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(1) translate(-50%, -50%);

    animation: fill-white-svg 2s ease forwards 3s;

    mask{
        animation: fill-white-mask 2s ease forwards 3.5s;
    }

    > path:nth-child(2){
        stroke-dasharray: 371.52294921875;
        stroke-dashoffset: 371.52294921875;
        animation: line-animation 2s ease forwards;
    }
    > path:nth-child(3){
        stroke-dasharray: 409.134765625;
        stroke-dashoffset: 409.134765625;
        animation: line-animation 2s ease forwards 0.3s;
    }
    > path:nth-child(4){
        stroke-dasharray: 204.00018310546875;
        stroke-dashoffset: 204.00018310546875;
        animation: line-animation 2s ease forwards 0.6s;
    }
    > path:nth-child(5){
        stroke-dasharray: 479.2925109863281;
        stroke-dashoffset: 479.2925109863281;
        animation: line-animation 2s ease forwards 0.9s;
    }
    > path:nth-child(6){
        stroke-dasharray: 302.9346923828125;
        stroke-dashoffset: 302.9346923828125;
        animation: line-animation 2s ease forwards 1.2s;
    }
    > path:nth-child(7){
        stroke-dasharray: 120.82606506347656;
        stroke-dashoffset: 120.82606506347656;
        animation: line-animation 2s ease forwards 1.5s;
    }
    > path:nth-child(8){
        stroke-dasharray: 204.00021362304688;
        stroke-dashoffset: 204.00021362304688;
        animation: line-animation 2s ease forwards 1.8s;
    }
    /* > path:nth-child(9){
        stroke-dasharray: 488.05950927734375;
        stroke-dashoffset: 488.05950927734375;
        animation: line-animation 2s ease forwards 2.1s;
    } */

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

`;

export default DesignerSvg;