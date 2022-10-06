import { FC } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

interface Props {
  clicked: () => void;
}

const Navbar: FC<Props> = ({ clicked }) => {
  return (
    <Box flexGrow={1}>
      <AppBar position='sticky' elevation={5} sx={{ marginBottom: 1 }}>
        <Toolbar>
          <Box flexGrow={1} display='flex' alignItems='center'>
            <Typography color='black' variant='h4'>
              T
            </Typography>
            <Typography color='black' variant='h6'>
              ask
            </Typography>
            <Typography color='black' variant='h4'>
              M
            </Typography>
            <Typography color='black' variant='h6'>
              anager
            </Typography>
          </Box>

          <IconButton edge='end' onClick={clicked} size='large'>
            <MenuOutlinedIcon sx={{ fill: 'black' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Navbar };
