export default function createActionTypes(type: string){
    const RUNNING = `${type}_RUNGGING`;
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return {RUNNING, SUCCESS, FAILURE};
};