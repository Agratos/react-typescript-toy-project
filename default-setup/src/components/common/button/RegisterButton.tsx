import styled from 'styled-components';

interface IRegisterButton {
    text: string;
    onClick : () => void;
}

const RegisterButton = ({text, onClick}:IRegisterButton) => {
    return (
        <Button onClick={onClick}>
            {text}
        </Button>
    )
}
const Button = styled.button``;

export default RegisterButton;