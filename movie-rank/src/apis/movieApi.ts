import defaultApi from './method/defaultMethod';
import naverApi from './method/naverMethod';
import { IBoxOfficeResult } from 'src/modules/movie/types';
import axios from 'axios';

export default {
    // postLogin: ({ id, password }:{ id:string, password:string }) => {
    //     return api.post(`/api/auth/login`, {id, password})
    // }
    
    getDailyBoxOfficeList: (targetDt: number): Promise<IBoxOfficeResult> => {
        //영화진흥위원회 api
        return defaultApi.get<IBoxOfficeResult>(`/api/movie/searchDailyBoxOfficeList.json?key=${process.env.MOVIE_KEY}&targetDt=${targetDt}`)
    },

    getMovieDetail: (movieName: string): Promise<any> => {
        return naverApi.get(`/naverApi/v1/search/movie.json?query=${movieName}`)
    },

    getMovieSearch: ({target, start}:{target:string, start:number}): Promise<any> => {
        return naverApi.get(`/naverApi/v1/search/movie.json?query=${target}&display=5&start=${start}`)
    },
}

export async function getTest(targetDt: number) {
    const response = await axios.get<IBoxOfficeResult>(
        `/api/movie/searchDailyBoxOfficeList.json?key=${process.env.MOVIE_KEY}&targetDt=${targetDt}` // url
    );

    return response.data
}