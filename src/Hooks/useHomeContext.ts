import { useContext } from 'react';
import { homeContext } from '../Context/homeContext';

export function useHomeContext() {
  return useContext(homeContext);
}
