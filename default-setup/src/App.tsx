import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Layout from './components/layouts/Layout';

const App = () => {
    return (
        <Wrapper>
           <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path='' element={<div>Main Page</div>} />
                    <Route path='*' element={<div>Not Found Page</div>} />
                </Route>
            </Routes> 
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
`;

export default App;
