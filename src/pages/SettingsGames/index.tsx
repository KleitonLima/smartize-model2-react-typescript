import * as Styled from "./styles";
import SettingsGameCard from "../../components/SettingsGameCard";
import { useGames } from "../../contexts/games";
import { useState } from "react";
import GameModal from "../../components/GameModal";
import { Game, Genre } from "../../types";
import DeleteCardModal from "../../components/DeleteCardModal";
import { useGenres } from "../../contexts/genres";
import SettingsMenu from "../../components/SettingsMenu";
import { AddEntityCard, SelectedContentsContainer, SettingsContainer, SettingsSelectedContainer } from "../../assets/styles/globalStyles";

const SettingsGames = () => {
  const { games } = useGames();
  const { genres } = useGenres();
  const [selectedGenreSettings, setSelectedGenre] = useState<Genre>(genres[0] || ({} as Genre));
  const filteredGamesSettings: Game[] = games.filter((elem) => elem.genreId === selectedGenreSettings.id);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [game, setGame] = useState<Game | undefined>(undefined);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const handleShowDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  return (
    <SettingsContainer>
      <SettingsMenu path="games" />
      <SettingsSelectedContainer>
        <h2>Gerenciando os jogos</h2>
        <Styled.SelectedBarContainer>
          <Styled.SelectedBar>Todos</Styled.SelectedBar>
          {genres.map((elem) => {
            return (
              <Styled.SelectedBar key={elem.name.toString()} active={elem.name === selectedGenreSettings.name} onClick={() => setSelectedGenre(elem)}>
                {elem.name}
              </Styled.SelectedBar>
            );
          })}
        </Styled.SelectedBarContainer>
        <SelectedContentsContainer>
          <AddEntityCard onClick={handleShowModal}>
            <h2>+</h2>
            <p>Adicionar jogo</p>
          </AddEntityCard>
          {filteredGamesSettings.map((elem) => (
            <SettingsGameCard setGame={setGame} handleShowDeleteModal={handleShowDeleteModal} handleShowModal={handleShowModal} game={elem} key={elem.id} />
          ))}
        </SelectedContentsContainer>
      </SettingsSelectedContainer>
      {showModal && <GameModal setGame={setGame} game={game} handleShowModal={handleShowModal} />}
      {showDeleteModal && <DeleteCardModal gameId={game?.id} handleShowDeleteModal={handleShowDeleteModal} />}
    </SettingsContainer>
  );
};

export default SettingsGames;
