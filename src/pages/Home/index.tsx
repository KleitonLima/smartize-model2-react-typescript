import OrderDetails from "../../components/OrderDetails";
import GamesList from "../../components/GamesList";
import Menu from "../../components/Menu";
import { SearchIcon } from "../../assets/icons";
import { Favorite, Game, Genre } from "../../types";
import * as Styled from "./styles";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useGames } from "../../contexts/games";
import { useGenres } from "../../contexts/genres";
import { api } from "../../services";

const Home = () => {
  const { games } = useGames();
  const { genres } = useGenres();
  const [selectedGenre, setSelectedGenre] = useState<Genre>(({} as Genre) || genres[0]);
  const [isFavoriteList, setIsFavoriteList] = useState<boolean>(false);
  const [userFavorites, setUserFavorites] = useState<Game[]>([]);

  const filteredGames: Game[] = games.filter((elem) => elem.genreId === selectedGenre.id);

  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

  const handleGetFavorites = async () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await api.get<Favorite[]>(`/favorites/user/${user.id}`, headers);

    const favoritesIds: string[] = res.data.map((elem) => elem.gameId);

    const favoritesList: Game[] = games.filter((elem) => {
      return favoritesIds.includes(elem.id);
    });

    console.log(favoritesIds);
    console.log(favoritesList);
    setUserFavorites(favoritesList);
  };

  useEffect(() => {
    handleGetFavorites();
  }, [games]);

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
            {genres.map((elem) => {
              return (
                <Styled.GenreSelectButton
                  key={elem.name.toString()}
                  active={elem.name === selectedGenre.name}
                  onClick={() => {
                    setIsFavoriteList(false);
                    setSelectedGenre(elem);
                  }}
                >
                  {elem.name}
                </Styled.GenreSelectButton>
              );
            })}
            <Styled.GenreSelectButton
              active={isFavoriteList}
              onClick={() => {
                setIsFavoriteList(true);
                setSelectedGenre({} as Genre);
              }}
            >
              Favoritos
            </Styled.GenreSelectButton>
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
          <GamesList list={isFavoriteList ? userFavorites : filteredGames} />
        </section>
      </Styled.HomeContentContainer>
      <OrderDetails />
    </Styled.HomeContainer>
  );
};

export default Home;
