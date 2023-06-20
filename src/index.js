import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { trTR } from "@mui/material/locale";

const root = ReactDOM.createRoot(document.getElementById("root"));


// lokolization yapılarak Türkçe çevirisi yapılmıştır.
const theme = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  trTR
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
