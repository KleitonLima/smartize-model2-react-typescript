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

  div {
    h1 {
      font-family: "Major Mono Display", monospace;
      padding-bottom: 16px;
    }
  }
`;
