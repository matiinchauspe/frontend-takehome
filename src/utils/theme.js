import { createTheme } from '@mui/material/styles';
import { red, green, cyan, teal, grey } from '@mui/material/colors';

export const theme = createTheme({
  status: {
    error: red[500],
    success: green[500],
  },
  palette: {
    primary: {
      main: cyan[500],
      second: cyan[600],
      third: cyan[700],
      fourth: cyan[800],
      fifth: cyan[400],
    },
    secondary: {
      main: teal[500],
      second: teal[600],
      third: teal[700],
      fourth: teal[800],
      fifth: teal[400],
    },
    black: grey[900],
    white: '#ffffff',
  },
});
