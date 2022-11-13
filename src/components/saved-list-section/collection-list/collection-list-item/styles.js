import { makeStyles } from 'tss-react/mui';
import { grey, red } from '@mui/material/colors';

const useStyles = makeStyles()((theme) => ({
  container: {
    boxShadow: `0px 1px 4px ${grey[500]}`,
    borderRadius: '10px',
    padding: '10px',
    margin: '5px',
    height: '100px',
  },
  text: {
    fontWeight: 300,
    color: grey[700],
  },
  actions: {},
  editBtn: {
    opacity: '0.8',
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    border: 0,
    '&:hover': {
      backgroundColor: theme.palette.secondary.second,
      border: 0,
    },
  },
  removeBtn: {
    opacity: '0.8',
    color: 'white',
    backgroundColor: red[500],
    border: 0,
    '&:hover': {
      backgroundColor: red[700],
      border: 0,
    },
  },
}));

export default useStyles;
