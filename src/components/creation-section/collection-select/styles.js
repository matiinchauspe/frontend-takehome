import { makeStyles } from 'tss-react/mui';
import { grey } from '@mui/material/colors';

const useStyles = makeStyles()({
  container: {
    padding: '10px',
    height: '100%',
    overflow: 'hidden',
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
});

export default useStyles;
