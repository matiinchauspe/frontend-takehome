import { Outlet, useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';

import { ROUTE_TITLE, ROUTE_NAME } from '@routes/routes.constants';

import { Header } from './header';
import { Footer } from './footer';

import useStyles from './styles';

const Layout = () => {
  const { pathname } = useLocation();
  const { classes } = useStyles();

  const title = ROUTE_TITLE[pathname];
  const currentSection = ROUTE_NAME[pathname];

  return (
    <Container maxWidth={false} disableGutters className={classes.container}>
      <Header title={title} section={currentSection} />
      <Container maxWidth={false} disableGutters className={classes.main}>
        <Outlet />
      </Container>
      <Footer />
    </Container>
  );
};

export default Layout;
