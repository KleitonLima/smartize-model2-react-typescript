import { Game } from "../../types";
import GameCard from "../GameCard";
import * as Styled from "./styles";

interface GamesListProps {
  list: Game[];
  isFavoriteList: boolean;
  handleGetFavorites: () => void;
}

const GamesList = ({ list, isFavoriteList, handleGetFavorites }: GamesListProps) => {
  return (
    <Styled.GamesListContainer>
      {list.map((elem) => (
        <GameCard isFavoriteList={isFavoriteList} handleGetFavorites={handleGetFavorites} game={elem} key={elem.id} />
      ))}
    </Styled.GamesListContainer>
  );
};

export default GamesList;
