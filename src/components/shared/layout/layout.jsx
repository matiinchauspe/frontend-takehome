import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import { Header } from './header';
import { Footer } from './footer';

import useStyles from './styles';

const Layout = () => {
  const { classes } = useStyles();

  return (
    <Container maxWidth={false} disableGutters className={classes.container}>
      <Header title="Create custom collection" />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
