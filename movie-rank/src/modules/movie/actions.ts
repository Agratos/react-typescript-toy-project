import { createAction ,createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { IBoxOfficeResult } from './types';

export const SET_TARGET_DATA = 'movie/SET_TARGET_DATA' as const;
export const LOADING = 'movie/LOADING' as const;
export const GET_MOVIE_RANK_REQUEST = 'movie/GET_MOVIE_RANK_REQUEST' as const;
export const GET_MOVIE_RANK_SUCCESS = 'movie/GET_MOVIE_RANK_SUCCESS' as const;
export const GET_MOVIE_RANK_FAILURE = 'movie/GET_MOVIE_RANK_FAILURE' as const;
export const GET_MOVIE_URL_REQUEST = 'movie/GET_MOVIE_URL_REQUEST' as const;
export const GET_MOVIE_URL_SUCCESS = 'movie/GET_MOVIE_URL_SUCCESS' as const;
export const GET_MOVIE_URL_FAILURE = 'movie/GET_MOVIE_URL_FAILURE' as const;

export const setTargetDate = createAction(SET_TARGET_DATA)<number>();
export const setLoading = createAction(LOADING)<boolean>();
export const getMoviRankAsync = createAsyncAction(
    GET_MOVIE_RANK_REQUEST,
    GET_MOVIE_RANK_SUCCESS,
    GET_MOVIE_RANK_FAILURE
)<number, IBoxOfficeResult, AxiosError>();
export const getMovieUrlAsync = createAsyncAction(
    GET_MOVIE_URL_REQUEST,
    GET_MOVIE_URL_SUCCESS,
    GET_MOVIE_URL_FAILURE,
)<string, any, AxiosError>();