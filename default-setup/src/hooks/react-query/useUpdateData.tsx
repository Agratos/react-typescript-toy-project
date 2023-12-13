import { useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { MessageResponse } from 'src/utils/api/axiosApi';

import { getCurrentTime } from 'src/utils/common/customTime';

import localStoreService from 'src/utils/common/localStoreService';

interface UseUpdateDataProps<UpdateParams> {
    key: any | any[];
    updateApi: (params?:UpdateParams) => Promise<AxiosResponse<MessageResponse>>
    onSuccess?: (res: AxiosResponse) => void;
    onError?: (error: AxiosError<UseUpdateDataError>) => void;
    onLoading?: Function;
    queryOptions?: {
        [key: string]: any;
    };
}

interface UseUpdateDataError {
    message: string,
    statusCode: number
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
    const [updateLatestTime, setUpdateLatestTime] = useState<string>('');
    const [updateLatestResult, setUpdateLatestResult] = useState<string>('');
    const queryClient = useQueryClient();
    const navigate = useNavigate()

    const onFetchLatest = (result: string) => {
        setUpdateLatestTime(getCurrentTime());
        setUpdateLatestResult(result);
    }

    const { mutate, data, isLoading, isError, error } = useMutation(
        key,
        (params?: UpdateParams) => updateApi(params),
        {
            onSuccess: (res) => {
                onSuccess?.(res);
                onFetchLatest('success');
                queryClient.invalidateQueries(key);
                //console.log(`${key[0]} Update Api Success: Type: ${method}`)
            },
            onError: (error: AxiosError<UseUpdateDataError>) => {
                onError?.(error);
                onFetchLatest('error');
                //console.error(`${key[0]} Uodate Api Error: Type: ${method}}\n${error}`)
                if(error.response?.status === 480){
                    localStoreService.deleteAll();
                    navigate('/#/login')
                }
            },

            ...queryOptions
        }
    )
    
    useLayoutEffect(() => {
        isLoading && onLoading?.();
    },[isLoading])
    
    return { mutate, data, isLoading, isError, error, updateLatestTime, updateLatestResult }
}
