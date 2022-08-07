import Button from "../Button";
import * as Styled from "./styles";

export const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <Styled.OrderDetailsHeader>
        <h2>Pedido #12</h2>
        <div>
          <div>
            <Button text="Compra própria" onClick={() => {}} />
            <Button text="Presentear amigo(a)" onClick={() => {}} />
          </div>
        </div>
      </Styled.OrderDetailsHeader>
      <Styled.GamesOrderContainer>
        <header>
          <h3>Item</h3>
          <h3>Preço</h3>
        </header>
        <body className="itens-container">
          <img alt="imagem" />
          <div>
            <p>Nome</p>
            <p>Preço</p>
          </div>
          <div>
            <p>R$0,00</p>
            <img alt="lixeira" />
          </div>
        </body>
      </Styled.GamesOrderContainer>
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
