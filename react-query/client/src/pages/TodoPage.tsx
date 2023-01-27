import { useRef } from 'react';
import { useQueries, useQuery, useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';
import styled from 'styled-components';

interface ITodo {
    id: number;
    todo: string;
}

const TodoPage = () => {
    const { data: getTodo } = useQuery<ITodo[]>(
        ['getTodo'], 
        () => axios.get('/api/todo').then((res) => res.data),
        { 
            refetchInterval: false,
            refetchOnWindowFocus: false,
        }
    )



    return (
        <Wrapper>

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
const Frame = styled.div``;

export default TodoPage;