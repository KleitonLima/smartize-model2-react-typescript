import styled, { css } from "styled-components";

export const EditEntityCard = styled.div`
  ${({ theme }) => css`
    width: 12.5rem;
    height: 15.6rem;
    border: 2px solid ${theme.colors.primaryColor};
    box-sizing: border-box;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primaryColor};
    text-shadow: 0 0 5px ${theme.colors.textPrimaryColor};

    img {
      width: 9.3rem;
      border-radius: 0.5rem;
    }
    div {
      display: flex;
      width: 100%;
    }
  `}
`;

export const SettingsGameEditButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 2.5rem;
    background-color: ${theme.colors.backgroundColor};
    color: ${theme.colors.textPrimaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    text-shadow: 0 0 0.3rem ${theme.colors.primaryColor};
    border-radius: 0 0 0 0.3rem;

    :hover {
      background-color: ${theme.colors.primaryColor};
      transition: all, 0.2s;
    }
  `}
`;

export const SettingsGameDeleteButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 2.5rem;
    background-color: ${theme.colors.backgroundColor};
    color: ${theme.colors.textPrimaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    text-shadow: 0 0 0.3rem ${theme.colors.primaryColor};
    border-radius: 0 0 0.3rem 0;

    :hover {
      text-shadow: none;
      background-color: ${theme.colors.secondaryColor};
      transition: all 0.3s;
    }
  `}
`;
