import { useDrag } from 'react-dnd';
import { Card as MCard, CardActions, CardContent, CardMedia, Typography, Box } from '@mui/material';

import { ItemTypes } from '@constants';
import avatar from '@assets/question.jpeg';

import useStyles from './styles';

const Card = ({ title, media, fixedWidth = true, isDraggable = true, content, actions }) => {
  const [{ opacity }, dragRef, previewRef] = useDrag(() => ({
    type: ItemTypes.CARD,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  }));

  const { classes } = useStyles({ opacity, fixedWidth });

  return (
    <MCard ref={previewRef} className={classes.card} elevation={4}>
      {isDraggable && <Box ref={dragRef} className={classes.dragHandle} />}
      <CardContent className={classes.imageContainer}>
        <CardMedia
          component={media.type ?? 'img'}
          alt={title}
          height="140"
          image={media.src ?? avatar}
          className={classes.cardMedia}
        />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle" component="div" className={classes.title}>
          {title}
        </Typography>
        {content}
      </CardContent>
      {actions && <CardActions className={classes.cardActions}>{actions}</CardActions>}
    </MCard>
  );
};

export default Card;
