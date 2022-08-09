import { mockedGames } from "../../mocks";
import Button from "../Button";
import CheckoutCard from "../CheckoutCard";
import * as Styled from "./styles";

const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <Styled.OrderDetailsHeader>
        <h2>Pedido #33</h2>
        <div>
          <div>
            <Button text="Compra própria" onClick={() => {}} />
            <Button text="Presentear amigo(a)" onClick={() => {}} />
          </div>
        </div>
      </Styled.OrderDetailsHeader>
      <Styled.CheckoutDetailsContainer>
        <header>
          <h3>Item</h3>
          <h3>Preço</h3>
        </header>
        <Styled.CheckoutCardContainer>
          <CheckoutCard game={mockedGames[0]} />
          <CheckoutCard game={mockedGames[1]} />
          <CheckoutCard game={mockedGames[2]} />
        </Styled.CheckoutCardContainer>
      </Styled.CheckoutDetailsContainer>
      <Styled.OrderDetailsFooter>
        <input type="text" placeholder="cupom de desconto" />
        <div>
          <h4>Desconto</h4>
          <h4>R$0.00</h4>
        </div>
        <div>
          <h4>Sub total</h4>
          <h4>R$0.00</h4>
        </div>
        <div>
          <Button text="Limpar lista" onClick={() => {}} size="large" variant="cancel" />
          <Button text="Pagamento" onClick={() => {}} variant="disable" />
        </div>
      </Styled.OrderDetailsFooter>
    </Styled.OrderDetailsContainer>
  );
};

export default OrderDetails;
