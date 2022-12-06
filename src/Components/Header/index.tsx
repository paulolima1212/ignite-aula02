import logoIgnite from '../../Assets/logo-ignite.svg';
import { Timer, Scroll } from 'phosphor-react';

import { HeaderContainer } from './header.styles';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt='' />
      <nav>
        <NavLink to='/' title='Home'>
          <Timer size={24} />
        </NavLink>
        <NavLink to='/history' title='History'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
