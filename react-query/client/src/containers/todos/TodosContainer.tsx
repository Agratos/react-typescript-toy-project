import { useState, SetStateAction, Dispatch } from 'react';

import { todoStore } from 'src/stores/react-query/todoStore';

const TodosContainer = () => {
    const { todos=[], setTodo, updateTodo, deleteTodo } = todoStore();
    const [ inputData, setInputData ] = useState<string>('');
    const [ isUpdate, setIsUpdate ] = useState<number>(0);

    const resetInput = () => {
        setInputData('')
        setIsUpdate(0);
    }

    const setTodoHandle = () => {
        setTodo({
            id: ((todos?.at(-1)?.id) ?? 0) + 1,
            todo: inputData || '데이터가 없습니다.',
            done: false
        })
        resetInput();
    }

    const updateTodoHandle = ({id ,done}:{id?:number, done?: boolean}) => {
        const temp = {...todos![todos!.findIndex((todos) => todos.id === isUpdate || id)]}
        updateTodo({
            ...temp,
            id: id || temp.id,
            todo: inputData || temp.todo,
            done: done ?? temp.done
        })
        resetInput();
    }

    const deleteTodoHandle = (id:number) => {
        deleteTodo(id);
        resetInput();
    }

    return {
        todos,
        inputData,
        setInputData,
        isUpdate,
        setIsUpdate,
        setTodoHandle, 
        updateTodoHandle, 
        deleteTodoHandle
    }
}

export default TodosContainer;