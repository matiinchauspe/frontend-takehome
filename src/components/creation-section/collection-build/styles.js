import { makeStyles } from 'tss-react/mui';
import { grey, red } from '@mui/material/colors';

const useStyles = makeStyles()({
  container: {
    padding: '10px',
    overflow: 'hidden',
    height: '100%',
  },
  list: {
    height: 'calc(100% - 50px);',
    overflowY: 'auto',
    padding: '5px 10px',
  },
  desc: {
    fontWeight: 300,
    color: grey[500],
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
});

export default useStyles;
