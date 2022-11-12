import { useState } from 'react';

import { useCustomCollection } from '@hooks';
import { Grid, Input, Button } from '@components/shared';

import useStyles from './styles';

const Header = () => {
  const [collectionName, setCollectionName] = useState('');
  const { collectionInEdition, addToSavedCollections } = useCustomCollection();
  const { classes } = useStyles();

  const allowSave = collectionInEdition.tokens.length && collectionName;

  const handleSaveCollection = () => {
    // TODO: review this later
    addToSavedCollections({
      name: collectionName,
      tokens: collectionInEdition.tokens,
    });
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
          onChange={(e) => setCollectionName(e.target.value)}
        />
      </Grid>
      <Grid item sm={3} className={classes.buttonContainer}>
        <Button
          variant="outlined"
          fullWidth
          className={classes.button}
          disabled={!allowSave}
          onClick={handleSaveCollection}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
