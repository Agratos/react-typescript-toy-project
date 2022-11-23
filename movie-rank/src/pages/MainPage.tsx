import { useSelector } from 'react-redux';
import styled from 'styled-components';

import MovieSearch from 'src/components/movie/MovieSearch';
import MovieRank from 'src/components/movie/MovieRank';
import MovieSearchResult from 'src/components/movie/MovieSearchResult';

import { RootState } from 'src/modules';

const MainPage = () => {
    const pageIndex = useSelector((state: RootState) => state.movie.pageIndex);

    const pageSwitchRender = () => {
        switch(pageIndex){
            case 0:
                return <MovieRank />
            case 1:
                return <MovieSearchResult />
            default:
                return <>Not Found</>
        }
    }

    return (
        <Wrapper>
            <MovieSearch />
            {pageSwitchRender()}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    ${({theme}) => theme.div.vhCenter}
    flex: 1;
    background-color: #1b1b1b;
`;

export default MainPage;