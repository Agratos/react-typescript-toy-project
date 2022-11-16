import api from './common';
import { BoxOfficeResult, IDailyBoxOfficeList } from 'src/modules/movie/types';
import axios from 'axios';

export default {
    // postLogin: ({ id, password }:{ id:string, password:string }) => {
    //     return api.post(`/api/auth/login`, {id, password})
    // }
    // getDailyBoxOfficeList: ({targetDt} : {targetDt: number}) => {
    //     return api.get<BoxOfficeResult>(`/api/movie/searchDailyBoxOfficeList.json?key=${process.env.MOVIE_KEY}&targetDt=${targetDt}`)
    // }
    getDailyBoxOfficeList: (targetDt: number): Promise<BoxOfficeResult> => {
        return api.get<BoxOfficeResult>(`/api/movie/searchDailyBoxOfficeList.json?key=${process.env.MOVIE_KEY}&targetDt=${targetDt}`)
    }
}

export async function getTest(targetDt: number) {
    const response = await axios.get<BoxOfficeResult>(
        `/api/movie/searchDailyBoxOfficeList.json?key=${process.env.MOVIE_KEY}&targetDt=${targetDt}` // url
    );

    return response.data
}