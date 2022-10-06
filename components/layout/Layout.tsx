import { Box } from '@mui/material';
import Head from 'next/head';
import { FC, PropsWithChildren, useState } from 'react';
import { Navbar, Sidebar } from '../ui';

interface Props extends PropsWithChildren {
  title?: string;
}

const Layout: FC<Props> = ({ title, children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onMenuClicked = () => setDrawerOpen(true);
  const onSidebarClose = () => setDrawerOpen(false);

  return (
    // sx is a shortcut to define style's on components
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title || 'Task Manager'}</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <Navbar clicked={onMenuClicked} />

      <Sidebar open={drawerOpen} onClose={onSidebarClose} />

      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  );
};

export { Layout };
