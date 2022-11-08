import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import TodoBox from './component/TodoBox';

import { RootState } from 'src/modules';

const TodoDisplay = () => {
    const todos = useSelector(({todo}:RootState) => todo.todoItems);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollToBottom();
    },[todos])

    const scrollToBottom = () => {
        if(wrapperRef.current){
            wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight;
        }
    }

    return(
        <Wrapper ref={wrapperRef}>
            <BodyWrapper >
                {/* <span>{`<`}</span>{` 일일 계획 `}<span>{`>`}</span> */}
                {' < 일일 계획 >'}
                {todos.map(({text, id, done}) => (
                    <TodoBox 
                        key={id}
                        id={id}
                        text={text}
                        done={done}
                        todos={todos}
                    />
                ))}
            </BodyWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    flex: 1;
    margin: 4px 16px;
    overflow-y: auto;

    -ms-overflow-style: none; // 인터넷 익스플로어
    scrollbar-width: none; // 파이어폭스
    ::-webkit-scrollbar{ // 크롬 사파리 오페라 엣지
        display: none;
    }
`;
const BodyWrapper = styled.div`
    flex: 1;
    margin-top: 16px;
`;


export default TodoDisplay;