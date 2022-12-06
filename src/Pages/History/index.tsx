import { HistoryContainer, StatusTask, TableContainer } from './history.styles';

export function History() {
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
            <tr>
              <td>Made a principal page of application</td>
              <td>25 minutes</td>
              <td>4h About</td>
              <td>
                <StatusTask statusColor={'inprogress'}>In progress</StatusTask>
              </td>
            </tr>
            <tr>
              <td>Made a principal page of application</td>
              <td>25 minutes</td>
              <td>4h About</td>
              <td>
                <StatusTask statusColor={'done'}>Done</StatusTask>
              </td>
            </tr>
            <tr>
              <td>Made a principal page of application</td>
              <td>25 minutes</td>
              <td>4h About</td>
              <td>
                <StatusTask statusColor={'done'}>Done</StatusTask>
              </td>
            </tr>
            <tr>
              <td>Made a principal page of application</td>
              <td>25 minutes</td>
              <td>4h About</td>
              <td>
                <StatusTask statusColor={'interrupted'}>Interrupted</StatusTask>
              </td>
            </tr>
            <tr>
              <td>Made a principal page of application</td>
              <td>25 minutes</td>
              <td>4h About</td>
              <td>
                <StatusTask statusColor={'done'}>Done</StatusTask>
              </td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </HistoryContainer>
  );
}
