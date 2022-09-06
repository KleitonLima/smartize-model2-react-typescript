import styled, { css } from "styled-components";

interface StyledInputProps {
  background?: "secondary";
  inputSize?: "small" | "large";
}

export const StyledInput = styled.input<StyledInputProps>`
  ${({ theme, background, inputSize }) => css`
    all: unset;
    width: 18.6rem;
    height: 2.5rem;
    padding: 0rem 1rem;
    box-sizing: border-box;
    border-radius: 0.3rem;
    background-color: ${theme.colors.backgroundMenuColor};

    ${inputSize === "small" &&
    css`
      width: 10.7rem;
    `}
    ${inputSize === "large" &&
    css`
      width: 22.3rem;
    `}

    ${background === "secondary" &&
    css`
      background-color: ${theme.colors.backgroundColor};
    `}
  `}
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor};
    text-align: center;
  `}
`;

export const ModalOverlay = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background-color: ${theme.colors.backgroundModal};
  `}
`;

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.backgroundColor};
  `}
`;

export const SettingsSelectedContainer = styled.div`
  ${({ theme }) => css`
    width: calc(75% - 6.3rem);
    height: calc(100% - 4.3rem);
    display: flex;
    flex-direction: column;
    margin: 4.3rem 1rem 0rem 0rem;
    padding: 1rem;
    gap: 1rem;
    box-sizing: border-box;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    background-color: ${theme.colors.backgroundMenuColor};

    div {
      display: flex;
    }
  `}
`;

export const SelectedContentsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    overflow-y: scroll;
    gap: 1rem;
  `}
`;
