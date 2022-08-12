import styled, { css } from "styled-components";

interface ActiveButtonProps {
  active?: boolean;
}

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.backgroundColor};
  `}
`;

export const SettingsSelectContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
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
    }
  `}
`;

export const SettingsSelectButtonContainer = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.backgroundMenuColor};
    box-sizing: border-box;
    border-radius: 8px 8px 0px 0px;

    ${active &&
    css`
      box-sizing: border-box;
    `}
  `}
`;

export const SettingsButtonContainerInside = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    display: flex;
    justify-content: center;
    cursor: pointer;
    gap: 4px;

    ${active &&
    css`
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.textPrimaryColor};
      border-right: 3px solid ${theme.colors.textPrimaryColor};
      border-radius: 8px 0px 0px 8px;
      border-style:;
    `}
  `}
`;

export const SettingsButtonContainerOutside = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    padding: 24px 0px;

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
    `}
  `}
`;
