import styled from 'styled-components';

interface IMovieCard {
    name: string;
    rank: string;
    url: string;
}

const MovieCard = ({rank, name, url}: IMovieCard) => {
    console.log(url);
    return (
        <Wrapper>
            <Rank>{`${rank} 위`}</Rank>
            <Poster src={url} />
            <Title>{`< ${name} >`}</Title>
        </Wrapper>
    )
}
const Wrapper = styled.div``;
const Rank = styled.div`
    text-align: center;
`;
const Poster = styled.img`
    //width: 300px;
    flex-grow: 0;

    border-radius: 10%;
`;
const Title = styled(Rank)``;

export default MovieCard;