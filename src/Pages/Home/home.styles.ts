import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.5rem;
    flex-wrap: wrap;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;

  label,
  span {
    color: ${({ theme }) => theme['gray-100']};
  }
`;

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};
  display: flex;
  gap: 1rem;

  span {
    background: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${({ theme }) => theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const BasecountdownButton = styled.button`
  flex: 1;
  width: 100%;
  height: 4rem;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme['gray-100']};

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;
`;

export const StartcountdownButton = styled(BasecountdownButton)`
  background: ${({ theme }) => theme['green-500']};
  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-700']};
  }

  &:disabled {
    opacity: 0.5;
    background: ${({ theme }) => theme['green-700']};
    cursor: not-allowed;
  }
`;

export const StopcountdownButton = styled(BasecountdownButton)`
  background: ${({ theme }) => theme['red-500']};
  &:not(:disabled):hover {
    background: ${({ theme }) => theme['red-700']};
  }
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  box-shadow: none;
  border: 0;
  border-bottom: solid 1px ${({ theme }) => theme['gray-400']};
  color: ${({ theme }) => theme['gray-100']};
  padding: 0 0.5rem;
  &::placeholder {
    color: ${({ theme }) => theme['gray-400']};
  }

  &:not(:disabled):focus {
    border-color: ${({ theme }) => theme['green-500']};
  }

  &:disabled {
    border-color: ${({ theme }) => theme['red-500']};
  }
`;

export const InputTask = styled(BaseInput)`
  box-shadow: none;
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesTask = styled(BaseInput)`
  box-shadow: none;
  width: 4.5rem;
`;
