import styled from 'styled-components';

const ToggleButton = () => {
    return (
        <Wrapper>
            <SliderButton></SliderButton>
        </Wrapper>
    )
}
const Wrapper = styled.div``;
const SliderButton = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
`;

export default ToggleButton;