import * as Styled from "./styles";

export const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <aside>
        <Styled.OrderDetailsHeader>
          <div>
            <h2>Pedido #12</h2>
          </div>
          <div>
            <div>
              <button>Compra própria</button>
              <button>Presentear um amigo</button>
            </div>
            <button>Limpar lista</button>
          </div>
        </Styled.OrderDetailsHeader>
        <div className="bag">
          <div>
            <h3>Item</h3>
            <h3>Preço</h3>
          </div>
          <div className="itens-container">
            <div className="item">
              <img alt="imagem-jogo" />
              <div>
                <p>Nome do jogo</p>
                <p>Preço do jogo</p>
              </div>
              <div>
                <input value={1} />
                <p>Preço</p>
                <img alt="icone-lixeira" />
              </div>
            </div>
            <div className="item">
              <img alt="imagem-jogo" />
              <div>
                <p>Nome do jogo</p>
                <p>Preço do jogo</p>
              </div>
              <div>
                <input value={1} />
                <p>Preço</p>
                <img alt="icone-lixeira" />
              </div>
            </div>
            <div className="Item">
              <img alt="imagem-jogo" />
              <div>
                <p>Nome do jogo</p>
                <p>Preço do jogo</p>
              </div>
              <div>
                <input value={1} />
                <p>Preço</p>
                <img alt="icone-lixeira" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <input type="text" placeholder="cupom de desconto" />
          <div>
            <div>
              <p>Desconto</p>
              <p>R$0.00</p>
            </div>
            <div>
              <p>Sub total</p>
              <p>R$0.00</p>
            </div>
            <button>Continuar para pagamento</button>
          </div>
        </div>
      </aside>
    </Styled.OrderDetailsContainer>
  );
};
