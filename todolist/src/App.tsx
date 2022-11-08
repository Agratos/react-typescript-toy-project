import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Layout from './components/layouts/Layout';
import TodoListPage from './pages/main/TotoListTestPage';

const App = () => {
    return (
        <Wrapper>
            <Routes>
                <Route path="/" element={<Layout><TodoListPage /></Layout>} />
            </Routes>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
`;

export default App;
