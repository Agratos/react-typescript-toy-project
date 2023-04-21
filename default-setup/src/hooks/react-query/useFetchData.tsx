import { useState, useLayoutEffect } from 'react';
import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';

import { getCurrentTime } from 'src/utils/getCurrentTime';
import { getHttpMethod } from 'src/utils/getHttpMethod';

interface UseFetchDataProps<InputParams, ResponseData> {
    key: any | any[];
    fetchApi: (params?: InputParams) => Promise<AxiosResponse<ResponseData>>;
    onSuccess?: Function;
    onError?: Function;
    onLoading?: Function;
    queryOptions?: {
        [key: string]: any;
    };
}

/** 
 * return data
 * - data
 * - isLoading
 * - isError
 * - error
 * - fetchLatestTime
 * - fetchLatestResult
 * 
 * queryOptions - default
 * - refetchInterval: false
 * - refetchOnWindowFocus: false
 * 
 * function
 * - onSuccess: 성공시 처리할 로직
 * - onError: 에러시 처리할 로직
 * - onLoading: 로딩시 처리할 로직
 **/
export const useFetchData = <InputParams, ResponseData>({key, fetchApi, onSuccess, onError, onLoading, queryOptions}: UseFetchDataProps<InputParams, ResponseData>) => {
    const [fetchLatestTime, setFetchLatestTime] = useState<string>('');
    const [fetchLatestResult, setFetchLatestResult] = useState<string>('');
    const method = getHttpMethod(fetchApi);

    const onFetchLatest = (result: string) => {
        setFetchLatestTime(getCurrentTime());
        setFetchLatestResult(result);
    }

    const { data, isLoading, isError, error } = useQuery(
        key,
        () => fetchApi(),
        {   
            onSuccess: (res) => {
                onSuccess?.(res);
                onFetchLatest('success');
                console.log(`${key[0]} Fetch Api Success: Type: ${method}\n`, res.data)
                return res.data;
            },
            onError: (error) => {
                onError?.();
                onFetchLatest('error')
                console.error(`${key[0]} Fetch Api Error: Type: ${method}}\n${error}`)         
            },

            refetchInterval: false,
            refetchOnWindowFocus: false,
            ...queryOptions,
        },
    )
    
    useLayoutEffect(() => {
        isLoading && onLoading?.();
    },[isLoading])

    return { data, isLoading, isError, error, fetchLatestTime, fetchLatestResult }
}