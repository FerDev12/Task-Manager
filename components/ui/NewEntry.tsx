import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { ChangeEvent, ChangeEventHandler, useContext, useState } from 'react';
import { EntriesContext } from '../../context/entries';

const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const { addNewEntry } = useContext(EntriesContext);

  const cleanUp = () => {
    setInputValue('');
    setIsAdding(false);
    setIsTouched(false);
  };

  const onTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const inputIsEmpty = inputValue.length <= 0;

  const onAddNewEntry = () => setIsAdding(true);
  const onCancelNewEntry = () => cleanUp();

  const onSave = () => {
    if (inputIsEmpty) return;

    addNewEntry(inputValue);

    cleanUp();
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {!isAdding && (
        <Button
          startIcon={<AddIcon />}
          fullWidth
          variant='outlined'
          onClick={onAddNewEntry}
        >
          Agregar Tarea
        </Button>
      )}

      {isAdding && (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder='Nueva entrada'
            multiline
            label='Nueva entrada'
            helperText={inputIsEmpty && isTouched && 'Ingrese un valor'}
            error={inputIsEmpty && isTouched}
            value={inputValue}
            onChange={onTextFieldChange}
            onBlur={() => setIsTouched(true)}
          />

          <Box display='flex' justifyContent='space-between' marginTop={1}>
            <Button variant='text' onClick={onCancelNewEntry} color='secondary'>
              Cancelar
            </Button>
            <Button
              variant='outlined'
              color='primary'
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export { NewEntry };
