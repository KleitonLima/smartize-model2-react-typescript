import { Game } from "../../types/index.js";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div>
      <img alt="img game" />
      <h3>Nome</h3>
      <p>Preço</p>
      <p>Descrição</p>
    </div>
  );
};

export default GameCard;
