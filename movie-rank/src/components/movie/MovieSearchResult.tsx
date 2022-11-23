import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'src/modules';
import MovieSearchCard from './MovieSearchCard'

import { IMovieSearchItemsState } from 'src/modules/movie/types';

const MovieSearchResult = () => {
    const searchResult = useSelector((state: RootState) => state.movie.movieSearchList);

    const [total, setTotal] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1); // 1 ~ 부터 시작
    const [limit, setLimit] = useState<number>(5); // 5개씩 보여주기

    console.log('searchResult: ', searchResult.data?.total);

    return (
        <Wrapper>
            {searchResult.data?.items.map(({title, image, link, userRating}:IMovieSearchItemsState) => (
                <MovieSearchCard 
                    title={title.replace('<b>','').replace('</b>', '')}
                    image={image}
                    link={link}
                    userRating={userRating}
                />
            ))}
            {}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex: 1;

    width: 100%;

    color: #fff;
`;

export default MovieSearchResult;