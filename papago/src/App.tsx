import { useRoutes } from 'react-router-dom';
import styled from 'styled-components';

import routes from './routes';

import create from 'zustand';

const lllll = create((set) => ({
    votes: 0,
}));

const App = () => {
    const content = useRoutes(routes)
    
    const testing = lllll();
    console.log(testing);
    
    return (
        <Wrapper>
            {content}
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
`;

export default App;
