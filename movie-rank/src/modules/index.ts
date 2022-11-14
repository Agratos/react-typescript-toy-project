import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';
//import storage from 'redux-persist/lib/storage';

//import todoReducer from './reducers/todo';

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    // whitelist: ['userReducer']
    // blacklist: ['userReducer']
};

const rootReducer = combineReducers({
    //todo: todoReducer,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
