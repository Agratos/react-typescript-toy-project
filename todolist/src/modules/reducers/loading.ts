import { createReducer } from 'typesafe-actions';

import { TLoadingState, TLoadingAction } from "../types/loading";
import * as actions from '../actions/loading';

const initialState: TLoadingState = {
    loading: false,
};

const loadingReducer = createReducer<TLoadingState, TLoadingAction>(initialState, {
    [actions.START_LOADING] : (state, action) => ({
        ...state,
        loading: true
    }),
    [actions.FINISH_LOADING] : (state, actions) => ({
        ...state,
        loading: false,
    }),
})

export default loadingReducer;