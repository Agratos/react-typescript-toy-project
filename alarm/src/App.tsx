import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Layout from './components/layouts/Layout';
import MainPage from './pages/MainPage';

const App = () => {
    return (
        <Wrapper>
            <Routes>
                <Route path="/" element={<Layout><MainPage /></Layout>} />
            </Routes>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
`;

export default App;
