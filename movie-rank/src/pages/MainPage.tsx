import styled from 'styled-components';

import MovieRankBanner from 'src/components/movie/MovieRankBanner';
import MovieRankDetail from 'src/components/movie/MovieRankDetail';

const MainPage = () => {
    return (
        <Wrapper>
            <MovieRankBanner/>
            <MovieRankDetail />
        </Wrapper>
    )
}
const Wrapper = styled.div``;

export default MainPage;