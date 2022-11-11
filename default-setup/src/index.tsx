import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import { composeWithDevTools } from 'redux-devtools-extension';
//import rootReducer from './modules';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

//const store = createStore(rootReducer, composeWithDevTools());
//const persistor = persistStore(store);

root.render(
    //<PersistGate loading={null} persistor={persistor}>
        //<Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        //</Provider>
    //</PersistGate>
);
