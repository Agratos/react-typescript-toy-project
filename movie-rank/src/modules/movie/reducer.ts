import { createReducer } from 'typesafe-actions';
import { MovieState, MovieAction } from './types';
import { GET_MOVIE_RANK, GET_MOVIE_RANK_ERROR, GET_MOVIE_RANK_SUCCESS } from './actions';

const initialState: MovieState = {
    dailyBoxOfficeList: {
        loading: false,
        error: null,
        data: null
    }
};

const movie = createReducer<MovieState, MovieAction>(initialState, {
    [GET_MOVIE_RANK]: state => ({
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
            data: action.payload
        }
    }),
    [GET_MOVIE_RANK_ERROR]: (state, action) => ({
        ...state,
        dailyBoxOfficeList: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
});

export default movie;