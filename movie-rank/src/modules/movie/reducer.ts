import { createReducer } from 'typesafe-actions';
import { IMovieInitialState, MovieAction } from './types';
import * as actions from './actions';
import { setMovieRankList, setMovieUrl } from './utils';

const initialState: IMovieInitialState = {
    loading: true,
    targetDt: null,
    dailyBoxOfficeList: {
        loading: false,
        error: null,
        data: null,
    },
    movieUrl: {
        loading: false,
        error: null,
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
            //data: action.payload.data.boxOfficeResult.dailyBoxOfficeList
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
    [actions.GET_MOVIE_URL_REQUEST]: state => ({
        ...state,
        movieUrl: {
            loading: true,
            error: null,
        }
    }),
    [actions.GET_MOVIE_URL_SUCCESS]: (state, action) => ({
        ...state,
        dailyBoxOfficeList: {
            loading: false,
            error: null,
            //data: setMovieRankList(action.payload.data.boxOfficeResult.dailyBoxOfficeList)
            data: setMovieUrl(action.payload.data.items[0], state.dailyBoxOfficeList.data!)
        },
        movieUrl: {
            loading: false,
            error: null,
        }
    }),

});

export default movie;