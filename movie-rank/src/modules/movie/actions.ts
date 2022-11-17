import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { BoxOfficeResult, IDailyBoxOfficeList } from './types';
import createActionTypes from '../createActionTypes';

export const GET_MOVIE_RANK_REQUEST = 'movie/GET_MOVIE_RANK_REQUEST' as const;
export const GET_MOVIE_RANK_SUCCESS = 'movie/GET_MOVIE_RANK_SUCCESS' as const;
export const GET_MOVIE_RANK_FAILURE = 'movie/GET_MOVIE_RANK_FAILURE' as const;

//export const GET_MOVIE_RANK = createActionTypes('movie/GET_MOVIE_RANK')

// export const [GET_MOVIE_RANK_REQUEST, GET_MOVIE_RANK_SUCCESS, GET_MOVIE_RANK_FAILURE] 
//     = createActionTypes('movie/GET_MOVIE_RANK')


export const getMoviRankAsync = createAsyncAction(
    // GET_MOVIE_RANK.REQUEST,
    // GET_MOVIE_RANK.SUCCESS,
    // GET_MOVIE_RANK.FAILURE
    GET_MOVIE_RANK_REQUEST,
    GET_MOVIE_RANK_SUCCESS,
    GET_MOVIE_RANK_FAILURE
)<number, BoxOfficeResult, AxiosError>();

// 입력 출력 에러