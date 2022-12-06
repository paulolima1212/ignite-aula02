import { ThemeProvider } from 'styled-components';
import { History } from './Pages/History';
import { Home } from './Pages/Home';
import { Router } from './Router';
import { GlobalStyle } from './Styles/global.styles';
import { defaultTheme } from './Styles/Theme/DefaultTheme.styles';
import { BrowserRouter as Browser, Route } from 'react-router-dom';
import { DefaultLayout } from './Layouts/DefaultLayout';

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
