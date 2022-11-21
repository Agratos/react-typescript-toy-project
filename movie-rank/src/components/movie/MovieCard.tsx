import styled from 'styled-components';

interface IMovieCard {
    name: string;
    rank: string;
    url: string;
}

const MovieCard = ({rank, name, url}: IMovieCard) => {
    return (
        <Wrapper>
            <Rank>{`${rank} 위`}</Rank>
            <Poster src={url} />
            <Title>{`< ${name} >`}</Title>
        </Wrapper>
    )
}

const Rank = styled.div`
    text-align: center;
    font-size: 20px;
`;
const Poster = styled.img`
    width: 180px;
    flex-grow: 0;

    margin: 8px 0px;
    border-radius: 10%;
`;
const Title = styled(Rank)`
    width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
const Wrapper = styled.div`
    ${({theme}) => theme.div.vhCenter}

    :hover {
        ${Title} {
            text-overflow: none;
            white-space: normal;
        }
    }
`;

export default MovieCard;