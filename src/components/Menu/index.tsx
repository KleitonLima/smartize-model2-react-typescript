import * as Styled from "./styles";
import logo from "../../assets/logo.png";
import { HomeIcon, LogoutIcon, SettingsIcon } from "../../assets/icons";

interface MenuProps {
  path: "home" | "settings";
}

const Menu = ({ path }: MenuProps) => {
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
        <Styled.MenuButton>
          <LogoutIcon />
        </Styled.MenuButton>
      </Styled.MenuItem>
    </Styled.MenuContainer>
  );
};

export default Menu;
