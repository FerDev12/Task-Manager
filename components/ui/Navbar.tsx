import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { FC, useContext } from 'react';
import { UIContext } from '../../context/ui';

interface Props {
  clicked: () => void;
}

const Navbar: FC<Props> = ({ clicked }) => {
  // const {openSidemenu} = useContext(UIContext) // using context

  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>
        {/* With context */}
        {/* <IconButton onClick={openSidemenu} size='large' edge='start'> */}
        <IconButton onClick={clicked} size='large' edge='start'>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant='h5'>T</Typography>
        <Typography variant='h6'>ask</Typography>
        <Typography variant='h5'>M</Typography>
        <Typography variant='h6'>anager</Typography>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
