import { useState } from 'react';
import styled from 'styled-components';

const Modal = ({ children } : {children:React.ReactNode}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)}>open</button>
            {open && < ModalBackground>
                <ModalBody onClick={(e) => e.stopPropagation()}>
                    <button 
                        style={{marginBottom: 16}}
                        onClick={() => setOpen(false)}
                    >
                        close
                    </button>
                    {children}
                </ModalBody>
            </ModalBackground>}
        </>
    )
}

const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
`;
const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`;

export default Modal;