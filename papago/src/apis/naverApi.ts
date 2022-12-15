import naverMethod from "./method/naverMethod"

export default {
    // postLogin: ({ id, password }:{ id:string, password:string }) => {
    //     return api.post(`/api/auth/login`, {id, password})
    // }
    getTranslate: ({source, target, text}: {source: string, target: string, text: string}) => {
        return naverMethod.post('/naverapi/v1/papago/n2mt',{
            source:source,
            target:target,
            text:text
        })
    }
}