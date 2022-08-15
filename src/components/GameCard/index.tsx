import { Game } from "../../types/index.js";
import * as Styled from "./styles";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Styled.CardContainer>
      <img alt={game.name} src={game.image} />
      <h3>{game.name}</h3>
      <h3>R${game.price}</h3>
      <p>{game.description}</p>
    </Styled.CardContainer>
  );
};

export default GameCard;
