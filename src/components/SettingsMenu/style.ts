import styled, { css } from "styled-components";

interface ActiveButtonProps {
  active?: boolean;
}

export const SettingsSelectContainer = styled.div`
  ${({ theme }) => css`
    max-width: 25%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0px 16px;
    box-sizing: border-box;

    h1 {
      font-family: ${theme.constants.logoFontFamily};
      font-size: 35px;
      padding: 16px 0px;
      box-sizing: border-box;
      max-width: 100%;
    }
  `}
`;

export const SelectButtonContainer = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: 100%;
    background-color: ${theme.colors.backgroundMenuColor};
    box-sizing: border-box;
    border-radius: 8px 8px 0px 0px;
    gap: 8px;
  `}
`;

export const ButtonContainerOutside = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    padding: 16px 0px;
    box-sizing: border-box;
    cursor: pointer;

    :hover {
      transition: all, 0.3s;
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.textPrimaryColor};
      border-radius: 8px 0px 0px 8px;
    }

    ${active &&
    css`
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.textPrimaryColor};
      border-radius: 8px 0px 0px 8px;
      box-sizing: border-box;
    `}
  `}
`;

export const ButtonContainerInside = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    gap: 4px;
    box-sizing: border-box;
    padding-left: 16px;

    ${active &&
    css`
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.textPrimaryColor};
      border-right: 3px solid ${theme.colors.textPrimaryColor};
      border-radius: 8px 0px 0px 8px;
      box-sizing: border-box;
    `}
  `}
`;
