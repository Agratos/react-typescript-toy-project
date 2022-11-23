import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'src/modules';
import { setTargetDate, setLoading, getMoviRankAsync, getMovieDetailAsync } from 'src/modules/movie/actions';
import MovieRankCard from './MovieRankCard';

const MovieRank = () => {
    const dispatch = useDispatch();
    const movieList = useSelector((state: RootState) => state.movie.dailyBoxOfficeList);
    const targetDt = useSelector((state: RootState) => state.movie.targetDt);
    const loading = useSelector((state: RootState) => state.movie.loading);

    const [start, setStart] = useState<number>(0);

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
                dispatch(getMovieDetailAsync.request(movieNm));
            })

            dispatch(setLoading(false))

            const timer = setInterval(() => {
                setStart((start) => (start + 5) % 10 );
            }, 5000)

            return () => clearInterval(timer);
        }
    },[movieList.data])

    return (
        <Wrapper>
            {!loading ? 
                movieList.data?.filter(data => Number(data.rank) >= start + 1 && Number(data.rank) <= start + 5 )
                    .map(({rank, rankInten, movieNm, image, link, userRating}, index) => (
                        <MovieRankCard
                            key={`movie-rank-${rank}`}
                            rank={rank}
                            rankInten={rankInten}
                            movieNm={movieNm}
                            image={image}
                            link={link}
                            userRating={userRating}
                            focus={index === 2}
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