import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
};

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSidemenu = () => {
    dispatch({ type: 'UI-Open-Sidebar' });
  };

  const closeSidemenu = () => {
    dispatch({ type: 'UI-Close-Sidebar' });
  };

  return (
    <UIContext.Provider value={{ ...state, openSidemenu, closeSidemenu }}>
      {children}
    </UIContext.Provider>
  );
};
