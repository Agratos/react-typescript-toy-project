import { useQueries, useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

export interface ITodo {
    id: number;
    todo: string;
    done: boolean;
}

export const todoStore = () => {
    const queryClient = useQueryClient();

    const { data: todo } = useQuery<ITodo[]>(
        ['getTodo'], 
        () => axios.get('/api/todo').then((res) => res.data.todo),
        { 
            refetchInterval: false,
            refetchOnWindowFocus: false,
        }
    )

    const { mutate: setTodo } = useMutation(
        (todo:ITodo) => axios.post('/api/todo', {todo}),
        {onSuccess: () => queryClient.invalidateQueries('getTodo')}
    );

    const { mutate: updateTodo } = useMutation(
        (todo:ITodo) => axios.put('/api/todo', {todo}),
        {onSuccess: () => queryClient.invalidateQueries('getTodo')}
    )

    const { mutate: deleteTodo} = useMutation(
        (id: number) => axios.delete(`/api/todo/`, {data:{id}}),
        {onSuccess: () => queryClient.invalidateQueries('getTodo')}
    );

    return { todo, setTodo, updateTodo, deleteTodo }
}