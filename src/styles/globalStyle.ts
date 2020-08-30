import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing : border-box;
        padding : 0;
        margin : 0;
    }

    body , div#root, html {
        width : 100vw;
        height : 100vh;
        overflow-x : hidden;
    } 
`;

export default GlobalStyle;
