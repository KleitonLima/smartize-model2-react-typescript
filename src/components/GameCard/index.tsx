import { Game } from "../../types/index.js";
import * as styled from "./styles";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <styled.CardContainer>
      <img alt={game.name} src={game.image} />
      <h3>{game.name}</h3>
      <h3>R${game.price}</h3>
      <p>{game.description}</p>
    </styled.CardContainer>
  );
};

export default GameCard;
