import styled, { css } from "styled-components";

export const OrderDetailsContainer = styled.aside`
  ${({ theme }) => css`
    width: calc(35% - 80px);
    background-color: ${theme.colors.backgroundMenuColor};
    color: ${theme.colors.primaryColor};
    border-radius: 16px 0px 0px 16px;
    padding: 16px;
  `}
`;

export const OrderDetailsHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 15vh;
    display: flex;
    flex-direction: column;
    gap: 16px;

    div {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  `}
`;

export const GamesOrderContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;

    header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid ${theme.colors.backgroundColor};
      margin-bottom: 16px;
      padding-bottom: 16px;

      h3 {
        padding: 0px 8px;
      }
    }
  `}
`;

export const OrderDetailsFooter = styled.footer`
  ${({ theme }) => css`
    width: calc(35% - 96px);
    height: 150px;
    border-top: 2px solid ${theme.colors.backgroundColor};
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    

    div {
      display: flex;
      justify-content: space-between;
    }
  `}
`;
