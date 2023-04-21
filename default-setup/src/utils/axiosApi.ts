import axios from 'axios';
import loaclStoreService from 'src/utils/localStoreService';

axios.defaults.baseURL = process.env.BASE_URL;

export interface IMessage {
    data: {
        message: string
    }
}

const getAxiosConfig = (token: string) => {
    return {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': true,
            'Access-Control-Allow-Credentials': process.env.BASE_URL ?? '',
            'Cache-Control': 'max-age=60',
        },
    }
}

export default {
    get: async <T>(url: string) : Promise<T> => {
        return await axios.get<T, any> (url, getAxiosConfig(loaclStoreService.get('token')))
    },

    post: async <T>(url: string, jsonData: object) : Promise<T> => {
        return await axios.post<T, any> (url, jsonData, getAxiosConfig(loaclStoreService.get('token')))
    },

    put: async <T>(url: string, jsonData: object) : Promise<T> => {
        return await axios.put<T, any> (url, jsonData, getAxiosConfig(loaclStoreService.get('token')))
    },

    patch: async <T>(url: string, jsonData: object) : Promise<T> => {
        return await axios.patch<T, any> (url, jsonData, getAxiosConfig(loaclStoreService.get('token')))
    },

    delete: async <T>(url: string, jsonData?: object) : Promise<T> => {
        return await axios.delete<T, any>(
            url,
            {
                data: jsonData,
                ...(getAxiosConfig(loaclStoreService.get('token')))
            }
        )
    },

}