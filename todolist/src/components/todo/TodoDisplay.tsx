import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { BiLeftArrowAlt, BiMenu } from 'react-icons/bi';

import TodoBox from './component/TodoBox';

import { RootState } from 'src/modules';

const TodoDisplay = () => {
    const todos = useSelector(({todo}:RootState) => todo.todoItems);

    return(
        <Wrapper>
            <HeaderWrapper>
                <BiLeftArrowAlt size={30} />
                <Title>카카오톡 TodoList</Title>
                <BiMenu size={30} />
            </HeaderWrapper>
            <BodyWrapper>
                <span>{`<`}</span>{` 일일 계획 `}<span>{`>`}</span>
                {todos.map(({text, id, done}) => (
                    <TodoBox 
                        key={id}
                        id={id}
                        text={text}
                        done={done}
                    />
                ))}
            </BodyWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    flex: 1;
    margin: 10px 16px;
`;
const HeaderWrapper = styled.div`
    display: flex;
    text-align: left;

    padding-bottom: 8px;
    border-bottom: 1px solid #ffffff39;
`;
const Title = styled.div`
    flex: 1;
    margin-left: 16px;
    font-size: 20px;
`;
const BodyWrapper = styled.div`
    margin-top: 16px;
`;


export default TodoDisplay;