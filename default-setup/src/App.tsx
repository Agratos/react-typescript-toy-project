import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Layout from './components/layouts/Layout';


const App = () => {
    return (
        <Wrapper>
            <Routes>
                {/* <Route path="/" element={<Layout><TodoListPage /></Layout>} /> */}
            </Routes>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
`;

export default App;
