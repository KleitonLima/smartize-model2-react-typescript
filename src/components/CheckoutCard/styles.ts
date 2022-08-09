import styled, { css } from "styled-components";

export const CheckoutCardDetails = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0px;
    border-bottom: 1px solid ${theme.colors.primaryColor};

    div {
      gap: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    img {
      width: 50px;
    }
  `}
`;
