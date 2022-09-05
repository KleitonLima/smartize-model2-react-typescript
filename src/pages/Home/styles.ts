import styled, { css } from "styled-components";

interface CategoryButtonProps {
  active?: boolean;
}

export const HomeContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.backgroundColor};
    color: ${theme.colors.textPrimaryColor};

    section {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  `}
`;

export const HomeContentContainer = styled.div`
  width: 65%;
`;

export const HomeContentHeader = styled.header`
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1rem 0 1rem;
`;

export const TitleContainer = styled.div`
  h1 {
    font-family: "Major Mono Display", monospace;
  }

  p {
    padding-top: 1rem;
    text-transform: capitalize;
    box-sizing: border-box;
  }
`;

export const SearchInputContainer = styled.div`
  ${({ theme }) => css`
    width: 9.3rem;
    height: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${theme.colors.backgroundMenuColor};
    border-radius: 0.2rem;
    color: ${theme.colors.primaryColor};

    /* buscar outra solução */
    div {
      cursor: pointer;
    }

    input {
      width: 65%;
      background-color: #fff0;
      outline: none;
      ::placeholder {
        color: ${theme.colors.primaryColor};
      }
    }
  `}
`;

export const GenreBar = styled.div`
  ${({ theme }) => css`
    width: 95%;
    color: ${theme.colors.primaryColor};
    border-bottom: 0.1rem solid ${theme.colors.backgroundMenuColor};
  `}
`;

export const GenreSelectButton = styled.button<CategoryButtonProps>`
  ${({ theme, active }) => css`
    border: none;
    font-weight: bold;
    color: ${theme.colors.primaryColor};
    margin-right: 0.5rem;
    padding: 0 0.1rem 0.1rem 0.1rem;
    background-color: #fff0;
    text-shadow: 0 0 0.2rem ${theme.colors.backgroundMenuColor};
    box-sizing: border-box;

    :hover {
      color: ${theme.colors.textPrimaryColor};
    }

    ${active &&
    css`
      border-bottom: 0.2rem solid ${theme.colors.primaryColor};
      color: ${theme.colors.textPrimaryColor};
    `}
  `}
`;

export const GamesHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;

  div {
    display: flex;
    gap: 0.2rem;
    align-items: center;
  }
`;

export const GamesOrderSelect = styled.select`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.textPrimaryColor};
    padding: 0.2rem;
    box-sizing: border-box;
    border-radius: 0.2rem;
    outline: none;
  `}
`;
