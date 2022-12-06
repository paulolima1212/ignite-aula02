import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  height: 3rem;
  width: 7rem;
  border: 0;
  border-radius: 8px;

  background: ${({ theme }) => theme['green-500']};
`;
