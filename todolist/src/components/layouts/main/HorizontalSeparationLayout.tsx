import React from 'react';
import styled from 'styled-components';

import { IMultipleChildren } from '../Layout';

const HorizontalSeparationLayout = ({ children }: IMultipleChildren) => {
    return (
        <Wrapper>
            <HorizontalSeparationWrapper>
                {children[0]}
            </HorizontalSeparationWrapper>
            <HorizontalSeparationWrapper>
                {children[1]}
            </HorizontalSeparationWrapper>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    flex: 1;
    //background-color: #cacaca;
`;
const HorizontalSeparationWrapper = styled.div`
    height: 50%;
`;

export default React.memo(HorizontalSeparationLayout);
