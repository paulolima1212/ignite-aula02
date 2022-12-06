import { Header } from '../../Components';
import { DefaultLayoutContainer } from './defautlayout.styles';
import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  );
}
