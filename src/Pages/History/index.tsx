import { HistoryContainer, TableContainer } from './history.styles';

export function History() {
  return (
    <HistoryContainer>
      <h1>History</h1>
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
              <td>Done</td>
            </tr>
            <tr>
              <td>Made a principal page of application</td>
              <td>25 minutes</td>
              <td>4h About</td>
              <td>Done</td>
            </tr>
            <tr>
              <td>Made a principal page of application</td>
              <td>25 minutes</td>
              <td>4h About</td>
              <td>Done</td>
            </tr>
            <tr>
              <td>Made a principal page of application</td>
              <td>25 minutes</td>
              <td>4h About</td>
              <td>Done</td>
            </tr>
            <tr>
              <td>Made a principal page of application</td>
              <td>25 minutes</td>
              <td>4h About</td>
              <td>Done</td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </HistoryContainer>
  );
}
