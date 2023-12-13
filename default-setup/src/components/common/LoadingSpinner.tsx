import React, { useLayoutEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingSpinner = () => {
    useLayoutEffect(() => {
        document.body.style.minWidth = '0px';
    },[])

    return (
        <Wrapper>
            <Spinner />
            <Text>Loading...</Text>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    ${({theme}) => theme.div.center}
    height: 100%;
    width: 100%;
    background-color: #dce6f2;
`;
const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;
const Spinner = styled.div`
	height: 400px;
	width: 400px;
	border: 6px solid #4f72d2;
	border-radius: 50%;
	border-top: none;
	border-right: none;
	margin: 16px auto;
	animation: ${rotation} 2s linear infinite;
`;
const Text = styled.div`
    position: absolute;
    top: 50%; 
    right: 50%;
    transform: translate(50%,-50%);
    font-size: 34px;
    font-weight: bolder;
`;

export  default LoadingSpinner