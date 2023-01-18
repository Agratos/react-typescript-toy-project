import React from 'react';
import styled from 'styled-components';

import StrokeAnimation from 'src/containers/svg/StrokeAnimation';
import HeaderTitle from 'src/assets/images/svg/header-title.svg';

const HeaderLayout = () => {
    return (
        <Wrapper>
            <TextWrapper>
                <IntroduceText>
                    EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.
                </IntroduceText>
                <TitleWrapper>
                    <StrokeAnimation 
                        Svg={HeaderTitle}
                        id={'header-title_svg'}
                        size={12}
                    />
                </TitleWrapper>
            </TextWrapper>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    height: fit-content;
    width: 100vw;
    border-bottom: 0.5px solid black;
`;
const TextWrapper = styled.div`
    margin: 16px;
`;
const IntroduceText = styled.div`
    text-align: center;
    font-size: 14px;
`;
const TitleWrapper = styled.div`
    text-align: center;
    margin-top: 8px;
`;

export default React.memo(HeaderLayout);
