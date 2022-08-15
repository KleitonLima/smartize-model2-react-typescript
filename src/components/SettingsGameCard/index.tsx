import * as Styled from "./style";
import { Game } from "../../types";
import { EditIcon } from "../../assets/icons/index";

interface SettingsGameCardProps {
  game: Game;
}

const SettingsGameCard = ({ game }: SettingsGameCardProps) => {
  return (
    <Styled.EditEntityCard>
      <img alt={game.name} src={game.image} />
      <h5>{game.name}</h5>
      <h5>R${game.price}</h5>
      {/* <p>{game.description}</p> */}
      <Styled.SettingsGameCardButton>
        <EditIcon />
        Editar jogo
      </Styled.SettingsGameCardButton>
    </Styled.EditEntityCard>
  );
};

export default SettingsGameCard;
