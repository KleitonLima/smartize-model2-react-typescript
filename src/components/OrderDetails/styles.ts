import styled, { css } from "styled-components";

export const OrderDetailsContainer = styled.aside`
  ${({ theme }) => css`
    width: calc(35% - 5rem);
    background-color: ${theme.colors.backgroundMenuColor};
    color: ${theme.colors.primaryColor};
    border-radius: 1rem 0 0 1rem;
    padding: 1rem;
  `}
`;

export const OrderDetailsHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 15vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  `}
`;

export const CheckoutDetailsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;

    header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 0.1rem solid ${theme.colors.backgroundColor};
      padding-bottom: 1rem;

      h3 {
        padding: 0 2.5rem 0 0.5rem;
      }
    }
  `}
`;

export const CheckoutCardContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const OrderDetailsFooter = styled.footer`
  ${({ theme }) => css`
    width: calc(35% - 6rem);
    height: 9.3rem;
    border-top: 0.1rem solid ${theme.colors.backgroundColor};
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
