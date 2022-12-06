import styled from 'styled-components';
import { TypeOf } from 'zod';

export const HistoryContainer = styled.div`
  display: flex;
  flex: 1;
  color: ${({ theme }) => theme['gray-100']};
  flex-direction: column;
  padding: 3.5rem;
`;

export const TableContainer = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${({ theme }) => theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${({ theme }) => theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${({ theme }) => theme['gray-700']};
      border-top: 4px solid ${({ theme }) => theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

const STATUS_COLOR = {
  done: 'green-300',
  inprogress: 'yellow-500',
  interrupted: 'red-500',
} as const;

interface StatusTaskProps {
  statusColor: keyof typeof STATUS_COLOR;
}

export const StatusTask = styled.span<StatusTaskProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${({ theme, statusColor }) => theme[STATUS_COLOR[statusColor]]};
  }
`;
