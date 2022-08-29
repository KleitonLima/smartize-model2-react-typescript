import { ModalOverlay, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services";
import toast from "react-hot-toast";

interface GenreModalProps {
  handleShowModal: () => void;
}
interface GenreData {
  name: string;
}

const newGameSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório!"),
});

const GenreModal = ({ handleShowModal }: GenreModalProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<GenreData>({ resolver: yupResolver(newGameSchema) });

  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handleNewGenre = (data: GenreData) => {
    api.post("/genres", data, headers).then(() => {
      toast.success("Gênero cadastrado com sucesso!");
      handleShowModal();
    });
  };

  return (
    <ModalOverlay>
      <Styled.GenreModalContainer onSubmit={handleSubmit(handleNewGenre)}>
        <h2>Cadastrar gênero</h2>
        <StyledInput placeholder="Nome" />
        <div>
          <Button text="Cancelar" variant="cancel" size="tiny" onClick={handleShowModal} />
          <Button text="Salvar" size="tiny" type="submit" />
        </div>
      </Styled.GenreModalContainer>
    </ModalOverlay>
  );
};

export default GenreModal;
