import { useRef } from 'react';
import { useQueries, useQuery, useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';
import styled from 'styled-components';

const MainPage = () => {
    const { data: countDown, status } = useQuery<number>(
        ['countdown'], 
        async () =>  await axios.get('/api/countdown').then((res) => res.data.countDown),
        // { refetchInterval: (data) => data?.countDown ? ( data!.countDown < 100 ? 1000 : false ) : false } 
        // { refetchInterval: (res) => {
        //     if( res ){
        //         if( res < 10){
        //             console.log('res: ', res);
        //             return 1000
        //         }
        //     } 
        //     return false
        // }}
        { refetchInterval: (res) => res ? res < 10 ? 1000 : false : false}
    );

    const inputRef = useRef<HTMLInputElement>(null);

    const queriesData = useQueries([
        {
            queryKey: ['getCount'],
            queryFn: () => axios.get('/api/count').then((res) => res.data.count),
        },
        {
            queryKey: ['getName'],
            queryFn: () => axios.get('/api/name').then((res) => res.data.name),
        }
    ])

    /** post전달 */
    const { data: multiple , mutate: getMultiple} = useMutation((num:number) => axios.post(
        '/api/multiple', 
        { num: num }, 
    ))

    return (
        <Wrapper>
            서버와 연동한 시간 {countDown}
            <Frame>{queriesData[0].data}</Frame>
            <Frame>{queriesData[1].data}</Frame>
            <Frame>
                <input ref={inputRef}/>
                <button onClick={() => getMultiple(Number(inputRef?.current?.value))}>제곱근 구하기</button>
                
            </Frame>
            <Frame>
                <label>입력한 숫자 제곱 : </label>{multiple?.data?.result}
            </Frame>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
const Frame = styled.div``;

export default MainPage;