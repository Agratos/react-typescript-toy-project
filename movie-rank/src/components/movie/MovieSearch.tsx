import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const MovieSearch = () => {
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Wrapper>
            <Input type={'string'} ref={inputRef} placeholder='원하시는 영화를 검색하세요'/>
            <Button>GO</Button>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    margin-top: 8px;
`;
const Input = styled.input`
    width: 376px;
    height: 30px;
    
    border-radius: 16px;
    padding: 0px 16px;

    ::placeholder {
        text-align: center;
    } 
    :focus {
        outline: none;
    }
`;
const Button = styled.button`
    position: absolute;
    width: 32px;
    height: 29px;
    border: none;
    background-color: transparent;
    color: #fff;
    font-weight: bolder;
    font-size: 16px;

    :hover {
        cursor: pointer;
        color: #9191f1;
        font-size: 18px;
    }
`;

export default  MovieSearch;