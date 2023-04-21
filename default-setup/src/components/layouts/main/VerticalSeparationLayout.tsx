import React from 'react';
import styled from 'styled-components';

import { IMultipleChildren } from '../Layout';

/** 수직 */
const VerticalSeparationLayout = ({ children }: IMultipleChildren) => {
    return (
        <Wrapper>
            <VerticalSeparationWrapper>{children[0]}</VerticalSeparationWrapper>
            <VerticalSeparationWrapper>{children[1]}</VerticalSeparationWrapper>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`;
const VerticalSeparationWrapper = styled.div`
    width: 50%;
`;

export default React.memo(VerticalSeparationLayout);
