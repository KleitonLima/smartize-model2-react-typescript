import styled, { css } from "styled-components";

export const OrderDetailsContainer = styled.aside`
  ${({ theme }) => css`
    width: calc(30% - 80px);
    background-color: ${theme.colors.backgroundMenuColor};
    color: ${theme.colors.primaryColor};
    border-radius: 16px 0px 0px 16px;
    padding: 16px;
  `}
`;

export const OrderDetailsHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 20vh;
  `}
`;
