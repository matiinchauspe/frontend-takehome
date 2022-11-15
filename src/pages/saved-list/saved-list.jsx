import { Grid } from '@components/shared';
import { CollectionList } from '@components/saved-list-section';

import useStyles from './styles';

const SavedList = () => {
  const { classes } = useStyles();

  return (
    <Grid container className={classes.container}>
      <CollectionList />
    </Grid>
  );
};

export default SavedList;
