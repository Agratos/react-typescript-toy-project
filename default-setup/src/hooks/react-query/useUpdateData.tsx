import { useState, useLayoutEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { AxiosResponse } from 'axios';
import { IMessage } from 'src/apis/common';

import { getCurrentTime } from 'src/utils/getCurrentTime';
import { getHttpMethod } from 'src/utils/getHttpMethod';

interface UseUpdateDataProps<UpdateParams> {
    key: any | any[];
    updateApi: (params?:UpdateParams) => Promise<AxiosResponse<IMessage>>
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
 * - updateLatestTime
 * - updateLatestResult
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
export const useUpdateData = <UpdateParams,>({key, updateApi, onSuccess, onError, onLoading, queryOptions}: UseUpdateDataProps<UpdateParams>) => {
    const queryClient = useQueryClient();
    const [updateLatestTime, setUpdateLatestTime] = useState<string>('');
    const [updateLatestResult, setUpdateLatestResult] = useState<string>('');
    const method = getHttpMethod(updateApi);

    const onFetchLatest = (result: string) => {
        setUpdateLatestTime(getCurrentTime());
        setUpdateLatestResult(result);
    }

    const { mutate, isLoading, isError, error } = useMutation(
        key,
        (params?: UpdateParams) => updateApi(params),
        {
            onSuccess: () => {
                onSuccess?.();
                onFetchLatest('success');
                queryClient.invalidateQueries(key);
                console.log(`${key[0]} Update Api Success: Type: ${method}`)
            },
            onError: (error) => {
                onError?.();
                onFetchLatest('error');
                console.error(`${key[0]} Uodate Api Error: Type: ${method}}\n${error}`)
            },

            ...queryOptions
        }
    )
    
    useLayoutEffect(() => {
        isLoading && onLoading?.();
    },[isLoading])
    
    return { mutate, isLoading, isError, error, updateLatestTime, updateLatestResult }
}
