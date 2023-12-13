import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import SideBar from './SideBar';

const MainLayout = () => {
    return (
        <Wrapper>
            <SideBarWrapper>
                <SideBar />
            </SideBarWrapper>
            <BodyWrapper>
                <Outlet />
            </BodyWrapper>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    min-height: 100%;
`;
const SideBarWrapper = styled.div`
    min-width: 200px;
`;
const BodyWrapper = styled.main`
    flex: 1;
    max-width: calc(100% - 200px);
    padding: 8px;
    background-color: #dce6f2;
    box-sizing: border-box;
`;

export default MainLayout;
