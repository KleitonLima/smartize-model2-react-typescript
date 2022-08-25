import styled, { css } from "styled-components";

interface StyledButtonProps {
  variant?: "disable" | "cancel" | false;
  size?: "tiny" | "small" | "large" | false;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, variant, size }) => css`
    background-color: ${theme.colors.primaryColor};
    width: 298px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #000;
    cursor: pointer;
    color: ${theme.colors.textPrimaryColor};

    :hover {
      transform: scale(1.05);
      transition: all, 0.3s;
    }

    ${variant === "disable" &&
    css`
      color: red;
      background-color: #fff0;
      border: 1px solid red;
      pointer-events: none;
      opacity: 50%;
    `}

    ${variant === "cancel" &&
    css`
      color: ${theme.colors.textSecondaryColor};
      background-color: red;
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
