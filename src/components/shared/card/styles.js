import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  container: {
    height: '250px',
  },
  card: {
    height: '100%',
    width: '250px',
    minWidth: '200px',
    position: 'relative',
  },
  cardContent: {
    padding: '5px',
  },
  cardMedia: {
    overflow: 'hidden',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: '1s ease-in-out',
    },
    objectFit: 'contain',
  },
  imageContainer: {
    overflow: 'hidden',
    padding: 0,
  },
  cardActions: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  title: {
    fontWeight: 400,
    color: theme.palette.primary.second,
  },
}));

export default useStyles;
