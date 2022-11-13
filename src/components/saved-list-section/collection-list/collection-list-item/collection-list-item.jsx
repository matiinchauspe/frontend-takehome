import { Grid, Button, Text } from '@components/shared';

import { useCustomCollection } from '@hooks';

import useStyles from './styles';

const CollectionListItem = ({ itemId, title, items }) => {
  const { removeFromSavedCollections, selectCollectionToEdit } = useCustomCollection();
  const { classes } = useStyles();

  const handleRemove = () => {
    removeFromSavedCollections(itemId);
  };

  const handleEdit = () => {
    selectCollectionToEdit(itemId);
  };

  return (
    <Grid container item xs={8} alignItems="center" className={classes.container}>
      {/* Info */}
      <Grid container item xs={8} direction="column">
        <Text variant="h6" gutterBottom className={classes.text}>
          {title}
        </Text>
        <Text variant="body2" className={classes.text}>{`${items.length} items`}</Text>
      </Grid>
      {/* Actions */}
      <Grid container item xs={4} className={classes.actions}>
        <Grid item xs>
          <Button size="small" variant="contained" className={classes.editBtn} onClick={handleEdit}>
            Edit
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            size="small"
            variant="contained"
            color="error"
            className={classes.removeBtn}
            onClick={handleRemove}
          >
            Remove
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CollectionListItem;
