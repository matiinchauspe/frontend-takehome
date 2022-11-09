import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';

const Footer = () => {
  const { classes } = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.footer}>
        By Matias Inchauspe - @minchauspe
      </Grid>
    </Grid>
  );
};

export default Footer;
