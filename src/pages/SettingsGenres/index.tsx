import { useState } from "react";
import { AddEntityCard, SelectedContentsContainer, SettingsContainer, SettingsSelectedContainer } from "../../assets/styles/globalStyles";
import DeleteCardModal from "../../components/DeleteCardModal";
import GameModal from "../../components/GameModal";
import SettingsGameCard from "../../components/SettingsGameCard";
import SettingsMenu from "../../components/SettingsMenu";
import { useGames } from "../../contexts/games";
import { useGenres } from "../../contexts/genres";
import { Game, Genre } from "../../types";

const SettingsGenres = () => {
  const { genres } = useGenres();
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
      <SettingsMenu path="genres" />;
      <SettingsSelectedContainer>
        <h2>Gerenciando os gêneros</h2>

        <SelectedContentsContainer>
          <AddEntityCard onClick={handleShowModal}>
            <h2>+</h2>
            <p>Adicionar gênero</p>
          </AddEntityCard>
          {genres.map((elem) => (
            <SettingsGameCard setGame={setGame} handleShowDeleteModal={handleShowDeleteModal} handleShowModal={handleShowModal} key={elem.id} />
          ))}
        </SelectedContentsContainer>
      </SettingsSelectedContainer>
      {showModal && <GameModal setGame={setGame} game={game} handleShowModal={handleShowModal} />}
      {showDeleteModal && <DeleteCardModal gameId={game?.id} handleShowDeleteModal={handleShowDeleteModal} />}
    </SettingsContainer>
  );
};

export default SettingsGenres;
