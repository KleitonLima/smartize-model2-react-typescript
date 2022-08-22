import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../assets/styles/theme";
import { AuthProvider } from "./auth";
import { GamesProvider } from "./games";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GamesProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </GamesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Providers;
