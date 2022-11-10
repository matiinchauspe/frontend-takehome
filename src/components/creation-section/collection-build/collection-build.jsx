import { Grid } from '@mui/material';

import useStyles from './styles';

const CollectionBuild = () => {
  const { classes } = useStyles();

  return (
    <Grid item sm={8} className={classes.container}>
      Contruccion de mi collection
    </Grid>
  );
};

export default CollectionBuild;
