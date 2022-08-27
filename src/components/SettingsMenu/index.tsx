import { useNavigate } from "react-router-dom";
import { InfoIcon, MarketIcon, UserIcon } from "../../assets/icons";
import Menu from "../Menu";
import * as Styled from "./style";

interface SettingsMenuProps {
  path: "games" | "genres" | "users";
}

const SettingsMenu = ({ path }: SettingsMenuProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Menu path="settings" />
      <Styled.SettingsSelectContainer>
        <h1>configurações</h1>
        <Styled.SelectButtonContainer>
          <Styled.ButtonContainerOutside active={path === "games"} onClick={() => navigate("/settings/games")}>
            <Styled.ButtonContainerInside active={path === "games"}>
              <div>
                <MarketIcon />
              </div>
              <div>
                <h3>Gerenciar jogos</h3>
                <p>Adicione, edite ou remova jogos</p>
              </div>
            </Styled.ButtonContainerInside>
          </Styled.ButtonContainerOutside>
          <Styled.ButtonContainerOutside active={path === "genres"} onClick={() => navigate("/settings/genres")}>
            <Styled.ButtonContainerInside active={path === "genres"}>
              <div>
                <InfoIcon />
              </div>
              <div>
                <h3>Gerenciar gêneros</h3>
                <p>Adicione, edite ou remova gêneros</p>
              </div>
            </Styled.ButtonContainerInside>
          </Styled.ButtonContainerOutside>
          <Styled.ButtonContainerOutside active={path === "users"} onClick={() => navigate("/settings/users")}>
            <Styled.ButtonContainerInside active={path === "users"}>
              <div>
                <UserIcon />
              </div>
              <div>
                <h3>Gerenciar usuários</h3>
                <p>Adicione, edite ou remova usuários</p>
              </div>
            </Styled.ButtonContainerInside>
          </Styled.ButtonContainerOutside>
        </Styled.SelectButtonContainer>
      </Styled.SettingsSelectContainer>
    </>
  );
};

export default SettingsMenu;
