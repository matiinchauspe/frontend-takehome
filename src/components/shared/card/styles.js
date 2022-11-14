import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme, props) => ({
  container: {
    height: '230px',
  },
  card: {
    opacity: props.opacity,
    height: '100%',
    width: '185px',
    minWidth: '175px',
    position: 'relative',
  },
  dragHandle: {
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '1rem',
    height: '1rem',
    cursor: 'move',
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
