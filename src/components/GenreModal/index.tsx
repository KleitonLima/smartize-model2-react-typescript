import { ModalOverlay, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import * as Styled from "./styles";

interface GenreModalProps {
  handleShowModal: () => void;
}

const GenreModal = ({ handleShowModal }: GenreModalProps) => {
  return (
    <ModalOverlay>
      <Styled.GenreModalContainer>
        <h2>Cadastrar gênero</h2>
        <StyledInput placeholder="Nome" />
        <div>
          <Button text="Cancelar" variant="cancel" size="tiny" onClick={handleShowModal} />
          <Button text="Salvar" size="tiny" />
        </div>
      </Styled.GenreModalContainer>
    </ModalOverlay>
  );
};

export default GenreModal;
