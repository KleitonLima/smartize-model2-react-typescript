import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import { useGames } from "../../contexts/games";
import { api } from "../../services";
import { Game } from "../../types";
import Button from "../Button";
import * as Styled from "./styles";

interface DeleteCardModalProps {
  gameId?: string;
  handleShowDeleteModal: () => void;
}

const DeleteCardModal = ({ gameId, handleShowDeleteModal }: DeleteCardModalProps) => {
  const { handleGetGames } = useGames();

  const handleDeleteCard = () => {
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/games/${gameId}`, headers).then(() => {
      toast.success("Jogo deletado com sucesso!");
      handleGetGames();
      handleShowDeleteModal();
    });
  };

  return (
    <ModalOverlay>
      <Styled.DeleteModalContainer>
        <h2>Deseja deletar?</h2>
        <div>
          <Button text="Não" variant="cancel" size="tiny" onClick={handleShowDeleteModal} />
          <Button text="Sim" size="tiny" onClick={handleDeleteCard} />
        </div>
      </Styled.DeleteModalContainer>
    </ModalOverlay>
  );
};

export default DeleteCardModal;
