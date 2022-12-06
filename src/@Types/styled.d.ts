import 'styled-components';
import { defaultTheme } from '../Styles/Theme/DefaultTheme.style';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
