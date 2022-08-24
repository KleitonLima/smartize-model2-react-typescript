import { ErrorMessage, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services";

interface GameModalProps {
  handleOpenModal: () => void;
}

interface NewProductData {
  name: string;
  image: string;
  price: number;
  description: string;
}

const newGameSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório!"),
  image: yup.string().url("Url inválido!").required("Imagem obrigatória!"),
  price: yup.number().required("Preço obrigatório!"),
  description: yup.string().required("Descrição obrigatória!"),
});

const GameModal = ({ handleOpenModal }: GameModalProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NewProductData>({ resolver: yupResolver(newGameSchema) });

  const handleNewGame = (data: NewProductData) => {
    api.post("games", data).then((res) => {});
  };

  return (
    <Styled.ModalOverlay>
      <Styled.ModalContainer onSubmit={handleSubmit(handleNewGame)}>
        <h2>Cadastrar jogo</h2>
        <StyledInput placeholder="Nome" {...register("name")} />
        <StyledInput placeholder="Imagem" {...register("image")} type="url" />
        <StyledInput placeholder="Preço" {...register("price")} type="number" />
        <StyledInput placeholder="Descrição" {...register("description")} />
        <select value="Gênero">
          <option value="Ação">Ação</option>
          <option value="Ação e aventura">Ação e aventura</option>
          <option value="Simulação">Simulação</option>
        </select>
        {<ErrorMessage>{errors.name?.message || errors.image?.message || errors.price?.message || errors.description?.message}</ErrorMessage>}
        <div>
          <Button text="Cancelar" variant="cancel" size="tiny" onClick={handleOpenModal} />
          <Button text="Cadastrar" size="tiny" type="submit" />
        </div>
      </Styled.ModalContainer>
    </Styled.ModalOverlay>
  );
};

export default GameModal;
