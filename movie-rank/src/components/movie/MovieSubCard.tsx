import styled from 'styled-components';

interface IMovieCard {
    name: string;
    rank: number;
    url: string;
}

const MovieSubCard = ({name, rank, url}: IMovieCard) => {
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
    width: 240px;
    height: 400px;
    flex-grow: 0;

    border-radius: 10%;
`;
const Title = styled(Rank)``;

export default MovieSubCard;