import { TrashIcon } from "../../assets/icons";
import { Game } from "../../types";
import * as Styled from "./styles";

interface CheckoutGameProps {
  game: Game;
}

const CheckoutCard = ({ game }: CheckoutGameProps) => {
  return (
    <Styled.CheckoutCardDetails>
      <div>
        <img src={game.image} alt={game.name} />
        <h4>{game.name}</h4>
      </div>
      <div>
        <p>R${game.price}</p>
        <TrashIcon />
      </div>
    </Styled.CheckoutCardDetails>
  );
};

export default CheckoutCard;
