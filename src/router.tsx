import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./contexts/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SettingsGames from "./pages/SettingsGames";
import SettingsGenres from "./pages/SettingsGenres";

const Router = () => {
  const { logged } = useAuth();

  return (
    <Routes>
      {logged ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/settings/games" element={<SettingsGames />} />
          <Route path="/settings/genres" element={<SettingsGenres />} />
          <Route path="/settings/users" element={<SettingsGames />} />
        </>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="*" element={<Navigate to={logged ? "/" : "/login"} />} />
    </Routes>
  );
};

export default Router;
