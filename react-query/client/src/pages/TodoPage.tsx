import { useState } from 'react';
import styled from 'styled-components';

import Todos from 'src/components/todos/Todos';

const TodoPage = () => {
    return (
        <Wrapper>
            <Todos />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
const Frame = styled.div`
    display: flex;
`;

export default TodoPage;