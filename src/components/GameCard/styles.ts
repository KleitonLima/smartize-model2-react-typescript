import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface CardContainerProps {
  theme: Theme;
}

export const CardContainer = styled.div<CardContainerProps>`
  ${({ theme }) => css`
    width: 12.5rem;
    height: 15.6rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: end;
    background-color: ${theme.colors.backgroundMenuColor};
    gap: 0.3rem;
    border-radius: 1rem;
    font-family: ${theme.constants.bodyFontFamily};
    color: ${theme.colors.textSecondaryColor};
    padding: 0.5rem;
    position: relative;
    padding-top: 1.5rem;

    img {
      width: 9.3rem;
      height: 9.3rem;
      position: absolute;
      top: -2rem;
      border-radius: 1rem;
    }

    button {
      background: none;
      position: absolute;
      top: 0.3rem;
      right: 0.3rem;
      cursor: pointer;

      :hover {
        color: ${theme.colors.secondaryColor};
      }
    }
  `}
`;
