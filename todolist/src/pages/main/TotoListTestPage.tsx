import styled from 'styled-components';

import TodoList from 'src/components/todo/TodoList';


const TodoListPage = () => {
    return (
        <Wrapper>
            {/* svg animation 작성 예정 배경으로 */}
            <TodoList />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    flex: 1;
`;

export default TodoListPage;