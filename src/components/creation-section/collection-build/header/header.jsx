import { memo } from 'react';

import { CUSTOM_COLLECTION_STATUS } from '@constants';
import { useCustomCollection } from '@hooks';

import { Grid, Input, Button } from '@components/shared';

import useStyles from './styles';

const Header = () => {
  const { collectionInEdition, addToSavedCollections, changeCollectionName } =
    useCustomCollection();
  const { classes } = useStyles();

  const allowSaveOrEdit = collectionInEdition.tokens.length && collectionInEdition.name.trim();
  const isEditing = collectionInEdition.status === CUSTOM_COLLECTION_STATUS.EDIT;

  const handleSaveCollection = () => {
    addToSavedCollections(collectionInEdition);
  };

  const handleChangeCollectionName = ({ target }) => {
    changeCollectionName(target.value);
  };

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
        <Input
          fullWidth
          label="Custom collection name"
          variant="outlined"
          value={collectionInEdition.name}
          onChange={handleChangeCollectionName}
        />
      </Grid>
      <Grid item sm={3} className={classes.buttonContainer}>
        <Button
          variant="outlined"
          fullWidth
          className={classes.button}
          disabled={!allowSaveOrEdit}
          onClick={handleSaveCollection}
        >
          {isEditing ? 'Modify' : 'Save'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default memo(Header);
