import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  container: {
    overflow: 'hidden',
  },
  main: {
    height: 'calc(100vh - 100px)',
    overflow: 'hidden',
  },
});

export default useStyles;
