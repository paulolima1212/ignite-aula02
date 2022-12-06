import styled from 'styled-components';

export const HistoryContainer = styled.div`
  display: flex;
  flex: 1;
  color: ${({ theme }) => theme['gray-100']};
  flex-direction: column;

  h1 {
    padding: 1rem;
  }
`;

export const TableContainer = styled.div`
  width: 100%
  height: 100%
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  table {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;

    thead {
      background: ${({ theme }) => theme['gray-600']};
      th {
        padding: 0.5rem;
        text-align: initial;
      }
    }

    tbody {
      border-collapse: collapse;

      td {
        padding: 0.3rem;
      }
    }
  }
`;
