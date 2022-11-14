import { useEffect } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import movieApi from 'src/apis/movieApi';
import sendApi from 'src/apis/sendApi';

const MovieRankDetail = () => {
    useEffect(() => {
        movieApi.getWeeklyBoxOfficeList({targetDt: 20221113}).then((res) => console.log(res));
    },[])

    return (
        <Wrapper>
            rank detail
        </Wrapper>
    )
}
const Wrapper = styled.div``;

export default MovieRankDetail;