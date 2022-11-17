import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'src/modules';
import { setTargetDate, getMoviRankAsync } from 'src/modules/movie/actions';
import MovieSubCard from './MovieSubCard';
import MovieMainCard from './MovieMainCard';

import { posterDummy } from 'src/assets/dummies/posterDummy';

const MovieRank = () => {
    const dispatch = useDispatch();
    const movieList = useSelector((state: RootState) => state.movie.dailyBoxOfficeList);
    const targetDt = useSelector((state: RootState) => state.movie.targetDt);

    useEffect(() => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const date = now.getDate();

        dispatch(setTargetDate(Number(`${year}${month + 1}${date - 1}`)));
    },[])

    useEffect(() => {
        targetDt && dispatch(getMoviRankAsync.request(targetDt));
    },[targetDt])

    return (
        <Wrapper>
            <MovieSubCard 
                name={'와칸다 포에버'}
                rank={1}
                url={posterDummy}
           />
           <MovieSubCard 
                name={'와칸다 포에버'}
                rank={2}
                url={posterDummy}
           />
           <MovieMainCard 
                name={'와칸다 포에버'}
                rank={3}
                url={posterDummy}
           />
           <MovieSubCard 
                name={'와칸다 포에버'}
                rank={4}
                url={posterDummy}
           />
           <MovieSubCard 
                name={'와칸다 포에버'}
                rank={5}
                url={posterDummy}
           />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1;
    font-size: 24px;
    color: white;
    width: 100%;
`;

export default MovieRank; 