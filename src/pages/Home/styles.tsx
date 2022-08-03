import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #5c82f2;
  color: #e9eef2;
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
