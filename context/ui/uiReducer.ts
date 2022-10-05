import { UIState } from './';

type UIActions = { type: 'UI-Open-Sidebar' | 'UI-Close-Sidebar' };

export const uiReducer = (state: UIState, action: UIActions) => {
  switch (action.type) {
    case 'UI-Open-Sidebar':
      return {
        sidemenuOpen: true,
      };
    case 'UI-Close-Sidebar':
      return {
        sidemenuOpen: false,
      };
    default:
      return state;
  }
};
