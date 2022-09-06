import styled, { css } from "styled-components";

export const ModalContainer = styled.form`
  ${({ theme }) => css`
    height: 25rem;
    width: 20.3rem;
    background-color: ${theme.colors.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;

    h2 {
      width: 100%;
      text-align: left;
      padding: 1rem 1.5rem;
      box-sizing: border-box;
    }
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    width: 18.6rem;
    height: 2.5rem;
    padding: 0 1rem;
    box-sizing: border-box;
    border-radius: 0.2rem;
    background-color: ${theme.colors.backgroundMenuColor};
  `}
`;
