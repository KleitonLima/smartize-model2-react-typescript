import styled, { css } from "styled-components";

export const DeleteModalContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100px;
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
