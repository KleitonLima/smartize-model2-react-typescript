import styled, { css } from "styled-components";

export const EditEntityCard = styled.div`
  ${({ theme }) => css`
    width: 200px;
    height: 250px;
    border: 2px solid ${theme.colors.primaryColor};
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primaryColor};
    text-shadow: 0px 0px 5px ${theme.colors.textPrimaryColor};

    img {
      width: 150px;
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
    height: 40px;
    background-color: ${theme.colors.backgroundColor};
    color: ${theme.colors.textPrimaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    text-shadow: 0px 0px 5px ${theme.colors.primaryColor};
    border-radius: 0px 0px 0px 5px;

    :hover {
      background-color: ${theme.colors.primaryColor};
      transition: all, 0.2s;
    }
  `}
`;

export const SettingsGameDeleteButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 40px;
    background-color: ${theme.colors.backgroundColor};
    color: ${theme.colors.textPrimaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    text-shadow: 0px 0px 5px ${theme.colors.primaryColor};
    border-radius: 0px 0px 5px 0px;

    :hover {
      text-shadow: none;
      background-color: ${theme.colors.secondaryColor};
      transition: all, 0.2s;
    }
  `}
`;
