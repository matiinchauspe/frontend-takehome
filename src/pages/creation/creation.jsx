import React from 'react';

import { Grid } from '@components/shared';
import { CollectionBuild, CollectionSelect } from '@components/creation-section';

import useStyles from './styles';

const Creation = () => {
  const { classes } = useStyles();

  return (
    <Grid container columnSpacing={2} className={classes.container}>
      <CollectionSelect />
      <CollectionBuild />
    </Grid>
  );
};

export default Creation;
