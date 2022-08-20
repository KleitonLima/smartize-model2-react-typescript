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
    width: 343px;
    height: 414px;
    border-radius: 8px;
    background-color: ${theme.colors.backgroundMenuColor};
    box-shadow: 1px 1px 9px 3px ${theme.colors.primaryColor};

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

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: #ff0000;
    text-align: center;
  `}
`;
