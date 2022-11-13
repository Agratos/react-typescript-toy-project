import { useEffect } from 'react';
import styled from 'styled-components';

import movieApi from 'src/apis/movieApi';

const MovieRankDetail = () => {

    useEffect(() => {
        movieApi.getWeeklyBoxOfficeList({targetDt:'20221104'}).then((res) => {
            console.log(res);
        })
    },[])

    return (
        <Wrapper>
            rank detail
        </Wrapper>
    )
}
const Wrapper = styled.div``;

export default MovieRankDetail;