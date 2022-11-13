import api from './common';
import httpServer from 'src/utils/httpServer';
import loaclStoreService from 'src/utils/loaclStoreService';

export default {
    // postLogin: ({ id, password }:{ id:string, password:string }) => {
    //     return api.post(`/api/auth/login`, {id, password})
    // }
    getWeeklyBoxOfficeList: ({targetDt} : {targetDt:string}) => {
        return api.get(`/movie/api/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json`,{
            params: {
                key: process.env.MOVIE_KEY,
                targetDt
            },
            headers: {
                Authorization: `Bearer ${loaclStoreService.get('token') as string}`,
            },
        })
    }
}