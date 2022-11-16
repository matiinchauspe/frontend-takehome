import { makeStyles } from 'tss-react/mui';
import { red } from '@mui/material/colors';

const useStyles = makeStyles()((theme, { isOverList }) => ({
  container: {
    padding: '10px',
    overflow: 'hidden',
    height: '100%',
  },
  list: {
    height: 'calc(100% - 63px)',
    overflowY: 'auto',
    padding: '5px 10px',
    borderRadius: '10px',
    backgroundColor: isOverList ? theme.palette.grey[300] : 'inherit',
  },
  desc: {
    fontWeight: 300,
    color: theme.palette.grey[500],
    fontSize: '13px',
  },
  button: {
    opacity: '0.8',
    color: 'white',
    backgroundColor: red[500],
    border: 0,
    '&:hover': {
      backgroundColor: red[700],
      border: 0,
    },
  },
}));

export default useStyles;
