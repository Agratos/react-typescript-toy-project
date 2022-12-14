import { useRoutes } from 'react-router-dom';
import styled from 'styled-components';

import routes from './routes';

const App = () => {
    const content = useRoutes(routes)
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
