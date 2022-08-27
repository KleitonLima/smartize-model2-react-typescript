import styled, { css } from "styled-components";

interface StyledInputProps {
  background?: "secondary";
  inputSize?: "small" | "large";
}

export const StyledInput = styled.input<StyledInputProps>`
  ${({ theme, background, inputSize }) => css`
    all: unset;
    width: 298px;
    height: 40px;
    padding: 0px 16px;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: ${theme.colors.backgroundMenuColor};

    ${inputSize === "small" &&
    css`
      width: 172px;
    `}
    ${inputSize === "large" &&
    css`
      width: 358px;
    `}

    ${background === "secondary" &&
    css`
      background-color: ${theme.colors.backgroundColor};
    `}
  `}
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: #ff0000;
    text-align: center;
  `}
`;

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
    width: calc(75% - 100px);
    height: calc(100% - 68px);
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.backgroundMenuColor};
    margin: 68px 16px 0px 0px;
    border-radius: 8px 8px 0px 0px;
    padding: 16px;
    box-sizing: border-box;
    gap: 16px;

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
    gap: 16px;
  `}
`;
