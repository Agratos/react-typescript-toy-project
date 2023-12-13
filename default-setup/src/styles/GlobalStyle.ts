import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{ 
        width: calc(100vw - 17px);
        max-width: calc(100vw - 17px);

        min-height: 100vh;

        margin: 0;
        padding: 0;

        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;

        overflow-y: scroll;
        //overflow-x: hidden;
        resize: none;
    }
`;

export default GlobalStyle;
