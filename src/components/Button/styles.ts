import styled, { css } from "styled-components";

interface StyledButtonProps {
  variant?: "disable" | "cancel" | false;
  size?: "tiny" | "small" | "large" | false;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, variant, size }) => css`
    cursor: pointer;
    width: 298px;
    height: 40px;
    border-radius: 4px;
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
      width: 80px;
    `}

    ${size === "small" &&
    css`
      width: 172px;
    `}
    
    ${size === "large" &&
    css`
      width: 358px;
    `}
  `}
`;
