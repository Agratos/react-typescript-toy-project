import { useEffect, useRef, RefObject } from 'react';
import { Outlet, LayoutRouteProps } from 'react-router-dom';
import styled from 'styled-components';

import HeaderLayout from './header/HeaderLayout';
import FooterLayout from './footer/FooterLayout';

export interface ISingleChildren {
    children?: React.ReactElement;
}
export interface IMultipleChildren {
    children: React.ReactElement[];
}

const Layout = ({ children }: ISingleChildren) => {
    return (
        <Wrapper>
            <HeaderLayout />
            <ChildrenWrapper>
                <Outlet />
            </ChildrenWrapper>
            <FooterLayout />
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;
const ChildrenWrapper = styled.div`
    flex: 1;
`;

export default Layout;
