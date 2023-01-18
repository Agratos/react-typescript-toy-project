import styled from 'styled-components';

export interface IModalProps {
    open: boolean;
    close?: () => void;
    children: React.ReactElement;
}

/** 
 * open : boolean
 * 
 * close? : () => void - 배경 클릭시 종료
 **/
const Modal = ({ open, close, children }: IModalProps) => {
    return (
        <Wrapper open={open} onClick={() => close && close()}>
            <DialogBox>
                {children}
            </DialogBox>
        </Wrapper>
    )
}
const Wrapper = styled.div<{open: boolean}>`
    display: ${({open}) => !open && 'none' };
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.2);
    user-select: none;
`;
const DialogBox = styled.div`
    width: fit-content;
    height: fit-content;
    border: none;
    border-radius: 16px;
    box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
    box-sizing: border-box;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    z-index: 1000;
`;

export default Modal;