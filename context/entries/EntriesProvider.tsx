import { FC, PropsWithChildren, useReducer } from 'react';
import { Entry, Status } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        'Pendiente: Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui conswquat.',
      createdAt: Date.now(),
      status: Status.pending,
    },
    {
      _id: uuidv4(),
      description:
        'En-Progreso: Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui conswquat.',
      createdAt: Date.now() - 1_000_000,
      status: Status.inProgress,
    },
    {
      _id: uuidv4(),
      description:
        'Terminada: Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui conswquat.',
      createdAt: Date.now() - 100_000,
      status: Status.finished,
    },
  ],
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description: description,
      createdAt: Date.now(),
      status: Status.pending,
    };

    dispatch({ type: 'Entries-Add', payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: 'Entries-Updated', payload: entry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
