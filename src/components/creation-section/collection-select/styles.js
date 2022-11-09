import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  container: {
    padding: '10px',
    borderRight: `1px solid ${theme.palette.primary.main}`,
    height: '100%',
    overflow: 'hidden',
  },
  list: {
    height: 'calc(100% - 50px);',
    overflowY: 'auto',
  },
}));

export default useStyles;
