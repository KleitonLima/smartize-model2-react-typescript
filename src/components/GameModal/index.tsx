import { ErrorMessage, ModalOverlay, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services";
import { Dispatch, SetStateAction, useState } from "react";
import { mockedGenres } from "../../mocks";
import toast from "react-hot-toast";
import { useGames } from "../../contexts/games";
import { Game } from "../../types";

interface GameModalProps {
  handleShowModal: () => void;
  game?: Game;
  setGame: Dispatch<SetStateAction<Game | undefined>>;
}

interface ProductData {
  name?: string;
  image?: string;
  price?: number;
  description?: string;
  genreId?: string;
}

const newGameSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório!"),
  image: yup.string().url("Url inválido!").required("Imagem obrigatória!"),
  price: yup.number().required("Preço obrigatório!"),
  description: yup.string().required("Descrição obrigatória!"),
});
const updateGameSchema = yup.object().shape({
  name: yup.string(),
  image: yup.string().url("Url inválido!"),
  price: yup.number(),
  description: yup.string(),
});

const GameModal = ({ handleShowModal, game, setGame }: GameModalProps) => {
  const { handleGetGames } = useGames();

  const [genreId, setGenreId] = useState<string>(game ? game.genreId : "");

  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProductData>({ resolver: yupResolver(game ? updateGameSchema : newGameSchema) });

  const handleNewGame = (data: ProductData) => {
    data.genreId = genreId;

    api
      .post("/games", data, headers)
      .then(() => {
        toast.success("Jogo cadastrado com sucesso!");
        handleGetGames();
        handleShowModal();
        setGame(undefined);
      })
      .catch(() => {
        toast.error("Selecione uma categoria...");
      });
  };

  const handleUpdateGame = (data: ProductData) => {
    data.genreId = genreId;

    api.patch(`/games/${game?.id}`, data, headers).then(() => {
      toast.success("Jogo atualizado com sucesso!");
      handleGetGames();
      handleShowModal();
      setGame(undefined);
    });
  };

  return (
    <ModalOverlay>
      <Styled.ModalContainer onSubmit={handleSubmit(game ? handleUpdateGame : handleNewGame)}>
        <h2>{game ? "Editando jogo" : "Cadastrar jogo"}</h2>
        <StyledInput placeholder="Nome" {...register("name")} defaultValue={game ? game.name : ""} />
        <StyledInput placeholder="Imagem" {...register("image")} defaultValue={game ? game.image : ""} type="url" />
        <StyledInput placeholder="Preço" {...register("price")} defaultValue={game ? game.price : ""} type="number" step="0.01" />
        <StyledInput placeholder="Descrição" {...register("description")} defaultValue={game ? game.description : ""} />
        {/* Se deixado vazio o select não envia aviso de erro e faz a requisição com ele vazio,
        gerando erro 400 dizendo que o genreId precisa ser um UUID.
        Temporariamente resolvido com .catch na requisição*/}
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
          <Button
            text="Cancelar"
            variant="cancel"
            size="tiny"
            onClick={() => {
              setGame(undefined), handleShowModal();
            }}
          />
          <Button text={game ? "Salvar" : "Cadastrar"} size="tiny" type="submit" />
        </div>
      </Styled.ModalContainer>
    </ModalOverlay>
  );
};

export default GameModal;
