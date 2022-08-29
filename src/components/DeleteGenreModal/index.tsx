import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import { useGenres } from "../../contexts/genres";
import { api } from "../../services";
import Button from "../Button";
import * as Styled from "./styles";

interface DeleteGenreModalProps {
  genreId?: string;
  handleShowDeleteModal: () => void;
}

const DeleteGenreModal = ({ genreId, handleShowDeleteModal }: DeleteGenreModalProps) => {
  const { handleGetGenres } = useGenres();

  const handleDeleteGenre = () => {
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/genres/${genreId}`, headers).then(() => {
      toast.success("Gênero deletado com sucesso!");
      handleGetGenres();
      handleShowDeleteModal();
    });
  };
  return (
    <ModalOverlay>
      <Styled.DeleteGenreContainer>
        <h2>Deseja deletar?</h2>
        <div>
          <Button text="Não" variant="cancel" size="tiny" onClick={handleShowDeleteModal} />
          <Button text="Sim" size="tiny" onClick={handleDeleteGenre} />
        </div>
      </Styled.DeleteGenreContainer>
    </ModalOverlay>
  );
};

export default DeleteGenreModal;
