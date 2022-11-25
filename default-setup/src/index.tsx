import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);



root.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
);
