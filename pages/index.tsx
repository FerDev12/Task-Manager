import type { NextPage } from 'next';
import { Grid } from '@mui/material';
import { Status } from '../interfaces';
import { Layout } from '../components/layout';
import { EntryList, NewEntry } from '../components/ui';

const Home: NextPage = () => {
  return (
    <Layout title='Task Manager | Home'>
      <NewEntry />

      <Grid container spacing={2}>
        <EntryList title='Pendientes' status={Status.pending} />
        <EntryList title='En Progreso' status={Status.inProgress} />
        <EntryList title='Completadas' status={Status.finished} />
      </Grid>
    </Layout>
  );
};

export default Home;
