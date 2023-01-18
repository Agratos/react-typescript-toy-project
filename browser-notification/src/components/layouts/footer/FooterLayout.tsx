import React from 'react';
import styled from 'styled-components';

const FooterLayout = () => {
    return (
        <Wrapper>
            &copy; {new Date().getFullYear()}. Agratos All rights reserved.
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
    justify-content: right;
    padding: 15px;
    font-weight: 500;
    border-top: 0.5px solid black;
`;

export default React.memo(FooterLayout);
