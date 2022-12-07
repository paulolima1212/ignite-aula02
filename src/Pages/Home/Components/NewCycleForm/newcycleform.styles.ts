import styled from 'styled-components';

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
