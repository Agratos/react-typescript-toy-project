import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import MovieSearchCard from './MovieSearchCard'
import Pagination from '../common/Pagination';

import { RootState } from 'src/modules';
import { IMovieSearchItemsState } from 'src/modules/movie/types';
import { getMovieSearchAsync } from 'src/modules/movie/actions';


const MovieSearchResult = () => {
    const dispatch = useDispatch();
    const searchTarget = useSelector((state: RootState) => state.movie.searchTarget);
    const searchResult = useSelector((state: RootState) => state.movie.movieSearchList);

    const [limit, setLimit] = useState<number>(5); // 5개씩 보여주기
    const [page, setPage] = useState<number>(0); // 1 ~ 부터 시작

    const handleChangeCurrentPage = (currentPage: number) => {
        dispatch(getMovieSearchAsync.request({target:searchTarget, start: currentPage}))
    }

    return (
        <Wrapper>
            <MovieSearchCardWrapper>
                {searchResult.data?.items.map(({title, image, link, userRating}:IMovieSearchItemsState, index) => (
                    <MovieSearchCard 
                        key={`searchResult` + index}
                        title={title.replace('<b>','').replace('</b>', '')}
                        image={image}
                        link={link}
                        userRating={userRating}
                    />
                ))}
            </MovieSearchCardWrapper>
            <PaginationWrapper>
                <Pagination 
                    total={Number(searchResult.data?.total)}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                    onClick={handleChangeCurrentPage}
                />
            </PaginationWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    color: #fff;
`;
const MovieSearchCardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;
const PaginationWrapper = styled.div`
    position: absolute;
    margin-top: 640px;
`;

export default React.memo(MovieSearchResult);