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

    getMovieUrl: (movieName: string): Promise<any> => {
        return naverApi.get(`/naverApi/v1/search/movie.json?query=${movieName}`,
            {
                headers: {
                    'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
                    'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET
                }
            }
        )
    }
}

export async function getTest(targetDt: number) {
    const response = await axios.get<IBoxOfficeResult>(
        `/api/movie/searchDailyBoxOfficeList.json?key=${process.env.MOVIE_KEY}&targetDt=${targetDt}` // url
    );

    return response.data
}