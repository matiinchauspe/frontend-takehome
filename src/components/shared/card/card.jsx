import { Card as MCard, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import useStyles from './styles';

const Card = ({ title, media, content, actions }) => {
  const { classes } = useStyles();

  return (
    <MCard className={classes.container}>
      <CardContent className={classes.imageContainer}>
        <CardMedia
          component={media.type ?? 'img'}
          alt={title}
          height="175"
          image={media.src}
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
  );
};

export default Card;
