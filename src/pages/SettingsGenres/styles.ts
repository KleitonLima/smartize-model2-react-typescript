import styled, { css } from "styled-components";

export const AddGenreCard = styled.button`
  ${({ theme }) => css`
    width: 9.3rem;
    height: 6.2rem;
    border: 0.1rem dashed ${theme.colors.primaryColor};
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${theme.colors.primaryColor};
    text-shadow: 0 0 0.3rem ${theme.colors.textPrimaryColor};

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
    width: 9.3rem;
    height: 6.2rem;
    border: 0.1rem solid ${theme.colors.primaryColor};
    box-sizing: border-box;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primaryColor};
    text-shadow: 0 0 0.3rem ${theme.colors.textPrimaryColor};

    h4 {
      padding-top: 1rem;
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

export const GenreDeleteButton = styled.button`
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
      transition: all, 0.2s;
    }
  `}
`;
