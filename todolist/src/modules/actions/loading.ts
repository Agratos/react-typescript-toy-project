import { createAction } from 'typesafe-actions';

export const START_LOADING = 'loading/START_LOADING' as const; 
export const FINISH_LOADING = 'loading/FINISH_LOADING' as const;

export const startLoading = createAction(START_LOADING)<boolean>(); // object 전달
export const finishLoading = createAction(FINISH_LOADING)<boolean>(); // id값 전달

