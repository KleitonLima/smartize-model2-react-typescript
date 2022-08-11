import * as Styled from "./styles";
import logo from "../../assets/imgs/logo-smartize.png";
import { HomeIcon, LogoutIcon, SettingsIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

interface MenuProps {
  path: "home" | "settings";
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ path, setLogged }: MenuProps) => {
  const navigate = useNavigate();

  return (
    <Styled.MenuContainer>
      <img src={logo} alt="logo" />
      <nav>
        <Styled.MenuItem active={path === "home"}>
          <Styled.MenuButton active={path === "home"} onClick={() => navigate("/")}>
            <HomeIcon />
          </Styled.MenuButton>
        </Styled.MenuItem>
        <Styled.MenuItem active={path === "settings"}>
          <Styled.MenuButton active={path === "settings"} onClick={() => navigate("/settings")}>
            <SettingsIcon />
          </Styled.MenuButton>
        </Styled.MenuItem>
      </nav>
      <Styled.MenuItem>
        <Styled.MenuButton onClick={() => (navigate("/login"), setLogged(false))}>
          <LogoutIcon />
        </Styled.MenuButton>
      </Styled.MenuItem>
    </Styled.MenuContainer>
  );
};

export default Menu;
