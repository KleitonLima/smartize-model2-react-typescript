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
    padding: 0 1rem;
    box-sizing: border-box;

    h1 {
      font-family: ${theme.constants.logoFontFamily};
      font-size: 2.1rem;
      padding: 1rem 0;
      box-sizing: border-box;
      max-width: 100%;
    }
  `}
`;

export const SelectButtonContainer = styled.div<ActiveButtonProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: 100%;
    background-color: ${theme.colors.backgroundMenuColor};
    box-sizing: border-box;
    border-radius: 0.5rem 0.5rem 0 0;
    gap: 0.5rem;
  `}
`;

export const ButtonContainerOutside = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    padding: 1rem 0;
    box-sizing: border-box;
    cursor: pointer;

    :hover {
      transition: all, 0.3s;
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.textPrimaryColor};
      border-radius: 0.5rem 0 0 0.5rem;
    }

    ${active &&
    css`
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.textPrimaryColor};
      border-radius: 0.5rem 0 0 0.5rem;
      box-sizing: border-box;
    `}
  `}
`;

export const ButtonContainerInside = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    gap: 0.2rem;
    box-sizing: border-box;
    padding-left: 1rem;

    ${active &&
    css`
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.textPrimaryColor};
      border-right: 0.2rem solid ${theme.colors.textPrimaryColor};
      border-radius: 0.5rem 0 0 0.5rem;
      box-sizing: border-box;
    `}
  `}
`;
