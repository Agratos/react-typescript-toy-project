import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

import { toggleTodo } from 'src/modules/actions/todo';


interface ITodoBoxPros {
    id: number;
    text: string;
    done: boolean;
}

const TodoBox = ({id, text, done}:ITodoBoxPros) => {
    const dispatch = useDispatch();

    const handleTodoToggle = () => {
        dispatch(toggleTodo(id)) // toggle 변경
    }

    return(
        <Wrapper>
            <Box onClick={handleTodoToggle} done={done}>
                {text}
            </Box>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: right;
    margin: 16px;
`;
const Box = styled.div<{done: boolean}>`
    padding: 8px 28px 8px 32px;
    border-radius: 8px;
    
    background-color: #fbec43;

    user-select: none;

    &:after { // 말꼬리표 작성
        content:""; 
        position:absolute;
        border: 0 solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 4px solid transparent;
        border-left: 0x solid transparent;
        border-top: 5px solid #fbec43;

        width: 8px;
        height: 8px;

        transform: rotate(0deg) translateX(20px) translateY(-2px);
	}
	
    :hover {
        cursor: pointer;
    }

    ${({done}) => done && css`
        background-color: #ffffff90;
        &::after {
            border-top: none;
        }
        color: #7e7e7ee0;

        text-decoration: line-through;
        text-decoration-color: #00000059;
        text-decoration-thickness: 2px;
    `}
`;

export default TodoBox;