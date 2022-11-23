import { createReducer } from 'typesafe-actions';
import { IMovieInitialState, MovieAction } from './types';
import * as actions from './actions';
import { setMovieRankList, setMovieUrl } from './utils';

const initialState: IMovieInitialState = {
    loading: true,
    targetDt: null,
    pageIndex: 0,

    dailyBoxOfficeList: {
        loading: false,
        error: null,
        data: null,
    },
    movieDetail: {
        loading: false,
        error: null,
    },
    movieSearchList: {
        loading: false,
        error: null,
        data: null,
    }
};

const movie = createReducer<IMovieInitialState, MovieAction>(initialState, {
    [actions.SET_TARGET_DATA]: (state, action) => ({
        ...state,
        targetDt: action.payload
    }),
    [actions.LOADING]: (state, action) => ({
        ...state,
        loading: action.payload,
    }),
    [actions.PAGE_INDEX]: (state, action) => ({
        ...state,
        pageIndex: action.payload
    }),

    [actions.GET_MOVIE_RANK_REQUEST]: state => ({
        ...state,
        dailyBoxOfficeList: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [actions.GET_MOVIE_RANK_SUCCESS]: (state, action) => ({
        ...state,
        dailyBoxOfficeList: {
            loading: false,
            error: null,
            data: setMovieRankList(action.payload.data.boxOfficeResult.dailyBoxOfficeList)
        }
    }),
    [actions.GET_MOVIE_RANK_FAILURE]: (state, action) => ({
        ...state,
        dailyBoxOfficeList: {
            loading: false,
            error: action.payload,
            data: null
        }
    }),
    [actions.GET_MOVIE_DETAIL_REQUEST]: state => ({
        ...state,
        movieUrl: {
            loading: true,
            error: null,
        }
    }),
    [actions.GET_MOVIE_DETAIL_SUCCESS]: (state, action) => ({
        ...state,
        dailyBoxOfficeList: {
            loading: false,
            error: null,
            data: setMovieUrl(action.payload.data.items[0], state.dailyBoxOfficeList.data!)
        },
        movieUrl: {
            loading: false,
            error: null,
        }
    }),
    [actions.GET_MOVIE_DETAIL_FAILURE]: (state, action) => ({
        ...state,
        movieUrl: {
            loading: false,
            error: action.payload,
        }
    }),
    [actions.GET_MOVIE_SEARCH_REQUEST]: (state, action) => ({
        ...state,
        movieSearchList: {
            loading: true,
            error: null,
            data: null,
        }
    }),
    [actions.GET_MOVIE_SEARCH_SUCCESS]: (state, action) => ({
        ...state,
        movieSearchList: {
            loading: false,
            error: null,
            data: action.payload.data
        }
    }),
    [actions.GET_MOVIE_SEARCH_FAILURE]: (state, action) => ({
        ...state,
        movieSearchList: {
            loading: false,
            error: action.payload,
            data: null
        }
    }),
});

export default movie;