import { hover } from "@testing-library/user-event/dist/hover";
import { createGlobalStyle } from "styled-components";

export const DarkMode = {
  main: "#222831",
  secondary: "#393E46",
  tertiary: "#273552",
  text: "#EEEEEE",
  text_sec: "#B4B4B4",
  hover: "#31353c",
};

export const LightMode = {
  main: "#E8E8E8",
  secondary: "#F4F4F2",
  tertiary: "#BBBFCA",
  text: "#495464",
  text_sec: "#BBBFCA",
  hover: "#e1e1df",
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.main};
    transition: 0.5s;

  }

  h1, h2, p, td {
    color: ${(props) => props.theme.text};
    transition: 0.5s;
  }

`;
