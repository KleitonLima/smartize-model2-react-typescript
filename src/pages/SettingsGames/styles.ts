import styled, { css } from "styled-components";

interface ActiveButtonProps {
  active?: boolean;
}

export const SelectedBarContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-bottom: 1px solid ${theme.colors.primaryColor};
  `}
`;

export const SelectedBar = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    border: none;
    font-weight: bold;
    color: ${theme.colors.textPrimaryColor};
    margin-right: 8px;
    padding: 0px 3px 3px 3px;
    background-color: #fff0;
    text-shadow: 0px 0px 5px ${theme.colors.primaryColor};
    box-sizing: border-box;
    cursor: pointer;

    :hover {
      color: ${theme.colors.primaryColor};
    }

    ${active &&
    css`
      border-bottom: 4px solid ${theme.colors.textPrimaryColor};
      color: ${theme.colors.primaryColor};
      text-shadow: 0px 0px 5px ${theme.colors.textPrimaryColor};
    `}
  `}
`;

export const AddGameCard = styled.button`
  ${({ theme }) => css`
    width: 200px;
    height: 250px;
    border: 2px dashed ${theme.colors.primaryColor};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${theme.colors.primaryColor};
    text-shadow: 0px 0px 5px ${theme.colors.textPrimaryColor};

    :hover {
      transform: scale(0.99);
      background-color: ${theme.colors.backgroundColor};
      color: ${theme.colors.textPrimaryColor};
      transition: all 0.2s;
    }
  `}
`;

export const SelectedButtons = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    gap: 16px;
  `}
`;
