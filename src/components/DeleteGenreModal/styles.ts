import styled, { css } from "styled-components";

export const DeleteGenreContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100px;
    justify-content: space-between;
    background-color: ${theme.colors.backgroundColor};
    padding: 32px;
    border-radius: 16px;
  `}
`;
