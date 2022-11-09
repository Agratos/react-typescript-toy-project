import { useEffect, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Modal = ({children}: PropsWithChildren) => {
    return (
        <Wrapper>
            <DialogBox>
                { children }
            </DialogBox>
            <BackBoard />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #67676730;
`;
const DialogBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1000;
`;
const BackBoard = styled.div`
    position: fixed;
`;

export default Modal;