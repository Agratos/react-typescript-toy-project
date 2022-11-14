import api from './common';

export default {
    // postLogin: ({ id, password }:{ id:string, password:string }) => {
    //     return api.post(`/api/auth/login`, {id, password})
    // }
    getTest: () => {
        return api.get('/api/todos/1');
    },

    getTest1: () => {
        return api.get('/test/todos/1');
    }
}