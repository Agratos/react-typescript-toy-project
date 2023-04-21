import axios from "axios";

export default {
    authorization: (token:string) => {
        // axios.defaults.headers.common['Authorization'] = token
        // axios.defaults.headers.common['Access-Control-Allow-Origin'] = true
        // axios.defaults.headers.common['Access-Control-Allow-Credentials'] = process.env.BASE_URL ?? ''
        
        return {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': true,
                'Access-Control-Allow-Credentials': process.env.BASE_URL ?? '',
                'Cache-Control': 'max-age=60',
            },
        };
    },
};
