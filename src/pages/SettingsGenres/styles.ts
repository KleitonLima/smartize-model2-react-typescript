import styled, { css } from "styled-components";

export const AddGenreCard = styled.button`
  ${({ theme }) => css`
    width: 150px;
    height: 100px;
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
      transition: all 0.2s;
    }
  `}
`;

export const EditGenreCard = styled.div`
  ${({ theme }) => css`
    width: 150px;
    height: 100px;
    border: 2px solid ${theme.colors.primaryColor};
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primaryColor};
    text-shadow: 0px 0px 5px ${theme.colors.textPrimaryColor};

    h4 {
      padding-top: 16px;
      box-sizing: border-box;
    }

    div {
      display: flex;
      width: 100%;
    }
  `}
`;

export const GenreEditButton = styled.button`
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

export const GenreDeleteButton = styled.button`
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
