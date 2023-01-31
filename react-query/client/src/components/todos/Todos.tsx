import styled from 'styled-components';

import TodosCard from './TodosCard';
import TodosInput from './TodosInput';

import TodosContainer from 'src/containers/todos/TodosContainer';

const Todos = () => {
    const { todos } = TodosContainer();

    console.log(todos);

    return (
        <Wrapper>
            <CardWrapper>
                {todos.map(({id, todo, done}, index) => (
                    <TodosCard 
                        key={`todos-card${index}`} 
                        id={id}
                        todo={todo}
                        done={done}
                    />
                ))}
            </CardWrapper>
            <TodosInput />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 60%;
`;
const CardWrapper = styled.div`
    flex: 9;
    width: inherit;
    border: 0.5px solid black;
    margin-bottom: 16px;
    overflow-y: scroll;
`;

export default Todos;