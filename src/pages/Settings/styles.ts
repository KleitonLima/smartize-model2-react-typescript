import styled, { css } from "styled-components";

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.backgroundColor};
  `}
`;
