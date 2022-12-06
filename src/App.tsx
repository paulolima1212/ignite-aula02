import { ThemeProvider } from 'styled-components';
import { History } from './Pages/History';
import { Home } from './Pages/Home';
import { Router } from './Router';
import { GlobalStyle } from './Styles/global.styles';
import { defaultTheme } from './Styles/Theme/DefaultTheme.styles';
import { BrowserRouter as Browser } from 'react-router-dom';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Browser>
        <Router />

        <GlobalStyle />
      </Browser>
    </ThemeProvider>
  );
}
