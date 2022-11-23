import styled, { css } from 'styled-components';

import { AiOutlineCaretDown, AiOutlineCaretUp} from 'react-icons/ai'
import { BsDash } from 'react-icons/bs';

import { IMovieSearchItemsState } from 'src/modules/movie/types';

const MovieCard = ({link, image, title, userRating}: IMovieSearchItemsState) => {

    const openLink = () => {
        window.open(link, '_blank')
    }

    return (
        <Wrapper>
            <Poster 
                src={image}
                onClick={openLink}
            />
            <Title>{`< ${title} >`}</Title>
            <Rating>{`${userRating} 점`}</Rating>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    ${({theme}) => theme.div.vhCenter}
`;
const RankWrapper = styled.div`
    ${({theme}) => theme.div.hCenter}
`;
const Rank = styled.div`
    text-align: center;
    font-size: 20px;
`;
const Poster = styled.img`
    width: 180px;
    flex-grow: 0;

    margin: 8px 0px;
    border-radius: 10%;

    :hover {
        cursor: pointer;
    }
`;
const Title = styled(Rank)`
    width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
const Rating = styled.div``;

export default MovieCard;