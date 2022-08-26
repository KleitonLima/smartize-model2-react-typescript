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
