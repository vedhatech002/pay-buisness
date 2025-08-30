// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A7431", // green shade for sidebar, buttons
    },
    secondary: {
      main: "#04142B", // dark blue (you mentioned earlier)
    },
    background: {
      default: "#f9f9f9",
      paper: "#ffffff",
    },
    text: {
      primary: "#04142B",
      secondary: "#5f6c7b",
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
    fontFamily: "Inter, sans-serif",
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
    borderRadius: 10,
  },
});

export default theme;
