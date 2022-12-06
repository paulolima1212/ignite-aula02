import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 *{
  padding: 0;
  margin:0;
  box-sizing: border-box;
 }

 :focus{
  outline: 0;
  box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
 }

 body{
  background: ${({ theme }) => theme['gray-900']};
  
 }

 body, input, button, textarea{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
 }
`;
