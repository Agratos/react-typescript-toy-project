import { useSelector } from 'react-redux';
import styled from 'styled-components';

import TodoHeader from './TodoHeader';
import TodoDisplay from './TodoDisplay';
import TodoInput from './TodoInput';
import Animation from 'src/components/svg/Animation';

import { RootState } from 'src/modules';

const TodoList = () => {
    const toggleMenu = useSelector(({todo}:RootState) => todo.toggleMenu);
    
    return(
        <Wrapper
            onContextMenu={(e) => e.preventDefault()}
        >
            <TodoWrapper>
                <TodoHeader />
                <TodoDisplay />
                {!toggleMenu && <TodoInput />}
            </TodoWrapper>
            <AnimationWrapper>
                <Animation />
            </AnimationWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    
    height: 100%;
    width: 100%;

    background-color: #131414eb;
`;
const TodoWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 360px;
    height: 600px;
    border: 4px solid black;
    border-radius: 32px;
    box-shadow: 12px 12px 8px 1px #77838f;

    background-color: #b5c7d9;

    z-index: 2;
`;
const AnimationWrapper = styled.div`
    position: absolute;
    width: 100%;
    left: -30%;
    top: 0;
    
    z-index: 1;
`;

export default TodoList;