import styled, { css } from "styled-components";

interface CategoryButtonProps {
  active?: boolean;
}

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #5c82f2;
  color: #e9eef2;

  section {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const HomeContentContainer = styled.div`
  width: 60%;
`;

export const HomeContentHeader = styled.header`
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px 0px 16px;
`;

export const TitleContainer = styled.div`
  h1 {
    font-family: "Major Mono Display", monospace;
  }

  p {
    padding-top: 16px;
    text-transform: capitalize;
  }
`;

export const SearchInputContainer = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #b3c4f8;
  border-radius: 4px;
  color: #0511f2;

  /* buscar outra solução */
  div {
    cursor: pointer;
  }

  input {
    width: 65%;
    background-color: #fff0;
    outline: none;
    ::placeholder {
      color: #0511f2;
    }
  }
`;

export const GenreBar = styled.div`
  width: 95%;
  color: #0511f2;
  border-bottom: 2px solid #b3c4f8;
`;

export const GenreSelectButton = styled.button<CategoryButtonProps>`
  border: none;
  font-weight: bold;
  color: #0511f2;
  margin-right: 8px;
  padding: 0px 3px 3px 3px;
  background-color: #fff0;
  text-shadow: 0px 0px 5px #b3c4f8;

  :hover {
    color: #fff;
  }

  ${({ active }) =>
    active &&
    css`
      border-bottom: 4px solid #0511f2;
    `}
`;

export const GamesHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;

  div {
    display: flex;
    gap: 4px;
    align-items: center;
  }
`;

export const GamesOrderSelect = styled.select`
  background-color: #0511f2;
  color: #fff;
  padding: 4px;
  border-radius: 4px;
  outline: none;
`;
