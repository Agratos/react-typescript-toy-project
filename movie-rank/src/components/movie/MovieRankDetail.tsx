import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'src/modules';
import { getMoviRankAsync } from 'src/modules/movie/actions';

const MovieRankDetail = () => {
    const dispatch = useDispatch();
    const movieList = useSelector((state: RootState) => state.movie.dailyBoxOfficeList);

    useEffect(() => {
        dispatch(getMoviRankAsync.request(20221115));
    },[])

    console.log('movieList: ', movieList.data?.dailyBoxOfficeList);

    return (
        <Wrapper>
            rank detail
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