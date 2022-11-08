import { createAction } from 'typesafe-actions';

import { TTodoItemParams } from '../types/todo';

/** 액션 타입 **/
export const ADD_TODO = 'todo/CHANGE_TODO' as const;
export const REMOVE_TODO = 'todo/REMOVE_TODO' as const;
export const TOGGLE_TODO = 'todo.TOGGLE_TODO' as const;

/** 액션 생성 함수 **/
/**
 * 액션 생성함수를 만들 때 페이로드로 들어가는 값은 제너릭으로 정해줄수 있는데, 만약 페이로드에 들어가는 값이 없다면
 * 제너릭을 생략해도 된다.
 * 위와 같은 경우 submit의 페이로드로 들어가는 값은 객체이기 때문에 객체안의 값들을 담고 있는 
 * 인터페이스를 제너릭으로 넣어준다.
 **/

export const addTodo = createAction(ADD_TODO)<{text: string}>(); // object 전달
export const removeTodo = createAction(REMOVE_TODO)<number>(); // id값 전달
export const toggleTodo = createAction(TOGGLE_TODO)<number>(); // id값 전달
