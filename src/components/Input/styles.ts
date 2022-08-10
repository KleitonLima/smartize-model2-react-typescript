import styled, { css } from "styled-components";

interface StyledInputProps {
  background: "secondary";
  inputSize: "small" | "large";
}

export const StyledInput = styled.input<StyledInputProps>`
  ${({ theme, background, inputSize }) => css`
    width: 290px;
    border-radius: 4px;
    background-color: ${theme.colors.backgroundMenuColor};

    ${inputSize === "small" &&
    css`
      width: 190px;
    `}
    ${inputSize === "large" &&
    css`
      width: 390px;
    `}

    ${background === "secondary" &&
    css`
      background-color: ${theme.colors.backgroundColor};
    `}
  `}
`;
