import { makeStyles } from 'tss-react/mui';
import { grey, cyan } from '@mui/material/colors';

const useStyles = makeStyles()((theme) => ({
  container: {
    padding: '10px',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: cyan[50],
  },
  list: {
    height: 'calc(100% - 63px)',
    overflowY: 'auto',
    padding: '5px 10px',
  },
  desc: {
    fontWeight: 300,
    color: grey[500],
    fontSize: '14px',
  },
  button: {
    opacity: '0.8',
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    border: 0,
    '&:hover': {
      backgroundColor: theme.palette.secondary.second,
      border: 0,
    },
  },
}));

export default useStyles;
