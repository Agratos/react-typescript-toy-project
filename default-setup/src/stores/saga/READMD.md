# Saga 사용법

## JSON 설치

1. "redux": "^4.2.0"
2. "react-redux": "^8.0.2"
3. "redux-saga": "^1.2.1"
4. "redux-persist": "^6.0.0"
5. "typesafe-actions": "^5.1.0"

## index 설정

```typescript
// src/index.ts
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
//import { persistStore } from 'redux-persist';
//import { PersistGate } from 'redux-persist/es/integration/react';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
//const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

root.render(
    //<PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    //</PersistGate>
);
```
