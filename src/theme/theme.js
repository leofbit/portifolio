import { createTheme } from "@mui/material/styles";

const commonSettings = {
    typography: {
        fontFamily: "'Jersey 15', serif",
    },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    header: {
      main: '#A29415',
      contrastText: '#000',
    },
    background: {
      default: "#ECECECFF",
      paper: "#DFDFDFFF",
    },
    primary: {
      main: "#4f46e5",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#22a4b7",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#333333",
    },
  },
  typography: {
    fontFamily: "'Jersey 15', serif",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    header: {
      main: '#2A2A35',
      contrastText: '#ffffff',
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    primary: {
      main: "#4f46e5",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#16c9e7",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#C2C2C5FF",
    },
  },
  typography: {
    fontFamily: "'Jersey 15', serif",
  },
});
