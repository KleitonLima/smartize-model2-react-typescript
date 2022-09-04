import styled, { css } from "styled-components";

interface StyledButtonProps {
  variant?: "disable" | "cancel" | false;
  size?: "tiny" | "small" | "large" | false;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, variant, size }) => css`
    cursor: pointer;
    width: 18.6rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${theme.colors.textSecondaryColor};
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.textPrimaryColor};

    :hover {
      transform: scale(1.05);
      transition: all, 0.3s;
    }

    ${variant === "disable" &&
    css`
      color: ${theme.colors.secondaryColor};
      background-color: ${theme.colors.transparent};
      border: 1px solid ${theme.colors.secondaryColor};
      pointer-events: none;
      opacity: 90%;
    `}

    ${variant === "cancel" &&
    css`
      color: ${theme.colors.textSecondaryColor};
      background-color: ${theme.colors.secondaryColor};
    `}

    ${size === "tiny" &&
    css`
      width: 5rem;
    `}

    ${size === "small" &&
    css`
      width: 10.7;
    `}
    
    ${size === "large" &&
    css`
      width: 22.3;
    `}
  `}
`;
