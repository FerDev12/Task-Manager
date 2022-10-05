import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Typography variant='h1' color='primary'>
        Hola mundo
      </Typography>
    </Layout>
  );
};

export default Home;
