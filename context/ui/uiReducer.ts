import { UIState } from './';

type UIActions = {
  type:
    | 'UI-Open-Sidebar'
    | 'UI-Close-Sidebar'
    | 'UI-Start-Dragging'
    | 'UI-End-Dragging';
};

export const uiReducer = (state: UIState, action: UIActions) => {
  switch (action.type) {
    case 'UI-Open-Sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      };
    case 'UI-Close-Sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      };
    case 'UI-Start-Dragging':
      return {
        ...state,
        isDragging: true,
      };
    case 'UI-End-Dragging':
      return {
        ...state,
        isDragging: false,
      };

    default:
      return state;
  }
};
