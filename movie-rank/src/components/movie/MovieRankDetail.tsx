import { useEffect } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import movieApi from 'src/apis/movieApi';

const MovieRankDetail = () => {
    useEffect(() => {
        movieApi.getDailyBoxOfficeList({targetDt: 20221113}).then((res) => console.log(res));
    },[])

    return (
        <Wrapper>
            rank detail
        </Wrapper>
    )
}
const Wrapper = styled.div``;

export default MovieRankDetail;