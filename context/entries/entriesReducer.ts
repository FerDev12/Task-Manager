import { Entry } from '../../interfaces';
import { EntriesState } from './';

type EntriesActionsType =
  | { type: 'Entries-Add'; payload: Entry }
  | { type: 'Entries-Updated'; payload: Entry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionsType
) => {
  switch (action.type) {
    case 'Entries-Add':
      return {
        ...state,
        entries: [...state.entries, action.payload],
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
    default:
      return state;
  }
};