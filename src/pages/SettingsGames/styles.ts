import styled, { css } from "styled-components";

interface ActiveButtonProps {
  active?: boolean;
}

export const SelectedBarContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-bottom: 0.1rem solid ${theme.colors.primaryColor};
  `}
`;

export const SelectedBar = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    border: none;
    font-weight: bold;
    color: ${theme.colors.textPrimaryColor};
    margin-right: 0.5rem;
    padding: 0 0.2rem 0.2rem 0.2rem;
    background-color: ${theme.colors.transparent};
    text-shadow: 0 0 0.3rem ${theme.colors.primaryColor};
    box-sizing: border-box;
    cursor: pointer;

    :hover {
      color: ${theme.colors.primaryColor};
    }

    ${active &&
    css`
      border-bottom: 0.2rem solid ${theme.colors.textPrimaryColor};
      color: ${theme.colors.primaryColor};
      text-shadow: 0 0 0.3rem ${theme.colors.textPrimaryColor};
    `}
  `}
`;

export const AddGameCard = styled.button`
  ${({ theme }) => css`
    width: 12.5rem;
    height: 15.6rem;
    border: 0.2rem dashed ${theme.colors.primaryColor};
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${theme.colors.primaryColor};
    text-shadow: 0 0 0.3rem ${theme.colors.textPrimaryColor};

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
    height: 6.2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  `}
`;
