import { ActionType } from 'typesafe-actions';
import * as actions from '../actions/loading';

export type TLoadingState = {
    loading: boolean;
}

/** 새로운 액션 생성 함수를 만들어도 새롭게 타입을 지정하지 않아도 된다! **/
export type TLoadingAction = ActionType<typeof actions>;
 