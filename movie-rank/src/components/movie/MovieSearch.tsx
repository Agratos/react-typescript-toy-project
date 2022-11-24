import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getMovieSearchAsync, setMoviePageIndex, setMovieSearchTarget } from 'src/modules/movie/actions';
import { RootState } from 'src/modules';

const MovieSearch = () => {
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const moviePageIndex = useSelector((state: RootState) => state.movie.moviePageIndex);

    const onClick = () => {
        dispatch(getMovieSearchAsync.request({target: inputRef.current!.value, start: 1}));
        dispatch(setMovieSearchTarget(inputRef.current!.value));
        handlePageIndex(1)
    }

    const handlePageIndex = (index: number) => {
        index === 0 && (inputRef.current!.value = '')
        dispatch(setMoviePageIndex(index));
    }

    return (
        <Wrapper>
            <InputWrapper>
                <Input type={'string'} ref={inputRef} placeholder='원하시는 영화를 검색하세요'/>
                <Button onClick={onClick}>GO</Button>
            </InputWrapper>

            {moviePageIndex && 
                <BackButton
                    onClick={() => handlePageIndex(0)}
                >
                    ▶ <Text>오늘의 영화 순위 보러가기</Text> ◀
                </BackButton>
            }  
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    margin-top: 8px;
`;
const InputWrapper = styled.div``;
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
const Text = styled.div`
    margin: 0 8px;
`;
const BackButton = styled.div`
    display: flex;
    position: absolute;
    left: 0;
    margin: 4px 10px;
    color: #ffffffd3;

    :hover{
        cursor: pointer;
        color: yellow;
        ${Text} {
            color: red;
        }
    }
`;

export default  MovieSearch;