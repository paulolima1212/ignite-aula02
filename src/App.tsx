import { ThemeProvider } from 'styled-components';
import { History } from './Pages/History';
import { Home } from './Pages/Home';
import { GlobalStyle } from './Styles/global.styles';
import { defaultTheme } from './Styles/Theme/DefaultTheme.styles';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <History />

      <GlobalStyle />
    </ThemeProvider>
  );
}
