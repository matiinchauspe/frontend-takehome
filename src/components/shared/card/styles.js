import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  container: {
    height: '230px',
  },
  card: {
    height: '100%',
    width: '185px',
    minWidth: '175px',
    position: 'relative',
  },
  cardContent: {
    padding: '5px',
  },
  cardMedia: {
    overflow: 'hidden',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: '.8s ease',
    },
    objectFit: 'cover',
  },
  imageContainer: {
    overflow: 'hidden',
    padding: 0,
  },
  cardActions: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  title: {
    fontWeight: 400,
    color: theme.palette.primary.second,
  },
}));

export default useStyles;
