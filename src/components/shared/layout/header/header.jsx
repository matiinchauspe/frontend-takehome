import React from 'react';
import { Grid, Typography } from '@mui/material';

import useStyles from './styles';

const Header = ({ title }) => {
  const { classes } = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.header} textAlign="center">
        <Typography variant="h6" align="center" className={classes.title}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
