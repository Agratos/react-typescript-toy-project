import styled from 'styled-components';

import Modal from './Modal';

interface ICheckModalDefaultProps {
    text: string;
    onClickCancleButton: () => void;
    onClickOkButton: () => void;
}

const CheckModal = ({text, onClickOkButton, onClickCancleButton}:ICheckModalDefaultProps) => {
    return (
        <Modal>
            <CheckModalWrapper>
                <Text>{ text }</Text>
                <ButtonWrapper>
                    <LeftButton
                        onClick={onClickCancleButton}
                    >취소</LeftButton>
                    <RightButton
                        onClick={onClickOkButton}
                    >확인</RightButton>
                </ButtonWrapper>
            </CheckModalWrapper>
        </Modal>
    )
}
const CheckModalWrapper = styled.div`
    ${({theme}) => theme.div.vhCenter}
    width: 240px;
    height: 80px;
    border-radius: 16px;
    background-color: #ffffffdb;
    box-shadow: 12px 12px 8px 1px #77838f;
`;
const Text = styled.div`
    ${({theme}) => theme.div.vhCenter}
    flex: 1;
    user-select: none;
`;
const ButtonWrapper = styled.div`
    display: flex;
    height: 28px;
    width: 100%;
    border-top: 0.5px solid #6f6e6eac;
`;
const LeftButton = styled.div`
    ${({theme}) => theme.div.vhCenter}
    width: 50%;
    color: #4599e2;
    :hover{
        cursor: pointer;
    }
`;
const RightButton = styled(LeftButton)`
    border-left: 0.5px solid #6f6e6eac;
`;

export default CheckModal;