import styled, { css } from "styled-components";

export const DeleteGenreContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 12.5rem;
    height: 6.2rem;
    justify-content: space-between;
    background-color: ${theme.colors.backgroundColor};
    padding: 2rem;
    border-radius: 1rem;
  `}
`;
