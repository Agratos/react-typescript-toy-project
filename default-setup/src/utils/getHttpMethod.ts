const methodType = ['get', 'post', 'put', 'delete'];

export const getHttpMethod = (getApi: Function) => {
    let method = 'undefined';
    methodType.forEach((type) => {
        if (getApi.toString().toLowerCase().includes(type)) {
            method = type;
        }
    });
    return method;
};






