import { makeStyles } from 'tss-react/mui';
import { grey } from '@mui/material/colors';

const useStyles = makeStyles()(() => ({
  footer: {
    height: '50px',
    textAlign: 'center',
    color: grey[500],
    fontWeight: 300,
    fontSize: '13px',
    borderTop: `1px solid ${grey[300]}`,
    boxShadow: `0px 1px 4px ${grey[500]}`,
    padding: '10px',
  },
}));

export default useStyles;
