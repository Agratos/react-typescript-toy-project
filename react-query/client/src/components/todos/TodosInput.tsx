import styled from 'styled-components';

import TodosContainer from 'src/containers/todos/TodosContainer';

import Button from './components/Button';

const TodosInput = () => {
    const { inputData, setInputData, setTodoHandle } = TodosContainer();
    return (
        <Wrapper>
            <InputWrapper>
                <Input 
                    value={inputData} 
                    onChange={(e) => setInputData(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && setTodoHandle()}
                />
            </InputWrapper>
            <InputButtonWrapper>
                <Button title={'등록'} onClick={() => setTodoHandle()}/>
            </InputButtonWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
`;
const InputWrapper = styled.div``;
const Input = styled.input`
    padding: 5.5px 8px;
    border: 0.5px solid black;
    border-radius: 16px;
    background-color: inherit;
    font-family: 'Jua',sans-serif;
    font-size: 16px;
    :focus{
        outline: none;
    }
`;
const InputButtonWrapper = styled.div`
    margin-left: 8px;
`;

export default TodosInput;