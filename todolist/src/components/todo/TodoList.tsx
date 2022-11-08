import styled from 'styled-components';

import TodoDisplay from './TodoDisplay';
import TodoInput from './TodoInput';

const TodoList = () => {
    return(
        <Wrapper>
            <TodoWrapper>
                <TodoDisplay />
                <TodoInput />
            </TodoWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    
    height: 100%;
    width: 100%;

    background-color: #131414eb;
`;
const TodoWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 360px;
    height: 600px;
    border: 4px solid black;
    border-radius: 32px;
    box-shadow: 12px 12px 8px 1px #77838f;

    background-color: #b5c7d9;
`;

export default TodoList;