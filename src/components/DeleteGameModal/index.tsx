import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import { useGames } from "../../contexts/games";
import { api } from "../../services";
import Button from "../Button";
import * as Styled from "./styles";

interface DeleteGameModalProps {
  gameId?: string;
  handleShowDeleteModal: () => void;
}

const DeleteGameModal = ({ gameId, handleShowDeleteModal }: DeleteGameModalProps) => {
  const { handleGetGames } = useGames();

  const handleDeleteGame = () => {
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
      <Styled.DeleteGameContainer>
        <h2>Deseja deletar?</h2>
        <div>
          <Button text="Não" variant="cancel" size="tiny" onClick={handleShowDeleteModal} />
          <Button text="Sim" size="tiny" onClick={handleDeleteGame} />
        </div>
      </Styled.DeleteGameContainer>
    </ModalOverlay>
  );
};

export default DeleteGameModal;
