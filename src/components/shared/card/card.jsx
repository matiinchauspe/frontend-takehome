import {
  Grid,
  Card as MCard,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import avatar from '@assets/question.jpeg';
import useStyles from './styles';

const Card = ({ title, media, content, actions }) => {
  const { classes } = useStyles();
  return (
    <Grid item xs className={classes.container}>
      <MCard className={classes.card} elevation={4}>
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
