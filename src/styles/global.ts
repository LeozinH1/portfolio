import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font: 500 1rem Poppins, sans-serif;
    }
    
    html, body {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
    }

    a{
        text-decoration: none;
        color: ${(props) => props.theme.colors.text}
    }

    button, input[type='button']{
        cursor: pointer;
    }

    ::-moz-selection {
        color: ${(props) => props.theme.colors.text};
        background: ${(props) => props.theme.colors.primary};
    }

    ::selection {
        color: ${(props) => props.theme.colors.text};
        background: ${(props) => props.theme.colors.primary};
    }
`;
