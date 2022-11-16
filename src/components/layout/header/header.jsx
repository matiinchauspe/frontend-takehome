import { memo } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ROUTE_PATHS, ROUTE_NAME_MAP } from '@routes/routes.constants';

import useStyles from './styles';

const Header = ({ title, section }) => {
  const navigate = useNavigate();
  const { classes } = useStyles();

  const inCreationSection = section === ROUTE_NAME_MAP.CREATION;
  const buttonText = inCreationSection ? 'Go to custom list' : 'Back to creation';

  const handleGoToSection = () =>
    navigate(inCreationSection ? ROUTE_PATHS.LIST : ROUTE_PATHS.CREATION);

  return (
    <Grid
      container
      justifyContent="space-between"
      className={classes.header}
      alignItems="center"
      direction={inCreationSection ? 'row' : 'row-reverse'}
    >
      <Grid item xs={8} textAlign="center">
        <Typography variant="h6" align="center" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={4}
        textAlign="center"
        justifyContent={inCreationSection ? 'flex-end' : 'flex-start'}
      >
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
