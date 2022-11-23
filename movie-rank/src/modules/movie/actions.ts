import { createAction ,createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { IBoxOfficeResult } from './types';

export const SET_TARGET_DATA = 'movie/SET_TARGET_DATA' as const;
export const LOADING = 'movie/LOADING' as const;
export const PAGE_INDEX = 'movie/PAGE_INDEX' as const;

export const GET_MOVIE_RANK_REQUEST = 'movie/GET_MOVIE_RANK_REQUEST' as const;
export const GET_MOVIE_RANK_SUCCESS = 'movie/GET_MOVIE_RANK_SUCCESS' as const;
export const GET_MOVIE_RANK_FAILURE = 'movie/GET_MOVIE_RANK_FAILURE' as const;
export const GET_MOVIE_DETAIL_REQUEST = 'movie/GET_MOVIE_DETAIL_REQUEST' as const;
export const GET_MOVIE_DETAIL_SUCCESS = 'movie/GET_MOVIE_DETAIL_SUCCESS' as const;
export const GET_MOVIE_DETAIL_FAILURE = 'movie/GET_MOVIE_DETAIL_FAILURE' as const;
export const GET_MOVIE_SEARCH_REQUEST = 'movie/GET_MOVIE_SEARCH_REQUEST' as const;
export const GET_MOVIE_SEARCH_SUCCESS = 'movie/GET_MOVIE_SEARCH_SUCCESS' as const;
export const GET_MOVIE_SEARCH_FAILURE = 'movie/GET_MOVIE_SEARCH_FAILURE' as const;

export const setTargetDate = createAction(SET_TARGET_DATA)<number>();
export const setLoading = createAction(LOADING)<boolean>();
export const setPageIndex = createAction(PAGE_INDEX)<number>();

export const getMoviRankAsync = createAsyncAction(
    GET_MOVIE_RANK_REQUEST,
    GET_MOVIE_RANK_SUCCESS,
    GET_MOVIE_RANK_FAILURE
)<number, IBoxOfficeResult, AxiosError>();
export const getMovieDetailAsync = createAsyncAction(
    GET_MOVIE_DETAIL_REQUEST,
    GET_MOVIE_DETAIL_SUCCESS,
    GET_MOVIE_DETAIL_FAILURE,
)<string, any, AxiosError>();
export const getMovieSearchAsync = createAsyncAction(
    GET_MOVIE_SEARCH_REQUEST,
    GET_MOVIE_SEARCH_SUCCESS,
    GET_MOVIE_SEARCH_FAILURE
)<{target: string, start: number}, any, AxiosError>();