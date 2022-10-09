import { Entry } from '../../interfaces';
import { EntriesState } from './';

type EntriesActionsType =
  | { type: 'Entries-Add'; payload: Entry }
  | { type: 'Entries-Updated'; payload: Entry }
  | { type: 'Entries-Refresh'; payload: Entry[] };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionsType
) => {
  switch (action.type) {
    case 'Entries-Add':
      return {
        ...state,
        entries: [action.payload, ...state.entries],
      };

    case 'Entries-Updated':
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        }),
      };

    case 'Entries-Refresh':
      return {
        ...state,
        entries: [...action.payload],
      };

    default:
      return state;
  }
};
