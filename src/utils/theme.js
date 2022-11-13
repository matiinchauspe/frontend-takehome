import { createTheme } from '@mui/material/styles';
import { cyan, teal } from '@mui/material/colors';

export const theme = createTheme({
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
