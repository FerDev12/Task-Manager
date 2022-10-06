import { createContext } from 'react';

export interface ContextProps {
  sidemenuOpen: boolean;
  isDragging: boolean;
  openSidemenu: () => void;
  closeSidemenu: () => void;
  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
