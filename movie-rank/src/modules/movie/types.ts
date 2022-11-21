import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type MovieAction = ActionType<typeof actions >;

export interface IBoxOfficeResult {
    data: {
        boxOfficeResult: {
            boxofficeType: string,
            showRange: string,
            dailyBoxOfficeList: []
        }
    }
}

export interface IMovieState {
    rank: string,
    movieNm: string,
    rankInten: string,
    movieUrl?: string,
}

export interface IMovieInitialState {
    targetDt: number | null;
    dailyBoxOfficeList: {
        loading: boolean;
        error: Error | null;
        data:  IMovieState[] | null;
    };
    movieUrl: {
        loading: boolean,
        error: Error | null;
    }
};