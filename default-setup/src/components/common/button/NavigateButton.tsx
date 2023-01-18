import styled from 'styled-components';

interface INavigateButton {
    url: string;
    text: string;
}

const NavigateButton = ({url, text}:INavigateButton) => {
    return (
        <Button href={url}>
            {text}
        </Button>
    )
}
const Button = styled.a``;

export default NavigateButton;