import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../assets/styles/theme";
import { AuthProvider } from "./auth";
import { GamesProvider } from "./games";
import { GenreProvider } from "./genres";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GenreProvider>
            <GamesProvider>{children}</GamesProvider>
          </GenreProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
