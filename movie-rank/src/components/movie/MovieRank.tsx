import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'src/modules';
import { setTargetDate, setLoading, getMoviRankAsync, getMovieUrlAsync } from 'src/modules/movie/actions';
import MovieCard from './MovieCard';

const MovieRank = () => {
    const dispatch = useDispatch();
    const movieList = useSelector((state: RootState) => state.movie.dailyBoxOfficeList);
    const targetDt = useSelector((state: RootState) => state.movie.targetDt);
    const loading = useSelector((state: RootState) => state.movie.loading);

    const start = useState<number>(0);

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

    useEffect(() => {
        if(movieList.data){
            movieList.data.map(({movieNm}) => {
                dispatch(getMovieUrlAsync.request(movieNm));
            })
            dispatch(setLoading(false))
        }
    },[movieList.data])

    return (
        <Wrapper>
            {!loading ? 
                movieList.data?.filter(data => Number(data.rank) >= 0 && Number(data.rank) <= 5 ).map(({rank, movieNm, movieUrl}) => (
                    <MovieCard
                        key={`movie-rank-${rank}`}
                        rank={rank}
                        name={movieNm}
                        url={movieUrl ? movieUrl : ''}
                    />
                )) : <>loading 중</>
            }
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