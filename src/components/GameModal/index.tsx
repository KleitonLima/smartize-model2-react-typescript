import { ErrorMessage, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services";
import { useState } from "react";
import { mockedGenres } from "../../mocks";
import toast from "react-hot-toast";
import { useGames } from "../../contexts/games";

interface GameModalProps {
  handleOpenModal: () => void;
}

interface NewProductData {
  name: string;
  image: string;
  price: number;
  description: string;
  genreId: string;
}

const newGameSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório!"),
  image: yup.string().url("Url inválido!").required("Imagem obrigatória!"),
  price: yup.number().required("Preço obrigatório!"),
  description: yup.string().required("Descrição obrigatória!"),
});

const GameModal = ({ handleOpenModal }: GameModalProps) => {
  const { handleGetGames } = useGames();
  const [genreId, setGenreId] = useState<string>("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NewProductData>({ resolver: yupResolver(newGameSchema) });

  const handleNewGame = (data: NewProductData) => {
    data.genreId = genreId;

    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.post("/games", data, headers).then((res) => {
      toast.success("Jogo cadastrado com sucesso!");
      handleGetGames();
      handleOpenModal();
    });
  };

  return (
    <Styled.ModalOverlay>
      <Styled.ModalContainer onSubmit={handleSubmit(handleNewGame)}>
        <h2>Cadastrar jogo</h2>
        <StyledInput placeholder="Nome" {...register("name")} />
        <StyledInput placeholder="Imagem" {...register("image")} type="url" />
        <StyledInput placeholder="Preço" {...register("price")} type="number" />
        <StyledInput placeholder="Descrição" {...register("description")} />
        {/* Se deixado vazio o select não envia aviso de erro e faz a requisição com ele vazio,
        gerando erro 400 dizendo que o genreId precisa ser um UUID */}
        <Styled.Select value={genreId} onChange={(e) => setGenreId(e.target.value)}>
          <option hidden selected>
            Selecione o gênero
          </option>
          {mockedGenres.map((elem) => (
            <option key={elem.id} value={elem.id}>
              {elem.name}
            </option>
          ))}
        </Styled.Select>
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
