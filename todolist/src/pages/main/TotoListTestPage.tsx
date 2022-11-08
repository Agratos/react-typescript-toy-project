import styled from 'styled-components';

import TodoList from 'src/components/todo/TodoList';

const TodoListPage = () => {
    return (
        <Wrapper>
            <TodoList />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    flex: 1;
`;

export default TodoListPage;