import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';
import { all } from 'redux-saga/effects';
//import storage from 'redux-persist/lib/storage';

//import todoReducer from './reducers/todo';
import movie from './movie/reducer';
import { movieSaga } from './movie/saga';

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    // whitelist: ['userReducer']
    // blacklist: ['userReducer']
};

const rootReducer = combineReducers({
    //todo: todoReducer,
    movie
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
    yield all([movieSaga()]);
}