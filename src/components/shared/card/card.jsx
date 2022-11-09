import * as React from 'react';
import {
  Card as MCard,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

import { dateFromTimestamp } from '@utils';

import useStyles from './styles';

const Card = ({ title, src, lastSale }) => {
  const { classes } = useStyles();

  console.log(lastSale);
  return (
    <MCard className={classes.container}>
      <CardMedia component="img" alt={title} height="175" image={src} />
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle2" component="div" className={classes.title}>
          {title}
        </Typography>
        {lastSale.value && (
          <Typography variant="body2" className={classes.desc}>
            {/* eslint-disable-next-line */}
            Last Sale: {lastSale.value} ETH
          </Typography>
        )}
        {lastSale.timestamp && (
          <Typography variant="body2" className={classes.desc}>
            {dateFromTimestamp(lastSale.timestamp)}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Add
        </Button>
      </CardActions>
    </MCard>
  );
};

export default Card;
