import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { api } from "../../services";
import { Game } from "../../types";
import { useAuth } from "../auth";

interface GamesProviderProps {
  children: ReactNode;
}

interface GamesProviderData {
  games: Game[];
  handleGetGames: () => void;
}

const GamesContext = createContext<GamesProviderData>({} as GamesProviderData);

export const GamesProvider = ({ children }: GamesProviderProps) => {
  const { logged } = useAuth();
  const [games, setGames] = useState<Game[]>([]);

  const handleGetGames = () => {
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get("/games", headers).then((res) => setGames(res.data));
  };

  useEffect(() => {
    if (logged) handleGetGames();
  }, [logged]);
  return <GamesContext.Provider value={{ games, handleGetGames }}>{children}</GamesContext.Provider>;
};

export const useGames = () => useContext(GamesContext);
