import { createTheme } from '@mui/material/styles';
import { red, green, cyan, teal } from '@mui/material/colors';

export const theme = createTheme({
  status: {
    error: red[500],
    success: green[500],
  },
  palette: {
    primary: {
      main: cyan[500],
      second: cyan[600],
    },
    secondary: {
      main: teal[500],
      second: teal[600],
    },
  },
});
