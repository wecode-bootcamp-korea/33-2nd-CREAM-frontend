import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
 ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }
  body {
    font-family: 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    line-height: 1.5;
  }
`;

export default GlobalStyle;
