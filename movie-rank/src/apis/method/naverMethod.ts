import axios from 'axios';

axios.defaults.withCredentials = true;

export default {
    get: async <T>(url: string, headers?: object) : Promise<T> => {
        return await axios.get<T, any>(
            url,
            {
                headers: {
                    'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
                    'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET
                }
            }
        )
    }
}