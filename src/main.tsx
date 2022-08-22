import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./assets/styles/theme";
import { AuthProvider } from "./contexts/auth";
import { GamesProvider } from "./contexts/games";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GamesProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </GamesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
