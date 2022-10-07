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
      <AppBar
        position='sticky'
        elevation={5}
        sx={{ marginBottom: 2, borderBottom: '1px solid #ced1bb' }}
      >
        <Toolbar>
          <Box flexGrow={1} display='flex' alignItems='center'>
            <Typography color='primary' variant='h4'>
              T
            </Typography>
            <Typography color='success' variant='h6'>
              ask
            </Typography>
            <Typography color='primary' variant='h4'>
              M
            </Typography>
            <Typography color='success' variant='h6'>
              anager
            </Typography>
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
