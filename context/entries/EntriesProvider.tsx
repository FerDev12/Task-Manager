import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { Entry, Status } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { entriesApi } from '../../apis';
import { useSnackbar } from 'notistack';

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async (description: string) => {
    // Get new entry from api endpoint
    const { data: newEntry } = await entriesApi.post<Entry>('/entries', {
      description,
    });
    dispatch({ type: 'Entries-Add', payload: newEntry });
  };

  const updateEntry = async (
    { _id: id, description, status }: Entry,
    showSnackbar = false
  ) => {
    try {
      const { data: updatedEntry } = await entriesApi.put<Entry>(
        `/entries/${id}`,
        {
          description,
          status,
        }
      );

      dispatch({ type: 'Entries-Updated', payload: updatedEntry });

      // TODO: mostrar Snackbar
      if (showSnackbar)
        enqueueSnackbar('Entrada actualizada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });
    } catch (err) {
      console.log(err);
    }
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries');

    dispatch({ type: 'Entries-Refresh', payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
