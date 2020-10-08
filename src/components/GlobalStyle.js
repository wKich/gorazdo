import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "kern", "liga", "clig", "calt";
    word-wrap: break-word;
	  font-kerning: normal;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  html {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.palette.background.paper};
  }

  html > body {
    /* overrides Typography.js default coloring */
    color: ${(props) => props.theme.palette.text.primary};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,.1);
  }

  ::-webkit-scrollbar {
    width: 0.75em;
    background-color: rgba(0,0,0,.1);
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.palette.misc.scrollbarThumb};
  }
  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid rgba(127,127,127,0.4);
    :hover {
      border-bottom-color: ${(props) => props.theme.palette.text.primary}
    }
  }
`;

export default GlobalStyle;
