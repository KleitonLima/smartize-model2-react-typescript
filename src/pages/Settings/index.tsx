import { Dispatch, SetStateAction } from "react";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { InfoIcon } from "../../assets/icons/index";

interface SettingsProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Settings = ({ setLogged }: SettingsProps) => {
  return (
    <Styled.SettingsContainer>
      <Menu path="settings" setLogged={setLogged} />
      <div>
        <h1></h1>
        <div>
          <div>
            <div>
              <InfoIcon />
              <h3>Gerenciar jogos</h3>
              <p>Adicione, edite ou remova seus jogos</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </Styled.SettingsContainer>
  );
};

export default Settings;
