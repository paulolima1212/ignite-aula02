import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  height: 3rem;
  width: 7rem;

  background: ${({ theme }) => theme.primary};
`;
