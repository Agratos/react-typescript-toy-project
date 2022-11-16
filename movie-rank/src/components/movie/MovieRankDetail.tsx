import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'src/modules';
import { getMoviRankAsync } from 'src/modules/movie/actions';

const MovieRankDetail = () => {
    const dispatch = useDispatch();
    const movieList = useSelector((state: RootState) => state.movie.dailyBoxOfficeList);

    useEffect(() => {
        //dispatch(getMoviRankAsync.request({targetDt: 20221115}));
        dispatch(getMoviRankAsync.request(20221115));
    },[])

    console.log('movieList: ', movieList);

    return (
        <Wrapper>
            rank detail
            
        </Wrapper>
    )
}
const Wrapper = styled.div``;

export default MovieRankDetail;