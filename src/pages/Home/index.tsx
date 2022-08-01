const Home = () => {
  return (
    <div>
      <div className="menu">
        <img alt="logo" />
        <img alt="home" />
        <img alt="settings" />
        <img alt="logout" />
      </div>
      <div className="content">
        <header>
          <div>
            <h1>Smartize Store</h1>
            <p>{new Date(Date.now()).toLocaleString()} </p>
          </div>
          <div>
            <img alt="search-icon" />
            <input placeholder="pesquise aqui" />
          </div>
        </header>
        <section>
          <div>
            <p>Jogos</p>
          </div>
          <div>
            <p>Escolha seus jogos</p>
            <div>
              <p>Ordem</p>
              <select>
                <option>Mais vendidos</option>
                <option>Mais baratos</option>
                <option>Mais caros</option>
              </select>
            </div>
            <div className="list">
              <div>
                <img alt="img-jogo" />
                <h3>Nome jogo</h3>
                <h4>R$0.00</h4>
                <p>Breve descrição</p>
              </div>
              <div>
                <img alt="img-jogo" />
                <h3>Nome jogo</h3>
                <h4>R$0.00</h4>
                <p>Breve descrição</p>
              </div>
              <div>
                <img alt="img-jogo" />
                <h3>Nome jogo</h3>
                <h4>R$0.00</h4>
                <p>Breve descrição</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <aside>
        <header>
          <div>
            <h2>Pedido #12</h2>
          </div>
          <div>
            <button>Retirar no local</button>
            <button>Receber em casa</button>
            <button>Limpar lista</button>
          </div>
        </header>
        <div className="bag">
          <div>
            <h3>Item</h3>
            <h3>Qtd</h3>
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
    </div>
  );
};

export default Home;
