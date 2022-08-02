import * as Styled from "./styles";
import logo from "../../assets/logo-sem-fundo.png";
import { HomeIcon, LogoutIcon, SettingsIcon } from "../../assets/icons";

const Menu = () => {
  return (
    <Styled.MenuContainer>
      <img src={logo} alt="logo" />
      <nav>
        <Styled.MenuItem>
          <Styled.MenuButton>
            <HomeIcon />
          </Styled.MenuButton>
        </Styled.MenuItem>
        <Styled.MenuItem>
          <Styled.MenuButton>
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
