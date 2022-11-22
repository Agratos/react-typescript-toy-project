import styled from 'styled-components';

import MovieSearch from 'src/components/movie/MovieSearch';
import MovieRank from 'src/components/movie/MovieRank';

const MainPage = () => {
    return (
        <Wrapper>
            <MovieSearch />
            <MovieRank />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    ${({theme}) => theme.div.vhCenter}
    flex: 1;
    background-color: #1b1b1b;
`;

export default MainPage;