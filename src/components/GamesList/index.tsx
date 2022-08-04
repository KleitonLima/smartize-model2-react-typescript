import { Game } from "../../types";
import GameCard from "../GameCard";
import * as Styled from "./styles";

interface GamesListProps {
  list: Game[];
}

const GamesList = ({ list }: GamesListProps) => {
  return (
    <Styled.GamesListContainer>
      {list.map((elem) => (
        <GameCard game={elem} key={elem.id} />
      ))}
    </Styled.GamesListContainer>
  );
};

export default GamesList;
