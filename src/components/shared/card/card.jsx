import { useDrag } from 'react-dnd';
import { Card as MCard, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import { ItemTypes } from '@constants';
import avatar from '@assets/question.jpeg';

import useStyles from './styles';

const Card = ({ id, title, media, fixedWidth = true, isDraggable = false, content, actions }) => {
  const [{ isDragging }, dragRef, previewRef] = useDrag({
    type: ItemTypes.CARD,
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const { classes } = useStyles({ isDragging, fixedWidth });

  return (
    <MCard ref={previewRef} className={classes.card} elevation={4} data-testid="card">
      {isDraggable && <div ref={dragRef} className={classes.dragHandle} />}
      <CardContent className={classes.imageContainer}>
        <CardMedia
          component={media.type ?? 'img'}
          alt={title}
          height="140"
          image={media.src ?? avatar}
          className={classes.cardMedia}
        />
      </CardContent>
      <CardContent className={classes.cardContent} data-testid="main-content">
        <Typography variant="subtitle" component="div" className={classes.title}>
          {title}
        </Typography>
        {content}
      </CardContent>
      {actions && (
        <CardActions className={classes.cardActions} data-testid="actions">
          {actions}
        </CardActions>
      )}
    </MCard>
  );
};

export default Card;
