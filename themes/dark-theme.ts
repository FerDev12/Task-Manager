import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ced1bb',
    },
    secondary: {
      // main: '#a98561',
      main: '#b39474',
    },
    success: {
      main: '#a4ac86',
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
    },
  },
});
