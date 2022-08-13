import { Dispatch, SetStateAction } from "react";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { InfoIcon, MarketIcon, UserIcon } from "../../assets/icons/index";
import Button from "../../components/Button";

interface SettingsProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Settings = ({ setLogged }: SettingsProps) => {
  return (
    <Styled.SettingsContainer>
      <Menu path="settings" setLogged={setLogged} />
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
      <Styled.SettingsSelectedContainer>
        <h2>Gerenciando os jogos</h2>
        <Styled.SettingsSelectedBarContainer>
          <Styled.SettingsSelectedBar active={true}>Ação</Styled.SettingsSelectedBar>
          <Styled.SettingsSelectedBar>Ação e aventura</Styled.SettingsSelectedBar>
          <Styled.SettingsSelectedBar>Simulação</Styled.SettingsSelectedBar>
        </Styled.SettingsSelectedBarContainer>
        <Styled.SettingsSelectedContents>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
        </Styled.SettingsSelectedContents>
        <Styled.SettingsSelectedButtons>
          <Button text="Cancelar" variant="cancel" size="small" />
          <Button text="Salvar alterações" size="small" />
        </Styled.SettingsSelectedButtons>
      </Styled.SettingsSelectedContainer>
    </Styled.SettingsContainer>
  );
};

export default Settings;
