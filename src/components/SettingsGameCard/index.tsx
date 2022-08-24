import * as Styled from "./style";
import { Game } from "../../types";
import { EditIcon } from "../../assets/icons/index";
import { Dispatch, SetStateAction } from "react";

interface SettingsGameCardProps {
  game: Game;
  handleShowModal: () => void;
  setGame: Dispatch<SetStateAction<Game | undefined>>;
}

const SettingsGameCard = ({ game, handleShowModal, setGame }: SettingsGameCardProps) => {
  return (
    <Styled.EditEntityCard>
      <img alt={game.name} src={game.image} />
      <h5>{game.name}</h5>
      <h5>R${game.price}</h5>
      {/* <p>{game.description}</p> */}
      <Styled.SettingsGameCardButton
        onClick={() => {
          setGame(game);
          handleShowModal();
        }}
      >
        <EditIcon />
        Editar jogo
      </Styled.SettingsGameCardButton>
    </Styled.EditEntityCard>
  );
};

export default SettingsGameCard;
