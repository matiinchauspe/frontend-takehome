import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { CollectionBuild, CollectionSelect } from '@components/creation-section';

import useStyles from './styles';

const Creation = () => {
  const { classes } = useStyles();

  return (
    <Container maxWidth={false}>
      <Grid container columnSpacing={2} className={classes.container}>
        <CollectionSelect />
        <CollectionBuild />
      </Grid>
    </Container>
  );
};

export default Creation;
