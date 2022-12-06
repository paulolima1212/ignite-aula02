import { ThemeProvider } from 'styled-components';
import { History } from './Pages/History';
import { Home } from './Pages/Home';
import { defaultTheme } from './Styles/Theme/DefaultTheme.style';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <History />
    </ThemeProvider>
  );
}
