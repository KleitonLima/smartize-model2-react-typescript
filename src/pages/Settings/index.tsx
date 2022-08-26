import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { InfoIcon, MarketIcon, UserIcon } from "../../assets/icons/index";
import Button from "../../components/Button";
import SettingsGameCard from "../../components/SettingsGameCard";
import { useGames } from "../../contexts/games";
import { useState } from "react";
import GameModal from "../../components/GameModal";
import { Game, Genre } from "../../types";
import DeleteCardModal from "../../components/DeleteCardModal";
import { useGenres } from "../../contexts/genres";

const Settings = () => {
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
    <Styled.SettingsContainer>
      <Menu path="settings" />
      <Styled.SettingsSelectContainer>
        <h1>configurações</h1>
        <Styled.SelectButtonContainer>
          <Styled.ButtonContainerOutside>
            <Styled.ButtonContainerInside>
              <div>
                <MarketIcon />
              </div>
              <div>
                <h3>Gerenciar jogos</h3>
                <p>Adicione, edite ou remova os jogos</p>
              </div>
            </Styled.ButtonContainerInside>
          </Styled.ButtonContainerOutside>
          <Styled.ButtonContainerOutside active={true}>
            <Styled.ButtonContainerInside active={true}>
              <div>
                <InfoIcon />
              </div>
              <div>
                <h3>Gerenciar gêneros</h3>
                <p>Adicione, edite ou remova os gêneros</p>
              </div>
            </Styled.ButtonContainerInside>
          </Styled.ButtonContainerOutside>
          <Styled.ButtonContainerOutside>
            <Styled.ButtonContainerInside>
              <div>
                <UserIcon />
              </div>
              <div>
                <h3>Gerenciar usuários</h3>
                <p>Adicione, edite ou remova os usuários</p>
              </div>
            </Styled.ButtonContainerInside>
          </Styled.ButtonContainerOutside>
        </Styled.SelectButtonContainer>
      </Styled.SettingsSelectContainer>
      <Styled.SettingsSelectedContainer>
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
        <Styled.SelectedContentsContainer>
          <Styled.AddEntityCard onClick={handleShowModal}>
            <h2>+</h2>
            <p>Adicionar jogo</p>
          </Styled.AddEntityCard>
          {filteredGamesSettings.map((elem) => (
            <SettingsGameCard setGame={setGame} handleShowDeleteModal={handleShowDeleteModal} handleShowModal={handleShowModal} game={elem} key={elem.id} />
          ))}
        </Styled.SelectedContentsContainer>
        <Styled.SelectedButtons>
          <Button text="Cancelar" variant="cancel" size="small" />
          <Button text="Salvar alterações" size="small" />
        </Styled.SelectedButtons>
      </Styled.SettingsSelectedContainer>
      {showModal && <GameModal setGame={setGame} game={game} handleShowModal={handleShowModal} />}
      {showDeleteModal && <DeleteCardModal gameId={game?.id} handleShowDeleteModal={handleShowDeleteModal} />}
    </Styled.SettingsContainer>
  );
};

export default Settings;
