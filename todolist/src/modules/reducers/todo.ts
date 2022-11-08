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
})

export default todoReducer;