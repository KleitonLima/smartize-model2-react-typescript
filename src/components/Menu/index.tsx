import * as Styled from "./styles";
import logo from "../../assets/logo-sem-fundo.png";
import HomeIcon from "../../assets/icons/home.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import LogoutIcon from "../../assets/icons/logout.svg";

const Menu = () => {
  return (
    <Styled.MenuContainer>
      <img src={logo} width="100%" alt="logo" />
      <div>
        <img src={HomeIcon} alt="home" />
        <img src={SettingsIcon} alt="settings" />
      </div>
      <img src={LogoutIcon} alt="logout" />
    </Styled.MenuContainer>
  );
};

export default Menu;
