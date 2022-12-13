import React from 'react';
import styled from 'styled-components';

import { IMultipleChildren } from '../Layout';

/** 4명의 chlidren 필요 왼쪽위, 오른쪽위, 왼쪽 아래, 오른쪽 아래**/
const QuarterSeparationLayout = ({ children }: IMultipleChildren) => {
    return (
        <Wrapper>
            <VerticalSeparationWrapper>
                <HorizontalSeparationWrapper>
                    {children[0]}
                </HorizontalSeparationWrapper>
                <HorizontalSeparationWrapper>
                    {children[1]}
                </HorizontalSeparationWrapper>
            </VerticalSeparationWrapper>
            <VerticalSeparationWrapper>
                <HorizontalSeparationWrapper>
                    {children[2]}
                </HorizontalSeparationWrapper>
                <HorizontalSeparationWrapper>
                    {children[3]}
                </HorizontalSeparationWrapper>
            </VerticalSeparationWrapper>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    flex: 1;
    //background-color: #cacaca;
`;
const HorizontalSeparationWrapper = styled.div`
    height: 100%;
    width: 100%;
`;
const VerticalSeparationWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
`;

export default React.memo(QuarterSeparationLayout);
