import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'src/modules';
import { setTargetDate, getMoviRankAsync } from 'src/modules/movie/actions';

const MovieRankDetail = () => {
    const dispatch = useDispatch();
    const movieList = useSelector((state: RootState) => state.movie.dailyBoxOfficeList);
    const targetDt = useSelector((state: RootState) => state.movie.targetDt);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        targetDt && dispatch(getMoviRankAsync.request(targetDt));
    },[targetDt])

    const onClickTargetDtButton = () => {
        dispatch(setTargetDate(Number(inputRef.current?.value)));
    }

    return (
        <Wrapper>
            rank detail
            <input type={'number'} ref={inputRef}/>
            <button onClick={onClickTargetDtButton}>
                입력
            </button>
            <div>
                {movieList.data?.dailyBoxOfficeList.map(({movieNm}, index) => (
                    <div key={movieNm}>
                        {index+1 + ': ' + movieNm}
                    </div>
                ))}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    font-size: 24px;
`;

export default MovieRankDetail;