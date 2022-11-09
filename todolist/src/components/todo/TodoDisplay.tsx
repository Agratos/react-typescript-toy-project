import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import TodoBox from './component/TodoBox';
import { RootState } from 'src/modules';
import { todoProperties } from 'src/assets/properties/todoProperties';

const TodoDisplay = () => {
    const {todos, toggleMenu} = useSelector(({todo}:RootState) => ({
        todos:todo.todoItems, 
        toggleMenu:todo.toggleMenu
    }));
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
            
            {toggleMenu ?
                <BodyWrapper>
                {`< 사용 방법 >`}
                {todoProperties.howToUse.map((text) => (
                    <Text key={text}>
                        {text}
                    </Text>
                ))}
                </BodyWrapper>
                :
                <BodyWrapper >
                {' < 일일 계획 >'}
                    {todos.map(({text, id, done}) => (
                        <TodoBox 
                            key={id}
                            id={id}
                            text={text}
                            done={done}
                        />
                    ))}
                </BodyWrapper>
                }
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

    z-index: 1;
`;
const BodyWrapper = styled.div`
    flex: 1;
    margin-top: 16px;
`;
const Text = styled.div`
    margin-top: 16px;
    color: #206608da;
`;


export default TodoDisplay;