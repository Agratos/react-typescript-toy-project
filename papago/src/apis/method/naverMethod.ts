import axios from 'axios';

axios.defaults.withCredentials = true;

export default {
    get: async <T>(url: string) : Promise<T> => {
        return await axios.get<T, any>(
            url,
            {
                headers: {
                    'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
                    'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET
                }
            }
        )
    },

    post: async <T>(url: string, jsonData: object) : Promise<T> => {
        return await axios.post<T, any>(
            url,
            jsonData,
            {
                headers: {
                    'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
                    'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET
                }
            }
        )
    },
}