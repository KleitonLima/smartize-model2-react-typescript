import * as Styled from "./styles";
import logo from "../../assets/logo.png";
import { HomeIcon, LogoutIcon, SettingsIcon } from "../../assets/icons";

const Menu = () => {
  return (
    <Styled.MenuContainer>
      <img src={logo} alt="logo" />
      <nav>
        <Styled.MenuItem active>
          <Styled.MenuButton active>
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
