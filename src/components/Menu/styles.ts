import styled, { css } from "styled-components";

interface MenuItemProps {
  active?: boolean;
}

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    max-width: 6.2rem;
    background-color: ${theme.colors.backgroundMenuColor};
    border-radius: 0 1rem 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 90%;
      margin: 0.5rem 0 0.5rem 0;
    }

    nav {
      width: 100%;
      height: 100vh;
      justify-content: space-around;
    }
  `}
`;

export const MenuItem = styled.div<MenuItemProps>`
  ${({ theme, active }) => css`
    height: 5rem;
    width: 5rem;
    border-radius: 1rem 0 0 1rem;
    width: calc(100% - 1rem);
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff0;

    ${active &&
    css`
      background-color: ${theme.colors.backgroundColor};
    `}
  `}
`;

export const MenuButton = styled.button<MenuItemProps>`
  ${({ theme, active }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    background-color: ${theme.colors.transparent};
    margin-right: 1rem;
    padding: 1rem;
    cursor: pointer;
    color: ${theme.colors.primaryColor};

    :hover {
      transition: all, 0.3s;
      transform: scale(1.05);
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.textPrimaryColor};
    }

    ${active &&
    css`
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.textPrimaryColor};
    `}
  `}
`;
