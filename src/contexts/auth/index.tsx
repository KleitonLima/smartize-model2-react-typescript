import { createContext, useContext, ReactNode, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { User } from "../../types";

interface AuthProviderData {
  logged: boolean;
  login: (params: LoginParams) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}
interface LoginParams {
  token: string;
  user: User;
}

const AuthContext = createContext({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [logged, setLogged] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = ({ token, user }: LoginParams) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setLogged(true);
    navigate("/");
    toast.success("Login bem sucedido!");
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
    setLogged(false);
    toast.success("Logout bem sucedido!");
  };

  return <AuthContext.Provider value={{ logged, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
