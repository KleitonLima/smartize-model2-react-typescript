import styled, { css } from "styled-components";

export const ModalOverlay = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: #0009;
  `}
`;

export const ModalContainer = styled.form`
  ${({ theme }) => css`
    height: 400px;
    width: 325px;
    background-color: ${theme.colors.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 16px;
    h2 {
      width: 100%;
      text-align: left;
      padding: 16px 24px;
      box-sizing: border-box;
    }
  `}
`;
