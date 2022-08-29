import { ErrorMessage, ModalOverlay, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useGenres } from "../../contexts/genres";
import { Genre } from "../../types";

interface GenreModalProps {
  handleShowModal: () => void;
  genre?: Genre;
}
interface GenreData {
  name: string;
}

const GenreSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório!"),
});

const GenreModal = ({ handleShowModal, genre }: GenreModalProps) => {
  const { handleGetGenres } = useGenres();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<GenreData>({ resolver: yupResolver(GenreSchema) });

  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handleNewGenre = (data: GenreData) => {
    api
      .post("/genres", data, headers)
      .then(() => {
        handleGetGenres();
        handleShowModal();
        toast.success("Gênero cadastrado com sucesso!");
      })
      .catch(() => {
        toast.error("Erro no cadastro do gênero!");
      });
  };
  const handleUpdateGenre = (data: GenreData) => {
    api
      .patch(`/genres/${genre?.id}`, data, headers)
      .then(() => {
        handleGetGenres();
        handleShowModal();
        toast.success("Gênero atualizado com sucesso!");
      })
      .catch(() => {
        toast.error("Erro na edição do gênero!");
      });
  };

  return (
    <ModalOverlay>
      <Styled.GenreModalContainer onSubmit={handleSubmit(genre ? handleUpdateGenre : handleNewGenre)}>
        <h2>{genre ? "Editar gênero" : "Cadastrar gênero"}</h2>
        <StyledInput placeholder="Nome" {...register("name")} defaultValue={genre ? genre.name : ""} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <div>
          <Button text="Cancelar" variant="cancel" size="tiny" onClick={handleShowModal} />
          <Button text="Salvar" size="tiny" type="submit" />
        </div>
      </Styled.GenreModalContainer>
    </ModalOverlay>
  );
};

export default GenreModal;
