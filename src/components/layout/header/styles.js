import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  header: {
    height: '50px',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
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
