import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

export interface CustomResultModalProps {
    open: boolean,
    backgroundClose?: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>> | Function,
    onAction?: () => void,
    children?: React.ReactNode,
    messages?: string
}

const CustomResultModal = ({open, backgroundClose=true, setOpen, onAction, children, messages}: CustomResultModalProps) => {
    const RenderMessages = () => {
        const formattedMessages = messages?.split('\n').map((line, index) => (
            <Message key={index}>
              {line}
            </Message>
        ));

        return (
            <MessageWrapper>
                {formattedMessages}
            </MessageWrapper>
        )
    }

    return (
        <Dialog 
            open={open}
            onClose={() => backgroundClose && setOpen(false)}
            aria-labelledby={'alert-dialog-title'}
            aria-describedby={'alert-dialog-description'}
            onClick={() => backgroundClose && setOpen(false)}
        >
            {children ? children : RenderMessages()}
            <DialogActions>
                <Button onClick={() => {
                    onAction?.();
                    setOpen(false);
                }} autoFocus>
                        확인
                </Button>
            </DialogActions>
        </Dialog>
    )
}
const MessageWrapper = styled.div`
    margin: 16px 24px -4px 24px;
    text-align: center;
`;
const Message = styled.div`
    margin: 4px;
`;

export default CustomResultModal;