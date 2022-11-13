import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  container: {
    overflow: 'hidden',
    height: '100%',
  },
  list: {
    height: '100%',
    overflowY: 'auto',
    // padding: '5px 10px',
  },
});

export default useStyles;
