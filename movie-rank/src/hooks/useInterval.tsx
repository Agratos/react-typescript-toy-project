import { useEffect, useRef } from 'react';

const useInterval = (callback: Function, delay: number | null) => {
    const saveCallBack = useRef<Function>();

    useEffect(() => {
        saveCallBack.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            saveCallBack.current!();
        };
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

export default useInterval;
