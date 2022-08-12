import { Dispatch, SetStateAction } from "react";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { InfoIcon, MarketIcon, UserIcon } from "../../assets/icons/index";

interface SettingsProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Settings = ({ setLogged }: SettingsProps) => {
  return (
    <Styled.SettingsContainer>
      <Menu path="settings" setLogged={setLogged} />
      <div>
        <Styled.SettingsSelectContainer>
          <h1>configurações</h1>
          <Styled.SettingsSelectButtonContainer>
            <Styled.SettingsButtonContainerOutside>
              <Styled.SettingsButtonContainerInside>
                <div>
                  <MarketIcon />
                </div>
                <div>
                  <h3>Gerenciar jogos</h3>
                  <p>Adicione, edite ou remova os jogos</p>
                </div>
              </Styled.SettingsButtonContainerInside>
            </Styled.SettingsButtonContainerOutside>
            <Styled.SettingsButtonContainerOutside active={true}>
              <Styled.SettingsButtonContainerInside active={true}>
                <div>
                  <InfoIcon />
                </div>
                <div>
                  <h3>Gerenciar gêneros</h3>
                  <p>Adicione, edite ou remova os gêneros</p>
                </div>
              </Styled.SettingsButtonContainerInside>
            </Styled.SettingsButtonContainerOutside>
            <Styled.SettingsButtonContainerOutside>
              <Styled.SettingsButtonContainerInside>
                <div>
                  <UserIcon />
                </div>
                <div>
                  <h3>Gerenciar usuários</h3>
                  <p>Adicione, edite ou remova os usuários</p>
                </div>
              </Styled.SettingsButtonContainerInside>
            </Styled.SettingsButtonContainerOutside>
          </Styled.SettingsSelectButtonContainer>
        </Styled.SettingsSelectContainer>
      </div>
      <div>
        <div>
          <h2>Gerenciando os jogos</h2>
        </div>
        <div>
          <div>Ação</div>
          <div>Ação e aventura</div>
          <div>Simulação</div>
        </div>
        <div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
        </div>
        <div>
          <button>Cancelar</button>
          <button>Salvar alterações</button>
        </div>
      </div>
    </Styled.SettingsContainer>
  );
};

export default Settings;
