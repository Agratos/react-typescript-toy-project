export default {
    get: (key: string) => {
        return localStorage.getItem(key);
    },

    set: (key: string, value: string) => {
        return localStorage.setItem(key, value);
    },

    delete: (key: string) => {
        return localStorage.removeItem(key);
    },

    deleteAll: () => {
        return localStorage.clear();
    },
};
