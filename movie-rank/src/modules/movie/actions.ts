import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { BoxOfficeResult, IDailyBoxOfficeList } from './types';
import createActionTypes from '../createActionTypes';

export const GET_MOVIE_RANK = 'movie/GET_MOVIE_RANK';
export const GET_MOVIE_RANK_SUCCESS = 'movie/GET_MOVIE_RANK_SUCCESS';
export const GET_MOVIE_RANK_ERROR = 'movie/GET_MOVIE_RANK_ERROR';

//export const GET_MOVIE_RANK = createActionTypes('movie/GET_MOVIE_RANK')

export const getMoviRankAsync = createAsyncAction(
    // GET_MOVIE_RANK.RUNNING,
    // GET_MOVIE_RANK.SUCCESS,
    // GET_MOVIE_RANK.FAILURE
    GET_MOVIE_RANK,
    GET_MOVIE_RANK_SUCCESS,
    GET_MOVIE_RANK_ERROR
)<number, BoxOfficeResult, AxiosError>();

// 입력 출력 에러