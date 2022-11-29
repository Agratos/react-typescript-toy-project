import styled from 'styled-components';

import testStore from 'src/modules/zustand/test';

const TestComponent2 = () => {
    const { counter, increaseCounter, decreaseCounter, message } = testStore();

    return (
        <Wrapper>
            {counter}
            <button
                onClick={increaseCounter}
            >+</button>
            <button
                onClick={decreaseCounter}
            >-</button>
            <div>{message}</div>
        </Wrapper>
    )
}
const Wrapper = styled.div``;

export default TestComponent2;