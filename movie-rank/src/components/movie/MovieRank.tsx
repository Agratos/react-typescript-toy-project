import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'src/modules';
import { setTargetDate, getMoviRankAsync } from 'src/modules/movie/actions';
import MovieCard from './MovieCard';

import { posterDummy } from 'src/assets/dummies/posterDummy';
import movieApi from 'src/apis/movieApi';

const MovieRank = () => {
    const dispatch = useDispatch();
    const movieList = useSelector((state: RootState) => state.movie.dailyBoxOfficeList);
    const targetDt = useSelector((state: RootState) => state.movie.targetDt);

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

    console.log(`movieList: `,movieList);

    return (
        <Wrapper>
            {movieList.data ? 
                // movieList.data.map(({rank, movieNm, movieUrl}) => (
                //     <MovieCard
                //         key={`movie-rank-${rank}`}
                //         rank={rank}
                //         name={movieNm}
                //         url={movieUrl ? movieUrl : ''}
                //     />
                // )) : <>loading 중</>
                movieList.data.filter(data => Number(data.rank) >= 0 && Number(data.rank) <= 3 ).map(({rank, movieNm, movieUrl}) => (
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