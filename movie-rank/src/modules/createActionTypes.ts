export default function createActionTypes(type: string){
    const REQUEST = `${type}_REQUEST` as const;
    const SUCCESS = `${type}_SUCCESS` as const;
    const FAILURE = `${type}_FAILURE` as const;
    return {REQUEST, SUCCESS, FAILURE};
};