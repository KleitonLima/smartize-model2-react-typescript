import styled, { css } from "styled-components";

interface MenuItemProps {
  active?: boolean;
}

export const MenuContainer = styled.div`
  width: 100px;
  background-color: #b3c4f8;
  border-radius: 0px 16px 16px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 90%;
    margin: 8px 0 8px 0;
  }

  nav {
    width: 100%;
    height: 100vh;
    justify-content: space-around;
  }
`;

export const MenuItem = styled.div<MenuItemProps>`
  height: 80px;
  width: 80px;
  border-radius: 16px 0px 0px 16px;
  width: calc(100% - 16px);
  margin-left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff0;

  ${({ active }) =>
    active &&
    css`
      background-color: #5c82f2;
    `}
`;

export const MenuButton = styled.button<MenuItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #fff0;
  margin-right: 16px;
  padding: 16px;
  cursor: pointer;
  color: #0511f2;

  :hover {
    transition: all, 0.5s;
    transform: scale3d(1.05, 1.05, 1.05);
    background-color: #0511f2;
    color: #fff;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #0511f2;
      color: #fff;
    `}
`;
