import { GetServerSideProps, NextPage } from 'next';
import {
  Button,
  capitalize,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { Layout } from '../../components/layout';
import { Entry, Status } from '../../interfaces';
import { ChangeEvent, useContext, useState } from 'react';
import { dbEntries } from '../../database';
import { EntriesContext } from '../../context/entries';
import { useRouter } from 'next/router';

const validStatus: Status[] = [
  Status.pending,
  Status.inProgress,
  Status.finished,
];

interface Props {
  entry: Entry;
}

const Entry: NextPage<Props> = ({ entry }) => {
  const router = useRouter();

  const { updateEntry } = useContext(EntriesContext);

  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<Status>(entry.status);
  const [isTouched, setIsTouched] = useState(false);

  const onTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value as Status);
  };

  const onBlur = () => setIsTouched(true);

  const onSave = () => {
    const updatedEntry: Entry = {
      ...entry,
      status,
      description: inputValue,
    };

    updateEntry(updatedEntry, true);

    setTimeout(() => router.push('/'), 2000);
  };

  const inputIsEmpty = inputValue.trim().length <= 0;

  return (
    <Layout title={'Entrada: ' + inputValue.substring(0, 20) + '...'}>
      <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entrada: ${inputValue}`}
              subheader={`Creada hace minutos`}
            />

            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                autoFocus
                multiline
                placeholder='Nueva Entrada'
                label='Nueva Entrada'
                value={inputValue}
                onChange={onTextFieldChange}
                onBlur={onBlur}
                helperText={inputIsEmpty && 'Ingrese un valor'}
                error={inputIsEmpty && isTouched}
              />

              <FormControl>
                <FormLabel>Estado:</FormLabel>

                <RadioGroup row value={status} onChange={onStatusChange}>
                  {validStatus.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={capitalize(option)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                startIcon={<SaveAltOutlinedIcon />}
                variant='contained'
                fullWidth
                onClick={onSave}
                disabled={inputIsEmpty}
              ></Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'error.dark',
        }}
      >
        <DeleteOutlinedIcon />
      </IconButton>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const entry = await dbEntries.getEntryById(id);

  if (!entry) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { entry },
  };
};

export default Entry;
