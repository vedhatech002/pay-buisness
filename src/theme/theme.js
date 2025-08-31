// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#42794A",
      border: "#EEEEEE",
    },
    secondary: {
      main: "#04142B",
    },
    background: {
      default: "#f9f9f9",
      paper: "#ffffff",
    },
    text: {
      primary: "#252525",
      secondary: "#94CA9C",
      text: "#999999",
    },

    success: {
      main: "#4CAF50",
    },
    error: {
      main: "#E53935",
    },
    warning: {
      main: "#FF9800",
    },
  },
  typography: {
    fontFamily: "Gilroy, Arial, sans-serif",
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "14px",
    },
    button: {
      textTransform: "none",
    },
  },
  shadows: {
    header: "0px 5px 20px rgba(0, 0, 0, 0.05)", // custom shadow
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;
