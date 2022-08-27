import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { api } from "../../services";
import { Genre } from "../../types";
import { useAuth } from "../auth";

interface GenreProviderProps {
  children: ReactNode;
}

interface GenreProviderData {
  genres: Genre[];
  handleGetGenres: () => void;
}

const GenreContext = createContext<GenreProviderData>({} as GenreProviderData);

export const GenreProvider = ({ children }: GenreProviderProps) => {
  const { logged } = useAuth();
  const [genres, setGenres] = useState<Genre[]>([]);

  const handleGetGenres = () => {
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get("/genres", headers).then((res) => setGenres(res.data));
  };

  useEffect(() => {
    if (logged) handleGetGenres();
  }, [logged]);
  return <GenreContext.Provider value={{ genres, handleGetGenres }}>{children}</GenreContext.Provider>;
};

export const useGenres = () => useContext(GenreContext);
