import { memo, useCallback } from 'react';
import styled from 'styled-components';

import { ITodo } from 'src/stores/react-query/todoStore';
import TodosContainer from 'src/containers/todos/TodosContainer';

import Button from './components/Button';

const TodosCard = ({id,todo,done}:ITodo) => {
    const { 
        inputData,
        isUpdate ,
        setInputData, 
        setIsUpdate, 
        updateTodoHandle, 
        deleteTodoHandle,
    } = TodosContainer();

    console.log(`todo: `,todo);
    // console.log(`inputData: `,inputData);


    return (
        <Card>
            <TextWrapper>
                {isUpdate? 
                    <Input 
                        defaultValue={todo} 
                        onChange={(e) => setInputData(e.target.value)}
                        onBlur={() => setIsUpdate(0)}
                        autoFocus
                    /> 
                    :
                    <Text 
                        done={done} 
                        onClick={() => {
                            setIsUpdate(id)
                            setInputData(todo)
                        }}
                    >{todo}</Text> 
                }
            </TextWrapper>
            <ButtonWrapper>
                <Button title={'삭제'} onClick={() => {deleteTodoHandle(id)}} />
                <Button title={'수정'} onClick={() => {updateTodoHandle({id})}} />
                <Button title={'완료'} onClick={() => {updateTodoHandle({id, done: !done})}} />
            </ButtonWrapper>
        </Card>
    )
}
const Card = styled.div`
    display: flex;
    margin: 16px;
    padding: 16px;
    background-color: cornsilk;
`;
const TextWrapper = styled.div`
    flex: 1;
    margin: auto;
`;
const Text = styled.div<{done:boolean}>`
    padding: 4px 8px;
    border: 0.5px solid black;  
    text-decoration: ${({done})=> done && 'line-through'};
`;
const Input = styled.input`
    width: 100%;
    padding: 5.5px 8px;
    border: 0.5px solid black;
    background-color: inherit;
    font-family: 'Jua',sans-serif;
    font-size: 16px;
    :focus{
        outline: none;
    }
`;
const ButtonWrapper = styled.div`
    display: flex;
    margin-left: 16px;
`;

export default memo(TodosCard);