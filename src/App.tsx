import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { GlobalStyle } from './Styles/global.styles';
import { defaultTheme } from './Styles/Theme/DefaultTheme.styles';
import { BrowserRouter as Browser } from 'react-router-dom';
import { HomeContextProvider } from './Context/homeContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Browser>
        <HomeContextProvider>
          <Router />
        </HomeContextProvider>
        <GlobalStyle />
      </Browser>
    </ThemeProvider>
  );
}
