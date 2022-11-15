import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme, { fixedWidth, opacity }) => ({
  card: {
    opacity,
    height: '230px',
    width: fixedWidth ? '200px' : '100%',
    minWidth: '175px',
    position: 'relative',
  },
  dragHandle: {
    content: '"...."',
    width: '20px',
    height: '22px',
    position: 'absolute',
    overflow: 'hidden',
    lineHeight: '5px',
    bottom: 0,
    right: 0,
    padding: '4px 2px',
    cursor: 'move',
    verticalAlign: 'middle',
    marginTop: '-.7em',
    marginRight: '.3em',
    fontSize: '13px',
    fontFamily: 'sans-serif',
    letterSpacing: '2px',
    color: '#cccccc',
    textShadow: '1px 0 1px black',
    '&:after': {
      content: '".... .... .... ...."',
    },
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
    marginBottom: '2px',
  },
}));

export default useStyles;
