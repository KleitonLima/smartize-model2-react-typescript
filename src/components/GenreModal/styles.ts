import styled, { css } from "styled-components";

export const GenreModalContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 150px;
    justify-content: space-between;
    background-color: ${theme.colors.backgroundColor};
    padding: 32px;
    border-radius: 16px;

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  `}
`;
