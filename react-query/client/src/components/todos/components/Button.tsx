import { memo, useCallback } from 'react';
import styled from 'styled-components';

interface IButton {
    title: string;
    onClick: () => void;
}

const Button = ({title, onClick}: IButton) => {
    return (
        <ButtonWrapper onClick={() => onClick()}>{title}</ButtonWrapper>
    )
}
const ButtonWrapper = styled.button`
    border: none;
    border-radius: 16px;
    padding: 8px 24px;
    background-color: #7fffd479;
    margin: 0 4px;
    :hover {
        background-color: #7fffd4;
    }
`;

export default memo(Button);