import { ActionType } from 'typesafe-actions';
import * as actions from '../actions/todo';

export type TTodoItemParams = {
    id: number;
    text: string;
    done: boolean;
}

export type TTodoListState = {
    todoItems: TTodoItemParams[];
    currentId: number;
    toggleMenu: boolean;
}


/** 새로운 액션 생성 함수를 만들어도 새롭게 타입을 지정하지 않아도 된다! **/
export type TTodoAction = ActionType<typeof actions>;
 