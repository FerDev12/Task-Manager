import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sidemenuOpen: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isDragging: false,
};

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSidemenu = () => {
    dispatch({ type: 'UI-Open-Sidebar' });
  };

  const closeSidemenu = () => {
    dispatch({ type: 'UI-Close-Sidebar' });
  };

  const startDragging = () => {
    dispatch({ type: 'UI-Start-Dragging' });
  };

  const endDragging = () => {
    dispatch({ type: 'UI-End-Dragging' });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        //
        openSidemenu,
        closeSidemenu,
        //
        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
