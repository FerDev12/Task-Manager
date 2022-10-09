import { FC } from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NextLink from 'next/link';

interface Props {
  clicked: () => void;
}

const Navbar: FC<Props> = ({ clicked }) => {
  return (
    <Box flexGrow={1}>
      <AppBar
        position='sticky'
        elevation={5}
        sx={{ marginBottom: 2, borderBottom: '1px solid #ced1bb' }}
      >
        <Toolbar>
          <Box flexGrow={1}>
            <NextLink href={'/'} passHref>
              <Link
                underline='none'
                color='transparent'
                display='flex'
                alignItems='baseline'
              >
                <Typography color='primary.dark' variant='h4'>
                  T
                </Typography>
                <Typography color='primary' variant='h6'>
                  ask
                </Typography>
                <Typography color='primary.dark' variant='h4'>
                  M
                </Typography>
                <Typography color='primary' variant='h6'>
                  anager
                </Typography>
              </Link>
            </NextLink>
          </Box>

          <IconButton edge='end' onClick={clicked} size='large'>
            <MenuOutlinedIcon sx={{ fill: '#ced1bb' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Navbar };
