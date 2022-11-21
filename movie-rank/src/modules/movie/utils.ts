import { IMovieState } from './types';
import movieApi from 'src/apis/movieApi';

export const setMovieRankList = (data: any) => {
    console.log(`setMovieRankListData: `,data);
    let result:IMovieState[] = [];

    data.map(({rank, movieNm, rankInten}: IMovieState) => {
        result.push({
            rank,
            movieNm,
            rankInten,
            movieUrl: ''
        })
    })

    console.log('setMovieRankList Result: ', result);

    return result;
}

export const setMovieUrl = (data: any, list: IMovieState[]) => {
    console.log(`setMovieUrl: `, data);

    return list;
}