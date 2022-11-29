import { useRef } from 'react';
import styled from 'styled-components';

import testStore from 'src/modules/zustand/test';

const TestComponent1 = () => {
    const { counter, increaseCounter, decreaseCounter, setMessage } = testStore();
    
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Wrapper>
            {counter}
            <button
                onClick={increaseCounter}
            >+</button>
            <button
                onClick={decreaseCounter}
            >-</button>
            <input 
                ref={inputRef}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                onClick={() => setMessage(inputRef.current!.value)}
            >입력</button>
        </Wrapper>
    )
}
const Wrapper = styled.div``;

export default TestComponent1;