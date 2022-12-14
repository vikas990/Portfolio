import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style:none;
    text-decoration:none;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-size: 1rem;
    color: black;
    cursor: default;
    background-color: ${(props) => props.theme.colors.bg.primaryBg};
  }
  
  .container{
    width:75%;
    margin:0 auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button {
    font-family: ${(props) => props.theme.fonts.main};
  }
  
  a {
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }

  img{
    display:block;
    object-fit:cover;
    width:100%;
  }
`;

export default GlobalStyles;
