export default {
    authorization: (token: string) => {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    },
};
