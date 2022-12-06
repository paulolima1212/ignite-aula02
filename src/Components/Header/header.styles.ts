import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-top: solid 2px transparent;
    border-bottom: solid 2px transparent;
    color: ${({ theme }) => theme['gray-100']};

    &:hover {
      border-bottom-color: ${({ theme }) => theme['green-300']};
    }

    &.active {
      color: ${({ theme }) => theme['green-500']};
    }
  }
`;
