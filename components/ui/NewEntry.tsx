import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { ChangeEvent, useContext, useState } from 'react';
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
    if (inputIsEmpty) return setIsTouched(true);

    addNewEntry(inputValue);

    cleanUp();
  };

  return (
    <>
      <Button
        disabled={isAdding}
        startIcon={<AddIcon />}
        variant='outlined'
        onClick={onAddNewEntry}
        sx={{
          width: 'fit-content',
          marginBottom: 2,
        }}
      >
        Agregar Pendiente
      </Button>

      <Dialog open={isAdding} fullWidth>
        <Box>
          <DialogTitle>{'Nuevo Pendiente'}</DialogTitle>

          <DialogContent>
            <TextField
              sx={{ mt: 1 }}
              fullWidth
              placeholder='Nueva entrada'
              multiline
              label='Nueva entrada'
              helperText={inputIsEmpty && isTouched && 'Ingrese un valor'}
              error={inputIsEmpty && isTouched}
              value={inputValue}
              onChange={onTextFieldChange}
              onBlur={() => setIsTouched(true)}
            />
          </DialogContent>

          <DialogActions>
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
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export { NewEntry };
