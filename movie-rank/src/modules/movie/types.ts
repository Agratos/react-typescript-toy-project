import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type MovieAction = ActionType<typeof actions>;

export interface BoxOfficeResult {
        boxofficeType: string,
        showRange: string,
        dailyBoxOfficeList: []
}

export type MovieState = {
    dailyBoxOfficeList: {
        loading: boolean;
        error: Error | null;
        data:  BoxOfficeResult | null;
    }
};