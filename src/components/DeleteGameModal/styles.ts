import styled, { css } from "styled-components";

export const DeleteGameContainer = styled.div`
  ${({ theme }) => css`
    width: 12.5rem;
    height: 6.2rem;
    display: flex;
    flex-direction: column;
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
