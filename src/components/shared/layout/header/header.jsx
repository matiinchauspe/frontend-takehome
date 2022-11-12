import { memo } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ROUTE_PATHS, ROUTE_NAME_MAP } from '@routes/routes.constants';

import useStyles from './styles';

const Header = ({ title, section }) => {
  const navigate = useNavigate();
  const { classes } = useStyles();

  const buttonText = section === ROUTE_NAME_MAP.CREATION ? 'Go to custom list' : 'Back to creation';

  const handleGoToSection = () =>
    navigate(section === ROUTE_NAME_MAP.CREATION ? ROUTE_PATHS.LIST : ROUTE_PATHS.CREATION);

  return (
    <Grid
      container
      justifyContent="space-between"
      className={classes.header}
      alignItems="center"
      direction={section === ROUTE_NAME_MAP.CREATION ? 'row' : 'row-reverse'}
    >
      <Grid item xs={10} textAlign="center">
        <Typography variant="h6" align="center" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={2} textAlign="center">
        <Button
          variant="contained"
          size="small"
          className={classes.button}
          onClick={handleGoToSection}
        >
          {buttonText}
        </Button>
      </Grid>
    </Grid>
  );
};

export default memo(Header);
