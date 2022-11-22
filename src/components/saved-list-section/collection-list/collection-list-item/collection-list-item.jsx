import { useNavigate } from 'react-router-dom';

import { ROUTE_PATHS } from '@routes/routes.constants';
import { useCustomCollection } from '@hooks';
import { Grid, Button, Text } from '@components/shared';

import useStyles from './styles';

const CollectionListItem = ({ itemId, title, items }) => {
  const navigate = useNavigate();
  const { removeFromSavedCollections, selectCollectionToEdit } = useCustomCollection();
  const { classes } = useStyles();

  const handleRemove = () => {
    removeFromSavedCollections(itemId);
  };

  const handleEdit = () => {
    selectCollectionToEdit(itemId);
    navigate(ROUTE_PATHS.CREATION);
  };

  return (
    <Grid
      container
      item
      xs={8}
      alignItems="center"
      className={classes.container}
      data-testid="collection-item"
    >
      {/* Info */}
      <Grid container item xs={8} direction="column">
        <Text variant="h6" gutterBottom className={classes.text}>
          {title}
        </Text>
        <Text variant="body2" className={classes.text}>{`${items.length} items`}</Text>
      </Grid>
      {/* Actions */}
      <Grid
        container
        item
        xs={4}
        className={classes.actions}
        justifyContent="flex-end"
        alignContent="flex-end"
      >
        <Button size="small" variant="contained" className={classes.editBtn} onClick={handleEdit}>
          Edit
        </Button>
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
  );
};

export default CollectionListItem;
