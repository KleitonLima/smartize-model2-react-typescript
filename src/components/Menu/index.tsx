import * as Styled from "./styles";
import logo from "../../assets/imgs/logo-smartize.png";
import { HomeIcon, LogoutIcon, SettingsIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

interface MenuProps {
  path: "home" | "settings";
}

const Menu = ({ path }: MenuProps) => {
  const navigate = useNavigate();

  return (
    <Styled.MenuContainer>
      <img src={logo} alt="logo" />
      <nav>
        <Styled.MenuItem active={path === "home"}>
          <Styled.MenuButton active={path === "home"}>
            <HomeIcon />
          </Styled.MenuButton>
        </Styled.MenuItem>
        <Styled.MenuItem active={path === "settings"}>
          <Styled.MenuButton active={path === "settings"}>
            <SettingsIcon />
          </Styled.MenuButton>
        </Styled.MenuItem>
      </nav>
      <Styled.MenuItem>
        <Styled.MenuButton onClick={() => navigate("/login")}>
          <LogoutIcon />
        </Styled.MenuButton>
      </Styled.MenuItem>
    </Styled.MenuContainer>
  );
};

export default Menu;
