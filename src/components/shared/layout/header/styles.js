import { makeStyles } from 'tss-react/mui';
import { grey } from '@mui/material/colors';

const useStyles = makeStyles()((theme) => ({
  header: {
    height: '50px',
    borderBottom: `1px solid ${grey[300]}`,
    boxShadow: `0px 1px 4px ${grey[500]}`,
    padding: '10px',
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 300,
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
  },
}));

export default useStyles;
