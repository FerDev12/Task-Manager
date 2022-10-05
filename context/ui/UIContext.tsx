import { createContext } from 'react';

export interface ContextProps {
  sidemenuOpen: boolean;
  openSidemenu: () => void;
  closeSidemenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
