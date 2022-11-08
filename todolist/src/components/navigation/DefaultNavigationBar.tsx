import { useState } from 'react';
import styled from 'styled-components';

import NavigationButton from './components/NavigationButton';

const DefaultNaviationBar = () => {
    const [menuClick, setMenuClick] = useState(false);

    return <Wrapper></Wrapper>;
};
const Wrapper = styled.div`
    position: absolute;
`;

export default DefaultNaviationBar;
