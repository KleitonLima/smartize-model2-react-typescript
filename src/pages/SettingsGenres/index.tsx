import * as Styled from "./styles";
import { useState } from "react";
import { SelectedContentsContainer, SettingsContainer, SettingsSelectedContainer } from "../../assets/styles/globalStyles";
import SettingsMenu from "../../components/SettingsMenu";
import { useGenres } from "../../contexts/genres";
import { EditIcon, TrashIcon } from "../../assets/icons";
import GenreModal from "../../components/GenreModal";

const SettingsGenres = () => {
  const { genres } = useGenres();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

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
                <Styled.GenreEditButton>
                  <EditIcon /> <p>Editar</p>
                </Styled.GenreEditButton>
                <Styled.GenreDeleteButton>
                  <TrashIcon />
                  <p>Deletar</p>
                </Styled.GenreDeleteButton>
              </div>
            </Styled.EditGenreCard>
          ))}
        </SelectedContentsContainer>
      </SettingsSelectedContainer>
      {showModal && <GenreModal handleShowModal={handleShowModal} />}
    </SettingsContainer>
  );
};

export default SettingsGenres;
