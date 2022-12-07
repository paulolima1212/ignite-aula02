import { useHomeContext } from '../../Hooks/useHomeContext';
import { formatDistanceToNow } from 'date-fns';

import { HistoryContainer, StatusTask, TableContainer } from './history.styles';

export function History() {
  const { cycles } = useHomeContext();

  return (
    <HistoryContainer>
      <h1>My History</h1>
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{`${cycle.minutesAmount} minutes`}</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, { addSuffix: true })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <StatusTask statusColor={'done'}>Done</StatusTask>
                    )}

                    {cycle.interruptedDate && (
                      <StatusTask statusColor={'interrupted'}>
                        Interrupted
                      </StatusTask>
                    )}
                    {!cycle.interruptedDate && !cycle.finishedDate && (
                      <StatusTask statusColor={'inprogress'}>
                        In progress
                      </StatusTask>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableContainer>
    </HistoryContainer>
  );
}
