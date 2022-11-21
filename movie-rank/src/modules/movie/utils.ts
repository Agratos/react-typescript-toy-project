import { IMovieState } from './types';

export const setMovieRankList = (data: any) => {
    let result:IMovieState[] = [];

    data.map(({rank, movieNm, rankInten}: IMovieState) => {
        result.push({
            rank,
            movieNm,
            rankInten,
            movieUrl: ''
        })
    })
    
    return result;
}

export const setMovieUrl = (data: any, list: IMovieState[]) => {
    let name = data.title.split(/[<br>,</br>]/)[3];
    let objectIndex = list.findIndex((obj) => obj.movieNm === name);
    
    list[objectIndex] = {
        ...list[objectIndex],
        movieUrl: data.image
    }

    return list;
}