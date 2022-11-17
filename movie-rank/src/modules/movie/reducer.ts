import { createReducer } from 'typesafe-actions';
import { MovieState, MovieAction } from './types';
import { getMoviRankAsync } from './actions';
import { SET_TARGET_DATA, GET_MOVIE_RANK_REQUEST, GET_MOVIE_RANK_FAILURE, GET_MOVIE_RANK_SUCCESS } from './actions';
//import { GET_MOVIE_RANK } from './actions';

const initialState: MovieState = {
    targetDt: null,
    dailyBoxOfficeList: {
        loading: false,
        error: null,
        data: null
    }
};

const movie = createReducer<MovieState, MovieAction>(initialState, {
    [SET_TARGET_DATA]: (state, action) => ({
        ...state,
        targetDt: action.payload
    }),
    [GET_MOVIE_RANK_REQUEST]: state => ({
        ...state,
        dailyBoxOfficeList: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_MOVIE_RANK_SUCCESS]: (state, action) => ({
        ...state,
        dailyBoxOfficeList: {
            loading: false,
            error: null,
            data: action.payload.data.boxOfficeResult
        }
    }),
    [GET_MOVIE_RANK_FAILURE]: (state, action) => ({
        ...state,
        dailyBoxOfficeList: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
});

export default movie;