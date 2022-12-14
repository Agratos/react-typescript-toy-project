import { createReducer } from 'typesafe-actions';

import { TTodoListState, TTodoAction } from "../types/todo";
import * as actions from '../actions/todo';

const initialState: TTodoListState = {
    todoItems: [{
        id:0,
        text:'일일 계획을 세워봐요!',
        done: false,
    }],
    currentId: 1,
    toggleMenu: true,
    toggleRemove: false,
};

const todoReducer = createReducer<TTodoListState, TTodoAction>(initialState,{
    [actions.ADD_TODO]: (state, action) => ({
        ...state,
        todoItems: [
            ...state.todoItems, {
                id: state.currentId,
                text: action.payload.text,
                done: false
            }
        ],
        currentId: state.currentId + 1,
    }),
    [actions.REMOVE_TODO]: (state, action) => ({
        ...state,
        todoItems: state.todoItems.filter(
            (todo: {id: number}) => todo.id !== action.payload
        ),
    }),
    [actions.TOGGLE_TODO]: (state, action) => ({
        ...state,
        todoItems: state.todoItems.map((todo) => 
            todo.id === action.payload ? {...todo, done: !todo.done } : todo
        ),
    }),
    [actions.RESET_TODO]: (state, action) => ({
        ...state,
        todoItems: initialState.todoItems,
        currentId: initialState.currentId,
    }),
    [actions.TOGGLE_MENU_TODO]: (state, action ) => ({
        ...state,
        toggleMenu: !state.toggleMenu
    }),
    [actions.TOGGLE_REMOVE_TODO]: (state, action ) => ({
        ...state,
        toggleRemove: !state.toggleRemove
    }),
})

export default todoReducer;