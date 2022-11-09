import { makeStyles } from 'tss-react/mui';
import { grey } from '@mui/material/colors';

const useStyles = makeStyles()((theme) => ({
  container: {
    width: '180px',
    height: '300px',
  },
  cardContent: {
    padding: '5px',
  },
  title: {
    fontWeight: 400,
    color: theme.palette.primary.second,
  },
  desc: {
    fontWeight: 300,
    color: grey[500],
    fontSize: '13px',
  },
}));

export default useStyles;
