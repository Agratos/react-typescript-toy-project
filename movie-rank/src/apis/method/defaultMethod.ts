import axios from 'axios';
import httpServer from 'src/utils/httpServer';
import loaclStoreService from 'src/utils/loaclStoreService';

axios.defaults.withCredentials = true;

export default {
    get: async <T>(url: string) : Promise<T> => {
        return await axios.get<T, any>(
            url, 
            httpServer.authorization(loaclStoreService.get('token') as string)
        )
    },


    post: async <T>(url: string, jsonData: object) : Promise<T> => {
        return await axios.post<T, any>(
            url,
            jsonData,
            httpServer.authorization(loaclStoreService.get('token') as string)
        )
    },

    put: async <T>(url: string, jsonData: object) : Promise<T> => {
        return await axios.put<T, any>(
            url,
            jsonData,
            httpServer.authorization(loaclStoreService.get('token') as string)
        )
    },

    delete: async <T>(url: string) : Promise<T> => {
        return await axios.delete<T, any>(
            url,
            httpServer.authorization(loaclStoreService.get('token') as string)
        )
    },
}