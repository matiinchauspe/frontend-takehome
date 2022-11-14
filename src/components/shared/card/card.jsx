import { useDrag } from 'react-dnd';
import {
  Grid,
  Card as MCard,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';

import { ItemTypes } from '@constants';
import avatar from '@assets/question.jpeg';
import useStyles from './styles';

const Card = ({ isDraggable = true, title, media, content, actions }) => {
  const [{ opacity }, dragRef, previewRef] = useDrag(() => ({
    type: ItemTypes.CARD,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  }));

  const { classes } = useStyles({ opacity });

  return (
    <Grid item xs className={classes.container}>
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
          <Typography variant="subtitle2" component="div" className={classes.title}>
            {title}
          </Typography>
          {content}
        </CardContent>
        {actions && <CardActions className={classes.cardActions}>{actions}</CardActions>}
      </MCard>
    </Grid>
  );
};

export default Card;
