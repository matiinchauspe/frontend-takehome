import { makeStyles } from 'tss-react/mui';

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
});

export default useStyles;
