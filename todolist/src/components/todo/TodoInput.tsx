import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { addTodo } from 'src/modules/actions/todo';

const TodoInput = () => {
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        window.addEventListener('keydown', keydownEnter);

        return () => window.removeEventListener('keydown', keydownEnter);
    },[])

    const handleResigisterButtonClick = () => {
        if(inputRef.current!.value.replace(' ','') === ''){
            return false;
        }else{
            dispatch(addTodo({text: inputRef.current!.value,})) // store에 저장

            inputRef.current!.value = ''; // 초기화
        }
    }

    const keydownEnter = (e:KeyboardEvent) => {
        if(e.key === 'Enter') handleResigisterButtonClick();
    }
    
    return (
        <Wrapper>
            <Input ref={inputRef}/>
            <ResigisterButton
                onClick={handleResigisterButtonClick}
            >
                +
            </ResigisterButton>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;

    height: 60px;
    border-radius: 0 0 32px 32px ;
    background-color: white;
    
    z-index: 1;
`;
const Input = styled.input`
    flex: 1;
    
    padding-left: 32px;
    border: none;
    border-bottom-left-radius: 32px;
    font-size: 16px;
    font-family: 'Noto Serif KR', serif;

    :focus{
        outline: none ;
    }
`;
const ResigisterButton = styled.button`
    width: 40px;

    margin-right: 16px;
    border: none;
    border-bottom-right-radius: 32px;
    background-color: white;

    font-size: 32px;

    :hover{
        cursor: pointer;
    }
`;

export default TodoInput;