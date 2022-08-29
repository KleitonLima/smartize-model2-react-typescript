import * as Styled from "./styles";
import { useState } from "react";
import { SelectedContentsContainer, SettingsContainer, SettingsSelectedContainer } from "../../assets/styles/globalStyles";
import SettingsMenu from "../../components/SettingsMenu";
import { useGenres } from "../../contexts/genres";
import { EditIcon, TrashIcon } from "../../assets/icons";
import GenreModal from "../../components/GenreModal";
import { Genre } from "../../types";
import DeleteGenreModal from "../../components/DeleteGenreModal";

const SettingsGenres = () => {
  const { genres } = useGenres();

  const [genre, setGenre] = useState<Genre | undefined>(undefined);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
    setGenre(undefined);
  };
  const handleShowDeleteModal = (genre?: Genre) => {
    setShowDeleteModal(!showDeleteModal);
    setGenre(undefined);
    setGenre(genre);
  };
  const handleShowUpdateModal = (genre: Genre) => {
    handleShowModal();
    setGenre(genre);
  };

  return (
    <SettingsContainer>
      <SettingsMenu path="genres" />;
      <SettingsSelectedContainer>
        <h2>Gerenciando gêneros</h2>
        <SelectedContentsContainer>
          <Styled.AddGenreCard onClick={handleShowModal}>
            <h2>+</h2>
            <p>Adicionar gênero</p>
          </Styled.AddGenreCard>
          {genres.map((elem) => (
            <Styled.EditGenreCard key={elem.id}>
              <h4>{elem.name}</h4>
              <div>
                <Styled.GenreEditButton onClick={() => handleShowUpdateModal(elem)}>
                  <EditIcon /> <p>Editar</p>
                </Styled.GenreEditButton>
                <Styled.GenreDeleteButton
                  onClick={() => {
                    handleShowDeleteModal(elem);
                  }}
                >
                  <TrashIcon />
                  <p>Deletar</p>
                </Styled.GenreDeleteButton>
              </div>
            </Styled.EditGenreCard>
          ))}
        </SelectedContentsContainer>
      </SettingsSelectedContainer>
      {showModal && <GenreModal genre={genre} handleShowModal={handleShowModal} />}
      {showDeleteModal && <DeleteGenreModal genreId={genre?.id} handleShowDeleteModal={handleShowDeleteModal} />}
    </SettingsContainer>
  );
};

export default SettingsGenres;
