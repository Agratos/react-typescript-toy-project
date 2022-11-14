import api from './common';
import httpServer from 'src/utils/httpServer';
import loaclStoreService from 'src/utils/loaclStoreService';

export default {
    // postLogin: ({ id, password }:{ id:string, password:string }) => {
    //     return api.post(`/api/auth/login`, {id, password})
    // }
    getWeeklyBoxOfficeList: ({targetDt} : {targetDt:number}) => {
        return api.get(`/api/movie/searchDailyBoxOfficeList.json?key=${process.env.MOVIE_KEY}&targetDt=${targetDt}`)
    }
}