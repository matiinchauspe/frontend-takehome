import React from 'react';
import { Container, Grid } from '@mui/material';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Container maxWidth={false}>
      <Grid container direction="column" alignContent="center">
        <h1>Oops!</h1>
        <p>Un error ha ocurrido</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Grid>
    </Container>
  );
};

export default ErrorPage;
