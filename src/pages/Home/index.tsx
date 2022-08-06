import GamesList from "../../components/GamesList";
import { SearchIcon } from "../../assets/icons";
import { mockedGenres } from "../../mocks";
import { mockedGames } from "../../mocks";
import { Game, Genre } from "../../types";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { DateTime } from "luxon";
import { useState } from "react";

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre>(mockedGenres[0]);

  const filteredGames: Game[] = mockedGames.filter((elem) => elem.genreId === selectedGenre.id);

  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

  return (
    <Styled.HomeContainer>
      <Menu path="home" />
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <Styled.TitleContainer>
            <h1>
              smartize <br /> store
            </h1>
            <p>{formatedDate}</p>
          </Styled.TitleContainer>
          <Styled.SearchInputContainer>
            <div>
              <SearchIcon />
            </div>
            <input placeholder="pesquise aqui" />
          </Styled.SearchInputContainer>
        </Styled.HomeContentHeader>
        <section>
          <Styled.GenreBar>
            <Styled.GenreSelectButton>Todos</Styled.GenreSelectButton>
            {mockedGenres.map((elem) => {
              return (
                <Styled.GenreSelectButton active={elem.name === selectedGenre.name} onClick={() => setSelectedGenre(elem)}>
                  {elem.name}
                </Styled.GenreSelectButton>
              );
            })}
          </Styled.GenreBar>
          <Styled.GamesHeaderContainer>
            <div>
              <p>Escolha seus jogos</p>
            </div>
            <div>
              <p>Ordem:</p>
              <Styled.GamesOrderSelect>
                <option>Mais vendidos</option>
                <option>Mais baratos</option>
                <option>Mais caros</option>
              </Styled.GamesOrderSelect>
            </div>
          </Styled.GamesHeaderContainer>
          <GamesList list={filteredGames} />
        </section>
      </Styled.HomeContentContainer>
      <aside>
        <header>
          <div>
            <h2>Pedido #12</h2>
          </div>
          <div>
            <button>Compra própria</button>
            <button>Presentear um amigo</button>
            <button>Limpar lista</button>
          </div>
        </header>
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
    </Styled.HomeContainer>
  );
};

export default Home;
