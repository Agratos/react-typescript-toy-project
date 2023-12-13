import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

export interface CustomModalProps {
    open: boolean,
    isLoading: boolean,
    backgroundClose?: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    onAction: () => void,
    children: React.ReactNode
}

const CustomCheckModal = ({open, backgroundClose=true, isLoading, setOpen, onAction, children}: CustomModalProps) => {
    return (
        <Dialog 
            open={open}
            onClose={() => backgroundClose && setOpen(false)}
            aria-labelledby={'alert-dialog-title'}
            aria-describedby={'alert-dialog-description'}
        >
            {children}
            <DialogActions>
                <Button onClick={() => !isLoading && setOpen(false)}>취소</Button>
                <Button onClick={onAction} autoFocus>
                        확인
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CustomCheckModal;