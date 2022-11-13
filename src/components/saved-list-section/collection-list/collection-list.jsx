import { useCustomCollection } from '@hooks';
import { Grid, List } from '@components/shared';

import { Item } from './collection-list-item';

import useStyles from './styles';

const CollectionList = () => {
  const { savedCollections } = useCustomCollection();
  const { classes } = useStyles();

  return (
    <Grid item container xs={12} className={classes.container}>
      <List className={classes.list} hasData={Boolean(savedCollections.count)}>
        {savedCollections.collections.map(({ id, name, tokens }) => (
          <Item key={`key_${id}`} title={name} items={tokens} itemId={id} />
        ))}
      </List>
    </Grid>
  );
};

export default CollectionList;
