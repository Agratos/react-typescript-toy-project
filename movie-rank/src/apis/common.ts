import axios from 'axios';
import httpServer from 'src/utils/httpServer';
import loaclStoreService from 'src/utils/loaclStoreService';

axios.defaults.withCredentials = true;

export default {
    get: async <T>(url: string) => {
        const response = await axios.get<T>(
            url, 
            httpServer.authorization(loaclStoreService.get('token') as string)
        )

        return response.data
    },


    post: async <T>(url: string, jsonData: object) => {
        return await axios.post<T>(
            url,
            jsonData,
            httpServer.authorization(loaclStoreService.get('token') as string)
        )
    },

    put: async <T>(url: string, jsonData: object) => {
        return await axios.put<T>(
            url,
            jsonData,
            httpServer.authorization(loaclStoreService.get('token') as string)
        )
    },

    delete: async <T>(url: string) => {
        return await axios.delete<T>(
            url,
            httpServer.authorization(loaclStoreService.get('token') as string)
        )
    },
}