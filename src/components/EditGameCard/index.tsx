import * as Styled from "./style";
import { Game } from "../../types";
import { EditIcon, TrashIcon } from "../../assets/icons/index";
import { Dispatch, SetStateAction } from "react";

interface SettingsGameCardProps {
  game: Game;
  handleShowModal: () => void;
  handleShowDeleteModal: () => void;
  setGame: Dispatch<SetStateAction<Game | undefined>>;
}

const EditGameCard = ({ game, handleShowModal, setGame, handleShowDeleteModal }: SettingsGameCardProps) => {
  return (
    <Styled.EditEntityCard>
      <img alt={game.name} src={game.image} />
      <h5>{game.name}</h5>
      <h5>R${game.price}</h5>
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
        <Styled.SettingsGameDeleteButton
          onClick={() => {
            setGame(game);
            handleShowDeleteModal();
          }}
        >
          <TrashIcon />
          Deletar
        </Styled.SettingsGameDeleteButton>
      </div>
    </Styled.EditEntityCard>
  );
};

export default EditGameCard;
