import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c2c5aa',
    },
    secondary: {
      // main: '#a98561',
      main: '#b39474',
    },
    error: {
      // main: red.A400,
      main: '#bf4342',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#a4ac86',
          // backgroundColor: '#656d4a',
        },
      },
    },
  },
});
