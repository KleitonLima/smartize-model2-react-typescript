import OrderDetails from "../../components/OrderDetails";
import GamesList from "../../components/GamesList";
import Menu from "../../components/Menu";
import { mockedGenres } from "../../mocks";
import { mockedGames } from "../../mocks";
import { SearchIcon } from "../../assets/icons";
import { Game, Genre } from "../../types";
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
                <Styled.GenreSelectButton key={elem.name.toString()} active={elem.name === selectedGenre.name} onClick={() => setSelectedGenre(elem)}>
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
      <OrderDetails />
    </Styled.HomeContainer>
  );
};

export default Home;
