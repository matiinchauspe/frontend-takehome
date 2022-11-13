import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  container: {
    height: 'calc(100vh - 100px);',
    overflow: 'hidden',
    padding: '10px 10px 0 10px',
  },
  list: {
    height: '100%',
    overflowY: 'auto',
    padding: '5px 10px',
    justifyContent: 'center',
  },
});

export default useStyles;
