# 예시
<!-- 
파일 분류 - 사용하는 곳에 따라서
ex) landing, promotion, register, login ...

    import api from './common';

    export default {
        postLogin: ({ id, password }:{ id:string, password:string }) => {
            return api.post(`/api/auth/login`, {id, password})
        }
    }
} -->