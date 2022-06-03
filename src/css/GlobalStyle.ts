import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --color-white: #FFF;
    --color-soft-white: #FCFBF6;
    --color-yellow: #FFD130;
    --color-light-yellow: #fee3a0;
    --color-grey: #505050;

    --font-weight-300: 300;
    --font-weight-400: 400;
    --font-weight-600: 600;
    --font-weight-700: 700;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Mulish', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
