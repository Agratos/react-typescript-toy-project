import axios from 'axios';
import httpServer from 'src/utils/httpServer';
import loaclStoreService from 'src/utils/loaclStoreService';

axios.defaults.withCredentials = true;

export default {
    get: async (url: string) => {
        return await axios.get(
            url,
            httpServer.authorization(loaclStoreService.get('token') as string)
        )
    },

    post: async (url: string, jsonData: object) => {
        return await axios.post(
            url,
            jsonData,
            httpServer.authorization(loaclStoreService.get('token') as string)
        )
    },

    put: async (url: string, jsonData: object) => {
        return await axios.put(
            url,
            jsonData,
            httpServer.authorization(loaclStoreService.get('token') as string)
        )
    },

    delete: async (url: string) => {
        return await axios.delete(
            url,
            httpServer.authorization(loaclStoreService.get('token') as string)
        )
    },
}