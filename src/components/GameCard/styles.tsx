import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface CardContainerProps {
  theme: Theme;
}

export const CardContainer = styled.div<CardContainerProps>`
  ${({ theme }) => css`
    width: 200px;
    height: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: end;
    background-color: ${theme.colors.backgroundMenuColor};
    gap: 6px;
    border-radius: 16px;
    font-family: ${theme.constants.bodyFontFamily};
    color: ${theme.colors.secondaryColor};
    padding: 8px;
    position: relative;
    padding-top: 24px;

    img {
      width: 150px;
      height: 150px;
      position: absolute;
      top: -32px;
      border-radius: 16px;
    }
  `}
`;
