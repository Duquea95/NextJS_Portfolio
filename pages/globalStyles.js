import { createGlobalStyle } from 'styled-components';
 
const fontUrl = 'https://fonts.googleapis.com/css2?family=Raleway+&display=swap';

const GlobalStyle = createGlobalStyle`
  @import url(${fontUrl});
`;
 
export default GlobalStyle;