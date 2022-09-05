import styled, { css } from "styled-components";
import fundoLogin from "../../assets/imgs/fundo-login.png";

export const LoginPageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${fundoLogin});
    background-size: 100%;
  `}
`;

export const LoginFormContainer = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 21.4rem;
    height: 25.8rem;
    border-radius: 0.5rem;
    background-color: ${theme.colors.backgroundMenuColor};
    box-shadow: 0.1rem 0.1rem 0.5rem 0.2rem ${theme.colors.primaryColor};

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        font-family: ${theme.constants.logoFontFamily};
        color: ${theme.colors.primaryColor};
        text-align: center;
      }
    }
  `}
`;
