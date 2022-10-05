import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { FC, useContext } from 'react';
import { UIContext } from '../../context/ui';

const menuItems = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

interface Props {
  open: boolean;
  onClose: () => void;
}

const Sidebar: FC<Props> = ({ open, onClose }) => {
  // Using context
  // const { sidemenuOpen, closeSidemenu } = useContext(UIContext);

  return (
    // Using context
    // <Drawer anchor='left' open={sidemenutOpen} onClose={closeSidemenu}>
    <Drawer anchor='left' open={open} onClose={onClose}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant='h4'>Menú</Typography>
        </Box>

        <List>
          {menuItems.map((text, i) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {i % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {menuItems.map((text, i) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {i % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export { Sidebar };
