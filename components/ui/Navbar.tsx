import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { FC, useContext } from 'react';
// import { UIContext } from '../../context/ui';

interface Props {
  clicked: () => void;
}

const Navbar: FC<Props> = ({ clicked }) => {
  // const {openSidemenu} = useContext(UIContext) // using context

  return (
    <AppBar position='sticky' elevation={5}>
      <Toolbar>
        {/* With context */}
        {/* <IconButton onClick={openSidemenu} size='large' edge='start'> */}
        <IconButton onClick={clicked} size='large' edge='start'>
          <MenuOutlinedIcon />
        </IconButton>

        <Box
          sx={{ textShadow: '0 1px 3px #1f1f1f' }}
          display='flex'
          alignItems='center'
        >
          <Typography variant='h4'>T</Typography>
          <Typography variant='h5'>ask</Typography>
          <Typography variant='h4'>M</Typography>
          <Typography variant='h5'>anager</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
