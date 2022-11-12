import { Grid, Text } from '@components/shared';

import useStyles from './styles';

const Header = ({ title }) => {
  const { classes } = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.header} textAlign="center">
        <Text variant="h6" align="center" className={classes.title}>
          {title}
        </Text>
      </Grid>
    </Grid>
  );
};

export default Header;
