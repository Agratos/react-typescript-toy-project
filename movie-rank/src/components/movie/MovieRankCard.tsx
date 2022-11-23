import styled, { css } from 'styled-components';

import { AiOutlineCaretDown, AiOutlineCaretUp} from 'react-icons/ai'
import { BsDash } from 'react-icons/bs';

import { IMovieState } from 'src/modules/movie/types';

interface IMovieCard extends IMovieState{
    focus: boolean;
}

const MovieCard = ({rank, rankInten, movieNm, image, link, userRating, focus}: IMovieCard) => {

    const ratingSwitchRender = () => {
        const rating = Number(rankInten)!

        if(rating > 0){
            return <AiOutlineCaretUp size={14} color={`red`}/>
        }else if(rating < 0){
            return <AiOutlineCaretDown size={14} color={`red`}/>
        }else{
            return <BsDash />
        }
    }

    const openLink = () => {
        window.open(link, '_blank')
    }

    return (
        <Wrapper focus={focus}>
            <RankWrapper>
                <Rank>{`${rank} 위`}</Rank>
                <RankInten>
                    {`${rankInten.replace('-' , '')}`}
                    <RatingSpan>
                        {ratingSwitchRender()}
                    </RatingSpan>               
                </RankInten>
            </RankWrapper>
            <Poster 
                src={image}
                onClick={openLink}
            />
            <Title>{`< ${movieNm} >`}</Title>
        </Wrapper>
    )
}

const Wrapper = styled.div<{focus: boolean}>`
    ${({theme}) => theme.div.vhCenter}
    ${({focus}) => focus && css`
        
    `}
`;
const RankWrapper = styled.div`
    ${({theme}) => theme.div.hCenter}
`;
const Rank = styled.div`
    text-align: center;
    font-size: 20px;
`;
const RankInten = styled.span`
    position: absolute;
    display: flex;
    font-size: 16px;
    color: red;

    margin-top: 4px;
    margin-left: 80px;
`;
const RatingSpan = styled.span`
    position: absolute;

    margin-top: 2px;
    margin-left: 12px;
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

export default MovieCard;