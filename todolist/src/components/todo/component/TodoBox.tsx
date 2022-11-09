import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

import { toggleTodo } from 'src/modules/actions/todo';
import { TTodoItemParams } from 'src/modules/types/todo';

interface ITodoBoxPros {
    id: number;
    text: string;
    done: boolean;
}

const TodoBox = ({id, text, done }:ITodoBoxPros) => {
    const dispatch = useDispatch();

    const handleTodoToggle = () => {
        dispatch(toggleTodo(id)); // toggle 변경
    }

    const handleRightClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
    }

    return(
        <Wrapper>
            <Box 
                done={done}
                onClick={handleTodoToggle}
                onContextMenu={(e) => handleRightClick(e)}
                draggable
            >
                {text}
            </Box>
            <TextTail done={done}/>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: right;
    margin: 16px 0px;
`;
const Box = styled.div<{done: boolean}>`
    padding: 8px 16px;
    border-radius: 8px;
    
    background-color: #fbec43;
    font-family: 'Noto Serif KR', serif;
    user-select: none;

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
const TextTail = styled.div<{done: boolean}>`
    content:""; 
    border: 4px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 0px solid transparent;
    border-left: 0px solid transparent;
    border-top: 8px solid #fbec43;

    width: 4px;
    height: 4px;

    transform: rotate( 0deg ) translateX(-4px) translateY(8px);

    ${({done}) => done && css`
        display: none;
    `}
`;
export default TodoBox;