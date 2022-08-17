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
    width: 30%;
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

export const SelectButtonContainer = styled.div<ActiveButtonProps>`
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

export const ButtonContainerInside = styled.div<ActiveButtonProps>`
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
    `}
  `}
`;

export const ButtonContainerOutside = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    padding: 16px 0px;

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

export const SettingsSelectedContainer = styled.div`
  ${({ theme }) => css`
    width: calc(70% - 100px);
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

export const SelectedBarContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-bottom: 1px solid ${theme.colors.primaryColor};
  `}
`;

export const SelectedBar = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    border: none;
    font-weight: bold;
    color: ${theme.colors.textPrimaryColor};
    margin-right: 8px;
    padding: 0px 3px 3px 3px;
    background-color: #fff0;
    text-shadow: 0px 0px 5px ${theme.colors.primaryColor};
    box-sizing: border-box;
    cursor: pointer;

    :hover {
      color: ${theme.colors.primaryColor};
    }

    ${active &&
    css`
      border-bottom: 4px solid ${theme.colors.textPrimaryColor};
      color: ${theme.colors.primaryColor};
      text-shadow: 0px 0px 5px ${theme.colors.textPrimaryColor};
    `}
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

export const AddEntityCard = styled.div`
  ${({ theme }) => css`
    width: 200px;
    height: 250px;
    border: 2px dashed ${theme.colors.primaryColor};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${theme.colors.primaryColor};
    text-shadow: 0px 0px 5px ${theme.colors.textPrimaryColor};

    :hover {
      transform: scale(0.99);
      background-color: ${theme.colors.backgroundColor};
      color: ${theme.colors.textPrimaryColor};
    }
  `}
`;

export const SelectedButtons = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    gap: 16px;
  `}
`;
