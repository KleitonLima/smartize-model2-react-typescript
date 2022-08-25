import * as Styled from "./style";
import { Game } from "../../types";
import { EditIcon, TrashIcon } from "../../assets/icons/index";
import { Dispatch, SetStateAction } from "react";
import { api } from "../../services";

interface SettingsGameCardProps {
  game: Game;
  handleShowModal: () => void;
  setGame: Dispatch<SetStateAction<Game | undefined>>;
}

const SettingsGameCard = ({ game, handleShowModal, setGame }: SettingsGameCardProps) => {
  const handleDeleteGame = () => {
    api.delete(`/games/${game.id}`);
  };
  return (
    <Styled.EditEntityCard>
      <img alt={game.name} src={game.image} />
      <h5>{game.name}</h5>
      <h5>R${game.price}</h5>
      {/* <p>{game.description}</p> */}
      <div>
        <Styled.SettingsGameEditButton
          onClick={() => {
            setGame(game);
            handleShowModal();
          }}
        >
          <EditIcon />
          Editar
        </Styled.SettingsGameEditButton>
        <Styled.SettingsGameDeleteButton>
          <TrashIcon />
          Deletar
        </Styled.SettingsGameDeleteButton>
      </div>
    </Styled.EditEntityCard>
  );
};

export default SettingsGameCard;
