import { createReducer } from 'typesafe-actions';
import { MovieState, MovieAction } from './types';
import { getMoviRankAsync } from './actions';
import { GET_MOVIE_RANK_REQUEST, GET_MOVIE_RANK_FAILURE, GET_MOVIE_RANK_SUCCESS } from './actions';
//import { GET_MOVIE_RANK } from './actions';

const initialState: MovieState = {
    dailyBoxOfficeList: {
        loading: false,
        error: null,
        data: null
    }
};

const movie = createReducer<MovieState, MovieAction>(initialState, {
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