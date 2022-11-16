import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  footer: {
    height: '50px',
    textAlign: 'center',
    color: theme.palette.grey[500],
    fontWeight: 300,
    fontSize: '13px',
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    padding: '10px',
  },
}));

export default useStyles;
