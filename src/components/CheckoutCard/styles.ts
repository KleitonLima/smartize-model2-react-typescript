import styled, { css } from "styled-components";

export const CheckoutCardDetails = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 0rem;
    border-bottom: 1px solid ${theme.colors.primaryColor};

    div {
      gap: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    img {
      width: 3.1rem;
    }
  `}
`;
