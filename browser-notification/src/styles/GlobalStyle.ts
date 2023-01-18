import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        width: 100%;
        min-width: 400px;
        max-width: 1920px;
        
        height: 100%;
        min-height: 400px;
        max-height: 1080px;
        
        margin: 0;
        padding: 0;

        display: flex;
        flex-direction: column;

        font-family: 'Jua', sans-serif;
        font-size: 16px;

        overflow: hidden;
        resize: none;

        user-select: none;
    }
`;

export default GlobalStyle;
