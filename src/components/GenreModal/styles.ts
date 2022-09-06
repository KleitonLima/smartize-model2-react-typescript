import styled, { css } from "styled-components";

export const GenreModalContainer = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 18.7rem;
    height: 9.3rem;
    justify-content: space-between;
    background-color: ${theme.colors.backgroundColor};
    padding: 2rem;
    border-radius: 1rem;

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  `}
`;
