import styled from 'styled-components';

import counterStore from 'src/modules/zustand';

const MainPage = () => {
    const { counter, increaseCounter, decreaseCounter } = counterStore();

    return (
        <Wrapper>
            {counter}
            <button
                onClick={increaseCounter}
            >+</button>
            <button
                onClick={decreaseCounter}
            >-</button>
        </Wrapper>
    )
}
const Wrapper = styled.div``;

export default MainPage;