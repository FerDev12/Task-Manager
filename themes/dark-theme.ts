import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ced1bb',
      dark: '#b4ac86',
    },
    secondary: {
      // main: '#a98561',
      main: '#b39474',
    },
    error: {
      // main: red.A400,
      // main: '#bf4342',
      main: '#e63946',
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
