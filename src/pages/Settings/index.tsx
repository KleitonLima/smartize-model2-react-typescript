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
        <Styled.SelectButtonContainer>
          <Styled.ButtonContainerOutside>
            <Styled.ButtonContainerInside>
              <div>
                <MarketIcon />
              </div>
              <div>
                <h3>Gerenciar jogos</h3>
                <p>Adicione, edite ou remova os jogos</p>
              </div>
            </Styled.ButtonContainerInside>
          </Styled.ButtonContainerOutside>
          <Styled.ButtonContainerOutside active={true}>
            <Styled.ButtonContainerInside active={true}>
              <div>
                <InfoIcon />
              </div>
              <div>
                <h3>Gerenciar gêneros</h3>
                <p>Adicione, edite ou remova os gêneros</p>
              </div>
            </Styled.ButtonContainerInside>
          </Styled.ButtonContainerOutside>
          <Styled.ButtonContainerOutside>
            <Styled.ButtonContainerInside>
              <div>
                <UserIcon />
              </div>
              <div>
                <h3>Gerenciar usuários</h3>
                <p>Adicione, edite ou remova os usuários</p>
              </div>
            </Styled.ButtonContainerInside>
          </Styled.ButtonContainerOutside>
        </Styled.SelectButtonContainer>
      </Styled.SettingsSelectContainer>
      <Styled.SettingsSelectedContainer>
        <h2>Gerenciando os jogos</h2>
        <Styled.SelectedBarContainer>
          <Styled.SelectedBar active={true}>Ação</Styled.SelectedBar>
          <Styled.SelectedBar>Ação e aventura</Styled.SelectedBar>
          <Styled.SelectedBar>Simulação</Styled.SelectedBar>
        </Styled.SelectedBarContainer>
        <Styled.SelectedContentsContainer>
          <Styled.AddEntityCard>
            <h2>+</h2>
            <p>Adicionar jogo</p>
          </Styled.AddEntityCard>
          <Styled.EditEntityCard>Card</Styled.EditEntityCard>
          <Styled.EditEntityCard>Card</Styled.EditEntityCard>
          <Styled.EditEntityCard>Card</Styled.EditEntityCard>
        </Styled.SelectedContentsContainer>
        <Styled.SelectedButtons>
          <Button text="Cancelar" variant="cancel" size="small" />
          <Button text="Salvar alterações" size="small" />
        </Styled.SelectedButtons>
      </Styled.SettingsSelectedContainer>
    </Styled.SettingsContainer>
  );
};

export default Settings;
