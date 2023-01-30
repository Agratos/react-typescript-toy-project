import { useState } from 'react';
import styled from 'styled-components';

import { todoStore } from 'src/stores/react-query/todoStore';


const TodoPage = () => {
    const { todo, setTodo, updateTodo, deleteTodo } = todoStore();
    const [ inputData, setInputData ] = useState<string>('');
    const [ isUpdate, setIsUpdate ] = useState<number>(0);

    const setTodoHandle = () => {
        setTodo({
            id: ((todo?.at(-1)?.id) ?? 0) + 1,
            todo: inputData || '데이터가 없습니다.',
            done: false
        })
        resetInput();
    }

    const updateTodoHandle = ({id ,done}:{id?:number, done?: boolean}) => {
        const temp = {...todo![todo!.findIndex((todo) => todo.id === isUpdate || id)]}
        updateTodo({
            ...temp,
            todo: inputData || temp.todo,
            done: done ?? temp.done
        })
        resetInput();
    }

    const resetInput = () => {
        setInputData('')
        setIsUpdate(0);
    }

    return (
        <Wrapper>
            todo page
            {todo?.map(({id, todo, done}) => (
                <div key={id}>
                    <span style={done ? {textDecoration: 'line-through'} : {}}>{`id: ${id} - todo: ${todo}`}</span>
                    <button onClick={() => {
                        deleteTodo(id)
                        resetInput()
                    }}>
                        삭제
                    </button>
                    <button onClick={() => {
                        setInputData(todo)
                        setIsUpdate(id);
                    }}>
                        수정
                    </button>
                    <button onClick={() => {
                        updateTodoHandle({id: id, done: !done})
                    }}>
                        완료
                    </button>
                </div>
            )) ?? '데이터가 없습니다.'}
            <Frame>
                <input 
                    type='text' 
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (
                        setTodoHandle()
                    )}
                />
                <button onClick={() => {
                    isUpdate ? updateTodoHandle({}) : setTodoHandle()
                }}>{isUpdate ? `수정` : `등록`}</button>   
            </Frame>
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