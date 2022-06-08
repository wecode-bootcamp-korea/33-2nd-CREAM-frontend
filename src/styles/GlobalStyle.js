import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
 ${reset}

 @import url('https://fonts.googleapis.com/css2?family=Viga&display=swap');
 
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }
  body {
    font-family: 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    line-height: 1.5;
  }
  h1 {
    font-family: 'Viga', sans-serif;
  }
`;

export default GlobalStyle;
