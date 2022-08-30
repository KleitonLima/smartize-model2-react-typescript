import toast from "react-hot-toast";
import { FavoriteIcon } from "../../assets/icons/index.js";
import { api } from "../../services/index.js";
import { Favorite, Game } from "../../types/index.js";
import * as Styled from "./styles";

interface GameCardProps {
  game: Game;
  isFavoriteList: boolean;
  handleGetFavorites: () => void;
}

const GameCard = ({ game, isFavoriteList, handleGetFavorites }: GameCardProps) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = {
    userId: user.id,
    gameId: game.id,
  };

  const handleSetFavorite = () => {
    api
      .post("/favorites", data, headers)
      .then(() => {
        handleGetFavorites();
        toast.success("Jogo favoritado!");
      })
      .catch(() => toast.error("Produto já favoritado"));
  };

  const handleRemoveFavorite = async () => {
    const res = await api.get<Favorite[]>(`/favorites/user/${user.id}`, headers);

    const favoriteId = res.data.filter((elem) => elem.gameId === game.id).find((elem) => elem.userId === user.id)?.id;

    api.delete(`/favorites/${favoriteId}`, headers).then(() => {
      handleGetFavorites();
      toast.success("Removido dos favoritos");
    });
  };

  return (
    <Styled.CardContainer>
      <button onClick={isFavoriteList ? handleRemoveFavorite : handleSetFavorite}>
        <FavoriteIcon />
      </button>
      <img alt={game.name} src={game.image} />
      <h3>{game.name}</h3>
      <h3>R${game.price}</h3>
      <p>{game.description}</p>
    </Styled.CardContainer>
  );
};

export default GameCard;
