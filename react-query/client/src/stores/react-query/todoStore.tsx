import { useQueries, useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

export interface ITodo {
    id: number;
    todo: string;
    done: boolean;
}

export const todoStore = () => {
    const queryClient = useQueryClient();

    const { data: todos } = useQuery<ITodo[]>(
        ['todos'], 
        () => axios.get('/api/todo').then((res) => res.data.todos),
        { 
            refetchInterval: false,
            refetchOnWindowFocus: false,
        }
    )

    const { mutate: setTodo } = useMutation(
        (todo:ITodo) => axios.post('/api/todo', {todo}),
        {onSuccess: () => queryClient.invalidateQueries('todos')}
    );

    const { mutate: updateTodo } = useMutation(
        (todo:ITodo) => axios.put('/api/todo', {todo}),
        {onSuccess: () => queryClient.invalidateQueries('todos')}
    )

    const { mutate: deleteTodo} = useMutation(
        (id: number) => axios.delete(`/api/todo/`, {data:{id}}),
        {onSuccess: () => queryClient.invalidateQueries('todos')}
    );

    return { todos, setTodo, updateTodo, deleteTodo }
}