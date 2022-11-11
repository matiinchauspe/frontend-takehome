import { Grid, Input, Button } from '@components/shared';

import useStyles from './styles';

const Header = () => {
  const { classes } = useStyles();

  return (
    <Grid
      item
      container
      xs={12}
      justifyContent="space-between"
      columnSpacing={2}
      alignItems="center"
      className={classes.header}
    >
      <Grid item sm={9}>
        <Input fullWidth label="Custom collection name" variant="outlined" />
      </Grid>
      <Grid item sm={3}>
        <Button variant="outlined" fullWidth>
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
